import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
export class SimpleGreeting extends LitElement {
    static properties = {
        name: {},
    }
    static styles = css`
        :host {
          color: blue;
        }
    `;
    constructor() {
        super();
        this.name = 'World'
        console.log(this.name)
    }

    render() {
        return html `<p> Hello, ${this.name}</p>`
    }
}

customElements.define('simple-greeting', SimpleGreeting)