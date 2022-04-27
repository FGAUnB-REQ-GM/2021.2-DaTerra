import React, { Component } from "react";
import Navbar from "./navbarclient.component";
import Add from "./Buttons/addbutton.component";
import Food from "./../assets/images/food.jpg"

const array = [{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: Food,
},
{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: Food,
},
{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: Food,
},
{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: '',
},{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: '',
},{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: '',
},{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: '',
},{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: '',
},{
    product_name: "Lorem Ipsum",
    tot_comprado: "150kg",
    num_contat: "9123910293",
    total_price: "23,98",
    image: '',
}
]

const itens = array.map((element) =>
    <div>
        <div class="farm-product col-lg-12"> 
            <div class="col-lg-4" >
                <img className="img-element" src={element.image}/>
            </div>
            <div class="line col-lg-3">
                {element.product_name}<br/>
                Quantidade comprada: {element.tot_comprado}<br/>
            </div>
            <div class="line col-lg-3">
                Cliente: {element.num_contat} <br/>
                Valor total: {element.total_price}
            </div>
            <div class="col-lg-2">
                <a class="a-link no-sub "href="">
                    finalizar pedido
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
            </div>
        );
    }
}