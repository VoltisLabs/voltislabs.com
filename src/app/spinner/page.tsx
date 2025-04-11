import CrewSection from "./components/crew_section";
import GameModes from "./components/game_modes";
import HeroSection from "./components/hero_section";
import JoinTheCommunity from "./components/join_the_community";
import MultiPlayerSection from "./components/multi_player_section";
import SecondSection from "./components/second_section";
import TextSection from "./components/text_section";



export default function Home() {
  return (

    <div className="flex flex-col  overflow-hidden max-w-screen-2xl min-h-screen  font-[family-name:var(--font-lato)] mx-auto bg-black bg-cover relative">
      <div className="pt-16"></div>
      <HeroSection />
      {/* <WordSlider rotate isWhite /> */}
      <SecondSection />
      <TextSection />
      <CrewSection />
      <MultiPlayerSection />
      <GameModes />
      <JoinTheCommunity />
      {/* <ThirdSection />
        <div className="bg-black flex flex-col gap-[32px]">
          <BulletSlider />
          <FourthSection />
          <WordSlider />
        </div> */}
      {/* <WordSlider /> */}
      {/* <FifthSection />
        <WordSlider isWhite /> */}


    </div>

  );
}
