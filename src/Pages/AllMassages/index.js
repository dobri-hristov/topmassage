import React, { useState, useEffect } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import Massage from './Massage'
import LoadingProgress from '../../Shared/Components/LoadingProgress'
import Headline from '../../Shared/Components/Headline'

const MassagesPage = () => {
    const [data, setData] = useState([])
    const [isMassages, setIsMassages] = useState(false)

    useEffect(() => {
        if (!isMassages) {
            const db = getDatabase();
            onValue(ref(db, 'allMassages'), (snapshot) => {
                setData(snapshot.val());
                setIsMassages(true)
            })
        }
    }, [isMassages])

    return (
        <div>
            <Headline title='Масажи' color='black' />
            {
                data.length !== 0
                    ? data.map(massage => <Massage key={massage.id} data={massage} />)
                    : <LoadingProgress />
            }
        </div>
    )
}

export default MassagesPage
