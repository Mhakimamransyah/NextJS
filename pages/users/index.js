import Link from "next/link";
import Layout from "../../layout";
import { useEffect, useState } from "react";

export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("api/v1/users").then(res => res.json()).then((res) => {
      setUsers(res);
    })

  }, [])

  return (
    <Layout metaTitle={"users"} metaDescription={"All about users list"}>
      <div className="mb-4 font-bold">List users</div>
      <div>
        {
          (users?.data?.users.length > 0) && users.data.users.map((item) => {
            return (
              <div className="mb-3">
                <Link href={`/users/${item.id}`} className="text-blue-700 underline"> {item.firstName} {item.lastName} </Link>
                <p>Age : {item.age}</p>
              </div>
            )
          })
        }
      </div>
    </Layout>
  );
}