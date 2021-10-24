import { useState, useRef, RefObject, useCallback, MouseEvent } from 'react'

type UseChangeReturnType = {    
    value:string
    onChange:any    
}

// type UseChangeType = {
//     initialValue:string
// }

// export const useInput = (
//     params: UseChangeType = {}
// ): UseChangeReturnType => {
    
// }

export const useInput = ( initialValue:string ): UseChangeReturnType => {
    const [value, setValue] = useState(initialValue)
    const onChange = (event:any) => {
        setValue(event.target.value)
        // console.log('event.target.value ',event.target.value);        
    }
    return{
        value,
        onChange
    } 
}