export default async function handler(request, response) {

  if (request.method == "DELETE") {
    const { id } = request?.query;
    const res = await fetch(process.env.NOTES_REMOTE_LINK + "/delete/" + id, {
      method: "DELETE",
    })
    const data = await res.json();
    response.status(res.status).json(data);
  }

}
