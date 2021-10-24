import React, {  FC } from "react"

import styles from './Button.module.scss'


type Props = {
   onClick: () => void
   
}

const Button: FC<Props> = ({
    onClick,    
    children
}) => {
    return(
        <div className={styles.wrapper}>
            {children}
        </div>        
    )
}

export default Button