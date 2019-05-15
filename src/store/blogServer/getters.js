/*
export function someGetter (state) {
}
*/
export function getPost (state) {
  return (id) => {
    return state.blogList.filter(todo => {
      return todo.id + '' === id
    })
  }
}
