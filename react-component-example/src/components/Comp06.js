import {useState} from "react"
import Product from "./Product";
function Comp(){
    const [products, setProducts]= useState([{no:1, pname: "apple", price:100},
                     {no:2, pname: "glen", price:500},
                     {no:3, pname: "sherry", price:700}
                 ]);
   
    const trDel = (no) =>{
        //배열 첫번째 요소 삭제
        let newProducts = [];
        for(let i=0; i<products.length; i++){
            if(no !== products[i].no)
            newProducts.push(products[i]);
        }
        setProducts(newProducts);
        
    };
    const list = products.map(pro => <Product key={pro.no} product={pro} onClick={trDel}></Product>)
    
    return (
        <>
        <button onClick={()=>{trDel()}}>삭제</button>
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
        </>
    )
}

export default Comp;