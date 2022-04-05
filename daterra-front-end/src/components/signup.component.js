import React, { Component } from "react";
import Logo from "./logo.component.js";
export default class SignUp extends Component {
    render() {
        return (
            <div className="inner inner-register">
                <div className="form">
                    <form>
                        <div className="form-title">
                                <Logo/>
                                <h2>
                                    Crie sua conta
                                </h2>
                        </div>

                        <div className="form-begin-register">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nome Completo" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="CPF" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="E-mail" />
                            </div>
                            <br/>                    
                            <div className="form-group">
                                <input type="text" className="form-control" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" placeholder="Data de Nascimento"/>
                                <br/>
                                <input type="text" className="form-control" pattern="([0-9]{2}) [0-9]{5}-[0-9]{4}" placeholder="Telefone"/>
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Senha" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirme a senha" />
                            </div>
                            <br/>
                        </div>

                        <div className="form-btn-register">
                            <button type="submit" className="btn btn-dark btn-lg btn-block">Registre-se</button>
                        </div>
                        <p className="register-text text-center">
                            Já possui uma conta? <a href="/signin">Acesse aqui</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}