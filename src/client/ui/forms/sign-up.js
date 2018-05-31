import React from 'react';

import InputForm from "../components/forms/input-form";
import BaseButton from "../components/base-button";

import "../../css/w3.css";
import "../../css/w3-theme-blue.css";

export default class SignUpForm extends React.Component{
    render(){
        return(
        <div className="w3-container w3-cell">
            <div className="w3-container">
                <h2 className="w3-text-theme" style={{textAlign: 'center'}}>Sign Up!</h2>
            </div>
            <form className="w3-container">
                <InputForm labelText="Fisrt Name" typeInput="text" valueName="firstName"/>
                <InputForm labelText="Last Name" typeInput="text" valueName="lastName"/>
                <InputForm labelText="Email" typeInput="email" valueName="email"/>
                <InputForm labelText="Phone" typeInput="telephone" valueName="phone"/>
                <InputForm labelText="Password" typeInput="password" valueName="pswd"/>
                <p style={{textAlign: 'center'}}>
                    <BaseButton classes="w3-button w3-round w3-theme" text="Sign Up!"/>
                </p>
            </form>            
        </div>
        );
    }
}