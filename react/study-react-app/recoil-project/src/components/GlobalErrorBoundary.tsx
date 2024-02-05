import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class GlobalErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        console.log(_)
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <div>Sorry.. there was an error</div>;
        }

        return this.props.children;
    }
}

export default GlobalErrorBoundary;

// error boundary가 감지 못하는 경우
// 이벤트 핸들러
// try/catch문을 이용해 포착하면된다.
// 비동기적 코드 (setTimeout, requestAnimationFrame콜백)
// 서버 사이드 렌더링
// 하위에서가 아닌 Error Boundary 자체에서 발생하는 에러