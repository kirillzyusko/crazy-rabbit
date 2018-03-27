import { AsyncStorage } from 'react-native';

const KEY = 'STATE';

class GameService {
	static timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));

	static getUserData = async () => {
		try {
			await GameService.timeout(3000);
			const value = await AsyncStorage.getItem(KEY);
			if (value !== null) {
				return JSON.parse(value);
			}
		} catch (error) {
			console.log(error);
		}
	};

	static saveUserData = async (data) => {
		try {
			const newData = {
				...GameService.getUserData(),
				...data
			};
			await AsyncStorage.setItem(KEY, JSON.stringify(newData));
		} catch (error) {
			console.log(error);
		}
	}
}

export default GameService;