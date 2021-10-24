import React, { FC } from "react"

import styles from './Response.module.scss'


type Props = {    
}

const Response: FC<Props> = ({   
    children,
    ...rest
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.lable}>Response</div>
            <div className={styles.field}>
                
            </div>
        </div>

    )
}

export default Response