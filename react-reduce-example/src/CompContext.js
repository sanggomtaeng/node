import { createContext, useContext } from 'react';
const themeDefault = { border : '10px solid skyblue' }

//1단계 : 생성
const themeContext = createContext(themeDefault);

export default function App() {
    return (
        <div className="root">
            <h1>HELLO</h1>
            <themeContext.Provider value={ {border : '10px solid orange'} }>
            <Sub1></Sub1>
            </themeContext.Provider>
        </div>
    )
}

function Sub1() {
    return(
        <div>
            <h1>SUB1</h1>
            <Sub2></Sub2>
        </div>
    )
}

function Sub2() {
    return(
        <div>
            <h1>SUB2</h1>
            <Sub3></Sub3>
        </div>
    )
}

function Sub3() {
    //3단계 : 사용
    const theme = useContext(themeContext)
    return(
        <div style={theme}>
            <h1>SUB3</h1>
        </div>
    )
}