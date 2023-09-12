import React from 'react'
import "./home.css"
import Head from './Head'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { auth, googleProvider } from "../Config/FirebaseConfig"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export default function Home() {



    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider );
        } catch (err) {
            console.error(err)
        }
    }


    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
    };

    const logOut = async () => {
        try{
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    };

  return (
    <div className="heads">
        <Head />
        <div className="others">
            <div className="name">
                <span>Hi, {(auth?.currentUser?.email)}; </span>
                <p className='text'>N.B: Please choose a junction you know is nearer to your apartment. The junctions are listed with reference of the distance to the main road</p>
            </div>
            <div className="junctions">
                <div className="junctionLists">
                    <div>
                        <button className='usage'><Link to="/pageLeftA">Left Junction A</Link></button>
                    </div>
                    <div>
                        <button className='usage'><Link to="/pageLeftE">Left Junction E</Link></button>                   
                    </div>
                    <div>
                        <button className='usage'><Link to="/pageRightA">Right Junction A</Link></button>
                    </div>
                    <div>
                        <button className='usage'><Link to="/pageRightE">Right Junction E</Link></button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
