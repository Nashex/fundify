import React from 'react'

type Props = {
    recurring: boolean,
    setRecurring: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TimeToggle({recurring, setRecurring}: Props) {
  return (
    <div className="flex flew-row w-full justify-center items-center">
        <div className="flex">
            {
                recurring == true ?
                    <div className="text-gray-400 hover:cursor-pointer text-2xl" onClick={() => { setRecurring(!recurring) }}>One-Time</div> : <div className="text-green-400 text-2xl font-bold">One-Time</div>
            }
        </div>
        <div className="flex text-gray-400">
            <p>&nbsp;|&nbsp;</p>
        </div>
        <div className="flex">
            {
                recurring == true ?
                    <div className="text-green-400 text-2xl font-bold">Recurring</div> : <div className="text-gray-400 text-2xl hover:cursor-pointer" onClick={() => { setRecurring(!recurring) }}>Recurring</div>
            }
        </div>
    </div>
  )
}