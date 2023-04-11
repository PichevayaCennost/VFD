import React from 'react'

import styles from './Footer.module.scss'

import instagram from '../../assets/instagram.png'
import telegram from '../../assets/telegram.png'

type Props = {}

export const Footer = (props: Props) => {
    return (
        <div className={styles.footer}>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, consequuntur? Cumque quaerat quos deserunt omnis ducimus! Expedita ab cumque doloremque, iusto ea, quo laboriosam quaerat, dolores ad aut beatae officia!</p>
            </div>
            <div className={styles.links}>
                Link us!
                <img className={styles.instagram} src={instagram}></img>
                <img className={styles.telegram} src={telegram}></img>
            </div>
        </div>
    )
}
