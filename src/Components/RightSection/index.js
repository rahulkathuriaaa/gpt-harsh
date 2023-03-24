import { CautionIcon, LightningChargeIcon, SunIcon } from "../../constants";
import Footer from "../Footer";

const RightSection = () => {
  return (
    <div className="flex h-full flex-1 flex-col md:pl-[260px]">
      <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col items-center text-sm h-full md:h-screen bg-slate-50">
            <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-6xl md:h-full md:flex md:flex-col px-6">
              <h1 className="text-4xl text-gray-800 font-semibold text-center mt-4 sm:mt-[6vh] ml-auto mr-auto mb-5 sm:mb-7">
                ChatGPT
              </h1>
              <div className="md:flex items-start text-center gap-8 mb-8 sm:mb-7">
                <div className="flex flex-col mb-8 md:mb-auto flex-1">
                  <label for="cars" className="block text-left font-bold">
                    Topic
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className="w-3/4 text-lg px-4 py-2 border-2 border-gray-300 rounded-md"
                  >
                    <option value="volvo" className="text-lg">
                      Marketing
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

                <div className="flex flex-col mb-8 md:mb-auto flex-1">
                  <label for="cars" className="block text-left font-bold">
                    Activity
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className="w-3/4 text-lg px-4 py-2 border-2 border-gray-300 rounded-md"
                  >
                    <option value="volvo" className="text-lg">
                      Marketing
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
                <div className="flex flex-col mb-8 md:mb-auto flex-1">
                  <label for="cars" className="block text-white font-bold">
                    Choose a car:
                  </label>

                  <input
                    type="text"
                    placeholder="Search.."
                    className="border-2 border-inherit w-3/4 text-lg px-4 py-2 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex items-start text-center gap-3.5">
                {[
                  {
                    // icon: <SunIcon />,
                    title: "Examples",
                    subTitle: [
                      `"Explain quantum computing in simple terms " →`,
                      `"Got any creative ideas for a 10 year old’s birthday?" →`,
                      `"How do I make an HTTP request in Javascript?" →`,
                    ],
                    hover: true,
                  },
                  {
                    // icon: <LightningChargeIcon />,
                    title: "Capabilities",
                    subTitle: [
                      `"Explain quantum computing in simple terms " →`,
                      `"Got any creative ideas for a 10 year old’s birthday?" →`,
                      `"How do I make an HTTP request in Javascript?" →`,
                    ],
                    hover: true,
                  },
                  {
                    // icon: <CautionIcon />,
                    title: "Limitations",
                    subTitle: [
                      `May occasionally generate incorrect information`,
                      `May occasionally produce harmful instructions or biased content`,
                      `Limited knowledge of world and events after 2021`,
                    ],
                    hover: true,
                  },
                ].map((item, index) => (
                  <div
                    className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"
                    key={index}
                  >

                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                      {item.subTitle.map((subTitle, subTitleIndex) => (
                        <button
                          className={`w-full bg-gray-100 text-gray-800 bg-white/5 p-3 rounded-md ${
                            item.hover
                              ? "hover:bg-gray-100 dark:hover:bg-gray-200 cursor-pointer"
                              : "cursor-text"
                          }`}
                          key={subTitleIndex}
                        >
                                              <h3 className="flex gap-3 text-gray-800 items-center m-auto text-lg font-semibold md:flex-col md:gap-2 ">
                                              {item.title}
                    </h3>

                          {subTitle}
                          <div class="flex items-center flex-wrap ">
                            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
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
                            </a>


                          </div>
                        </button>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-48 flex-shrink-0"></div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default RightSection;
