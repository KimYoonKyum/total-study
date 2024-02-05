import { useRecoilValue} from "recoil";
import { textSelector} from "../states";

export default function Custom() {
    const text = useRecoilValue(textSelector)

    return (
        <div>
            {text}
        </div>
    )
}