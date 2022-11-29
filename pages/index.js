import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import InfoStrip from '../components/InfoStrip/InfoStrip'
import Footer from '../components/Footer/Footer'
import MainHeader from '../components/MainHeader/MainHeader'
import Menu from '../components/Menu/Menu'
import SubscribePanel from '../components/SubscribePanel/SubscribPanel'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel'

export default function Home() {
  const header = {
    title: "Charlees Comfort Kitchen",
    headline: "Homestyle cooking in the heart of Utah",
    button: true
  };
  return (
    <div>
      <Head>
        <title>Charlees Comfort Kitchen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={"/images/favicon-2.ico"} />
      </Head>
      <Navbar />
      <main>
        <MainHeader header={header} />
        <Menu />
        <ImageCarousel />
        <SubscribePanel />
        <InfoStrip />
      </main>
      <Footer />
    </div>
  )
}
