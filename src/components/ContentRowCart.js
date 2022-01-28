import React from 'react';
import SmallCard from './SmallCard';
import {useEffect, useState} from 'react';

let productsInDB = {
    title: 'Total de productos',
    color: 'primary', 
    quantity: '',
    icon: 'fa-clipboard-list'
}


let usersInDB = {
    title: 'Total de usuarios', 
    color:'success', 
    quantity: '',
    icon:'fa-user-check'
}


let categoriesInDB = {
    title:'Total de categorías' ,
    color:'warning',
    quantity:'',
    icon:'fa-clipboard-list'
}

let cartProps = [productsInDB, usersInDB, categoriesInDB];

function ContentRowCart(){
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => {
            cartProps[0].quantity = data.meta.total;
            setProducts();
        })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
        .then(response => response.json())
        .then(data => {
            cartProps[1].quantity = data.meta.total;
            setUsers();
        })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/api/categories')
        .then(response => response.json())
        .then(data => {
            cartProps[2].quantity = data.meta.total;
            setCategories();
        })
        .catch(error => console.log(error))
    }, []);


    return (
    
        <div className="row">
            
            {cartProps.map( (cart, i) => {

                return <SmallCard {...cart} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowCart;