import { useNavigate, useLocation } from "react-router-dom"
import { Pages } from "../Components/router";
import About from "./About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, {createContext, useContext, useEffect } from "react";
import  { useState } from 'react';
import '../login.css';

import { UsersRoutes } from "../backendEndpoints";
import { Users } from "../Models/Users";

import axios from "axios";
import SIGN_UP = UsersRoutes.SIGN_UP;


const Login = () => {
    const [password, setPassword] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.message) {
            alert(location.state.message);
        }
    }, [location.state]);


    const onPasswordChange = (event: any): void => {
        setPassword(event.target.value)
    }

    const onEmailChange = (event: any): void => {
        setEmail(event.target.value);
    }

    const login = (event: any): void => {
        // navigate(Pages.Home);
        // axios.get(PersonRoutes.GET_ALL).then((response: any) => {
        //     console.log(response.data)
        // })


        axios.post(UsersRoutes.LOGIN, {
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            if (response.data !== '') {

                sessionStorage.setItem('user', JSON.stringify(response.data));
                window.location.href = "http://localhost:3000/Home"; // Or use navigate for SPA behavior
            } else {
                alert('Login failed. Please check your credentials.');
            }
        }).catch((errors) => {
            console.log(errors);
        });



    }

    const [user, setUser] = React.useState(() => {
        // Retrieve user data from localStorage
        const savedUserData = sessionStorage.getItem('user');
        return savedUserData ? JSON.parse(savedUserData) : null;
    });



    const [name, setName] = React.useState<string>("");
    const onNameChange = (event: any): void => {
        setName(event.target.value);
    }

    const signUp = (event: any): void => {
        event.preventDefault();

        if (!name.trim() || !email.trim() || !password.trim()) {
            alert('Please fill all the fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        axios.post(UsersRoutes.SIGN_UP, {
            name: name,
            email: email,
            password: password
        },{headers: {
                'Content-Type': 'application/json',
            }}).then((response: any) => {
            if (response.data) {
                window.location.href = "http://localhost:3000/Home";
                // Sau folosește navigate pentru a redirecționa la o altă pagină după înregistrare
            } else {
                alert('Sign up failed. Please check your data.');
            }
        }).catch((error) => {
            console.error('Error during sign up:', error);
            alert('Sign up failed. Please try again later.');
        });
    }

    const logout = () => {
        // Clear the user data from localStorage
        localStorage.removeItem('user');

        // Additional cleanup actions, e.g., clearing authentication tokens
        // Navigate to the login page or home page
        navigate('/login'); // using useNavigate from react-router-dom if you're in a component
    };




    useEffect(() => {
                const signUpButton = document.getElementById('signUp');
                const signInButton = document.getElementById('signIn');
                const container = document.getElementById('container');

                if (signUpButton && signInButton && container) {
                    signUpButton.addEventListener('click', () => container.classList.add("right-panel-active"));
                    signInButton.addEventListener('click', () => container.classList.remove("right-panel-active"));
                }
            }, []);

    return (
        <>
            <Header/>
            <div className="login-page">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form >
                            <h1>Create Account</h1>
                            <input type="text" placeholder="Name" value={name} onChange={onNameChange} />
                            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
                            <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
                            <button type="submit" onClick={signUp} >Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form >
                            <h1>Sign in</h1>
                            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
                            <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />

                            <button type="submit" onClick={login} >Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </>
    );


};


    export default Login;