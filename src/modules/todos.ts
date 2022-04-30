

const ADD_TODO = 'todos/ADD_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;

export const todosActions = {
    addTodo: (text: string) => ({type: ADD_TODO, payload: text}),
    removeTodo: (id: number) => ({type: REMOVE_TODO, payload: id}),
    toggleTodo: (id: number) => ({type: TOGGLE_TODO, payload: id}),
};

type TodosAction = 
    | ReturnType<typeof todosActions.addTodo>
    | ReturnType<typeof todosActions.removeTodo>
    | ReturnType<typeof todosActions.toggleTodo>;

export type Todo = Readonly<{
    id: number;
    text: string;
    done: boolean;
}>;
type TodosState = Todo[];

const initialState: TodosState = [
    { id: 1, text: '자소서 쓰기', done: true },
    { id: 2, text: '코딩테스트 보기', done: false },
    { id: 3, text: '면접 보기', done: false }
];

let mextId = 4;

function reducer(state: TodosState = initialState, action: TodosAction): TodosState {
    switch(action.type) {
        case ADD_TODO:
            const nextId = mextId++;//Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: action.payload,
                done: false,
            });
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload ? {...todo, done: !todo.done} : todo
            );
        default:
            return state;

    }
}

export default reducer;