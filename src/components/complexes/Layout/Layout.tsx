import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import { routes } from "../../../config"
import { TopMenu } from "../TopMenu"

import styles from './Layout.module.scss'


type Props = {

}

const Layout: FC<Props> = ({

    children
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.menu}>
                    <TopMenu/>
                </div>
                {children}
            </div>
        </div>

    )
}

export default Layout