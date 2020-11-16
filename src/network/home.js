import { request123,request152 } from './request'
export function getHomeMultidata() {
  return request123({
    url: '/home/multidata',
    method: 'get'
  })
}

export function getHomeGoods(type, page) {
 return request152({
    url: '/api/w6/home/data',
    method: 'get',
    params: {
      type,
      page
    }
  })
}
