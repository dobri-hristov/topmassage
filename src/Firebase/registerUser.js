import { getFirestore, collection, addDoc } from "firebase/firestore";

async function registerUser(name, lastName, phone, email) {
    const db = getFirestore();
    try {
        await addDoc(collection(db, "users"), {
            name: name,
            lastName: lastName,
            phone: phone,
            email: email,
            userMassages: []
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default registerUser
