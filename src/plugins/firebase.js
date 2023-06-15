import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "../../firebase.config";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeStockData(data) {
  set(ref(database, "stock/"), data);
}

export { writeStockData };
