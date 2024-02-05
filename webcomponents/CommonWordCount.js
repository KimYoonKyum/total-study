class CommonWordCount extends HTMLParagraphElement {
    constructor() {
        //항상 super 먼저 생성
        super();
        //요소 기능은 여기에
        const wcParent = this.parentNode
        console.log(wcParent)
        function countWords(node) {
            const text = node.innerText || node.textContent
            return text.trim().split(/\s+/g).filter(str=> str.trim().length > 0).length
        }
        const count = `words: ${countWords(wcParent)}`
        const shadow = this.attachShadow({mode: "open"})
        const text = document.createElement("span")
        text.textContent = count
        shadow.appendChild(text)

        setInterval(function () {
            text.textContent = `Words: ${countWords(wcParent)}`;
        }, 200);
    }

    connectedCallback() {
        console.log('create')
        // custom element가 dom에 추가될 때마다 호출되는 함수
    }

    attributeChangedCallback() {
        // custom element의 attr이 추가/변경/삭제 될때 호출되는 함수
    }
}

// 새로운 요소 정의
customElements.define("common-word-count", CommonWordCount, { extends: "p" });