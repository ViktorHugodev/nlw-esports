import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react'
import { FormEvent, ReactElement, useEffect, useState } from 'react'
import { Button } from './ButtonWeekDay'
import { Input } from './Input'
import { SelectGame } from './Select';
import { api } from '../axios/api';

interface IModal {
  children: ReactElement
  title: string
}
export interface IGamesProps {
  title: string
  id: string
}
export function Modal({ children, title }: IModal) {
  const [games, setGames] = useState([])
  const [weekdays, setWeekDays] = useState<string[]>([])
  const [selectedGame, setSelectedGame] = useState<string>()
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    try {
      await api.post(`/game/${selectedGame}/ad`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekdays: weekdays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Dialog.Root>
      {children}
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] rounded-lg
        shadow-black/25 shadow-lg'>
          <Dialog.Title className='text-3xl font-black'>{title}</Dialog.Title>

          <form className='mt-8 flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor="game">Qual o game?</label>
              <SelectGame data={games} callBack={setSelectedGame} />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input name="name" id="name" placeholder='Como te chamam dentro do jogo?' />
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input name="yearsPlaying" id="yearsPlaying" type='number' placeholder='Tudo bem ser ZERO' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="discord">Qual o seu Discord?</label>
                <Input name="discord" id="discord" placeholder='Usuário#0000' />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="weekdays">Quando costuma jogar?</label>

                <ToggleGroup.Root type='multiple' value={weekdays} onValueChange={setWeekDays}>
                  <ToggleGroup.Item
                    value='0'
                    className={`rounded w-6 h-6 text-sm ${weekdays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Domingo'>D</ToggleGroup.Item>
                  <ToggleGroup.Item className={`rounded w-6 h-6 text-sm ${weekdays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`} value='1' title='Segunda'>S</ToggleGroup.Item>
                  <ToggleGroup.Item className={`rounded w-6 h-6 text-sm ${weekdays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`} value='2' title='Terça'>T</ToggleGroup.Item>
                  <ToggleGroup.Item className={`rounded w-6 h-6 text-sm ${weekdays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`} value='3' title='Quarta'>Q</ToggleGroup.Item>
                  <ToggleGroup.Item className={`rounded w-6 h-6 text-sm ${weekdays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`} value='4' title='Quinta'>Q</ToggleGroup.Item>
                  <ToggleGroup.Item className={`rounded w-6 h-6 text-sm ${weekdays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`} value='5' title='Sexta'>S</ToggleGroup.Item>
                  <ToggleGroup.Item className={`rounded w-6 h-6 text-sm ${weekdays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`} value='6' title='Sábado'>S</ToggleGroup.Item>

                </ToggleGroup.Root>

              </div>
              <div className='flex flex-col gap-2 flex-1'>
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className='grid grid-cols-2 gap-1'>

                  <Input type="time" name="hourStart" id="hourStart" placeholder='De' />
                  <Input type="time" name="hourEnd" id="hourEnd" placeholder='Até' />
                </div>
              </div>
            </div>
            <label className='flex gap-2 mt-2 text-sm items-center'>
              <Checkbox.Root
                onCheckedChange={(checked) => {
                  if (checked == true) setUseVoiceChannel(true)
                  else setUseVoiceChannel(false)
                }}
                className='bg-zinc-900 h-6 w-6 rounded flex items-center justify-center'
                name='useVoiceChannel'>
                <Checkbox.Indicator >
                  <Check className='w-4 h-4 text-emerald-400' />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz

            </label>
            <footer className='flex mt-4 justify-end gap-4'>
              <Dialog.Close
                type='button'
                className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>


        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}