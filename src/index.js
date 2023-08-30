import { createUnplugin } from 'unplugin'
export default createUnplugin((options) => {
  return {
    name: 'vite-plugin-vitepress-img-auto-tag',
    enforce: 'pre',
    transformInclude(id) {
      return id.endsWith('.md')
    },
    transform(code) {
      // 给图片加上需要的放大查看的标签(可自定义，插件传参)，若插件不给传参，默认值是zoom-able
      const regex = new RegExp(/.(png|jpg|jpeg|gif)\)/g)
      const code1 = code.replace(regex, (match, p1, p2) => {
        return `${match}{${options?.label || 'zoom-able'}}`
      })
      return code1
    },
  }
})