// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(request, response) {

  if (request.method === "GET") {
    const { id } = request?.query;
    const res = await fetch(`${process.env.NOTES_REMOTE_LINK}/${id}`);
    const data = await res.json();
    response.json(data);
  }

}
