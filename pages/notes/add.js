import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useMutatation } from "../../hooks/useMutation";

export default function AddNote() {

  const Layout = dynamic(() => import("... @/layout"));
  const [progres, setProgres] = useState('iddle');
  const title = useRef(null);
  const { mutate, isLoading, isError } = useMutatation();
  const description = useRef(null);
  const router = useRouter();

  const submit = () => {

    mutate({
      method: "POST",
      payload: JSON.stringify({
        title: title.current.value,
        description: description.current.value
      }),
      url: "/api/notes"
    });

  }

  return (
    <Layout metaDescription={"All about notes detail"} metaTitle={"Notes detail"}>
      <div>
        <div onClick={router.back} className="mt-3 mb-6 font-bold hover:cursor-pointer">
          <ArrowLeftIcon /> back
        </div>
        <div>
          {
            (isError) ?
              <Alert className="mb-6" status="error">
                <AlertIcon />
                <AlertTitle>Error while submitting</AlertTitle>
                <AlertDescription>error occur while submiting new notes</AlertDescription>
              </Alert>
              : ""
          }
        </div>
        <FormControl>
          <div>
            <FormLabel>Title</FormLabel>
            <Input ref={title} />
          </div>
          <div className="mt-3">
            <FormLabel>Description</FormLabel>
            <Textarea ref={description} />
          </div>
          {
            (!isLoading) ?
              <Button className="mt-3 w-full" colorScheme={'teal'} onClick={submit}>Create New</Button>
              :
              <Button className="mt-3 w-full" colorScheme={'teal'} onClick={submit} disabled>submitting....</Button>
          }
        </FormControl>
      </div>
    </Layout>
  )
}