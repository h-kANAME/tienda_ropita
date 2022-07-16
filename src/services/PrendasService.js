import axios  from 'axios';

const LISTA_PRENDAS_REST = 'http://localhost:8090/tienda/api/prendas/all';

class PrendasService {
    getPrendas () {
    return axios.get(LISTA_PRENDAS_REST);
    }
}

export default new PrendasService();