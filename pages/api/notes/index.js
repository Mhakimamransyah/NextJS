// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(request, response) {

  if (request.method === "GET") {
    const res = await fetch(process.env.NOTES_REMOTE_LINK);
    const data = await res.json();
    response.json(data);
  }

  if (request.method === "POST") {

    const res = await fetch(process.env.NOTES_REMOTE_LINK, {
      method: "POST",
      body: request.body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    const data = await res.json();
    response.status(res.status).json(data);
  }

}
