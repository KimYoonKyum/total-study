import './App.css'
import {RecoilRoot} from "recoil";
// import Counter from "./components/Counter.tsx";
// import CustomInput from "./components/CustomInput.tsx";
import UserListWrap from "./components/UserListWrap.tsx";
import GlobalErrorBoundary from "./components/GlobalErrorBoundary.tsx";

function App() {
  return (
      <RecoilRoot>
          <GlobalErrorBoundary>
              {/*<Counter />*/}
              {/*<CustomInput />*/}
              <UserListWrap />
          </GlobalErrorBoundary>
      </RecoilRoot>
  )
}

export default App
