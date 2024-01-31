const Contact = () => {
  return (
    <div className="h-screen">
      <div className="">
        <div>
          <h1 className="md:ml-10 lg:ml-10 sm:ml-0 text-black lg:text-8xl md:text-8xl sm:text-xl md:text-left lg:text-left sm:text-center">
            21bubbles.web<nav>@gmail.com</nav>
          </h1>
        </div>
        <div className="flex justify-end mx-20 my-10">
          {" "}
          <form action="#" method="POST" className="mt-6 content-center">
            <div>
              <p className="text-black p-4">get in touch.</p>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className=" content-center  p-4 text-neutral-800 placeholder-neutral-800 transition-all duration-200 bg-[#F2F2F2] border border-neutral-800 rounded-md focus:outline-none focus:border-zinc-600 caret-neutral-800"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold hover:shadow-md hover:   text-neutral-800 transition-all duration-200 bg-[#F2F2F2] rounded-md border-neutral-800 hover:bg-neutral-800 hover:text-[#F2F2F2] hover:border-neutral-800 focus:bg-zinc-400  border-b "
            >
              Submit
            </button>
          </form>
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
