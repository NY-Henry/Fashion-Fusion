import {
  ArrowRight,
  Car,
  DollarSign,
  HelpingHand,
  Star,
  Mail,
  Instagram,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex h-[90vh] flex-col md:flex-row">
        <div className="h-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg"
            alt="Fashion Collection"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-full flex-col items-center justify-center bg-gray-50 p-8 md:w-1/2">
          <div className="mx-auto max-w-md">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Discover Your Style
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Explore our curated collection of trendsetting fashion pieces
            </p>
            <button
              onClick={navigateToRegisterPage}
              className="group relative overflow-hidden rounded-md bg-black px-8 py-3 font-semibold text-white transition-all hover:bg-gray-800"
            >
              Shop Now
              <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="group flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-red-50 p-4">
                <Car
                  size={32}
                  className="text-red-500 transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $50</p>
            </div>
            <div className="group flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-red-50 p-4">
                <DollarSign
                  size={32}
                  className="text-red-500 transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment</p>
            </div>
            <div className="group flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-red-50 p-4">
                <HelpingHand
                  size={32}
                  className="text-red-500 transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link
              to="/products"
              className="flex items-center font-medium text-black hover:underline"
            >
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
              "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
              "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg",
              "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
            ].map((imgUrl, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={imgUrl}
                    alt="Product"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="w-full rounded bg-white py-2 text-sm font-bold text-black transition hover:bg-gray-100">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-medium">Fashion Item {index + 1}</h3>
                  <div className="mb-2 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-1 text-xs text-gray-500">(120)</span>
                  </div>
                  <p className="text-lg font-bold">$49.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                name: "Women",
                img: "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg",
              },
              {
                name: "Men",
                img: "https://images.pexels.com/photos/1384219/pexels-photo-1384219.jpeg",
              },
              {
                name: "Accessories",
                img: "https://images.pexels.com/photos/1078973/pexels-photo-1078973.jpeg",
              },
              {
                name: "Footwear",
                img: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg",
              },
            ].map((category) => (
              <div
                key={category.name}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-4xl font-bold">SUMMER SALE</h2>
            <p className="mb-6 text-2xl">Up to 50% off selected items</p>
            <button className="rounded-md border border-white bg-transparent px-6 py-2 font-medium transition hover:bg-white hover:text-black">
              Shop the Sale
            </button>
          </div>
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            <span className="absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-500 text-xl font-bold">
              50% OFF
            </span>
            <img
              src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg"
              alt="Summer Collection"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
            ].map((imgUrl, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600 italic">
                  "The quality of the clothes exceeded my expectations. The fit
                  is perfect and the fabric feels luxurious."
                </p>
                <div className="flex items-center">
                  <img
                    src={imgUrl}
                    alt="Customer"
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Customer Name</h4>
                    <p className="text-sm text-gray-500">Loyal Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-xl bg-red-50 p-8 text-center md:p-12">
          <Mail size={32} className="mx-auto mb-4 text-red-500" />
          <h2 className="mb-4 text-3xl font-bold">
            Subscribe to Our Newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-md text-gray-600">
            Stay updated with our latest trends and get exclusive offers
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-md border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
            />
            <button className="rounded-md bg-black px-6 py-3 font-medium whitespace-nowrap text-white transition hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Follow Our Style</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Tag us on Instagram @fashionfusion
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
            {[
              "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg",
              "https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg",
              "https://images.pexels.com/photos/1187954/pexels-photo-1187954.jpeg",
              "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
              "https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg",
              "https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg",
            ].map((imgUrl, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden"
              >
                <img
                  src={imgUrl}
                  alt="Instagram post"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
                  <Instagram size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
