import React from "react";

export default function Categories({ infoCard }) {
  return (
    <>
      <section class="text-gray-700 body-font h-auto -mt-24 w-full h-64">
        <div class="container mx-auto ">
          <div class="flex flex-wrap -m-4 ">
            <div class="p-4 w-full">
              <div class="h-full w-full bg-white px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative shadow">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {infoCard.title}
                </h1>
                <p class="leading-relaxed mb-3">
                  {infoCard.info ? (
                    <strong>
                      {infoCard.title.split(" ")[2]} <br></br> {infoCard.info}
                    </strong>
                  ) : null}
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Try Saying: <br></br> {infoCard.text}
                  {/* <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                */}
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
