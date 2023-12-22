import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function Users() {

  const [users, setUsers] = useState([]);
  const LayoutComponent = dynamic(() => import('... @/layout'))

  useEffect(() => {

    fetch("api/v1/users").then(res => res.json()).then((res) => {
      setUsers(res);
    })

  }, [])

  return (

    <LayoutComponent metaTitle={"users"} metaDescription={"All about users list"}>
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
    </LayoutComponent>
  );
}