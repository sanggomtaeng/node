const Student = (props)=>{
    const {no, name} = props.std;
    return(
        <div>
            <h3>학번 : {no}</h3>
            <h3>이름 : {name}</h3>
        </div>
    )

}

export default Student;