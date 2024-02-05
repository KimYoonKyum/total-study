import {useRecoilState} from "recoil";
import {countState} from "../states";

export default function Counter() {
    const [count, setCount] = useRecoilState(countState)
    const onPlusCount = ()=> {
        const newCount = count + 1
        setCount(newCount)
    }
    const onMinusCount = ()=> {
        const newCount = count - 1
        setCount(newCount)
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={onPlusCount}>+</button>
            <button onClick={onMinusCount}>-</button>
        </div>
    )
}