import axios from 'axios'

const api = axios.create( { baseURL: "http://localhost:3000/api"} )

export default api

// "http://localhost:3001/api"
// https://rocketseat-node.herokuapp.com/api