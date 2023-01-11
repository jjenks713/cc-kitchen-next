import MainHeader from '../components/MainHeader/MainHeader'
import About from '../components/About/About'
import { getInfoCards, getHeaders } from "../lib/api.js"
import Head from 'next/head'
import SubscribePanel from '../components/SubscribePanel/SubscribPanel'
import InfoStrip from '../components/InfoStrip/InfoStrip'


export default function Home({ preview, infoCards, headers }) {
    const page = 3

    return (
        <div>
            <Head>
                <title>Charlees Comfort Kitchen</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href={"/images/img/logo2.png"} />
            </Head>
            <main>
                <MainHeader header={headers} page={page} />
                <About />
            </main>
            <SubscribePanel />
            <InfoStrip infoCards={infoCards} />
        </div>
    )
}

export async function getServerSideProps({ preview = true }) {
    const infoCards = (await getInfoCards(preview)) ?? []
    const headers = (await getHeaders(preview)) ?? []

    return {
        props: { preview, infoCards, headers },
    }
}
