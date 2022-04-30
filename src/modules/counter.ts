const INCREMENT = 'counter/INCREMENT' as const;
const DECREMENT = 'counter/DECREMENT' as const;
const INCREMENTBY = 'counter/IECREMENTBY' as const;

// 액션 생성 함수
export const counterActions = {
    increment: () => ({type: INCREMENT}),
    decrement: () => ({type: DECREMENT}),
    incrementBy: (diff: number) => ({type: INCREMENTBY, payload: diff}),
};

// 액션 객체의 타입
type Actions = 
    | ReturnType<typeof counterActions.increment>
    | ReturnType<typeof counterActions.decrement>
    | ReturnType<typeof counterActions.incrementBy>;

// 카운터 리듀서 값 타입
export type CounterState = Readonly<{
    someExtraValue: string,
    count: number,
}>;

const initialState: CounterState = {
    someExtraValue: 'hello',
    count: 100,
}


export default function reducer(state: CounterState = initialState, action: Actions): CounterState {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case INCREMENTBY:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state;
    }
}