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
        <div class="info-produto col-lg-6"> 
            <div>
                <img className="img-element" src={element.image}/>
            </div>
            <div>
                {element.product_name}
                Quantidade em estoque:{element.quantity} {element.unit}
            </div>
            <div>
                {element.score}
                R${element.price}
            </div>
            <div>
                <a class="no-sub "href="">
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
                <div class="btn-add-farmer">
                    <Add/>
                </div>
            </div>
        );
    }
}