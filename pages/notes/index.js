import { Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Grid, Input, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutatation } from "../../hooks/useMutation";

export default function Notes({ data }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const Layout = dynamic(() => import("... @/layout"));
  const Modal = dynamic(() => import("... @/components/modal"));
  const [customModal, setCustomModal] = useState(null);
  const { mutate } = useMutatation();
  const router = useRouter();
  const notes = data?.data;

  const deleteNotes = (id, title) => {

    setCustomModal(
      <div>
        <ModalHeader>Delete data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Delete <span className="italic">{title}</span> notes ?
        </ModalBody>
        <ModalFooter>
          <Button colorScheme={'red'} onClick={() => {

            mutate({
              method: "DELETE",
              url: `api/notes/delete/${id}`,
              onSuccess: () => router.reload()
            });

          }}>Delete</Button>
          <Button className="ml-3" colorScheme={'teal'} onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </div>
    );

    onOpen();

  }

  const addNotes = () => {
    const FormAddNotes = dynamic(() => import("... @/components/form/add-notes"));
    setCustomModal(<FormAddNotes onClose={onClose} />);
    onOpen();
  }

  const updateNotes = (id, title, description) => {
    const FormUpdateNotes = dynamic(() => import("... @/components/form/update-notes"));
    setCustomModal(<FormUpdateNotes onClose={onClose} id={id} title={title} description={description} />);
    onOpen();

  }

  return (
    <Layout metaTitle={'Notes'} metaDescription={'All about notes'}>
      <div className="mb-5 mt-3 w-fit">
        <div onClick={addNotes} className="hover:bg-blue-800 hover:text-white hover:cursor-pointer p-2 bg-blue-300 rounded-lg text-blue-700">Add</div>
      </div>
      <Modal children={customModal} isOpen={isOpen} onClose={onClose} />
      <Grid templateColumns={'repeat(5,1fr)'} gap={6}>
        {
          (notes?.map((item) => (

            <Card>
              <CardHeader className="font-bold text-lg">{item.title}</CardHeader>
              <CardBody>{item.description}</CardBody>
              <CardFooter gap={8}>
                <Button colorScheme={'teal'} onClick={() => { updateNotes(item.id, item.title, item.description); }}>Edit</Button>
                <Button colorScheme={'red'} onClick={() => deleteNotes(item.id, item.title)}>Delete</Button>
              </CardFooter>
            </Card>
          )))
        }
      </Grid>
    </Layout >
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`);
  const data = await res.json();
  return { props: { data } }
}