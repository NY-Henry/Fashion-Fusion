const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            About Fashion Fusion
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-purple-100 md:text-xl">
            Bringing the latest trends and timeless styles together in one
            seamless experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto space-y-12 px-4 py-12">
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Our Story */}
          <div className="transform rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Our Story
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Fashion Fusion started with a simple idea: to bring the latest
              trends and timeless styles together in one place. Founded in 2025,
              we've grown from a small boutique into a thriving online
              destination for fashion lovers worldwide.
            </p>
          </div>

          {/* Our Mission */}
          <div className="transform rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Creating a user-friendly platform that connects customers with
              high‑quality products and offers a seamless shopping experience
              backed by exceptional service.
            </p>
          </div>

          {/* Our Vision */}
          <div className="transform rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Our Vision
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              To be the leading online marketplace known for innovation,
              reliability, and empowering shoppers to make informed style
              choices.
            </p>
          </div>

          {/* Company Description */}
          <div className="transform rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Company Description
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Who we are:
              </span>{" "}
              Fashion Fusion is a retail brand specializing in trendy apparel
              for men, women, and children.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Our Values
          </h2>
          <ul className="grid grid-cols-1 gap-4 text-gray-600 sm:grid-cols-2 dark:text-gray-300">
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Customer Focus:
              </span>{" "}
              Putting our customers first.
            </li>
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Quality:
              </span>{" "}
              Delivering well-made products.
            </li>
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Inclusivity:
              </span>{" "}
              Celebrating diversity.
            </li>
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Integrity:
              </span>{" "}
              Honest and transparent operations.
            </li>
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Innovation:
              </span>{" "}
              Constantly improving.
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Contact Us
          </h2>
          <p className="mb-2 leading-relaxed text-gray-600 dark:text-gray-300">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <ul className="space-y-1 text-gray-600 dark:text-gray-300">
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Email:
              </span>{" "}
              support@fashionfusion.com
            </li>
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Phone:
              </span>{" "}
              +256 703 569 051
            </li>
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Address:
              </span>{" "}
              Shop 5, Level 2, Arena Mall, Kampala City
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
