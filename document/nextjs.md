``` next js ```
* 풀스택 리액트 프레임워크
* 서버에서도 동작 가능 하게 하려면 여러가지 복잡한 기능들이 필요함 
  * route 설정이나 데이터 페칭 등등 여러가지 기능들을 직접 설정하는 아니라 nextjs를 통해서
* 장점 : 풀스택 앱을 구축하는 것, 파일 시스템 기반 라우팅(별다른 설정 필요없음), 서버에서 완성된 html 그 자체가 클라이언트로 전달됨
* nextjs 앱을 페이지 소스보기로 보면 실제 렌더된 페이지의 태그나 값들이 들어잇는게 보이고 SPA는 그렇지 않음
* app router vs page router
  * 어떤 것을 선택해도 상관 없긴 한데, 현재는 app router 권장. page router가 더 오래되고 안정적이긴함
  * app router가 안정적이라고 하지만 아직 새로운 방식으로 부분적 버그가 있긴함. 그렇지만 리액트 서버기능이나 새로운 기능을 사용하기 위해서 써야함.

``` react ```
똑같은 앱을 순수 자바스크립트로 만들면 명령형 식으로 작성하게됨
리액트를 쓰면 선언형으로 사용가 화면을 표시할 ui를 작성하고 이벤트리스너에 함수 추가 하거나 동적인 html 코드를 추가
main.jsx 가 브라우저 진입시 제일 먼저 실행