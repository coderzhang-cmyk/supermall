import { ADD_COUNT, ADD_COMMODITY } from './mutations.type'


export default {
  handleAddCart(context, payload) {
    return new Promise((resolve, reject) => {
      let queryCommodity = context.state.commodity.find((item) => {
        return item.iid === payload.iid
      })
      if (queryCommodity) {
        context.commit(ADD_COUNT, queryCommodity)
        resolve('商品数量加1')
      } else {
        payload.count = 1
        context.commit(ADD_COMMODITY, payload)
        resolve('商品加入购物车成功')
      }
      
    })

  }
}