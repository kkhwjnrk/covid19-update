class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <p>&#169; 2022 Kukuh Wijanarko | Sumber: <a href="https://data.covid19.go.id/public/index.html">data.covid19.go.id</a></p>
        `;
    }
}

customElements.define('footer-content', Footer);