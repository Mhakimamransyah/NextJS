import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function NotesDetail() {

  const Layout = dynamic(() => import("... @/layout"));
  const { id } = useRouter()?.query;
  const [progres, setProgres] = useState('load');
  const [title, setTitle] = useState();
  const router = useRouter();
  const [description, setDesc] = useState();


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

  useEffect(() => {

    async function fetchNoteDetail() {

      if (id == undefined) {
        return;
      }

      try {

        const res = await fetch(`/api/notes/${id}`);
        const data = await res.json();

        setProgres('success');
        setTitle(data?.data.title);
        setDesc(data?.data.description);

      } catch (e) {

        setProgres('error');

      }
    }

    fetchNoteDetail();

  }, [id])

  return (
    <Layout metaDescription={"All about notes detail"} metaTitle={"Notes detail"}>
      {
        (progres === 'load') ?
          "loading.."
          :

          (progres == 'error') ?
            "error :("
            :
            <div>
              <FormControl>
                <div>
                  <FormLabel>Title</FormLabel>
                  <Input key={"title"} name="title" value={title} onChange={(e) => { setTitle(e.target.value); }} />
                </div>
                <div className="mt-3">
                  <FormLabel>Description</FormLabel>
                  <Textarea key={"description"} name="description" value={description} onChange={(e) => { setDesc(e.target.value); }} />
                </div>
                <Button className="mt-3 w-full" colorScheme={'teal'} onClick={update}>Update</Button>
              </FormControl>
            </div>
      }
    </Layout>
  )
}