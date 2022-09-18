import React from 'react'
import {MdOutlinePayments} from 'react-icons/Md'

type Props = {}

export default function CustomPaymentButton({}: Props) {
  return (
    <div className = "flex items-center rounded-md px-3 ml-1 h-full border-[.5px] border-slate-400 bg-green-400 text-lg text-white hover:cursor-pointer">
        <MdOutlinePayments />
    </div>
  )
}