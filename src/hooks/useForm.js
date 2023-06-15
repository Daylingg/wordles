import { useState } from "react"



export const useForm = (initialState={}) => {//el use form recibe un obj
    const [values, setValues] = useState(initialState)

    const reset=()=>{
        setValues(initialState)//de esta manera reseteamos el formulario...dejarlo limpio
    }

    const handleInputChange=({target})=>{//se desestructura el evento e para usar el target directamente
        setValues(
            {
                ...values,
                [target.name]:target.value.replace(/ /g,"") //para evitar espacios vacios
            }
        )
    }
    
    return [values,handleInputChange, reset]
}