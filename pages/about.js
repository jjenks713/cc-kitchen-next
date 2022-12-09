import MainHeader from '../components/MainHeader/MainHeader'
import About from '../components/About/About'
import { getAllTeam, getInfoCards } from "../lib/api.js"
import Employees from '../components/Employees/Employees'
import Head from 'next/head'

export default function Home({ preview, allPosts }) {
    const header = {
        title: "About",
        headline: "Info about our founders below",
        button: false
    };

    const employees = allPosts.data.teamMembersCollection.items

    return (
        <div>
            <Head>
                <title>Charlees Comfort Kitchen</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href={"/images/img/logo2.png"} />
            </Head>
            <main>
                <MainHeader header={header} />
                {/* <About /> */}
                <div className='py-44'>
                    <Employees employees={employees} />
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps({ preview = true }) {
    const allPosts = (await getAllTeam(preview)) ?? []
    return {
        props: { preview, allPosts },
    }
}
