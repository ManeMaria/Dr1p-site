import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export function DefaultButtonColorBlack({
  children, ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement
>
) {
  return (
    <button type='button' className='uppercase btn-w btn5-w' {...props} >
      <h4 className='btn-w-txt'>{children}</h4>
    </button>
  )
}
