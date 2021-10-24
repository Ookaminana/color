import React, {  FC } from "react"
import { Button } from "../../simple/Button"

import styles from './FormPage.module.scss'


type Props = {
    
}

const FormPage: FC<Props> = ({    
    children
}) => {
    return(
        <div className={styles.wrapper}>
             <Button onClick={() => {}}>
                Test
             </Button>
        </div>
        
    )
}

export default FormPage