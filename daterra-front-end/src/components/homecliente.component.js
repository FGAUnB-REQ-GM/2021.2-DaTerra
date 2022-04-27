import React, { Component } from "react";
import Logo from "./logo2.component";
import Exit from "./exitbutton.component"
export default class SignUp extends Component {
    render() {
        return (
            <div >
                
                <div className="white-box col-lg-10" > 
                
                    <div class="vl-horizontal col-lg-8"></div>
                    <div class="info-produto col-lg-6"> 
                        <ul className="lista-nome col-lg-6">
                            <li className="nome-elemento col-lg-6">nome produto</li>
                            <li className="nome-elemento col-lg-6">nome fazenda</li>
                            <li className="nome-elemento col-lg-6">valor kg produto</li>
                        </ul>
                    </div>

                    <div class="vl-horizontal col-lg-8"></div>
                    <div class="info-produto col-lg-6"> 
                        <ul className="lista-nome col-lg-6">
                            <li className="nome-elemento col-lg-6">nome produto</li>
                            <li className="nome-elemento col-lg-6">nome fazenda</li>
                            <li className="nome-elemento col-lg-6">valor kg produto</li>
                        </ul>
                    </div>

                    <div class="vl-horizontal col-lg-8"></div>
                    <div class="info-produto col-lg-6"> 
                        <ul className="lista-nome col-lg-6">
                            <li className="nome-elemento col-lg-6">nome produto</li>
                            <li className="nome-elemento col-lg-6">nome fazenda</li>
                            <li className="nome-elemento col-lg-6">valor kg produto</li>
                        </ul>
                    </div>

                    <div class="vl-horizontal col-lg-8"></div>
                    <div class="info-produto col-lg-6"> 
                        <ul className="lista-nome col-lg-6">
                            <li className="nome-elemento col-lg-6">nome produto</li>
                            <li className="nome-elemento col-lg-6">nome fazenda</li>
                            <li className="nome-elemento col-lg-6">valor kg produto</li>
                        </ul>
                    </div>
                    <div class="vl-horizontal col-lg-8"></div>
                    <div class="info-produto col-lg-6"> 
                        <ul className="lista-nome col-lg-6">
                            <li className="nome-elemento col-lg-6">nome produto</li>
                            <li className="nome-elemento col-lg-6">nome fazenda</li>
                            <li className="nome-elemento col-lg-6">valor kg produto</li>
                        </ul>
                    </div>
                    
                </div>


                <nav className="nav-cliente col-lg-12" > 
                <div className="logo-nav col-lg-6"> 
                    <Logo/> 
                    <h1 className="titulo-logo">DaTerra</h1>
                </div>
                    <ul className="nav-botoes col-lg-6"> 
                        <div class="vl-nav"></div>
                        <li className="nav-elemento"> <a>Meu carrinho</a> </li>
                        <div class="vl-nav"></div>
                        <li className="nav-elemento"> <a>Meus pedidos</a> </li>
                        <div class="vl-nav"></div>
                        <li className="nav-elemento"> <a>Minha conta</a> </li>
                        <div class="vl-nav"></div>
                        <li className="nav-elemento"></li>
                        <div className="exit-imagen"> <Exit/> </div>
                    </ul>
                </nav>

            </div>
        );
    }
}