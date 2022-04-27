import React, { Component } from "react";
import Logo from "./logo2.component";
import Exit from "./Buttons/exitbutton.component"
export default class SignUp extends Component {
    render() {
        return (
            <div >
                
                <div className="white-box col-lg-10" > 
                    <div class="vl-horizontal"></div>
                        <div class="info-produto"> 
                            <img className="img-produto" src=""/>
                            <p className="info-produto">Nome do produto <br/> Nome fazenda <br/> Valor kg produto </p>
                            <button className="abrir-popup">adicionar produtos</button>
                        </div>
                    <div class="vl-horizontal"></div>
                        <div class="info-produto"> 
                            <img className="img-produto" src=""/>
                            <p className="info-produto">Nome do produto <br/> Nome fazenda <br/> Valor kg produto </p>
                        </div>
                    <div class="vl-horizontal"></div>
                        <div class="info-produto"> 
                            <img className="img-produto" src=""/>
                            <p className="info-produto">Nome do produto <br/> Nome fazenda <br/> Valor kg produto </p>
                        </div>
                    <div class="vl-horizontal"></div>
                        <div class="info-produto"> 
                            <img className="img-produto" src=""/>
                            <p className="info-produto">Nome do produto <br/> Nome fazenda <br/> Valor kg produto </p>
                        </div>
                    <div class="vl-horizontal"></div>
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

                <div  id="cont-popup" className="cont-popup">
                    <div className="popup">
                        <h1>FFF F1</h1>
                        <p>lorem4alskdçalksdjaçlsjfvbnçw jwneçf ljanwçelkf mnaçwelkf maçwlek mfawlçkem fçalwkemf 
                            çalwke falwkem fçlakwemfçlk amwçlek fma çwlekmf çalwkem çfalwkem
                        </p>
                        <button className="fechar-popup">fechar</button>
                    </div>
                </div>

            </div>
        );
    }
}