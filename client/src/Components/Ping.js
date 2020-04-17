import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Ping = () => {
    const [message, setMesagge] = useState("");
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/ping`)
            .then(res => {
                const message = res.data;
                setMesagge(message);
            })
    })
    return (
        <div className="container">
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >{message} </button>
        </div >
    )
}

export default Ping
