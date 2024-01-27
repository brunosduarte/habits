import axios from "axios";

export const api = axios.create({
  baseURL: 'http://habits-bsd.vercell.app'
})