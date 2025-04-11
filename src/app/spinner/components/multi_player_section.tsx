"use client";

import React, { useState } from "react";
import ButtonWithBackground from "./button_with_background";
import FidgetSpinner from "./fidget_spinner";
import LeaderboardTable from "./leaderboardTable";
import SelectFidgetModal from "./select_fidget_modal";
import BoardSubmitModal from "./BoardSubmitModal";
import { defaultPadding } from "../data";

const dummyLeaderboard = Array.from({ length: 20 }, (_, i) => ({
  name: `Player ${i + 1}`,
  score: Math.floor(Math.random() * 1000),
}));

const MultiPlayerSection = () => {
  const [showChangeSpinnerModal, setShowChangeSpinnerModal] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
  const [selectedSpinner, setSelectedSpinner] = useState<string>(
    "/images/fidgets/blade_fidget.png"
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [maxRpm, setMaxRpm] = useState(0);
  const [finished, setFinished] = useState(false);
  const [retry, setRetry] = useState(false);
  const handleModalSubmit = (data: { title: string; description: string }) => {
    // console.log("Submitted Data:", data);
  };

  React.useEffect(() => {
    if (finished) {
      setModalOpen(true);
    }
  }, [finished]);

  const handleMaxRpmUpdate = (newMaxRpm: number) => {
    if (newMaxRpm > maxRpm) {
      setMaxRpm(newMaxRpm);
    }
  };
  const handleSpinnerSelect = (image: string) => {
    setSelectedSpinner(image);
  };

  const closeModal = () => {
    setMaxRpm(0);
    setModalOpen(false);
  };

  return (
    <>
      <section

        className={`flex flex-col md:flex-row items-center md:items-end justify-center ${defaultPadding} md:gap-2 lg:gap-0 lg:pt-0 !gap-0 w-full relative -mt-6 !pt-[32px] !pb-3`}
      >
        {/* Left Image (Desktop Only) */}
        <img
          src="/images/characters/gizmoGrip.png"
          className=" w-1/3 object-cover hidden md:block md:relative  -left-12 lg:static"
        />
        <div className="flex flex-col h-full gap-2 items-center  w-full md:w-1/3 px-0 md:px-4 justify-center flex-grow flex-shrink-0">
          <h1
            style={{
              fontFamily: 'var(--font-comfortaa)'
            }}
            className="text-xl md:text-2xl lg:text-5xl font-normal text-center xl:leading-20">
            MULTIPLAYER
            <div className="text-[#F24C25]">BATTLES</div>
          </h1>

          <span
            style={{ fontFamily: "var(--font-titan-one)" }}

            className="hidden md:block text-3xl font-normal text-center px-10  text-transparent bg-clip-text text-nowrap bg-gradient-to-r from-[#FF842A] to-[#A4290D]"

          >
            Spin Hard or Go Home
          </span>

          <FidgetSpinner
            retry={retry}
            setRetry={setRetry}
            onMaxRpmUpdate={(max) => setMaxRpm(max)}
            onFinish={(finished) => setModalOpen(!isModalOpen)}
            fidget={selectedSpinner}
          />

          <div className="flex gap-4 md:gap-10 mt-auto relative z-30">

            <ButtonWithBackground
              isWhite
              text="CHANGE SPINNER"
              onClick={() => setShowChangeSpinnerModal(true)}
            />
            <ButtonWithBackground
              isWhite
              text="LEADERBOARDS"
              onClick={() => setShowLeaderboardModal(true)}
            />
          </div>
        </div>

        {/* Right Image (Desktop Only) */}
        <img
          src="/images/characters/axelDash.png"

          className=" hidden md:block w-1/3 object-cover scale-x-[-1] md:relative  -right-9 lg:static"
        />
      </section>

      <section className="flex  flex-row flex-wrap items-center justify-center h-fit w-full gap-2 md:hidden px-2">
        {/* Left Image */}
        <img
          src="/images/characters/gizmoGrip.png"
          className="h-[200px] w-[6rem] sm:h-[240px] sm:w-[8rem] object-contain"
        />

        {/* Text Section */}
        <span
          style={{ fontFamily: "var(--font-titan-one)" }}
          className="text-[1rem] sm:text-xl font-normal text-center text-[#FF842A] leading-tight"
        >
          Spin
          <br />
          Hard
          <br />
          or
          <br />
          Go Home
        </span>

        {/* Right Image */}
        <img
          src="/images/characters/axelDash.png"
          className="h-[200px] w-[6rem] sm:h-[240px] sm:w-[8rem] object-contain scale-x-[-1]"
        />
      </section >

      {/* Change Spinner Modal */}
      < SelectFidgetModal
        currentImage={selectedSpinner}
        isOpen={showChangeSpinnerModal}
        onSelect={handleSpinnerSelect}
        onClose={() => setShowChangeSpinnerModal(false)}
      />

      <LeaderboardTable
        isOpen={showLeaderboardModal}
        onClose={() => setShowLeaderboardModal(false)}
      />
      <BoardSubmitModal
        maxRpm={maxRpm}
        onretry={() => {
          closeModal();
          setRetry(true);
        }}
        setMaxRpm={handleMaxRpmUpdate}
        show={isModalOpen}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default MultiPlayerSection;
