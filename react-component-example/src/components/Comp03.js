import Product from "./Product";
function Comp(props){
    // const products = [{no:1, pname: "apple", price:100},
    //                  {no:2, pname: "glen", price:500},
    //                  {no:3, pname: "sherry", price:700}
    //              ];
    
    const list = props.products.map(pro => <Product key={pro.no} product={pro}></Product>)
    
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th><th>상품명</th><th>가격</th>
                </tr>
            </thead> 
            <tbody>
                
                {list}
                {/* {products.map(p => <tr><td>{p.no}</td><td>{p.pname}</td><td>{p.price}</td></tr>)}  */}

               
            </tbody>
        </table>
    )
}

export default Comp;