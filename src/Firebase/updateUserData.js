import { doc, updateDoc, getFirestore } from "firebase/firestore";

async function updateUserData(name, lastName, phone, userID) {
    const db = getFirestore();
    const user = doc(db, "users", userID);
    await updateDoc(user, {
        name: name,
        lastName: lastName,
        phone: phone
    });
}

export default updateUserData