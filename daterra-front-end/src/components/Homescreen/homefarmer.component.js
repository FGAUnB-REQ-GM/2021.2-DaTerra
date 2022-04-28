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
                <Navbar/>
                <div class="white-box col-lg-10" > 
                    <SearchBar/>
                    <div class="vl-horizontal col-lg-8"></div>
                    {itens}
                </div>
                <a class="no-sub" href="">
                    <div class="btn-add-farmer">
                        <Add/>
                    </div>
                </a>
            </div>
        );
    }
}