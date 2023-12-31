import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notes/${context.params.id}`);
  const data = await res.json();
  return { props: { data } }
}

export default function NotesDetail({ data }) {

  const Layout = dynamic(() => import("... @/layout"));
  const router = useRouter();
  const { id } = useRouter()?.query;
  const [title, setTitle] = useState();
  const [description, setDesc] = useState();
  const notes = data?.data;

  const update = () => {
    fetch(`/api/notes/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        description: description
      })
    }).then(res => res.json()).then((data) => { router.back() }).catch(e => {
      alert("Error occured while updating");
    })
  }

  return (
    <Layout metaDescription={"All about notes detail"} metaTitle={"Notes detail"}>
      <div onClick={router.back} className="mt-3 mb-6 font-bold hover:cursor-pointer">
        <ArrowLeftIcon /> back
      </div>
      <FormControl>
        <div>
          <FormLabel>Title</FormLabel>
          <Input key={"title"} name="title" value={notes.title} onChange={(e) => { setTitle(e.target.value); }} />
        </div>
        <div className="mt-3">
          <FormLabel>Description</FormLabel>
          <Textarea key={"description"} name="description" value={notes.description} onChange={(e) => { setDesc(e.target.value); }} />
        </div>
        <Button className="mt-3 w-full" colorScheme={'teal'} onClick={update}>Update</Button>
      </FormControl>
    </Layout>
  )
}