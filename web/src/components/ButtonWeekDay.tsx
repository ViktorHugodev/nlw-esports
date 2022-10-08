import {ButtonHTMLAttributes} from 'react'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button(props: IButtonProps){
  return (
    <button {...props} className='bg-zinc-900 rounded w-6 h-6 text-sm'></button>
  )
}