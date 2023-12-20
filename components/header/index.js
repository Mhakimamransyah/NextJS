import Link from "next/link"
import WithAuth from "../with-auth"
import styles from "./styles.module.css"
import { useRouter } from "next/router"

function Header({ color }) {

  const router = useRouter();

  return (
    <div className="p-3 bg-red-300 space-x-4">
      <Link className={`hover:text-red-700 ${(router.route == "/") ? "text-red-500" : ""}`} href={"/"}>Home </Link>
      <Link className={`hover:text-red-700 ${(router.route == "/users") ? "text-red-500" : ""}`} href={"/users"}>Users</Link>
    </div >
  )
}

export default WithAuth(Header)