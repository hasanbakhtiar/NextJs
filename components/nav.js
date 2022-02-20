import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/Link'

const Nav = () => {
  return (
    <nav >
        <Link href="/">
        <a className='me-3'>Home</a>
        </Link>
        <Link href="/about">
        <a>About</a>
        </Link>
    </nav>
  )
}

export default Nav