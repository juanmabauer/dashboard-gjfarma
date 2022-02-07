import React from 'react';
import ChartRow from './ChartRow';
import {useEffect, useState} from 'react';

function Chart (){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => { 
            setProducts(data.data);
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            products.map( ( product , i) => {
                                return <ChartRow { ...product} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;