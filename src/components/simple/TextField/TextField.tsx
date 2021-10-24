import React, { FC } from "react"

import styles from './TextField.module.scss'


type Props = {
    lable: string
}

const TextField: FC<Props> = ({
    lable,    
    ...rest
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.lable}>{lable}</div>
            <div className={styles.inputDiv}>
                <input 
                    type="text"
                    className={styles.input}
                    {...rest}
                />
            </div>
        </div>

    )
}

export default TextField