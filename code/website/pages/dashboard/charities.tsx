import { AppShell } from '@mantine/core'
import React, { ReactElement } from 'react';
import { Header as MantineHeader } from '@mantine/core';
import Header from '../../components/shell/Header';
import Navbar from '../../components/shell/Navbar';


interface Props {
	
}

export default function Charities({}: Props): ReactElement {
	return (
		<AppShell
            padding="md"
            navbar={<Navbar />}
            header={<MantineHeader height={78}><Header className="max-w-none" /></MantineHeader>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
			
		</AppShell>
	)
}
