import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBook from "./FavBook";
import OtherBooks from "./OtherBooks";
import PromosBanner from "./PromosBanner";
import Review from "./Review";

export default function Home() {
  return (
    <div>
      {/* <div className="h-96">Home</div>
      <div className="h-screen bg-red-600"></div> */}
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromosBanner />
      <OtherBooks />
      <Review />
    </div>
  );
}
