import React, { Component } from "react";
import Logo from "./logo.component.js";

export default class SignUp extends Component {
    render() {
        return (
            <div className="inner inner-farm">
                <div className="form">
                    <form>
                        <div className="form-title">
                                <Logo/>
                                <h2>
                                    Cadastre sua fazenda
                                </h2>
                        </div>
                        <div className="form-begin-farm">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nome da fazenda" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Foto" />
                            </div>
                            <br/>
                            <div className="form-btn-picture">
                                <button type="submit" className="btn btn-dark btn-lg btn-block btn-picture">Enviar foto</button>
                             </div>
                            <br/>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Endereço" />
                            </div>
                            <br/>                    
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="CEP" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Cidade" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Estado" />
                            </div>
                        </div>

                        <div className="form-btn-register">
                            <button type="submit" className="btn btn-dark btn-lg btn-block">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}