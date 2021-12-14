import React, { useState, useEffect } from 'react'
import ProfileForm from './ProfileForm'
import UserMassages from './UserMassages'
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import updateUserData from '../../Firebase/updateUserData'
import { schema } from '../../Shared/Validations/updateProfileValidation'
import ErrorNotification from '../../Shared/Components/ErrorNotification'
import { updateProfile } from "firebase/auth";
import Headline from '../../Shared/Components/Headline'
import styles from './Profile.module.css';

const ProfilePage = () => {
    const [isData, setIsData] = useState(false)
    const [userEmail, setUserEmail] = useState()
    const [userName, setUserName] = useState()
    const [userLastName, setUserLastName] = useState()
    const [userPhone, setUserPhone] = useState()
    const [massages, setMassages] = useState([])
    const [userID, setUserID] = useState()
    const [alert, setAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const auth = getAuth();
    const db = getFirestore();

    if (!isData) {
        const currentUser = auth.currentUser
        currentUser.providerData.forEach((profile) => {
            setIsData(true)
            setUserEmail(profile.email)
        })
    }

    useEffect(() => {
        if (userEmail) {
            async function getuserData() {
                const q = query(collection(db, "users"), where("email", "==", userEmail));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    setUserID(doc.id)
                    setUserName(doc.data().name)
                    setUserLastName(doc.data().lastName)
                    setUserPhone(doc.data().phone)
                    setMassages(doc.data().userMassages)
                });
            }
            getuserData()
        }
    }, [userEmail, db])

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        setAlert(false)
        setErrorMessage('')
        const data = new FormData(event.currentTarget);
        const name = data.get('name');
        const lastName = data.get('lastName');
        const phone = data.get('phone');
        const formData = {
            name: name,
            lastName: lastName,
            phone: phone
        }

        schema.validate(formData)
            .then(() => updateUserData(name, lastName, phone, userID))
            .then(() => updateProfile(auth.currentUser, { displayName: name }))
            .then(() => window.location.reload())
            .catch(error => {
                setAlert(true)
                setErrorMessage(error.message)
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <Headline title='Моят профил' color='purple'/>
                <div>
                    {
                        userEmail && userEmail && userLastName && userPhone
                            ?
                            <ProfileForm
                                name={userName}
                                lastName={userLastName}
                                phone={userPhone}
                                email={userEmail}
                                handleSubmit={handleSubmit} />
                            : <ProfileForm />
                    }
                </div>
                <div className={styles.massagesContainer}>
                    <UserMassages massages={massages} />
                </div>
            </div>
            {
                alert
                    ? <ErrorNotification message={errorMessage} />
                    : null
            }
        </div>
    )
}

export default ProfilePage
