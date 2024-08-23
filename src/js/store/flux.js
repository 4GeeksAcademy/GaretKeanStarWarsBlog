

const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://swapi.dev/api/"

	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []

		},
		actions: {
			
			getCharacters: () => {
				fetch(apiUrl + "people")
				.then(resp => resp.json())
				.then(data => setStore({characters: data.results}))
				.catch(error => console.log(error))
			},
			// getCharacters: () => {
			// 	fetch(apiUrl + "people")
			// 	.then(resp => {
			// 		console.log("Response:", resp); 
			// 		return resp.json();
			// 	})
			// 	.then(data => {
			// 		console.log("Result:", data); 
			// 		setStore({ characters: data.results });
			// 	})
			// 	.catch(error => console.log(error));
			// },
			getPlanets: () => {
				fetch(apiUrl + "planets")
				.then(resp => resp.json())
				.then(data => setStore({planets: data.results}))
				.catch(error => console.log(error))
			},
			getStarships: () => {
				fetch(apiUrl + "starships")
				.then(resp => resp.json())
				.then(data => setStore({starships: data.results}))
				.catch(error => console.log(error))
			},
			addFavorites: (favItem) => {
				// const store = getStore();
				// store.favorites.push(favItem);
				// setStore(store);
				setStore({
					favorites: [...getStore().favorites, favItem]
				})
			},
			deleteFavorites: (index) => {
				const store = getStore();
				const newFavorites = store.favorites.filter((_, i) => i !== index); 
				setStore({
					favorites: newFavorites
				})
			}
		}
	};
};

export default getState;
