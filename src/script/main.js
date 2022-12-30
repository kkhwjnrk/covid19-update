import 'boxicons';
import './component/navbar.js';
import './component/about.js';
import './component/result.js';
import './component/footer.js';
import Swal from 'sweetalert2';

const main = () => {
    fetch(`https://apicovid19indonesia-v2.vercel.app/api/indonesia/more`)
        .then((response) => {
            return response.json();
        })
        .then((covidJson) => {
            const result = document.querySelector('result-content');
            result.dataResult = covidJson;
        })
        .catch(() => showMessage());
    
    const showMessage = (message) => {
        Swal.fire(
            'Oops...',
            'Data tidak ditemukan!',
            'warning'
        )
    };
};

export default main;
