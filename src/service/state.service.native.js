import { AsyncStorage } from 'react-native';
import { isUndefined } from 'lodash';

const KEY = 'STATE';
const TIMEOUT = 400;

class GameService {
	static timeout = () =>  new Promise(resolve => setTimeout(resolve, TIMEOUT));

	static init = async() => {
	  const initialState = { levels: [0] }; // first level with 0 star
	  await GameService.saveUserData(initialState);
	  return await GameService.getUserData();
	};

	static getUserData = async() => {
	  try {
	    await GameService.timeout();
	    const value = await AsyncStorage.getItem(KEY);

	    if (value === null || isUndefined(value)) {
	      return GameService.init();
	    }

	    return JSON.parse(value);
	  } catch (error) {
	    console.log(error);
	  }
	};

	static saveUserData = async(data) => {
	  try {
	    return await AsyncStorage.setItem(KEY, JSON.stringify(data));
	  } catch (error) {
	    console.log(error);
	  }
	};

	static updateUserData = async(newData) => {
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
