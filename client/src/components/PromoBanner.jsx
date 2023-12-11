import { Link } from "react-router-dom";
import bookImg from "../assets/bookImg.jpg";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            2023 National Book Awards for Ficrion Shortlist
          </h2>
          <Link to="/shop" className="block">
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-black transition-all duration-300 font-semibold">
              Get Promo
            </button>
          </Link>
        </div>

        <div className="rounded-md">
          <img src={bookImg} alt="img" className="w-72 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
