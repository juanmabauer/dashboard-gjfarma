import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.category}</td>
                    <td>{props.brand}</td>
                    <td>{props.price}</td>
                    <td>{props.stock}</td>
                </tr>
            )
    }
    
        

export default ChartRow;