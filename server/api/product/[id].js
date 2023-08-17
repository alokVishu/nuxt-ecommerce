export default defineEventHandler(async (event) => {
  const {id} = event.context.params
  const response =  $fetch(`https://fakestoreapi.com/products/${id}`)
  return response
})