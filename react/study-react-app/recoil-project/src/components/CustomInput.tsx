import {useRecoilState, useRecoilValue} from "recoil";
import {ChangeEvent} from "react";
import {textCountState, textState} from "../states";

export default function CustomInput() {
    const [text, setText] = useRecoilState(textState)
    const textCount = useRecoilValue(textCountState)
    const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setText(e.target.value)
    }

    return (
        <div>
            <input type={'text'} value={text} onChange={onChange} />
            <br />
            value:{text}
            <br />
            count:{textCount}
        </div>
    )
}