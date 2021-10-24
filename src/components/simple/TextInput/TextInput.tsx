import React, { FC } from "react"

import styles from './TextInput.module.scss'


type Props = {
    lable: string
}

const TextInput: FC<Props> = ({
    lable,
    children
}) => {
    return (
        <div className={styles.wrapper}>
            <div>lable</div>
            <div>
                <input type="text" />
            </div>
        </div>

    )
}

export default TextInput