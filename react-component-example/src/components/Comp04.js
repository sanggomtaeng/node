import {useState} from "react"

function Comp04(){
    let [count, setCount] =useState(30);
    // let countState = useState(10);
    // let count = countState(0);
    // let setCount = countState(1);


    
    const onIncrease = ()=>{
        setCount(count + 1);
        console.log(count)
    }
    const onDecrease = ()=>{
        setCount(count-1);
        console.log(count);
    }
    return(
        <>
            <h2>{count}</h2>
            <div>
                <button onClick={onIncrease}>증가</button>
                <button onClick={onDecrease}>감소</button>
            </div>
            
        </>
    );
}

export default Comp04;