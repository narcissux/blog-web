import request from 'src/consts/api/interface'
const token = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxMDA4IiwiaXNzIjoieGlheWUiLCJ1aWQiOjEwMDgsImdyb3VwIjoibmFyY2lzc3V4IiwiZXhwIjoxNTcyNTU4ODE1fQ.MV35tztM5yofVVIdHFMikeS3OzSW3aR1WmWZjbiyh1yncJ4yCPxXWT2RDAuPVSzTyWbPVZmoQT32yujBLmw9Jn3HOJeaQvB1RosV3e7Q5nxjgh6xJqQgTBEuS3HjRRNBoShN-BthFkghxOTCa2sUidI9BXZNh768gH0ZfgM-g-0evMOThg4Zbk4kxy7DA3frhOMzlD29kKvZ67QtDLqXcbTlttK2-Q1Mf6jt3Nycm4eVITZqBFaZsCJ7VWxHMlE6m_U6eLsaKCgtZt_HoRPOjs1iPswejLBJRAtoB8hjy0JZf-u6O_3X1MdZBQBXlOJxBuUrJeB16WKwZmgMeJIaQA'
export function listBlog ({ commit, rootState }, params) {
  return new Promise(async (resolve, reject) => {
    await request(token).blogRequest.list(params)
      .then(resp => {
        commit('setBlogCount', resp.data.data.length)
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
