import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`loginUser error: code ${errorCode} and message: ${errorMessage}`)
        });
}

export default loginUser
