import axios from 'axios'
const api = axios.create({
  baseURL: 'http://www.altoqi.com.br/wp-json/wp/v2/'
})

export default api;