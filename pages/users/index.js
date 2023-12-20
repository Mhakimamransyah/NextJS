import Link from "next/link";
import Layout from "../../layout";

export default function Users() {
  return (
    <Layout metaTitle={"users"} metaDescription={"All about users list"}>
      <div>List users</div>
      <div>
        Detail for <Link className="text-blue-300" href={"users/1"}>users 1</Link>
      </div>
    </Layout>
  );
}