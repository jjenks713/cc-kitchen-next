import MainHeader from '../components/MainHeader/MainHeader'
import About from '../components/About/About'
import { getInfoCards, getHeaders, getAnnouncement } from "../lib/api.js"
import Head from 'next/head'
import Announcement from '../components/Announcement/Announcement';
import SubscribePanel from '../components/SubscribePanel/SubscribPanel';
import InfoStrip from '../components/InfoStrip/InfoStrip';

export default function Home({ preview, headers, infoCards, announcement }) {
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
            {announcement.data.announcement ? <Announcement announcement={announcement} /> : null}
        </div>
    )
}

export async function getServerSideProps({ preview = true }) {
    const infoCards = (await getInfoCards(preview)) ?? []
    const headers = (await getHeaders(preview)) ?? []
    const announcement = (await getAnnouncement(preview)) ?? []

    return {
        props: { preview, infoCards, headers, announcement },
    }
}
