import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCM6yHZgLAAVMDFBXtnxepM8u-UJsKpS7I",
    authDomain: "ezenbank.firebaseapp.com",
    databaseURL: "https://ezenbank.firebaseio.com",
    projectId: "ezenbank",
    storageBucket: "ezenbank.appspot.com",
    messagingSenderId: "257080629676",
    appId: "1:257080629676:web:7f99ec723f1813e6964209"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function fetchImages() {
  const imagesRef = collection(db, 'images');
  const imageSnapshot = await getDocs(query(imagesRef, orderBy('timestamp', 'asc')));
  const imageList = imageSnapshot.docs.map(doc => doc.data());
  return imageList;
}

export async function fetchVideos() {
  const imagesRef = collection(db, 'video');
  const imageSnapshot = await getDocs(query(imagesRef, orderBy('timestamp', 'asc')));
  const imageList = imageSnapshot.docs.map(doc => doc.data());
  return imageList;
}

export async function fetchShorts() {
  const imagesRef = collection(db, 'shorts');
  const imageSnapshot = await getDocs(query(imagesRef, orderBy('timestamp', 'asc')));
  const imageList = imageSnapshot.docs.map(doc => doc.data());
  return imageList;
}