import NoSsr from 'vue-no-ssr'

// leave the export, even if you don't use it
export default ({ Vue }) => {
  Vue.use(NoSsr)
  Vue.component('no-ssr', NoSsr)
}
