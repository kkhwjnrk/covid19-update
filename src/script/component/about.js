class About extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="about-img">
                <img src="https://i.ibb.co/2cnQttV/hero.jpg" alt="">
            </div>
            <div class="about-text">
                <span>Data update Covid-19 di Indonesia</span>
                <h3>#AyoPakaiMasker</h3>
                <p>Bersama-sama kita bisa melindungi diri dan melindungi sesama dan selamat dari wabah Covid-19. Kita bisa atasi wabah lebih cepat dengan aksi yang tepat.</p>
                <a href="https://covid19.go.id/id" target="_blank" class="btn">Informasi Lengkap</a>
            </div>
        `;
    }
}

customElements.define('about-content', About);