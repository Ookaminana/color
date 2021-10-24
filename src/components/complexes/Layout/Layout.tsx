import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import { routes } from "../../../config"

import styles from './TopMenu.module.scss'


type Props = {

}

const TopMenu: FC<Props> = ({

    children
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}></div>
        </div>

    )
}

export default TopMenu