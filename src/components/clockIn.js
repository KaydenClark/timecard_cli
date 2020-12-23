import React, {useState} from 'react'
import axios from 'axios'
import {
    base,
    // API PROD
} from './consts'

const API = base

export const ClockIn = (time) => {
    const [employeeID, setID] = useState('')
    const [hash, setHash] = useState('')

    const postClockInAxios = async () => {
        console.log(`sending clock in time: ${time}`)
        const req = await axios.post(`${API}/clockIn`, {
            timeIn: time
        })
        return req
    }

    let submitClockTime = async (Event, time) => {
        Event.preventDefault()
        const valid = await postClockInAxios()
        if(valid){
            alert(`Clocked in at ${time}`)
        } else {
            alert(`Invaild entry`)
        }

    }
}


const postClockOutAxios = async () => {
    console.log(`sending clock out time: ${time}`)
}