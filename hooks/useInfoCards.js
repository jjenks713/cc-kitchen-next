/* import { useEffect } from "react";
import usePersistentState from "./usePersistantState";

export default function useInfoCards() {
	const initialState = {
		data: [],
		loading: false,
		error: null,
	};
	const [infoCards, setInfoCards] = usePersistentState(
		"info-cards",
		initialState
	);

	useEffect(() => {
		let active = true;
		setInfoCards({ ...infoCards, loading: true });
        console.log('this', getServerSideProps.infoCards)
        if(active) {
            setInfoCards({...infoCards, data: getServerSideProps})
        }

		return () => {
			active = false;
			setInfoCards({ ...infoCards, loading: false });
		};
	}, []);

	return infoCards;
}

async function getServerSideProps({ preview = true }) {
    const infoCards = (await getInfoCards(preview)) ?? []

    return infoCards 
  } */
