class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <a href="index.html" class="logo">C<box-icon type='solid' name='virus' animation='spin' color='#083AA9'></box-icon></i>VID-19 UPDATE</a>
        `;
    }
}

customElements.define('nav-bar', Navbar);