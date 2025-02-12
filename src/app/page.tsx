import Link from "next/link";
export default function Home() {
  return (
    <div className="page-container bg-white min-h-screen">
      <nav className="nav-container border-b-[1px] flex items-center md:px-[2rem] px-[1rem] min-h-[4rem] border-gray-100 justify-between">
        <img src="/image/logo.jpeg" alt="Icon" className="w-28 h-18" />
        <ul className="flex text-black items-center gap-3">
          <Link href="/">About us</Link>
          <Link href="/">Project</Link>
          <Link href="/">Contact</Link>
        </ul>
      </nav>
    </div>
  );
}
