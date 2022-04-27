import React from 'react'
import logo from './../../assets/images/farm.png'

const logovar = () => {
    return(
        <div className="btn-choice">
            <a href="/signup">
                <input type="image" className="form-image" src={logo} alt=""/>
            </a>
        </div>
    );
}
export default (logovar);