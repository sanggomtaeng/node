import {useState, useRef, useEffect} from "react"

export default function Comp(){
    let txtUsername = useRef(null);
    let [formdata, setFormdata] = useState({username:"", address:""});
    let {username, address} = formdata;

     useEffect( ()=>{ txtUsername.current.focus(); }, [] )
     const clickHandler = ()=>{
        //username + address 결과를 alert => fetch
        alert(username + " : "+ address);
        //input 초기화
        setFormdata({username:"", address:""})
        //username 입력태그에 focus
        txtUsername.current.focus();
     }
     const keyDownHandler =(e)=>{
        if(e.key ==='Enter'){
            clickHandler();
        }
     };

    return (
        <>
        <input ref={txtUsername} type="text" name="username" placeholder="이름입력" value={username}
                 onChange={e=>{setFormdata({...formdata, username:e.target.value}) }}></input>
        <input type="text" name="address" placeholder="주소입력"  value={address} onKeyDown={keyDownHandler}
                onChange={e=>{setFormdata({...formdata, address : e.target.value})}}></input>
        <button onClick={clickHandler}>확인</button>
        <h2>이름 : {username}</h2>
        <h2>주소 : {address}</h2>
        </>
    )
}