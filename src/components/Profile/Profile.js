import React from 'react';
import './Profile.css';
import Bio from './Bio';
import Skills from './Skills';
import Links from './Links';



class Profile extends React.Component{
    render(){
        return(
            <div className="Container">
                <Bio></Bio>
                <Skills></Skills>
                <Links></Links>
            </div>
        )
    }
}

export default Profile;