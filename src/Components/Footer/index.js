import React from "react";
import { PlaneIcon, UserIcon } from "../../constants";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-gray-800 md:!bg-transparent">
      <form className="mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-4xl lg:pt-6">
        <div className="relative flex h-full flex-1 md:flex-col">

          <div className="ml-1 mt-1.5 md:w-full md:m-auto md:flex md:mb-2 gap-2 justify-center">
            <div className="text-gray-100 p-1 md:hidden">
              <UserIcon />
            </div>
          </div>



          {/* Input */}
          <div className="flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white rounded-md bg-[rgba(64,65,79,var(--tw-bg-opacity))]">
          {/* dropdown starts */}
          <div className="md:flex items-start text-center border-b border-b-[#6c6d6e]">

          <div className="flex flex-col md:mb-auto flex-1 w-[150px] ">
                  <label for="cars" className=" text-left font-semibold">
                    Writing
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className=" text-lg px-1 border-1 border-gray-300 rounded-md text-black w-[150px]"
                  >
                    <option value="volvo" className="text-lg">
                      Default
                    </option>
                    <option value="saab" className="text-lg">
                      Saab
                    </option>
                    <option value="mercedes" className="text-lg">
                      Mercedes
                    </option>
                    <option value="audi" className="text-lg">
                      Audi
                    </option>
                  </select>
                </div>
          <div className="flex flex-col  md:mb-auto flex-1">
                  <label for="cars" className="text-left font-semibold">
                    Tone
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className=" text-lg px-1 border-1 border-gray-300 rounded-md text-black w-[150px]"
                  >
                    <option value="volvo" className="text-lg">
                      Default
                    </option>
                    <option value="saab" className="text-lg">
                      Saab
                    </option>
                    <option value="mercedes" className="text-lg">
                      Mercedes
                    </option>
                    <option value="audi" className="text-lg">
                      Audi
                    </option>
                  </select>
                </div>
          <div className="flex flex-col md:mb-auto flex-1 w-[150px]" >
                  <label for="cars" className="text-left font-semibold">
                    Language
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className=" text-lg px-1 border-1 border-gray-300 rounded-md text-black w-[150px]"
                  >
                    <option value="volvo" className="text-lg text-black">
                      English
                    </option>
                    <option value="saab" className="text-lg">
                      Saab
                    </option>
                    <option value="mercedes" className="text-lg">
                      Mercedes
                    </option>
                    <option value="audi" className="text-lg">
                      Audi
                    </option>
                  </select>
                </div>
          <div className="flex flex-col md:mb-auto flex-1 w-[150px]" >
                  <label for="cars" className="text-left font-semibold">
                    Model
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className=" text-lg px-1 border-1 border-gray-300 rounded-md text-black w-[150px]"
                  >
                    <option value="volvo" className="text-lg text-black">
                      GPT-3.5
                    </option>
                    <option value="saab" className="text-lg">
                      Saab
                    </option>
                    <option value="mercedes" className="text-lg">
                      Mercedes
                    </option>
                    <option value="audi" className="text-lg">
                      Audi
                    </option>
                  </select>
                </div>
          </div>
          {/* dropdown ends */}
            <textarea
              tabIndex="0"
              data-id="root"
              rows="1"
              className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent outline-none overflow-y-hidden h-[23px] "
            ></textarea>
            <button className="absolute p-1 rounded-md text-gray-400 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-black">
              <PlaneIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Footer;
