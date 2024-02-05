import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
export class CommonDropDown extends LitElement {
    static properties = {
        dataList: {},
    }
    static styles = css`
        .dropdown {
          border: 1px solid red;
        }
    `;
    constructor() {
        super();
        this.dataList = []
    }

    render() {
        return html `
            <div class="dropdown">
                <button>선택</button>
            </div>
        `
    }
}

customElements.define('common-dropdown', CommonDropDown)