import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,// <-- strictMode는 추우에 리액트가 버전업 되었을때 작성한 코드가 유효하지 않는지 알려줄 수 있도록 사용하는 것
)

// vue 에서는 strict mode vuex 밖에 없는것 같다..