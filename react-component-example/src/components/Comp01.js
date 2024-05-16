function Comp(){
    const style = {
        color: "skyblue",
        backgroudColor : "red",
        fontSize : "30px"
      }
    const modalYn = true;
    const name = "홍길동"


    return(
    
        <>
        {modalYn ? <div>모달</div> : null}
        {name === "홍길동"? <div>홍길동입니다,</div> : <div>홍길동이아닙니다,</div>}
        {name && <div>홍길동입니다.</div>}
        {name || <div>홍길동이아닙니다.</div>}
        <h2 style={style}>hello</h2>;
        </>
    )
    
}

export default Comp;

