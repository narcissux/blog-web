import request from 'src/consts/api/interface'
const token = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxMDA4IiwiaXNzIjoieGlheWUiLCJ1aWQiOjEwMDgsImdyb3VwIjoibmFyY2lzc3V4IiwiZXhwIjoxNTcyOTUwOTQwfQ.la6Pxdu8Ruh7SjlpcqD1R03WG4lXn4UG0C5UOXNT1t37hAIoXoTZw9nEsSNR0zLX87ztd93oJpjHoZHTqOEAnv4b-xujT1Bpr8MUkU0ICJtM3P_w7CX0DzZBD6TcKX9Ux_se4Ugn4JMJfgm0xPStAKvDbSsU69M-RPvXUcWAO6xKKZkYw-rD3Jz1BpQa_1kvfd-0EWocr3UYKYb-VAbc6alP6fHmGWqrJuQieMBz-qUddHa5tQ6kLxawDlGNH931aKu_-b_Hwa_g5P1ww02HAEmevri3gPoHs3oMeVPRM8ifXxF0YkC57V9aRkhQ0iqC8jLUXP4YBRuQ4EjG1821Yg'
export function listBlog ({ commit, rootState }, params) {
  return new Promise(async (resolve, reject) => {
    await request(token).blogRequest.list(params)
      .then(resp => {
        commit('setBlogCount', resp.data.total)
        commit('setBlogList', resp.data.data)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function updateBlog ({ commit, rootState }, params) {
  return new Promise(async (resolve, reject) => {
    await request(token).blogRequest.update(params)
      .then(resp => {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function createBlog ({ commit, rootState }, params) {
  return new Promise(async (resolve, reject) => {
    await request(token).blogRequest.create(params)
      .then(resp => {
        console.log(params.body)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function retrieveBlog ({ commit, rootState }, params) {
  return new Promise(async (resolve, reject) => {
    await request(token).blogRequest.retrieve(params)
      .then(resp => {
        commit('setCurrentBlog', resp.data.data)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}
