import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export function DefaultButton({
  children, ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement
>
) {
  return (
    <button type='button' className='uppercase btn btn5' {...props} >
      <h4 className='btn-txt'>{children}</h4>
    </button>
  )
}
