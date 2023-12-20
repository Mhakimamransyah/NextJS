import { useRouter } from "next/router";
import Layout from "../../../../layout";

export default function UsersProduct() {

  const query = useRouter()?.query

  return (
    <Layout metaTitle={"users-product"} metaDescription={"All about users product"}>
      <div>Product id :{query?.product_id} from Users with id : {query?.id}</div>
    </Layout>
  )
}