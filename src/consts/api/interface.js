import axios from 'axios'
import { requestAPI, requestURL } from './address'

export default (jwtToken = '') => {
  const axiosInstance = axios.create({
    baseURL: requestURL
  })
  if (jwtToken !== '') {
    axiosInstance.defaults.headers.common['Authorization'] = jwtToken
  }
  return {
    blogRequest: {
      list: ({ page, size }) => {
        return axiosInstance({
          url: requestAPI.blog.list(),
          method: 'GET',
          params: {
            page: page,
            size: size
          }
        })
      },
      retrieve: async ({ uuid }) => {
        return axiosInstance({
          url: requestAPI.blog.retrieve(uuid),
          method: 'GET'
        })
      },
      update: async ({ id, content }) => {
        return axiosInstance({
          url: requestAPI.blog.update(),
          method: 'PATCH',
          data: { id, content }
        })
      },
      create: async ({ title, tags, categoryId, content, userId }) => {
        return axiosInstance({
          url: requestAPI.blog.create(),
          method: 'POST',
          data: { title, tags, categoryId, content, userId }
        })
      },
      destroy: async ({ uuid }) => {
        return axiosInstance({
          url: requestAPI.blog.destroy(uuid),
          method: 'DELETE'
        })
      }
    },
    categoryRequst: {
      list: () => {
        return axiosInstance({
          url: 'category/list',
          method: 'GET',
          params: {
          }
        })
      }
    }
  }
}
