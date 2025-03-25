import { ArrowRight, Car, DollarSign, HelpingHand } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <img
          src="/src/assets/pexels-charlotte-may-5824520.jpg"
          alt="Hero Background"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
          <h1 className="text-center font-sans text-5xl font-bold text-white md:text-7xl">
            Discover Your Style
          </h1>
          <p className="max-w-2xl text-center text-lg text-gray-200">
            Explore our curated collection of trendsetting fashion pieces that
            define who you are
          </p>
          <button
            onClick={navigateToRegisterPage}
            className="group relative mt-4 overflow-hidden rounded-full bg-white px-8 py-3 font-semibold text-black transition-all hover:bg-gray-100"
          >
            Shop Now
            <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3 md:px-16">
        <div className="group flex cursor-pointer flex-col items-center justify-center text-center">
          <Car size={40} className="text-red-400 group-hover:animate-bounce" />
          <h3 className="mb-2 text-xl font-bold">Free Shipping</h3>
          <p className="text-gray-600">On orders over $50</p>
        </div>
        <div className="group flex cursor-pointer flex-col items-center justify-center text-center">
          <DollarSign
            size={40}
            className="text-red-400 group-hover:animate-bounce"
          />
          <h3 className="mb-2 text-xl font-bold">Secure Payment</h3>
          <p className="text-gray-600">100% secure payment</p>
        </div>
        <div className="group flex cursor-pointer flex-col items-center justify-center text-center">
          <HelpingHand
            size={40}
            className="text-red-400 group-hover:animate-bounce"
          />
          <h3 className="mb-2 text-xl font-bold">24/7 Support</h3>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
