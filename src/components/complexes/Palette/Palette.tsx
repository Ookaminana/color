import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import { routes } from "../../../config"
import { ColorItem } from "../../simple/ColorItem"

import styles from './Palette.module.scss'


type Props = {
    colors: Array<string>
}

const Palette: FC<Props> = ({
    colors,
    children
}) => {
    // const colors = dispatch()

    return (
        <div className={styles.wrapper}>
            {colors.map((color) => {
                return(
                    <ColorItem color={color}/>
                )
            })}
        </div>

    )
}

export default Palette