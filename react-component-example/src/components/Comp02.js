import Student from "./Student"
const std = [{no:1, name:"홍길동"},
            {no:2, name:"김기자"}]
const list = std.map(person =>
    <Student key={person.no} std={person}></Student>
)
const Comp = ()=>{
    return (
    <div>
        {list}
    </div>
    )
}

export default Comp