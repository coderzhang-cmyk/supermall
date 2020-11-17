
import { request152 } from './request'

export function getCategroyTitles() {
  return request152({
    url: '/api/q2/category'
  })
}

export function getSubcategory(maitKey) {
  return request152({
    url: '/api/q2/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request152({
    url: '/api/q2/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
