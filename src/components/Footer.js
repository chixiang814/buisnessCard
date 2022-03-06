import React from "react";
import LinkedinIcon from "../images/linkedin_icon.png";
import InstaIcon from "../images/instagram_icon.png";
import GithubIcon from "../images/github_icon.png";
import FacebookIcon from "../images/facebook_icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer">
                <button className="footerBtn"><img src={LinkedinIcon}/></button>
                <button className="footerBtn"><img src={InstaIcon} /></button>
                <button className="footerBtn"><img src={FacebookIcon} /></button>
                <button className="footerBtn"><img src={GithubIcon}/></button>
            </div>
        </div>
    );
}