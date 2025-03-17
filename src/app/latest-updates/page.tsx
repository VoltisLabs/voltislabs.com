import React from "react";
import { updates } from "../data";
import { FaSpotify } from "react-icons/fa";
import Content from "@/src/components/Content";
import Footer from "@/src/components/footer";


const UpdateItem = ({ img, message, subText, time, description, spotify, spotifyLink }: any) => {
    return (
      <div className="flex flex-col md:flex-row items-start gap-6 py-8 border-b border-gray-600">
        {/* Image Section */}
        <div className="w-full md:w-1/4">
          <img src={img} alt={message} className="w-full h-auto rounded-lg" />
        </div>
  
        {/* Text Section */}
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">{message}</h2>
          {subText && <h3 className="text-md text-gray-400">{subText}</h3>}
          <p className="text-sm text-gray-500">{time}</p>
          <p className="text-gray-300 mt-2">{description ?? "No description available."}</p>
  
          {/* Spotify Link (if applicable) */}
          {spotify && spotifyLink && (
            <a
               href={spotifyLink} // Ensure this points to a valid Spotify link
               target="_blank"
               rel="noopener noreferrer"
               className="relative inline-flex items-center gap-2 mt-4 py-2 px-4 rounded-full border hover:border-transparent border-white text-white text-[.9rem] font-medium overflow-hidden w-fit cursor-pointer group"
             >
               <span className="absolute inset-0 bg-[#1DB954] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
               <FaSpotify className="relative z-10 text-[1.2rem] transition-all duration-300 group-hover:text-black" />
               <span className="relative z-10 transition-all duration-300 group-hover:text-black">
                 Listen on Spotify
               </span>
             </a>
          )}
  
          {/* See More Link */}
          <div className="mt-4 text-right">
            <a
              href="#"
              className="text-[#fff] text-sm font-medium  hover:text-blue-300"
            >
              see more...
            </a>
          </div>
        </div>
      </div>
    );
  };

  function LatestUpdatesPage() {
    return (
        <div className="page-container bg-black w-full min-h-screen">

      <section className="mb-20 md:px-[2rem] px-[1rem]">
        <h1 className="text-3xl mt-20 font-bold text-white mb-8">Latest Updates</h1>
        {updates.map((update, index) => (
          <UpdateItem
            key={index}
            img={update.img}
            message={update.message}
            subText={update.subText}
            time={update.time}
            description={update.description}
            spotify={update.spotify}
            spotifyLink={update.spotifyLink}
          />
        ))}
      </section>
        <Content/>
        <Footer />
                    
        </div>
    );
  }

export default LatestUpdatesPage;