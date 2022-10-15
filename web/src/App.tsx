import logoImg from '../src/assets/logo-nlw.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { BannerCard } from './components/BannerCard'
import { useEffect, useState } from 'react'
import { api } from './axios/api'
import { Modal } from './components/Modal'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
interface IGamesProps {
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
  id: string
}

function App() {
  const [games, setGames] = useState<IGamesProps[]>([])
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
  })
  useEffect(() => {
    api('games').then(response => setGames(response.data))
  }, [])
  return (
    <div className='flex flex-col max-w-7xl mx-auto my-20 items-center'>
      <img src={logoImg} alt='' className='h-32 w-32' />
      <h1 className='font-black text-6xl text-white'>
        Your <span className='text-transparent bg-nlw-gradient bg-clip-text '>duo</span> is here
      </h1>
      <div className='keen-slider' ref={sliderRef}>
        {games.map((game, index) => (
          <div className={` keen-slider__slide number-slide${index+1}`} key={game.id}>
            <BannerCard

              adsCount={game._count.ads}

              title={game.title}
              bannerUrl={game.bannerUrl} />
          </div>

        ))}

      </div>
      <Modal title='Publique seu anúncio'>

        <CreateAdBanner />
      </Modal>
    </div>
  )
}

export default App
