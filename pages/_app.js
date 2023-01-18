import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  const infoCards = pageProps.infoCards;
  const announcement = pageProps.announcement
  return (
    <Layout announcement={announcement} infoCards={infoCards}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
