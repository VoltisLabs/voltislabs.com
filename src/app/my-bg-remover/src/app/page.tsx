import HeroSection from "../hero";
import Contents from "../features-list";
import StudioUseCases from "../use-case";
import Footer from "../footer";
import BottomNav from "../bottom-nav";

export default function BackgroundRemoverPage() {
  return (
    <div className="page-container max-w-[85rem] bg-black flex flex-col">
      <HeroSection />
      <Contents />
      <StudioUseCases />
      <Footer />
      <BottomNav />
    </div>
  );
}
