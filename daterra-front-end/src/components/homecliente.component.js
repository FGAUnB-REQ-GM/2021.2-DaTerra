import React, { Component } from "react";
import Navbar from "./navbarclient.component";
import Add from "./Buttons/addbutton.component";
import Food from "./../assets/images/food.jpg"

const array = [{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: Food,
},
{
    product_name: "outro nome",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: "",
},
{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: "",
},
{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: "",
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    price: "11,99",
    image: Food,
}
]

const itens = array.map((element) =>
    <div>
        <div class="info-produto col-lg-6"> 
            <ul className="lista-nome col-lg-6"> 
                <li className="nome-elemento col-lg-6"><img className="img-element" src={element.image}/></li>
                <li className="nome-elemento col-lg-6">{element.product_name}</li>
                <li className="nome-elemento col-lg-6">{element.farm_name}</li>
                <li className="nome-elemento col-lg-6">R${element.price}</li>
            </ul>
        </div>
        <div></div>
        <a href="">
            <div className="btn-add">
                    <Add/>
            </div>
        </a>
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
            </div>
        );
    }
}