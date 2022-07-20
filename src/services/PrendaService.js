import axios  from 'axios';

export class PrendaService{
    baseUrl = 'http://localhost:8090/tienda/api/prendas/';

    getAll() {
        return axios.get(this.baseUrl + 'all').then(res => res.data);
    }
}