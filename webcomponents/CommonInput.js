class CommonInput extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const label = document.createElement('label');
        label.innerHTML = '이름';
        this.appendChild(label);
        const input = document.createElement('input');
        this.appendChild(input);
    }
    static get observedAttributes() {
        return ['name']
    }
    attributeChangedCallback() {
        this.render()
    }
}
customElements.define('common-input', CommonInput)