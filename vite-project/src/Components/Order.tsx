import { auth, googleProvider } from "../Config/FirebaseConfig"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import Head from './Head'
import "./order.css"
import Home from "./Home"
import Footer from './Footer'
import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import Login from "../Config/Login"

export default function Order() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    

    console.log(auth?.currentUser?.email);

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider );
        } catch (err) {
            console.error(err)
        }
    }

    // Navigation for the login page

    // const navigate = Navigate()


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
    <div>
        <Head />
        <div className="sign">
            <div className="now">
                <h2>Sign Up For Free</h2>
            </div>
            <form action="">
                <div className="email">
                    <div className="emailDiv">
                        <span>Email:</span>
                        <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="emailDiv">
                        <span>Password:</span>
                        <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="emailDivv">
                        <button onClick={signIn}>Log In</button>
                    </div>

                    
                </div>
            </form>

            <div className="or">
                <h3>OR</h3>
            </div>

            <div className="emailDivv">
                <button onClick={signInWithGoogle}>Sign Up With Google</button>
            </div>

            <div className="emailDivv">
                <button onClick={signIn}>
                    <Link to="/home">/Home</Link>
                </button>
            </div>
        </div>
        <Footer />
    </div>
  )
}
