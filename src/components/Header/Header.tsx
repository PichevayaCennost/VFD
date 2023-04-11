import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import search from '../../assets/search.png'
import logo from '../../assets/logo.png'

type Props = {}

export const Header = (props: Props) => {
    return (
        <div className={styles.header}>
            <Link to={'/'}>
                <div className={styles.logo}>
                    <img src={logo} />
                </div>
            </Link>

            <div className={styles.search}>
                <img src={search} />
                <input>
                </input>
            </div>

            <div className={styles.buttons}>
                <Link to={'/login'}>
                    <button className={styles.signin}>
                        Sign In
                    </button>
                </Link>
                <Link to={'/register'}>
                    <button className={styles.signup}>
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    )
}