import React, { Component } from "react";
import Logo from "./logo2.component";
import Exit from "./Buttons/exitbutton.component"
export default class SignUp extends Component {
    render() {
        return (
            <nav className="nav-cliente col-lg-12 mb-5" > 
              <a class="no-sub" href="">
                    <div className="logo-nav col-lg-6"> 
                        <Logo/> 
                        <h1 className="titulo-logo">DaTerra</h1>
                    </div>
                </a>
                    <ul className="nav-botoes col-lg-6"> 
                        <div class="vl-nav"></div>
                        <li className="nav-elemento"> 
                            <a class=" nav-elemento no-sub" href="">
                                Meu carrinho
                            </a> 
                        </li>
                        <div class="vl-nav"></div>
                        <li className="nav-elemento"> 
                            <a class=" nav-elemento no-sub" href="">
                                Meus pedidos
                            </a> 
                        </li>
                        <div class="vl-nav"></div>
                        <li className="nav-elemento"> 
                            <a class=" nav-elemento no-sub" href="">
                                Minha conta
                            </a>
                        </li>
                        <div class="vl-nav"></div>
                        <li className="nav-elemento"></li>
                        <div className="exit-imagen">
                        <a class=" nav-exit no-sub" href=""> <Exit/> </a> </div>
                    </ul>
            </nav>
        );
    }
}

