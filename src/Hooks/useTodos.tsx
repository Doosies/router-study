import { ChangeEvent, FormEvent, useState } from "react";
import useAddTodo from "./useAddTodo";

export default function useTodos() {
    const [value, setValue] = useState('');
    const addTodo = useAddTodo();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }
    return {value, onChange, onSubmit};
}