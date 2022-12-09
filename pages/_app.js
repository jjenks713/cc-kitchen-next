import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { getInfoCards } from "../lib/api"

function MyApp({ Component, pageProps, infoCards }) {
  return (
    <Layout infoCards={infoCards}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

