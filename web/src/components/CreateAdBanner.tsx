import { MagnifyingGlass } from 'phosphor-react';
import { Trigger } from '@radix-ui/react-dialog'
export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">

      <div className="bg-[#2A2634] py-6 px-4 self-stretch flex justify-between">
        <div>

          <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
          <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
        </div>
        <Trigger className='px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-2'><MagnifyingGlass />Publicar anúncio</Trigger>
      </div>
    </div>
  )
}