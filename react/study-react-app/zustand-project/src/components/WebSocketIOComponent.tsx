import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {io} from "socket.io-client";

export default function WebSocketIOComponent() {
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
    useEffect(()=>{
        const socket = io('http://localhost:4001');
        socket.on('connect',()=> {
            console.log('서버와 연결되었습니다.')
        })
        socket.on('disconnect',()=>{
            console.log('연결이 끊어졌습니다.');
        })

        socket.on('message', (data) => {
            const responseData = JSON.parse(data);
            setStatusText(responseData.data);
            setResponseCount(responseData.count);
            console.log('서버로 부터 받은 응답 : ',responseData)
            if(responseData.type === 'GET_SESSION_STATUS' && responseData.data === 'ERROR') {
                setIsNormal(false)
                socket.close()
                return;
            }
        })
        return () => {
            socket.close()
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
