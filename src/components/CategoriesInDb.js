import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

function CategoriesInDb() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/categories')
    .then(response => response.json())
    .then(data => {
        setCategories(data.data);
    })
    .catch(error => console.log(error))
}, []);
  
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías en la base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              categories.map((category,i) =>(
                <div className="col-lg-6 mb-4" key={category + i} >
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{category.name} </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
