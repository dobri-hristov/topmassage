import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './ErrorButton.module.css'

const ErrorButton = ({ title, path }) => {
    const history = useHistory()

    return (
        <button onClick={() => history.push(path)} className={styles.container}>
            {title}
        </button>
    )
}

export default ErrorButton
