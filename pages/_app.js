import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps, props }) {

  return (
    <Layout {...props}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

export async function getServerSideProps({ preview = true }) {
	const headers = (await getHeaders(preview)) ?? [];
	const menu = (await getMenu(preview)) ?? [];
	const specials = (await getSpecials(preview)) ?? [];
	const announcement = (await getAnnouncement(preview)) ?? [];

	return {
		props: {
			preview,
			headers,
			menu,
			specials,
			announcement,
		},
	};
}