import React, { Component } from "react";
import Logo from "../logo.component.js";

export default class Login extends Component {
    render() {
        return (
            <div className="inner inner-login">
                <div className="form">
                    <form>
                        <div className="form-title">
                            <Logo/>
                            <h2>
                                LOGIN
                            </h2>
                        </div>
                        <div className="form-begin">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Insira seu CPF" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Insira sua senha" />
                            </div>                
                            <p className="forgot-password text-right">
                                <a href="http://google.com">esqueci minha senha</a>
                            </p>
                        </div>
                        <div className="form-btn">

                            <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
                        </div>
                    </form>
                    <p className="register-text text-center">
                        Ainda não é cliente? <a href="/choice">Registre-se</a>
                    </p>
                </div>
            </div>
        );
    }
}