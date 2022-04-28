import React, { Component } from "react";
import Navbar from "./navbarclient.component";
import Food from "./../assets/images/food.jpg"
import { BsFillStarFill } from "react-icons/bs";

const array = [{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: Food,
    score: null,
},
{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: Food,
    score: 3,
},
{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: Food,
    score: 1,
}
]
function scoreStars(score){
    if(score === 5){
        return(
            <div class="col-lg-2">
                <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                </div>
                <span class="ps-5">
                    pedido finalizado
                </span>
            </div>
        )
    }else if(score === 4){
        return(
            <div class="col-lg-2">
                <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked" > <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                </div>
                <span class="ps-5">
                    pedido finalizado
                </span>
            </div>
        )
    }else if(score === 3){
        return(
            <div class="col-lg-2">
                <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked" > <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                </div>
                <span class="ps-5">
                    pedido finalizado
                </span>
            </div>
        )
    }else if(score === 2){
        return(
            <div class="col-lg-2">
                <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size" > <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                </div>
                <span class="ps-5">
                    pedido finalizado
                </span>
            </div>
        )
    }else if(score === 1){
        return(
            <div class="col-lg-2">
                <div>
                <i class="bi bi-star-fill star-size checked"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size" > <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                </div>
                <span class="ps-5">
                    pedido finalizado
                </span>
            </div>
        )
    }else if(score === 0){
        return(
            <div class="col-lg-2">
                <div>
                    <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                    <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                    <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                    <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                    <i class="bi bi-star-fill star-size"> <BsFillStarFill/></i>
                </div>
                <span class="ps-5">
                    pedido finalizado
                </span>
            </div>
        )
    }else{
        return(
        <div class="col-lg-2">
                <a class="a-link no-sub ps-5"href="">
                    finalizar pedido
                </a>
        </div>
        )
    }
}
const itens = array.map((element) =>
    <div>
        <div class="farm-product col-lg-12"> 
            <div class="col-lg-4" >
                <img className="img-element" src={element.image}/>
            </div>
            <div class="line col-lg-2">
                {element.product_name}<br/>
                Quantidade comprada: {element.tot_comprado}<br/>
            </div>
            <div class="line col-lg-3">
                Cliente: {element.num_contat} <br/>
                Valor total: {element.total_price}
            </div>
            {scoreStars(element.score)}
        </div>
        <div class="vl-horizontal col-lg-8">
        </div>
</div>
);

export default class SignUp extends Component {
    
    render() {
        return (
            <div >
                <Navbar/>
                <div className="white-box col-lg-10" > 
                    <div class="vl-horizontal col-lg-8"></div>
                    {itens}
                </div>
            </div>
        );
    }
}