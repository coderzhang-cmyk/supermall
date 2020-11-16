import Toast from './Toast'

const toast = {
  install(Vue) {
    // 将Toast组件中的模板挂载到页面上

    const constructorToast = Vue.extend(Toast)
    const toast = new constructorToast()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    

    // 将toast组件挂载到vue原型上面
    Vue.prototype.$toast = toast
  }
}

export default toast