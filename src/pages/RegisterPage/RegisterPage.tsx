import React from 'react'
import { useForm } from 'react-hook-form'

import styles from './RegisterPage.module.scss'

type Props = {}

export const RegisterPage = () => {

    const { register } = useForm()

    return (
        <div className={styles.register}>
            <p>Register User</p>
            <div></div>
        </div>
    )
}
