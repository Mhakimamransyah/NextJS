import WithAuth from "../with-auth"

function Header({ color }) {
  return (
    <div className={color}>
      Header
    </div >
  )
}

export default WithAuth(Header)