import { useState, useRef, RefObject, useCallback, MouseEvent } from 'react'

type UseChangeReturnType = {    
    value:string
    onChange:any    
}

type UseChangeType = {
    initialValue:string
}

// export const useInput = (
//     params: UseChangeType = {}
// ): UseChangeReturnType => {
    
// }

export const useInput = (params: UseChangeType): UseChangeReturnType => {
    const [value, setValue] = useState(params.initialValue)
    const onChange = (event:any) => {
        setValue(event.target.value)
    }
    return{
        value,
        onChange
    } 
}