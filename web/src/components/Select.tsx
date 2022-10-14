import * as Select from '@radix-ui/react-select';
import { useState } from 'react';
import { IGamesProps } from './Modal';


interface ISelectGames {
  data: IGamesProps[]
  callBack: (gameId: string) => void 
}

export function SelectGame({ data, callBack }: ISelectGames) {
 
  return (
    <Select.Root onValueChange={(value) => callBack(value)}>
      <Select.Trigger aria-label='Games' className='bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-100 placeholder:text-zinc-500 
      gap-5 flex justify-between w-full overflow-hidden rounded-lg focus:border'>
        <Select.Value placeholder='Selecione um jogo' className='' />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className='overflow-hidden bg-zinc-800 rounded-lg border w-full'>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item value='Apple'>
              <Select.ItemText />
              <Select.ItemIndicator />
            </Select.Item>

            <Select.Group className='flex flex-col gap-1 '>
              <Select.Label></Select.Label>
              {/* <Select.Label >GAMES</Select.Label> */}
              {data.map(game => (

                <Select.Item value={game.id} key={game.id} onClick={() => console.log(game.id)} className='hover:bg-zinc-900 cursor-pointer relative p-2'>
                  <Select.ItemText >{game.title}</Select.ItemText>
                  {/* <Select.ItemIndicator /> */}
                </Select.Item>
              ))}
            </Select.Group>

            <Select.Separator className='h-1 bg-zinc-900' />
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )

}