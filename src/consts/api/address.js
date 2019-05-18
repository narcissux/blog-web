// api请求地址
// const requestURL = `http://127.0.0.1:8000`
const requestURL = `http://47.101.44.16:8000`

const requestAPI = {

  blog: {
    list: () => `article/list`,
    retrieve: (uuid) => `article/${uuid}/`,
    create: () => `article`,
    destroy: (uuid) => `article/${uuid}/`,
    update: () => `article`
  }
}

export { requestURL, requestAPI }
