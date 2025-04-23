import CrewSection from './components/crew_section';
import GameModes from './components/game_modes';
import HeroSection from './components/hero_section';
import JoinTheCommunity from './components/join_the_community';
import MultiPlayerSection from './components/multi_player_section';
import SecondSection from './components/second_section';
import TextSection from './components/text_section';

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-black bg-cover font-[family-name:var(--font-lato)]">
      <div className="pt-16"></div>
      {/* <WordSlider rotate isWhite /> */}
      <SecondSection />
      <TextSection />
      <CrewSection />

      <GameModes />
      <JoinTheCommunity />
      {/* <ThirdSection />
        <div className="bg-black flex flex-col gap-[32px]">
          <BulletSlider />
          <FourthSection />
          <WordSlider />
        </div> */}
      {/* <WormedSlider /> */}
      {/* <FifthSection />
        <WordSlider isWhite /> */}
    </div>
  );
}
