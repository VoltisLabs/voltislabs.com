import Image from "next/image";

const Aside = () => {
  const items = [
    {
      name: "VModel",
      url: "",
    },

    {
      name: "Prelura",
      url: "",
    },
    {
      name: "Research",
      url: "",
    },
    {
      name: "Team",
      url: "",
    },
  ];

  return (
    <div className="bg-black border-r-[1px] border-gray-600 h-screen py-[2rem] px-[2.5rem]">
      <div className="logo-container px-[2rem]">
        <Image
          src={"/image/logo3.png"}
          alt="company-logo"
          width={80}
          height={80}
        />
      </div>
      <div className="links-container mx-auto mt-[10rem] md:px-[2rem]">
        {items.map((item) => (
          <div className="items-card text-white mb-[1rem] text-[1.3rem]">
            {item?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
