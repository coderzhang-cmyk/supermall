import axios from 'axios'

export function request123(config) {
  const instance123 = axios.create({
    baseURL: 'http://123.27.32.32:8000'
  })
  instance123.interceptors.request.use((config) => {
    return config
  }, (err) => {
    console.log(err);
  })
  instance123.interceptors.response.use((res) => {
    return res.data
  }, (err) => {
    console.log(err);
  })

  return instance123(config)
}

export function request152(config) {
  const instance152 = axios.create({
    baseURL: 'http://152.136.185.210:8000'
  })
  instance152.interceptors.request.use((config) => {
    return config
  }, (err) => {
    console.log(err);
  })
  instance152.interceptors.response.use((res) => {
    return res.data
  }, (err) => {
    console.log(err);
  })

  return instance152(config)
}
