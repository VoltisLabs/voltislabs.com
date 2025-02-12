import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container bg-white min-h-screen ">
      <nav className="nav-container border-b-[1px] flex items-center md:px-[2rem] px-[1rem] min-h-[4rem] border-gray-100 justify-between">
        
        <img
                  src="/Image/logo.jpeg" 
                  alt="Icon"
                  className=" w-28 h-18 "
                />
                <div className="flex ">
                <div><a>About us</a></div> <div><a>Project</a></div> <div><a>Contact</a></div></div>
      </nav>
      
    </div>
  );
}
