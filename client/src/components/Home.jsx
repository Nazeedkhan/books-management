import Banner from "./Banner";
import FavBook from "./FavBook";
import FavouriteBooks from "./FavouriteBooks";
import OtherBooks from "./OtherBooks";
import PromoBanner from "./PromoBanner";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <FavouriteBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks/>
      <Reviews/>
    </div>
  );
};

export default Home;
