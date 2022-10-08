import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { ReactElement } from 'react'
import { Button } from './ButtonWeekDay'
import { Input } from './Input'

interface IModal {
  children: ReactElement
  title: string
}
export function Modal({ children, title }: IModal) {
  return (
    <Dialog.Root>
      {children}
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] rounded-lg
        shadow-black/25 shadow-lg'>
          <Dialog.Title className='text-3xl font-black'>{title}</Dialog.Title>

          <form className='mt-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor="game">Qual o game?</label>
              <Input id='game' placeholder='Selecione o game que deseja jogar' />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input id="name" placeholder='Como te chamam dentro do jogo?' />
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input id="yearsPlaying" type='number' placeholder='Tudo bem ser ZERO' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="discord">Qual o seu Discord?</label>
                <Input id="discord" placeholder='Usuário#0000' />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="weekdays">Quando costuma jogar?</label>
                <div className='flex gap-1'>
                  <Button title='Domingo'>D</Button>
                  <Button title='Segunda'>S</Button>
                  <Button title='Terça'>T</Button>
                  <Button title='Quarta'>Q</Button>
                  <Button title='Quinta'>Q</Button>
                  <Button title='Sexta'>S</Button>
                  <Button title='Sábado'>S</Button>

                </div>
              </div>
              <div className='flex flex-col gap-2 flex-1'>
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className='grid grid-cols-2 gap-1'>

                  <Input type="time" id="hourStart" placeholder='De' />
                  <Input type="time" id="hourEnd" placeholder='Até' />
                </div>
              </div>
            </div>
            <div className='flex gap-2 mt-2 text-sm'>
              <Input type="checkbox" id='useVoiceChannel' />
              <label htmlFor="useVoiceChannel"> Costumo me conectar ao chat de voz</label>

            </div>
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