import React, { Component } from "react";
import Navbar from "./navbarclient.component";
import Food from "./../assets/images/food.jpg";
import Buyer from "./../assets/images/buyer.png"

const array = [{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: '',
},
{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: '',
},
{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},
{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: '',
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: '',
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: '',
},{
    product_name: "Lorem Ipsum",
    farm_name: "Dolor sit amet",
    quant:"20 kg",
    price: "11,99",
    total_price: "23,98",
    image: '',
}
]

const itens = array.map((element) =>
    <div>
        <div class="farm-product col-lg-12"> 
            <div class="col-lg-2" >
                <img className="img-element" src={element.image}/>
            </div>
            <div class="line col-lg-2">
                {element.product_name}<br/>
                Quantidade: {element.quantity} {element.unit}<br/>
                {element.farm_name}
            </div>
            <div class="line score col-lg-2">
                Preço R${element.price} {element.unit} <br/>
                Total R${element.total_price}<br/>
            </div>
            <div class="col-lg-2">
                <a class="a-link no-sub "href="">
                    remover
                </a>
                <div class="col lg 4">
                </div>
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
            </div>
        );
    }
}