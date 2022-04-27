import React, { Component } from "react";
import Logo from "../logo.component.js";
import Buyer from"../Buttons/clientbutton.component.js";
import Farmer from "../Buttons/farmerbutton.component.js";

export default class SignUp extends Component {
    render() {
        return (
            <div className="inner inner-choice">
                <div className="form">
                    <div className="form-begin-choice">
                        <div className="form-title">
                            <Logo/>
                            <h2 className="h2-choice">
                                Selecione o tipo de conta que deseja criar
                            </h2>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="btn-duo">
                            <div className="btn-tag">
                                <Buyer/>
                                <label> Cliente </label>
                            </div>
                            <div className="btn-tag">
                                <div class="vl"></div>
                            </div>
                            <div className="btn-tag">
                                <Farmer/>
                                <label>Produtor</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}