import React, { Component } from "react";
import Navbar from "./../navbarfarmer.component";
import Add from "./../Buttons/addbutton.component";
import Food from "./../../assets/images/food.jpg";
import SearchBar from "./../pesquisa.component";
import { BsFillStarFill } from "react-icons/bs";
const array = [{
    product_name: "Lorem Ipsum",
    quantity: 150,
    price: "11,99",
    image: Food,
    unit: "un",
    score: 4
},
{
    product_name: "Lorem Ipsum",
    quantity: 12,
    price: "11,99",
    image: Food,
    unit: "kg",
    score: 3
},
{
    product_name: "Lorem Ipsum",
    quantity: 33,
    price: "11,99",
    image: Food,
    unit: "pc",
    score: 5
},{
    product_name: "Lorem Ipsum",
    quantity: 33,
    price: "11,99",
    image: Food,
    unit: "pc",
    score: 2
},
{
    product_name: "Lorem Ipsum",
    quantity: 33,
    price: "11,99",
    image: Food,
    unit: "pc",
    score: 1
},
{
    product_name: "Lorem Ipsum",
    quantity: 33,
    price: "11,99",
    image: Food,
    unit: "pc",
    score: 0
},{
    product_name: "Lorem Ipsum",
    quantity: 33,
    price: "11,99",
    image: Food,
    unit: "pc",
    score: 4
},{
    product_name: "batata",
    quantity: 33,
    price: "186,99",
    image: "era pra ser uma imagem",
    unit: "pc",
    score: 2
},
]

function scoreStars(score){
    if(score === 5){
        return(
            <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
            </div>
        )
    }else if(score === 4){
        return(
            <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked" > <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
            </div>
        )
    }else if(score === 3){
        return(
            <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked" > <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
            </div>
        )
    }else if(score === 2){
        return(
            <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size" > <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
            </div>
        )
    }else if(score === 1){
        return(
            <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size" > <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
            </div>
        )
    }else{
        return(
            <div>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
            </div>
        )
    }
}

const itens = array.map((element) =>
    <div>
        <div class="farm-product col-lg-12"> 
            <div class="col-lg-4" >
                <img class="img-element" src={element.image}/>
            </div>
            <div class="line col-lg-2">
                {element.product_name}<br/>
                Quantidade em estoque: {element.quantity} {element.unit}
            </div>
            <div class="line score col-lg-4">
                {scoreStars(element.score)}
                <br/>
                Preço R${element.price} {element.unit}
            </div>
            <div class="col-lg-2">
                <a class="a-link no-sub "href="">
                    editar
                </a>
            </div>
        </div>

        <div class="vl-horizontal col-lg-8"></div>
    </div>
);

export default class SignUp extends Component {
    
    render() {
        return (
            <div >
                <div >
                    <Navbar/>
                    <div class="white-box col-lg-10" > 
                        <SearchBar/>
                        <div class="vl-horizontal col-lg-8"></div>
                        {itens}
                    </div>
                    <a class="a-link no-sub ps-5" type="button" data-bs-toggle="modal" data-bs-target="#addProduct" >
                        <div class="btn-add-farmer">
                            <Add/>
                        </div>
                    </a>
                </div>
                <div class="modal fade" id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Adicionar Produto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Foto do produto" />
                                        </div>
                                        <br/>
                                        <div className="form-btn-picture">
                                            <button type="submit" className="btn btn-dark btn-lg btn-block btn-picture">Enviar foto</button>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Nome do produto" />
                                        </div>
                                        <br/>
                                        <br/>

                                        <div className="form-group">
                                            <select className="form-control" name="tipoproduto" id="tipo_produto">
                                                <option value="" disabled selected>Tipo do produto - Selecione</option>
                                                <option value="frutas">frutas</option>
                                                <option value="verduras">verduras</option>
                                                <option value="carnes">carnes</option>
                                                <option value="grãos">grãos</option>
                                            </select>
                                        </div>
                                        <br/>                    
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Descrição do produto" />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <select className="form-control" name="unidade" id="unidade">
                                                <option value="" disabled selected>Tipo do unidade - Selecione</option>
                                                <option value="Quilogramas">Quilogramas</option>
                                                <option value="Unidade">Unidade</option>
                                                <option value="Peça">Peça</option>
                                                <option value="Litros">Litros</option>
                                            </select>
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Quantidade em estoque" />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Preço por unidade" />
                                        </div>

                                </form>
                            </div>
                            <div class="modal-footer text-center">
                                <button type="button" class=" btn btn-primary" data-bs-dismiss="modal">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}