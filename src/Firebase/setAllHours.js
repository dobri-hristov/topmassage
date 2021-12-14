import { doc, getFirestore, setDoc, collection, getDocs } from "firebase/firestore";

async function setAllHours(date, schedule) {
    const db = getFirestore()
    await getDocs(collection(db, `${date}`))
        .then(res => {
            if (res.docs.length === 0) {
                schedule.forEach(hour => {
                    const addHourToDate = doc(db, `${date}/${hour}`)
                    const isAvaliable = { isAvaliable: true }
                    setDoc(addHourToDate, isAvaliable)
                })
            }
        })
        .catch(e => console.log('setAllHours error:', e))
}

export default setAllHours