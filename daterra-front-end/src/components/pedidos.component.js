import React, { Component } from "react";
import Navbar from "./navbarclient.component";
import Add from "./Buttons/addbutton.component";
import Food from "./../assets/images/food.jpg"

const array = [{
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},
{
    product_name: "outro nome",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: "",
},
{
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: "",
},
{
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: "",
},{
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
}
]

const itens = array.map((element) =>
    <div>
        <div class="farm-product col-lg-12"> 
            <div class="col-lg-4" >
                <img className="img-element" src={element.image}/>
            </div>
            <div class="line col-lg-2">
                {element.product_name}<br/>
                {element.num_contat}<br/>
                {element.farm_name}
            </div>
            <div class="col-lg-2">
                Data do pedido: {element.data_pedido} <br/>
                Quantidade em estoque: {element.quantity} {element.unit}<br/>
            </div>
            <div class="line score col-lg-2">
                Preço R${element.price} {element.unit} <br/>
                Total R${element.total_price}<br/>
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