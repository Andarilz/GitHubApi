import React, {useContext, useState} from 'react'
import {NewAlertContext} from "../../context/alert/alertContext";
import {GitHubContext} from "../../context/gitHub/gitHubContext";

export const Search = () => {

    const alert = useContext(NewAlertContext) //для всего контекста

    const [value, setValue] = useState('') //для создания стейта

    const gitHub = useContext(GitHubContext) //для всего контекста

    const onSubmit = event => {
        if(event.key !== 'Enter'){
            return
        }

        gitHub.clearUsers()

        if(value.trim()){
            alert.hide()
            gitHub.search(value.trim())
        } else {
            alert.show('Пустое поле')
        }
    }

    return (
        <div className='form-group'>
            <input
                type="text"
                className='form-control'
                placeholder='Введите ник пользователя'
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}
























// const [value, setValue] = useState('')
//
// const {show} = useContext(NewAlertContext)
//
// const onSubmit = event => {
//     if(event.key !== 'Enter'){
//         return
//     }
//
//     if(value.trim()){
//         console.log('Make request to' + value)
//     } else {
//         show('Заполните поля')
//     }
// }





//
// onChange={event => setValue(event.target.value)}






// const {show} = useContext(AlertContext)
//
// const onSubmit = event => {
//     if(event.key === 'Enter'){
//         show('This is alert')
//     }
// }
//
// onKeyPress={onSubmit}