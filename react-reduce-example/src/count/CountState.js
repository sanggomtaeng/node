import { useReducer } from 'react';

function countReducer(counts, action) {
    if(action.type === 'up'){
        return counts + 1;
    } else if(action.type === 'down') {
        return counts - 1;
    } else if(action.type === 'reset') {
        return 0;
    } 
}

export default function App() {
    const [counts, dispatch] = useReducer(countReducer, 0);

    function down() {
        dispatch({
            type: 'down'
        })
    }

    function up() {
        dispatch({
            type: 'up'
        })
    }

    function reset() {
        dispatch({
            type: 'reset'
        })
    }

    return(
        <div>
            <button type='button' onClick={up}>up</button>
            <button type='button' onClick={down}>down</button>
            <button type='button' onClick={reset}>reset</button>
            <span>{counts}</span>
        </div>
    )
}