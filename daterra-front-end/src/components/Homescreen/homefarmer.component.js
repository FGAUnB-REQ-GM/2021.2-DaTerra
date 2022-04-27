import React, { Component } from "react";
import Navbar from "./../navbarfarmer.component";
import Add from "./../Buttons/addbutton.component";
import Food from "./../../assets/images/food.jpg"

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
},
]

const itens = array.map((element) =>
    <div>
        <div class="farm-product col-lg-12"> 
            <div class="col-lg-4" >
                <img className="img-element" src={element.image}/>
            </div>
            <div class="line col-lg-2">
                {element.product_name}<br/>
                Quantidade em estoque: {element.quantity} {element.unit}
            </div>
            <div class="line score col-lg-4">
                estrelas
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
                <div className="white-box col-lg-10" > 
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