import React from 'react';
import {useEffect, useState} from 'react';

function LastProductInDb(){

    const [lastProduct, setTotalProducts] = useState([]);

    let product = {id: '', name: '', image: '', description: ''}
    useEffect(() => {
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => {
            product = data.data[data.data.length -1];
            setTotalProducts(product);
        })
        .catch(error => console.log(error))
    }, []);
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado : {lastProduct.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={lastProduct.image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{lastProduct.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3001/products/detail/${lastProduct.id}`} >Ver producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
