import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Senha" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirme a senha" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Registre-se</button>
                <p className="forgot-password text-right">
                    Já possui uma conta? <a href="http://google.com">Acesse aqui</a>
                </p>
            </form>
        );
    }
}