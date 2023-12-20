import { useRouter } from "next/router";
import Layout from "../../../layout";

// router with dynamic path

export default function UsersDetail({ props }) {

  const router = useRouter()

  return (
    <Layout metaDescription={"All about users detail"} metaTitle={"users-detail"}>
      <div>Detail user</div>
      <div>id : {router.query.id}</div>
    </Layout>
  );
}