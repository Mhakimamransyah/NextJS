import { Button, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function FormUpdateNotes({ onClose, id, title, description }) {

  const router = useRouter();
  const [progres, setProgres] = useState('iddle');
  const [ntitle, setTitle] = useState(title);
  const [ndescription, setDesc] = useState(description);
  const updateNotes = () => {

    setProgres("load");

    console.log(ntitle);
    console.log(ndescription);

    fetch(`/api/notes/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: ntitle,
        description: ndescription
      })
    }).then(res => res.json())
      .then((data) => {
        setProgres("iddle");
        router.reload();
      })
      .catch(e => {
        alert("Error occured while updating");
        setProgres("error");
      });
  }

  return (
    <div>
      <ModalCloseButton />
      <ModalHeader>Update notes</ModalHeader>
      <ModalBody>
        <div>
          <FormControl>
            <div>
              <FormLabel>Title</FormLabel>
              <Input value={ntitle} onChange={(e) => { setTitle(e.target.value); }} />
            </div>
            <div className="mt-3">
              <FormLabel>Description</FormLabel>
              <Textarea value={ndescription} onChange={(e) => { setDesc(e.target.value); }} />
            </div>
          </FormControl>
        </div>
      </ModalBody>
      <ModalFooter>
        {
          (progres === "iddle" || progres === "error") ?
            <Button colorScheme={'teal'} onClick={updateNotes}>Update</Button> :
            <Button disabled>Updating...</Button>
        }
        <Button className="ml-3" colorScheme={'red'} onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </div>
  );
}