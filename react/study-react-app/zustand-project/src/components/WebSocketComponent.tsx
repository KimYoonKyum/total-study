import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

export default function WebSocketComponent() {
    const [reset, setReset] = useState(false);
    const [isNormal, setIsNormal] = useState(true);
    const [statusText, setStatusText] = useState('');
    const [responseCount, setResponseCount] = useState(0);

    const onReConnect = () => {
        setIsNormal(true);
        setStatusText('');
        setResponseCount(0);
        setReset(!reset);
    }

    useEffect(()=> {
        //웹소켓 객체 생성
        const socket = new WebSocket('ws://localhost:8080');

        // 연결 생성될때 호출 함수
        socket.onopen = () =>{
            console.log('서버와 연결되었습니다.')
            const requestData = {
                data: 'Connect to Server',
                type: 'INIT_CONNECT'
            }
            socket.send(JSON.stringify(requestData));
        };

        //메세지 받을때 실행되는 함수
        socket.onmessage = (event: MessageEvent) => {
            const responseData = JSON.parse(event.data);
            console.log(`서버로 부터 받은 응답 : ${responseData.data}`);
            setStatusText(responseData.data);
            setResponseCount(responseData.count)
            if(responseData.type === 'GET_SESSION_STATUS' && responseData.data === 'ERROR') {
                setIsNormal(false)
                socket.close();
                return;
            }
        };

        // 에러 발생할 때 실행되는 함수
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        socket.onerror = (error: Error) => {
            console.log(`서버로 부터 받은 에러 응답 : ${error.message}`);
        };

        // 연결이 끊어질때 실행되는 함수
        socket.onclose = (event: CloseEvent) => {
            if (event.wasClean) {
                console.log(`연결이 종료되었습니다. 코드=${event.code},이유=${event.reason}`);
            } else {
                console.log('연결이 끊어졌습니다.');
            }
        };
        return ()=> {
            //컴포넌트 언마운트시 socket close
            socket.close();
        }
    },[reset])

    return (
        <div className="websocket_component">
            <div className="traffic-light">
                {!isNormal && <div className="light red"/>}
                {isNormal && <div className="light green"/>}
            </div>
            <h2 className="title">Web Socket Test</h2>
            <h3 className="status_text">{statusText}</h3>
            {!isNormal && responseCount >= 1 && <Button onClick={onReConnect}>Try to Connect</Button>}
        </div>
    );
}
