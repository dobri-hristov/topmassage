import { doc, collection, updateDoc, addDoc, getFirestore } from "firebase/firestore";

function reserveMassage(date, hour, name, phone, massage) {
    const db = getFirestore()

    async function bookingHour() {
        try {
            await addDoc(collection(db, `${date}/${hour}/${name}`), {
                name: name,
                phone: phone,
                massage: massage,
                hour: hour
            }).then(() => {
                const hourDocRef = doc(db, `${date}`, `${hour}`);
                updateDoc(hourDocRef, { "isAvaliable": false });
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    bookingHour()
}

export default reserveMassage