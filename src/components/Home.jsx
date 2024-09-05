import CategoryCarousel from "./CategoryCarousel";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Navbar from "./shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />;
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
    </>
  );
};

export default Home;
