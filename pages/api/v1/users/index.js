
export default async function handler(request, response) {

  const users = await (await fetch("https://dummyjson.com/users")).json();

  return response.status(200).json({
    "message": "list all user",
    "data": users
  })

}