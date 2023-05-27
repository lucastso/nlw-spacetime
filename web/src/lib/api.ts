import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://168.205.203.238:3333',
})
