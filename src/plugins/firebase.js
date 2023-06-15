import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from "../../firebase.config";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database, "stock/");

function writeStockData(data) {
  set(dbRef, data);
}

async function readStockData() {
  let stockData = {};
  await get(child(dbRef, `/`)).then((snapshot) => {
    if (snapshot.exists()) {
      stockData = snapshot.val();
    }
  });
  return stockData;
}

export { writeStockData, readStockData };
