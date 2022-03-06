import React from "react";
import LargeButton from "./LargeButton";
import ProfileImg from "../images/profile.jpg";

export default function Profile() {
    return (
        <header>       
            <img src={ProfileImg} alt="my profile" />
            <h1>Joseph Joester</h1>
            <h4>Hamon User</h4>
            <h4><a href="https://jojo.fandom.com/wiki/Joseph_Joestar">Fandom</a></h4>
            <LargeButton />
        </header>
    );
}
