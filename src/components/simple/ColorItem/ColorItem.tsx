import React, {  FC } from "react"

import styles from './ColorItem.module.scss'


type Props = {
    color: string
}

const ColorItem: FC<Props> = ({
    color,
    children
}) => {
    return(
        <div className={styles.wrapper} 
            // style={`color:${color}`}
        >
             
        </div>
        
    )
}

export default ColorItem