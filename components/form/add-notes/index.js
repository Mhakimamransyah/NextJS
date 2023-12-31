import { Button, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function AddNotes({ onClose }) {

  const [progres, setProgres] = useState('iddle');
  const title = useRef(null);
  const description = useRef(null);
  const router = useRouter();
  const submit = () => {
    setProgres("load");
    fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({
        title: title.current.value,
        description: description.current.value
      })
    }).then(res => res.json()).then(data => {
      onClose();
      router.reload();
    }).catch(e => {
      setProgres("error");
    }).finally(() => {
      setProgres("iddle");
    })
  }

  return (
    <div>
      <ModalCloseButton />
      <ModalHeader>Create new notes</ModalHeader>
      <ModalBody>
        <div>
          <FormControl>
            <div>
              <FormLabel>Title</FormLabel>
              <Input ref={title} />
            </div>
            <div className="mt-3">
              <FormLabel>Description</FormLabel>
              <Textarea ref={description} />
            </div>
          </FormControl>
        </div>
      </ModalBody>
      <ModalFooter>
        {
          (progres === "iddle" || progres === "error") ?
            <Button colorScheme={'teal'} onClick={submit}>Submit</Button> :
            <Button disabled>Submitting...</Button>
        }
        <Button className="ml-3" colorScheme={'red'} onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </div>
  );
}