import WithAuth from "../with-auth"
import styles from "./styles.module.css"

function Header({ color }) {
  return (
    <div className={styles.header}>
      Header
    </div >
  )
}

export default WithAuth(Header)