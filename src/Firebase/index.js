import { initializeApp } from "firebase/app";

const firebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDwqyqTXf3LudFEVva7Pp2RJomnhbPMAPI",
        authDomain: "top-massage.firebaseapp.com",
        projectId: "top-massage",
        storageBucket: "top-massage.appspot.com",
        messagingSenderId: "1008230495826",
        appId: "1:1008230495826:web:2ecd52cb24f1bfba3f518b",
        measurementId: "G-2VRYQ35NM4"
    };

    initializeApp(firebaseConfig)
}

export default firebase
