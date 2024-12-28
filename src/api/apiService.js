import axios from 'axios'
import store from '../store/store.js'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  }
});

apiClient.interceptors.request.use(
  config => {
    const token = store.getters.getToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export function fetchUltimosLancamentos(){
  return apiClient.get('livros/ultimosLancamentosLoja');
}

export function fetchMaisVendidos(){
  return apiClient.get('livros/maisVendidos/');
}

export function fetchPesquisar(pesquisaTexto){
  return apiClient.get('livros/livroPorPesquisa/' + pesquisaTexto);
}

export function fetchDetalhesLivro(idLivro){
  return apiClient.get('livros/livroPorId/' + idLivro);
}

export function fetchDetalhesCombo(idCombo){
  return apiClient.get('combos/comboPorId/' + idCombo);
}

export function fetchTodosCombos(){
  return apiClient.get('combos/todosCombos/');
}

export function fetchRotaProtegida(){
  return apiClient.get('clientes/protegida/');
}


