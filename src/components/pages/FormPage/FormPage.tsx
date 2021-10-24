import React, { FC } from "react"
import { Layout } from "../../complexes/Layout"
import { Button } from "../../simple/Button"
import { TextField } from "../../simple/TextField"
import { Response } from "../../simple/Response"
import { UploadPhoto } from "../../simple/UploadPhoto"

import { useInput } from "../../../hooks/useInput"

import styles from './FormPage.module.scss'



type Props = {

}

const FormPage: FC<Props> = ({
    children
}) => {
    const name = useInput('')
    const fam = useInput('')
    const otch = useInput('')

    const handleSubmit = () => {

    }
    
    return (
        <div className={styles.wrapper}>
            <Layout>
                <form action="/" onSubmit={() => handleSubmit() }>
                    <TextField
                        lable={'Имя'}
                        onChange={name.onChange}
                        value={name.value}
                    />
                    <TextField lable={'Фамилия'}
                        onChange={fam.onChange}
                        value={fam.value}
                    />
                    <TextField lable={'Отчество'}
                        onChange={otch.onChange}
                        value={otch.value}
                    />
                    <UploadPhoto />
                    <Button onClick={() => { }}>
                        Сохранить
                    </Button>
                </form>
                <Response />

            </Layout>

        </div>

    )
}

export default FormPage