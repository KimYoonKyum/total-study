``` recoil ```
* 문서에 보면, 방향 그래프를 정의하고 react 트리에 붙인다함. 
* 상태 변화는 뿌리(atoms) 에서 부터 순수함수를 거쳐 컴포넌트로 흐른다함.
* 전역 상태 트리가 있다는 소리?

* 공유 상태(전역상태 같음)도 내부상태(local state) 처럼 간단하게 사용할 수 있도록 get/set을 통해 접근가능함
* 동시성 모드(Concurrent Mode)를 비롯한 다른 리액트 기능들과 호환됨
  * 동시성? 리액트 18에서 도입된 기능이다. 다음 뷰를 렌더링 하는 동안 현재뷰의 반응성을 유지할 수 있도록 렌더링 프로세스를 재작업 하는 것
  * 프로그램을 독릭적으로 실행될 수 있는 여러 조작으로 나눠서 구조화 하는 방법
  * 자바스크립트는 싱글스레드 언어 이기 때문에 여러 작업을 번갈아 가면서 빠르게 수행하는 것으로 구현되었다
  * 특정 state가 변경되었을 때, 현재 UI 유지하고 변경되야할 UI를 동시에 준비하고 준비중인 ui의 렌더링 단계가 특정 조건에 부합하면 바로 업데이트 됨
  * 사용법은 main.tsx에서 render 대신에 createRoot 사용
* 코드분할이 쉬워짐, 코드가 간결함

* 문법들
  * atom이라는 상태 단위가 있고 구독과 업데이트가 가능함. atoms는 런타임에도 생성 가능함. 대신에 고유한 키로 상태를 구분해야함
    * vue에서 사용하던 동적으로 store 할당했다 해제했다가 가능한듯
  * 컴포넌트간 상태 공유 가능
  * selectors -> atoms나 다른 selectors를 입력으로 받는 순수함수. 상위의 atoms나 selectors가 업뎃되면 하위의 selectors 함수도 다시 실행
    * 뷰의 computed 같은 역할, 파생된 상태를 나타냄
    * 여러 컴포넌트가 하나의 상태를 구독할 때, selectors를 써서 get/set을 사용하면됨. 원본 데이터는 그대로 놔두고
  * useRecoilValue -> atoms 값만 얻어옴
  * useSetRecoilState -> atoms 변경하는 set 함수 리턴
  * useRecoilState -> get/set 함수 리턴
  * recoil은 비동기 처리를 하기 위해서 주로 selector 안에서 비동기 코드를 작성하여 처리하는데 이 selector를 사용하기 위해서는 useRecoilValue를 사용해야함.
    * 그런데, 컴포넌트가 마운트 되기 전에 상태를 불러와서 Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead
    * 위 같은 에러가 발생할 수 도 있다. 그래서 recoil 문서를 보면 react의 suspense와 함께 사용하라고 예시가 안내되어 있다. 약간 자유도 떨어지는듯?
    * suspense 안쓰고 사용할 방법 있을거 같은데 찾아봐야함
  * family 문법
    * atomsFamily -> 동일한 상태로 부터 파생되면서 parameter를 받는데 그 파라미터 값은 키값이 된다. 키값이 달라지면 동일한 상태에서 파생됫더라도 각기 다른 상태를 가질수 있다.
    * selectorFamily -> selector와 동일한 기능을 하지만 parmeter를 받아서 사용할 수 있다. 그리고 atomsFamily와 비슷하게 동작한다.


* 여기 까지 써보니, 
  * 컴포넌트와 비즈니스 로직 분리가 힘들다. 
  * 이런 생각 한 사람들 꽤있는듯. 컴포넌트 중심 설계냐, 데이터 중심 설계냐로 나뉘는듯.
  * redux와 zustand를 사용한다면 데이터 중심으로 설계해나가는 앱이 될것이고, jotai나 recoil을 사용하면 컴포넌트 중심으로 설계해 나가는 앱이 될것이다.
  * 코드가 간결하긴 하다 확실히
  * 비동기 처리도 쉽게 처리 가능한거 같음. api 호출에 대한 상태값들도 구현되어있어 쉽게 접급 가능. 그러나 여러 레퍼런스 찾아보면 주로 recoil로 상태관리하고 비동기 처리는 react query로 하는 사람들이 많음
  * 문서에는 비동기 처리시 suspense 같이 사용하라고 나와 있지만, 특정 훅함수를 통해서 suspense 사용안하고 구현 가능
  * 비동기 처리할 때 selector 함수를 사용하는데, 자동으로 캐싱 기능을 제공해서, 캐싱이 필요하지 않은 상황에서는 추가적으로 trigger같은 것을 만들어주긴해야한다. -> 이런 이유들 때문에 rq 쓰는듯?
  * 아직 devTool이나 비동기 처리시 필요한 일부 기능이 완성되어 있지 않고 현재 개발중이라는 상태로 문서에 나와있음
  * 마지막 2023.03에 마지막 0.7.7 버전이 릴리즈됨. 업데이트 속도가 느린거 같음

