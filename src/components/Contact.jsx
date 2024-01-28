const Contact = () => {
  return (
    <div className="h-screen">
      <div className="">
        <div>
          <h1 className="m-10 text-black lg:text-9xl md:text-9xl text-left">
            21bubbles.web<nav>@gmail.com</nav>
          </h1>
        </div>

        {/* <div className=" flex items-center">
          <div className="w-1/2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required={true}
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
