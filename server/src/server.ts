import express, { response } from 'express'
import { PrismaClient } from '@prisma/client'
const app = express()
//initialize prisma with logs by default
const prisma = new PrismaClient({
  log: ['query']
})

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include:{
      _count:{
        select:{
          ads: true
        }
      }
    }
  })
  return response.status(200).json(games)
})

app.post('/ads', (request, response) => {
  return response.status(200).json([])
})

app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id
  const ads = await prisma.ad.findMany({
    where:{
      gameId
    }
  })
  return response.status(200).json(ads)
})

app.get('/ads/:id/discord', (request, response) => {
  return response.status(200).json([])
})

app.listen(3333, () => console.log('Running on port 3333'))