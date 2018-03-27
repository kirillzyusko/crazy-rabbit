import { AsyncStorage } from 'react-native';

const KEY = 'STATE';
const TIMEOUT = 1500;

class GameService {
	static timeout = () =>  new Promise(resolve => setTimeout(resolve, TIMEOUT));

	static getUserData = async () => {
		try {
			await GameService.timeout();
			const value = await AsyncStorage.getItem(KEY);
			if (value !== null) {
				return JSON.parse(value);
			}
		} catch (error) {
			console.log(error);
		}
	};

	static saveUserData = async (newData) => {
		try {
			const oldData = await GameService.getUserData();
			const data = {
				...oldData,
				...newData
			};
			await AsyncStorage.setItem(KEY, JSON.stringify(data));
		} catch (error) {
			console.log(error);
		}
	}
}

export default GameService;