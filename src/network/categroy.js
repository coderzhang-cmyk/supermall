
import { request152 } from './request'

export function getCategroyTitles() {
  return request152({
    url: '/api/w6/category'
  })
}

export function getSubcategory(maitKey) {
  return request152({
    url: '/api/w6/subcategory',
    params: {
      maitKey
    }
  })
}