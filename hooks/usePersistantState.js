import { useState, useEffect, Dispatch, SetStateAction } from "react";

// Hook
export default function usePersistentState(key, defaultValue) {
	const [value, setValue] = useState(() => getLocalStorageValue(key, defaultValue));

	useEffect(() => {
		if (typeof window !== "undefined") {
			// @ts-ignore
			const setValue = value === undefined || value === "undefined" ? JSON.stringify(defaultValue) : JSON.stringify(value);
			window.localStorage.setItem(key, setValue);
		}
	}, [key, value, defaultValue]);

	return [value, setValue];
}

// Get value from local storage, coalesced with default value
function getLocalStorageValue(key, defaultValue) {
	if (typeof window === "undefined") return defaultValue;

	const saved = localStorage.getItem(key);

	if (saved === undefined || saved === "undefined" || saved === null) {
		return defaultValue;
	}

	const initial = JSON.parse(saved);

	return initial || defaultValue;
}