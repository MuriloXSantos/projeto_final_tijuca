import axios from "axios"

const url_fixa = axios.create({
  baseURL: '192.168.10.202:3004',
})
export default url_fixa