import React from 'react'

import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

import styles from './layouts.module.scss'

type Props = {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	return (
		<div className={styles.layout}>
			<div className={styles.wrapper}>
				<div className={styles.header}><Header /></div>
				<div className={styles.content} >{children}</div>
			</div>
			<div className={styles.footer}><Footer /></div>
		</div>
	)
}