import {ButtonHTMLAttributes} from 'react'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button(props: IButtonProps){
  return (
    <button {...props} className=''></button>
  )
}