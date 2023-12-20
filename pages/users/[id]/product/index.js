import { useRouter } from "next/router";
import Layout from "../../../../layout";

export default function UsersProduct() {

  const route = useRouter()?.query;

  return (
    <Layout metaTitle={"users-product"} metaDescription={"All about users product"}>
      <div>List product from users with id : {route?.id}</div>
    </Layout>
  )
}