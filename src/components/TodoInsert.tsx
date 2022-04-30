// import React, {useState} from 'react';
import useTodos from '../Hooks/useTodos';


const TodoInsert = () => {
    const {value, onChange, onSubmit} = useTodos();

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default TodoInsert;