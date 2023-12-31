import Link from 'next/link';
import { useRouter } from 'next/router';
import WithAuth from '../with-auth';

function Header() {

  const router = useRouter();

  return (
    <div className="p-3 bg-red-300 space-x-4">
      <Link className={`hover:text-red-700 ${(router.route === '/') ? 'text-red-500' : ''}`} href="/">Home</Link>
      <Link className={`hover:text-red-700 ${(router.route === '/users') ? 'text-red-500' : ""}`} href="/users">Users</Link>
      <Link className={`hover:text-red-700 ${(router.route === '/notes') ? 'text-red-500' : ""}`} href="/notes">Notes</Link>
      <Link className={`hover:text-red-700 ${(router.route === '/post') ? 'text-red-500' : ""}`} href="/post">Post</Link>
    </div >
  )
}

export default WithAuth(Header);
