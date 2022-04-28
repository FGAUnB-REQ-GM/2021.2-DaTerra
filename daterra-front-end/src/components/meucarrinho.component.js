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
    image: Food,
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
    image: '',
},
{
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
    image: Food,
}
]

const itens = array.map((element) =>
    <div class="row">
        <div class="farm-product col-lg-12"> 
            <div class="line col-lg-4 pe-5" >
                <img class="img-element" src={element.image}/>
            </div>
            <div class="line col-lg-3">
                {element.product_name}<br/>
                Quantidade: {element.quantity} {element.unit}<br/>
                {element.farm_name}
            </div>
            <div class="line score col-lg-3">
                Preço R${element.price} {element.unit} <br/>
                Total R${element.total_price}<br/>
            </div>
            <div class="col-lg-2">
                <a class="a-link no-sub "href="">
                    remover
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
                <div class="container-fluid"><Navbar/></div>
                <div class="container container-white testecss">
                    <div className="row position-relative justify-content-center mt-5">                     
                        <div class="col-lg-8">
                                {itens}
                        </div>
                        <div class="col-lg-4" > 
                            <div class="sticky-top mt-5">
                                <div class="gambiarra"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}