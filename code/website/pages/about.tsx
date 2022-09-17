import type { NextPage } from 'next'
import Header from '../components/shell/Header';
import Image from 'next/image';
import { Group, Text, SimpleGrid, Card } from '@mantine/core';
import jerome from '../public/jerome.jpg';
import brendan from '../public/brendan.jpg'
import josh from '../public/josh.jpg'
import austin from '../public/austin.jpg'

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Header />

      <div className="p-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-8xl font-bold text-green-300 mb-4"><span className="text-green-500">Our</span> Team</h1>
        </div>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: 1500, cols: 4, spacing: "xl" },
            { maxWidth: 900, cols: 2, spacing: "lg" },
            { maxWidth: 500, cols: 1, spacing: "lg" },
          ]}
        >
        <Card shadow="sm" p="lg">
          <Group
            position="center"
            style={{ marginBottom: 10, marginTop: 10, }}
          >
            <Image src={jerome} alt="Picture of Jerome"/>
          </Group>
          <Group
            position="center"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <Text weight={500}>Jerome Francis</Text>
          </Group>
        </Card>
        <Card shadow="sm" p="lg">
          <Group
            position="center"
            style={{ marginBottom: 10, marginTop: 10, }}
          >
            <Image src={brendan} alt="Picture of Brendan"/>
          </Group>
          <Group
            position="center"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <Text weight={500}>Brendan Lee</Text>
          </Group>
        </Card>
        <Card shadow="sm" p="lg">
          <Group
            position="center"
            style={{ marginBottom: 10, marginTop: 10, }}
          >
            <Image src={josh} alt="Picture of Josh"/>
          </Group>
          <Group
            position="center"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <Text weight={500}>Josh Nakka</Text>
          </Group>
        </Card>
        <Card shadow="sm" p="lg">
          <Group
            position="center"
            style={{ marginBottom: 10, marginTop: 10, }}
          >
            <Image src={austin} alt="Picture of Austin"/>
          </Group>
          <Group
            position="center"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <Text weight={500}>Austin Yu</Text>
          </Group>
        </Card>
        </SimpleGrid>
      </div>
    </div>
  )}

export default Home