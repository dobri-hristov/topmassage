import React, { useEffect, useState } from 'react'
import Massage from './Massage'
import { getDatabase, ref, onValue } from "firebase/database";
import LoadingProgress from '../../Shared/Components/LoadingProgress'

const MassagePage = ({ massageName }) => {
    const [massageData, setMassageData] = useState()

    useEffect(() => {
        window.scrollTo(0, 0)
        const db = getDatabase();
        const starCountRef = ref(db, 'typesMassage/' + massageName)
        onValue(starCountRef, (snapshot) => {
            const massage = snapshot.val()
            setMassageData(massage)
        })
    }, [massageName])

    return (
        <div>
            {
                massageData
                    ? <Massage data={massageData} />
                    : <LoadingProgress />
            }
        </div>
    )
}

export default MassagePage
