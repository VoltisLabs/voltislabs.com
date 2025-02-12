import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container bg-white min-h-screen">
      <nav className="nav-container border-b-[1px] flex items-center md:px-[2rem] px-[1rem] min-h-[4rem] border-gray-100">
        <p className="text-purple-400 text-[1.3rem] font-semibold">
          Voltis-Labs
        </p>
      </nav>
    </div>
  );
}
