import {
    doc,
    updateDoc,
    arrayUnion,
    getFirestore,
    collection,
    query,
    where,
    getDocs
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

function addMassageDataToUser(massage, date, hour, name) {
    const db = getFirestore();
    const auth = getAuth();
    let userEmail = false
    const currentUser = auth.currentUser
    currentUser.providerData.forEach((profile) => {
        userEmail = profile.email
    })

    if (userEmail) {
        async function getuserData() {
            const q = query(collection(db, "users"), where("email", "==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((user) => {
                const massageData = doc(db, "users", user.id);
                async function addMassage() {
                    await updateDoc(massageData, {
                        userMassages: arrayUnion({
                            massage: massage,
                            date: date,
                            hour: hour,
                            name: name
                        })
                    });
                }
                addMassage()
            });
        }
        getuserData()
    }
}

export default addMassageDataToUser