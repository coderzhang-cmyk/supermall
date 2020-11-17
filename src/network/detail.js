import { request152 } from './request'

export function getDetail(iid) {
  return request152({
    url: '/api/q2/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request152({
    url: '/api/q2/recommend'
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, shopInfo) {
    // 标题
    this.title = itemInfo.title
    // 新价格
    this.newPrice = itemInfo.price
    // 旧价格
    this.oldPrice = itemInfo.oldPrice
    // 火热促销
    this.discountDesc = itemInfo.discountDesc
    //火热促销颜色
    this.discountBgColor = itemInfo.discountBgColor
    // 0:  销量 52"
    // 1: "收藏20人"
   // 2: "默认快递"
    this.columns = columns
    // 数组 7天无理由退货 "72小时发货" "退货补运费"及前面的图标
    this.services = shopInfo.services
  }
}
export class ShopInfo {
  constructor(shopInfo) {
    // logo
   this.shopLogo = shopInfo.shopLogo
   //店铺名字
   this.shopName = shopInfo.name
  //  销量
  this.cSells = shopInfo.cSells
  // 全部宝贝
  this.cGoods = shopInfo.cGoods
  // 描述相符"价格合理""质量满意"
  this.score = shopInfo.score
  // 店铺地址
  this.shopUrl = shopInfo.shopUrl
  }
}
