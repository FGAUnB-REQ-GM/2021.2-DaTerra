import React from 'react'
import logo from './../assets/images/buyer.png'

const logovar = () => {
    return(
        <div className="btn-choice">
            <a href="/signup">
                <input type="image" className="form-image image-client" src={logo} alt=""/>
            </a>
        </div>
    );
}
export default (logovar);