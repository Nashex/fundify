import React from 'react'
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import TimeToggle from './TimeToggle';
import CardDisplay from './CardDisplay';
import CustomDonation from './CustomDonation';
import Widget from './Widget';

type Props = {
    buttonText: string,
}

export default function ModalBlock({ buttonText }: Props) {
    const [opened, setOpened] = useState(false);
    const [recurring, setRecurring] = useState(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                centered
                title={
                    <div>
                        <TimeToggle recurring={recurring} setRecurring={setRecurring} />
                    </div>
                }
                size={"fit"}
            >
                {
                    <Widget />
                }
            </Modal>
            <div className="w-full">
                <div className="flex items-center mx-auto content-center justify-center">
                    <div onClick={() => setOpened(true)} className="flex flex-row bg-gradient-to-r from-green-500 to-green-400 border-0 py-2 px-6 text-2xl text-white max-w-md text-center rounded-full hover:cursor-pointer">
                        {buttonText}
                    </div>
                </div>
            </div>


        </>
    );
}