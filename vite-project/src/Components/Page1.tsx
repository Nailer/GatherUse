import React, { useState } from 'react'
import "./page1.css"
import Head from './Head'
import { Link } from "react-router-dom"
import code from "../assets/qrcode.png"
import { auth, googleProvider } from "../Config/FirebaseConfig"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import QRCode from 'qrcode.react';

export default function Page1() {


    const [students, setStudents] = useState (0)
    const [tickets, setTickets] = useState (0)

    const [text, setText] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    const generateQRCode = () => {
        setShowQRCode(true);
    };

    const handleClick = () => {
        
        setStudents((prevCount) => (prevCount >= 12 ? 1 : prevCount + 1));
    };

  return (
    <div>
        <Head />
        <div className="page">
            <div className="text">
                <p>Please press the "Generate QR Code" only when you are at eyereach of your preffered junction.</p>
            </div>

            <div className="capacity">
                <p>Vehicle Capacity</p>
                <span>12</span>
            </div>

            <div className="students">
                <p>Students Available</p>
                <span>{students}</span>
            </div>

            <input
                className='nameInput'
                type="text"
                placeholder="Enter your name here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            

            <div className="qrCode">
                <div className="generate">
                    <h1><button  className='btn' onClick={() => {generateQRCode(); handleClick()}}>Generate QR Code</button></h1>
                </div>
            <div>

            {showQRCode && (
                <div className="qrCodeUse">
                <QRCode value={text} />
                </div>
            )}
        </div>
            </div>

            <div className="info">
                <p>Kindly wait for your ride after generating your QR Code... thank you</p>
            </div>
        </div>

    </div>
  )
}
