import React, {useState} from 'react'
import CustomPaymentButton from './CustomPaymentButton';

type Props = {}

export default function CustomDonation({ }: Props) {
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-row w-full mt-4">
            <div className="flex flex-row mx-auto items-center">
                <p className="font-bold text-md text-slate-600">Or enter a custom amount:</p>
                <p className="text-md text-slate-600">&nbsp;$</p>
                <input className="flex bg-slate-100 px-1 rounded-lg max-w-[100px]" type="number" placeholder="" value = {value} onChange = {(e) => {setValue(e.target.value)}}/>
                <div >
                    <CustomPaymentButton />
                </div>
            </div>

        </div>
    )
}