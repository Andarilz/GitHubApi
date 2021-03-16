import React, {useContext} from 'react'
import {NewAlertContext} from "../../context/alert/alertContext";


export const Alert = () => {

    const {inf, hide} = useContext(NewAlertContext)

    if(!inf) return null

    return (
        <div className={`alert alert-${inf.type || 'secondary'} alert-dismissible`}
             role="alert"
        >
            {inf.text}
            <button type="button" className="close" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}


















// const {alert, hide} = useContext(AlertContext)
//
// if(!alert) return null
//
// {alert.text}