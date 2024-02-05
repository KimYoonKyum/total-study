``` 구현하기 전에..```
* 웹 컴포넌트의 중요한 측면은 캡슐화. 캡슐화를 통해 마크업 구조, 스타일, 동작을 숨기고 페이지의 다른 코드로 부터 분리해서 독립적으로 사용되도록하는 것이 목표
* custom elements -> 사용자 정의 요소이고 커스텀 동작을 추가 할 수 있는 자바스크립트 api 
* shadow dom -> 메인 document dom 으로 부터 독립적으로 렌더링 되는 dom으로 도큐먼트 다른 부분이랑 충돌없이 사용가능
* template& slot -> 이 두개 엘리먼트는 렝더링 된 페이지에 나타나지는 않지만 custom elements를 통해서 여러번 재사용 가능이 가능하다.

``` 구현방법```
* 클래스 문법 사용하여 웹컴포넌트 기능을 명시하는 클래스 생성
* CustomElementRegistry.define() 메소드를 사용해 새로운 커스텀 엘리먼트 등록
* 필요한 경우 Element.attachShadow() 메소드 사용해 shadow DOM을 커스텀 엘리먼트에 추가
* 필요한 경우 template, slot을 사용해서 html 템플릿 정의하고 템플릿을 shadow DOM에 추가
* 실제로 필요한 곳에서 커스텀 엘리먼트 사용
* 두 가지 방법으로 사용 가능함. <popup-info> 이렇게 태그 처럼 사용하거나 <p is="word-count"/> is 속성을 사용하거나

``` shadow dom ```
* shadow dom은 숨겨진 dom 트리가 통상적인 dom 트리에 속한 요소에 부착될수 잇게함
* shadow root로 부터 시작되어 원하는 모든 요소안에 부착 가능
* shadow host: shadow dom이 부착되는 통상적인 dom 노드
* shadow tree: shaow dom 내부의 dom 트리
* shadow boundary: shadow dom이 끝나고, 통상적인 dom이 시작되는 장소
* shadow root: shadow 트리의 root 노드
* shadow dom 내의 노드들은 children을 append 하거나 style을 바꾸거나 등등 통상적인 dom 내에 잇는 노드들과 같이 조작이 가능하다. 그렇지만 shadow dom
내의 노드들을 조작한다 해서 통상적인 dom에 잇는 노드들이 영향을 받지 않는다.
* 