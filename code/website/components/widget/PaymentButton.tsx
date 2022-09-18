import React from 'react'
import {MdOutlinePayments} from 'react-icons/Md'

type Props = {}

export default function PaymentButton({}: Props) {
  return (
    <div className = "flex flex-row items-center rounded-md mx-auto px-3 mb-4 border-[.5px] border-slate-400 bg-green-400 text-lg text-white hover:cursor-pointer">
        Donate &nbsp;
        <MdOutlinePayments />
    </div>
  )
}