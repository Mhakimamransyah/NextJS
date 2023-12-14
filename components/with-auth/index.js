export default function WithAuth(Component) {

  return function withAuth(props) {

    const isLogin = true;

    return (
      <>
        {
          (isLogin) ? <Component {...props} /> : <div>Need login first</div>
        }
      </>
    )

  }
}