import MainHeader from '../components/MainHeader/MainHeader'
import About from '../components/About/About'
import { getAllTeam, getInfoCards, getHeaders } from "../lib/api.js"
import Employees from '../components/Employees/Employees'
import Head from 'next/head'
import SubscribePanel from '../components/SubscribePanel/SubscribPanel'
import InfoStrip from '../components/InfoStrip/InfoStrip'


export default function Home({ preview, allPosts, infoCards, headers }) {
    const page = 3

    const employees = allPosts.data.teamPage.teamMembersCollection.items

    return (
        <div>
            <Head>
                <title>Charlees Comfort Kitchen</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href={"/images/img/logo2.png"} />
            </Head>
            <main>
                <MainHeader header={headers} page={page} />
                {/* <About /> */}
                <div className='py-44 mx-44'>
                    <Employees employees={employees} />
                </div>
            </main>
            <SubscribePanel />
            <InfoStrip infoCards={infoCards} />
        </div>
    )
}

export async function getStaticProps({ preview = true }) {
    const allPosts = (await getAllTeam(preview)) ?? []
    const infoCards = (await getInfoCards(preview)) ?? []
    const headers = (await getHeaders(preview)) ?? []

    return {
        props: { preview, allPosts, infoCards, headers },
    }
}
