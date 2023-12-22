export default async function handler(request, response) {

  const { id } = request?.query

  const user = await (await fetch(`https://dummyjson.com/users/${id}`)).json();

  response.status(200).send({
    "message": `users with detail ${id}`,
    "data": user
  })

}