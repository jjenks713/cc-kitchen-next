import Menu from "../components/Menu/Menu";
import { getMenu, getSpecials } from "../lib/api.js";

export default function Home({
	menu,
	specials,
}) {

  return (
    <div>
        <Menu menu={menu} specials={specials} />
        {/* <ImageCarousel galImages={galImages} /> */}
    </div>
  )
}

export async function getServerSideProps({ preview = true }) {
	const menu = (await getMenu(preview)) ?? [];
	const specials = (await getSpecials(preview)) ?? [];

	return {
		props: {
			preview,
			menu,
			specials,
		},
	};
}