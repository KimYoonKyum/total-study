import './App.css'
import Post from "./components/Post.jsx";

function App() {
  return (
    <main>
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
}
// <--- component. 리액트 앱을 빌드한다는 것은 컴포넌트를 빌드 한다는 것이고, 컴포넌트는 jsx 코드를 반환 하는 함수이다.
// 이런 컴포넌트들을 조합해서 복잡한 ui를 만든다. 그게 바로 리액트 앱
// cra로 만든 프로젝트에서는 component를 만들때 확장자가 .js여도 동작하지만 vite로 만든앱에서는 .jsx로 생성해야한다.
// 컴포넌트는 반드시 대문자로 시작하도록 만들어야한다. 안그러면 기본 html 요소로 간주해서 에러가 난다.
//
export default App
