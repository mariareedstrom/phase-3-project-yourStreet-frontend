import React from "react";
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <nav>
                {/*<div>*/}
                {/*    <Link to='/households/new'>Add a Household</Link>*/}
                {/*</div>*/}
                <div>
                    <Link to={'/'}>Take me home</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header