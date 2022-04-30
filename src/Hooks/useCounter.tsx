import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import {counterActions} from '../modules/counter';

export default function useCounter() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {dispatch(counterActions.increment())};
    const onDecrease = () => {dispatch(counterActions.decrement())};
    const onIncreaseBy = (num: number) => {dispatch(counterActions.incrementBy(num))};

    return{
        count, 
        onIncrease,
        onDecrease,
        onIncreaseBy,
    };
}
