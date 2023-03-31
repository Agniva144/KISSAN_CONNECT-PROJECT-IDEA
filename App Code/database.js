import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyASiXzM_C1WWU4qjfRCAR8iCblHnk37Kbw",
    databaseURL: "https://kishanconnect-32c62-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: 'kishanconnect-32c62',
    appId: "1:556496590081:android:7c0f71c13bf896334d3700" 
};
  
initializeApp(firebaseConfig);

const dbref = ref(getDatabase());

const storeData= (companyName, target, value) => {
    const db = getDatabase();
    const reference = ref(db, companyName + '/' + target);
    set(reference, value);
}

export {storeData, dbref};