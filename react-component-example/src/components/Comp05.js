import {useState} from "react"
function Comp(){
    //let color = 'black';
    let [color, setColor] = useState('black');
    const changeColor = (c)=>{ setColor(color=c)}
  
    let [message, setMessage] = useState('안녕하세요');

    return(
        <>
        <button onClick={(e)=>setMessage('입장합니다.')}>입장</button>
        <button onClick={(e)=>setMessage('퇴장합니다')}>퇴장</button>
        <h1 style={{'backgroundColor':color, 'color':'white'}}>{message}</h1>
        <button onClick={(e)=>changeColor('red')}>빨강</button>
        <button onClick={(e)=>changeColor('blue')}>파랑</button>
        <button onClick={(e)=>changeColor('green')}>초록</button>
        </>
    )

}

export default Comp