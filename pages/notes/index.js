import { Button, Card, CardBody, CardFooter, CardHeader, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Notes() {

  const Layout = dynamic(() => import("... @/layout"))
  const [notes, setNotes] = useState();
  const [progres, setProgres] = useState('load');
  const router = useRouter();


  useEffect(() => {

    async function fetchListNotes() {

      try {

        const res = await fetch("/api/notes");
        const data = await res.json();

        setNotes(data?.data);

        setProgres('success');

      } catch (e) {

        setProgres('error');

      }

    }

    fetchListNotes();

  }, [])

  return (
    <Layout metaTitle={'Notes'} metaDescription={'All about notes'}>
      <div className="mb-5 mt-3">
        <Link href={'/notes/add'} className="p-2 bg-blue-300 rounded-lg text-blue-700">Add</Link>
      </div>
      {
        (progres === 'load') ?
          "loading.."
          :

          (progres == 'error') ?
            "error :("
            :
            <Grid templateColumns={'repeat(5,1fr)'} gap={6}>
              {
                (notes?.map((item) => (

                  <Card>
                    <CardHeader className="font-bold text-lg">{item.title}</CardHeader>
                    <CardBody>{item.description}</CardBody>
                    <CardFooter gap={8}>
                      <Link href={`notes/edit/${item.id}`}><Button colorScheme={'teal'}>Edit</Button></Link>
                      <Button colorScheme={'red'} onClick={() => {
                        fetch(`api/notes/delete/${item.id}`, {
                          method: "DELETE"
                        }).then(res => res.json()).
                          then(data => {
                            router.reload();
                          }).catch((e) => {
                            alert("failed while deleting data");
                          })
                      }}>Delete</Button>
                    </CardFooter>
                  </Card>
                )))
              }
            </Grid>
      }
    </Layout>
  )
}