'use client'

import React from 'react'

type Props = {
    text: string;
    type: 'primaryl' |'primarys' |'secondary' | 'destructive';
    // handleClick: () => void;
}
const buttonStyles = {
  primaryl: 'text-white bg-main-purple py-4 text-[15px] font-bold hover:bg-main-purple-hover',
  primarys: 'text-white bg-main-purple py-2 text-[13px] font-bold hover:bg-main-purple-hover',
  secondary: 'text-main-purple bg-light-grey py-2 dark:bg-white  text-[13px] hover:bg-main-purple-hover',
  destructive: 'text-white bg-main-red hover:bg-main-red-hover py-2 text-[13px]',
}

const Button = (props: Props) => {
  const buttonStyle = buttonStyles[props.type] || buttonStyles.primary;
  return (
    <button className={`w-full ${buttonStyle}`}>{props.text}</button>
  )
}

export default Button