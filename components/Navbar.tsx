import React from "react";

function Navbar() {
  const categories = [
    "All",
    "Bravo Series",
    "Alpha Series",
    "Timber Series",
    "Royal White",
    "Royal Gold",
    "Royal White",
    "Royal Gold",
    "Platinum Black",
    "Platinum Silver",
    "Gem White",
    "Bravo Series",
  ];
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0 "
            style={{ width: "47%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Stock Managment System</span>
          </a>
          <div style={{width:'50%'}}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 search-input"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              <select className="absolute right-0 top-0 bottom-0 border border-gray-300 bg-white rounded-md px-4 py-2 appearance-none focus:outline-none">
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
