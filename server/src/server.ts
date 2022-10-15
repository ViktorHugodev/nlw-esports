import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { converHourStringToMinutes } from './utils/converStringToMinutes'
import { convertMinutesToHourString } from './utils/converMinutesToHourString'
const app = express()
//initialize prisma with logs by default
const prisma = new PrismaClient({
  log: ['query']
})
app.use(express.json())
app.use(cors())
app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })
  return response.status(200).json(games)
})

app.post('/game/:id/ad', async (request, response) => {
  const body = request.body
  const gameId = request.params.id

  const createNewAd = await prisma.ad.create({
    data: {
      gameId,
      discord: body.discord,
      hourEnd: converHourStringToMinutes(body.hourEnd),
      hourStart: converHourStringToMinutes(body.hourStart),
      name: body.name,
      useVoiceChannel: body.useVoiceChannel,
      yearsPlaying: body.yearsPlaying,
      weekdays: body.weekdays.join(','),
    }
  })
  return response.status(201).json(createNewAd)
})
app.post('/new-game', async (request, response) => {
  const { title, bannerUrl } = request.body
      const createNewGame = await prisma.game.create({
      data: {
        title,
        bannerUrl
      }
    })
  try {
    console.log('response', createNewGame)
  } catch (error) {
    console.log('error',error)
  }
  return response.status(201).json(createNewGame)
})
app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id
  const ads = await prisma.ad.findMany({
    select: {
      createdAt: true,
      hourEnd: true,
      hourStart: true,
      name: true,
      useVoiceChannel: true,
      id: true,
      yearsPlaying: true,
      weekdays: true,
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  const adsFormatted = ads.map(ad => {
    return {
      ...ad,
      weekdays: ad.weekdays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }

  })
  return response.status(200).json(adsFormatted)
})

app.get('/ads/:id/discord', async (request, response) => {
  const adsId = request.params.id
  const ad = await prisma.ad.findUniqueOrThrow({
    where: {
      id: adsId,
    },
    select: {
      discord: true
    }
  })
  return response.status(200).json(ad)
})

app.listen(3333, () => console.log('Running on port 3333'))