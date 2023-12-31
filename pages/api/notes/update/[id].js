export default async function handler(request, response) {
  if (request.method == "PATCH") {
    const { id } = request?.query;
    const res = await fetch(process.env.NOTES_REMOTE_LINK + "/update/" + id, {
      method: "PATCH",
      body: request.body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    const data = await res.json();
    response.status(res.status).json(data);
  }

}
