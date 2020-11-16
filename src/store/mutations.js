import { ADD_COUNT, ADD_COMMODITY, REVISE_CHECKED, FOLLOW_SELECT } from './mutations.type'

export default {
  [ADD_COUNT](state, queryCommodity) {
    queryCommodity.count += 1
  },
  [ADD_COMMODITY](state, payload) {
    payload.checked = true
    state.commodity.push(payload)
  },
  // 修改购物车中的选中情况
  [REVISE_CHECKED](state, payload) {
    state.commodity.map((item) => {
      if (item.iid === payload.iid) {
        item.checked = payload.checked
      }
    })
  },
  // 点击全选修改commodity中的checked属性
  [FOLLOW_SELECT](state, payload) {
    state.commodity.forEach((item) => {
      item.checked = payload;
    });
  }
}