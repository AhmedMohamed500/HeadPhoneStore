const Button = () => {
  return (
    <div className="mt-5 w-full">
      <div className="relative group w-full">
        <button
          className="relative w-full p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl
                     transition-transform duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Gradient Border */}
          <span
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500
                       p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Button Content */}
          <span className="relative z-10 block w-full px-6 py-3 rounded-xl bg-gray-950">
            <div className="flex items-center justify-center gap-2">
              <span className="transition-all duration-500 group-hover:translate-x-1">
                Add To Cart
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Button;
