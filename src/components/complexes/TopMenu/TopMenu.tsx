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
            <NavLink
                to={routes.form}
                className={styles.menuItemLink}
                activeClassName={styles.menuItemActiveLink}
            >
                Форма
            </NavLink>

            <NavLink
                to={routes.palette}
                className={styles.menuItemLink}
                activeClassName={styles.menuItemActiveLink}
            >
                Палитра
            </NavLink>
        </div>

    )
}

export default TopMenu