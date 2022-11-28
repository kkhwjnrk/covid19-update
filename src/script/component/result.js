class Result extends HTMLElement {
    set dataResult(data){
        this._dataResult = data;
        this.render();
    }
    
    render() {
        const date = new Date(this._dataResult.total.lastUpdate);
        const month = ['Januari','Februari','Maret','Aprl','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

        const numFormat = (x) =>{
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
        }
        
        this.innerHTML = `
            <div class="result-text">
                <h3>Indonesia</h3>
                <p>Update terakhir: ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}</p>
            </div>
            <div class="result-box">
                <div class="box">    
                    <img src="https://i.ibb.co/tPB35mg/icon1.png" alt="" class="icon1">
                    <p>Terkonfirmasi</p>
                    <span>+${numFormat(this._dataResult.penambahan.positif)} Kasus</span>
                    <h3>${numFormat(this._dataResult.total.positif)}</h3>
                </div>
                <div class="box">
                    <img src="https://i.ibb.co/SdJQTgd/icon2.png" alt="" class="icon2">
                    <p>Sembuh</p>
                    <span>+${numFormat(this._dataResult.penambahan.sembuh)} Kasus</span>
                    <h3>${numFormat(this._dataResult.total.sembuh)}</h3>
                </div>
                <div class="box">
                    <img src="https://i.ibb.co/KmsF7ww/icon3.png" alt="" class="icon3">
                    <p>Meninggal</p>
                    <span>+${numFormat(this._dataResult.penambahan.meninggal)} Kasus</span>
                    <h3>${numFormat(this._dataResult.total.meninggal)}</h3>
                </div>
            </div>
        `;
    }
}

customElements.define('result-content', Result);