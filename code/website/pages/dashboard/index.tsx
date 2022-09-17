import Header from '../../components/shell/Header';
import Navbar from '../../components/shell/Navbar';
import { AppShell, Header as MantineHeader } from '@mantine/core';

function Dashboard() {
    return (
        <AppShell
            padding="md"
            navbar={<Navbar />}
            header={<MantineHeader height={80}><Header /></MantineHeader>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {/* Your application here */}
        </AppShell>
    );
}

export default Dashboard;