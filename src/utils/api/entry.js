import axios from 'axios';
const baseURL =
  'https://cors-anywhere.herokuapp.com/https://sylphrena.herokuapp.com/api/';

const server = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  'Access-Control-Allow-Origin': '*'
});

export const api = {
  list: () => {
    return server.get('entry/');
  },
  create: inputData => {
    return server.post('entry/', inputData);
  },
  retrieve: id => {
    return server.get(`entry/${id}`);
  },
  update: (id, inputData) => {
    return server.put(`entry/${id}`, inputData);
  },
  delete: id => {
    return server.delete(`entry/${id}`);
  }
};
