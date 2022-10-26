import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
};

export default NavBar;
