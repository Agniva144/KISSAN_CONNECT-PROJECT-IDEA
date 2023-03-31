import AsyncStorage from '@react-native-async-storage/async-storage';

const storeAsync = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('User', jsonValue);
    } catch (e) {
        console.log(e);
    }
}
  
  
const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('User');
        return jsonValue? JSON.parse(jsonValue) : {};
    } catch(e) {
        console.log(e);
    }
}

const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log("done");
    }
}

export {storeAsync, getData, clearAll} 