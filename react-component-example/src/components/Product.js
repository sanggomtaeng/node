
function Product(props){
   const pro = props.product;

    return (
        <tr onClick={()=>props.onClick(pro.no)}>
                    <td>{pro.no}</td><td>{pro.pname}</td><td>{pro.price}</td>
                </tr>
    )
}

export default Product;