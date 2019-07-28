import axios from 'axios'
import { requestAPI, requestURL } from './address'

const token = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxMDA4IiwiaXNzIjoieGlheWUiLCJ1aWQiOjEwMDgsImdyb3VwIjoibmFyY2lzc3V4IiwiZXhwIjoxNTcyOTUwOTQwfQ.la6Pxdu8Ruh7SjlpcqD1R03WG4lXn4UG0C5UOXNT1t37hAIoXoTZw9nEsSNR0zLX87ztd93oJpjHoZHTqOEAnv4b-xujT1Bpr8MUkU0ICJtM3P_w7CX0DzZBD6TcKX9Ux_se4Ugn4JMJfgm0xPStAKvDbSsU69M-RPvXUcWAO6xKKZkYw-rD3Jz1BpQa_1kvfd-0EWocr3UYKYb-VAbc6alP6fHmGWqrJuQieMBz-qUddHa5tQ6kLxawDlGNH931aKu_-b_Hwa_g5P1ww02HAEmevri3gPoHs3oMeVPRM8ifXxF0YkC57V9aRkhQ0iqC8jLUXP4YBRuQ4EjG1821Yg'

export default (jwtToken = '') => {
  const axiosInstance = axios.create({
    baseURL: requestURL
  })
  if (jwtToken !== '') {
    axiosInstance.defaults.headers.common['Authorization'] = jwtToken
  } else {
    axiosInstance.defaults.headers.common['Authorization'] = token
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
