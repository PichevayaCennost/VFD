import React from 'react';
import { Link } from 'react-router-dom'

import styles from './StartPage.module.scss'

type Props = {
    data: string;
}

export const StartPage: React.FC<Props> = (props) => {
    return (
        <div className={styles.root}>
            <Link to={'/home-page'}>
                Start
            </Link>
        </div>
    )
}