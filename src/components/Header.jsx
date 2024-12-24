import React from 'react';
import ChefIcon from '../images/chef-claude-icon.png'

export default function Header(){
    return(
        <>
        <header>
            <img  src={ChefIcon} alt="" />
            <h1>Chef Claude</h1>
        </header>
        </>
    )
}