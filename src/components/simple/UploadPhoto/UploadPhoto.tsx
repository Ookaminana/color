import React, { FC, useState, ChangeEvent } from 'react'

import styles from './UploadPhoto.module.scss'

type Props = {
    defaultPhotoUrl?: string
    onChange?: (file: File) => void
}

const UploadPhoto: FC<Props> = ({ defaultPhotoUrl = '', onChange }) => {
    const [url, setUrl] = useState(defaultPhotoUrl)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length < 0) {
            return
        }

        const file = event.target.files[0]

        const reader = new FileReader()
        reader.onloadend = function (event) {
            if (
                !event.target ||
                !event.target.result ||
                typeof event.target.result !== 'string'
            ) {
                return null
            }

            setUrl(event.target.result)
        }

        reader.readAsDataURL(file)

        if (onChange) {
            onChange(file)
        }
    }

    console.log('UploadPhoto', { url })

    return (
        <div className={styles.wrapper}>
            <div className={styles.lable}>
                Фото
            </div>

            <label
                className={styles.root}
            >
                <input
                    type="file"
                    className={styles.input}
                    onChange={handleFileChange}
                />

                {url && (
                    <span
                        className={styles.photo}
                        style={{ backgroundImage: `url("${url}")` }}
                    />
                )}
            </label>
        </div>

    )
}

export default UploadPhoto
