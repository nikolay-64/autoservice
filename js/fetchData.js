export const fetchData = async () => {
	try {
		const response = await fetch(
			'https://puffy-amazing-area.glitch.me/api'
		);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(`Ошибка при получении данных: ${error}`);
	}
};
