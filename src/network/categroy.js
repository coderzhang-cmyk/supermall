
import { request152 } from './request'

export function getCategroyTitles() {
  return request152({
    url: '/api/q1/category'
  })
}

export function getSubcategory(maitKey) {
  return request152({
    url: '/api/q1/subcategory',
    params: {
      maitKey
    }
  })
}
