import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../modules/todos";

export default function useAddTodo() {
    const dispatch = useDispatch();
    return useCallback( (text: string) => 
        dispatch(todosActions.addTodo(text))
    , [dispatch]);
}