import axios from 'axios'

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: axios })

    Vue.prototype.$snipeit = axios.create({
      // baseURL: "http://ramnode1.ashdevtools.com:8080/api/v1/",
      // baseURL: "http://192.168.1.171:83/api/v1/",
      // baseURL: "http://47.219.112.177:8000/api/snipeit/",
      baseURL: 'http://nr.ashdevtools.com/api/snipeit/',
      // baseURL: "http://localhost:1880/api/snipeit/",
      timeout: 1000,
      headers: {
        Authorization:
          'Bearer ' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAxOWRkM2VmODU4ZDFjYTNmODgxYjU1MmY0ZjVmYmJkNTgzYjc0MGI1YWU0YWM4OGJmZWRjZGE4ODNiZjY5ZjZiNzZlMWE4Yjg4NjgyNmMzIn0.eyJhdWQiOiI1IiwianRpIjoiMDE5ZGQzZWY4NThkMWNhM2Y4ODFiNTUyZjRmNWZiYmQ1ODNiNzQwYjVhZTRhYzg4YmZlZGNkYTg4M2JmNjlmNmI3NmUxYThiODg2ODI2YzMiLCJpYXQiOjE1MjExMjE4NDgsIm5iZiI6MTUyMTEyMTg0OCwiZXhwIjoxNTUyNjU3ODQ4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VT8U9TsjYNr63cvXhSCDVTrY5gtLmUh9mnIN6Ln_vYttQQ9bJ_o1yrCH4RRl9wbfGAhj6wjkI64tim8xc6lo_X1kIaXY1j5Za31f8-9Fgd6lG5HMkNy8iXP5safSAmfWfPEOxCX_em-RVtQRfVf8vOxqOrXtzbnGZRwPoDcD_35qXZ8gmcej-ZOglLi7KZfhsQeKVbdRG5IE2z4NoMByUQm-kIyk_WYGVEeommcqumwgtkYIsEsiQzQiZkAiKEST1zzzVctKOU8fgKRbD_MzUer21SfgU6A74duXh1DswOO7FwFqGE2g3SFlqDv5ajcX8iDJazcCl-HclCOLNCHJKQolljTmCexBq-5c7x2UEmyuWNFkjGbGj8qzVcVmPGcz7EH3vBnEzKuRlwrunlaK9eZFI_RaHSGS8kM0XALBteqTgybMjLTejSjliB1ft2BQEh9JVH9mdsdL_2R0IYpKDWJK4LEE5_TnLc88Jj-BvfEp3h9iqv1HTEzmyTVBUjkIoJYrMzI5p3MMwJ6fP5TWvwP3le3dwBn9XxsOZHGOuxdVFNImmSJQNzwUBhL7MGLdBMq8x6hFjFVFy3dT6ySIIxdnw25YMG-w1dRUPa_ueCalRoAlwklcLmLKrkYSnrG1KRhXMLczvet1-l3mkOHOMd1mXFqFpl0x-JW9g4hjYpw',
        Accept: 'application/json'
      }
    })
  }
}
