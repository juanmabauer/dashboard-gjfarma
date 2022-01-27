import React from 'react';
import SmallCard from './SmallCard';
import {useEffect, useState} from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Users quantity', 
    color:'success', 
    cuantity: '',
    icon:'fa-user-check'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Products quantity' ,
    color:'warning',
    cuantity:'',
    icon:'fa-clipboard-list'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => {
            cartProps[2].cuantity = data.meta.total;
            setProducts();
        })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
        .then(response => response.json())
        .then(data => {
            cartProps[1].cuantity = data.meta.total;
            setUsers();
        })
        .catch(error => console.log(error))
    }, []);


    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;