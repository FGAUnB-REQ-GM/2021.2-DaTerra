import React, { Component } from "react";
import Navbar from "./navbarclient.component";
import Add from "./Buttons/addbutton.component";
import Food from "./../assets/images/food.jpg"

const array = [{
    id:1,
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},
{id:2,
    product_name: "outro nome",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: "",
},
{id:3,
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: "",
},
{id:4,
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: "",
},{id:5,
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{id:6,
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{id:7,
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{id:8,
    product_name: "Lorem Ipsum",
    num_contat: "9123910293",
    farm_name: "Dolor sit amet",
    data_pedido: "22/02/2022",
    price: "11,99",
    total_price: "23,98",
    image: Food,
},{id:9,
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
                <a class="a-link no-sub ps-5" type="button" data-bs-toggle="modal" data-bs-target={`#modal`+element.id} >
                    finalizar pedido
                </a>
        </div>
        <div class="modal fade" id={`modal`+element.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Finalizar Pedido</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label class="pe-2">Nota do Produto</label>
                    <input class="me-2" type="number" min="0" max="5" placeholder="0"></input>
                    <label class="pe-2">Nota da Fazenda</label>
                    <input class="me-2" type="number" min="0" max="5" placeholder="0"></input>
                </div>
                <div class="modal-footer text-center">
                    <button type="button" class=" btn btn-primary" data-bs-dismiss="modal">Finalizar</button>
                </div>
                </div>
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