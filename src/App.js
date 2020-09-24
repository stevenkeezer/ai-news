import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

import useStyles from "./styles.js";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import "./output.css";

import wordsToNumbers from "words-to-numbers";

const alanKey =
  "4a6a79248789270f7715ac20c49a0e852e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      {/* <AppBar style={{ background: "#2E3B55" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            AI News
          </Typography>
        </Toolbar>
      </AppBar> */}

      <div>
        <div class="font-sans bg-white flex flex-col min-h-screen w-full">
          <div>
            <div class="bg-gray-200 px-4 py-4">
              <div class="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
                <div>
                  <a
                    href="/"
                    class="inline-block py-2 text-gray-800 text-2xl font-bold"
                  >
                    AI.news
                  </a>
                </div>

                <div>
                  <div class="hidden md:block">
                    <a
                      href="#"
                      class="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
                    >
                      How it Works
                    </a>
                    <a
                      href="#"
                      class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                    >
                      Solutions
                    </a>

                    <a
                      href="#"
                      class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                    >
                      Desktop
                    </a>
                  </div>
                </div>

                <div class="hidden md:block">
                  <a
                    href="#"
                    class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
                  >
                    Start a free trial
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-gray-200 md:overflow-hidden ">
              <div class="px-4  pt-16 flex">
                <div class="relative w-full mx-auto md:mx-auto md:invisible lg:visible">
                  <div class="flex  items-center lg:gap-10 justify-center">
                    <div>
                      <svg
                        class="w-48 h-48 mr-6"
                        id="0d3bee8d-6283-4722-b2f5-6188c764ca3b"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="885"
                        height="657"
                        viewBox="0 0 885 657"
                      >
                        <defs>
                          <linearGradient
                            id="e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
                            x1="2330.5"
                            y1="628"
                            x2="2330.5"
                            y2="120"
                            gradientTransform="matrix(-1, 0, 0, 1, 2630, -120)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0"
                              stop-color="gray"
                              stop-opacity="0.25"
                            />
                            <stop
                              offset="0.54"
                              stop-color="gray"
                              stop-opacity="0.12"
                            />
                            <stop
                              offset="1"
                              stop-color="gray"
                              stop-opacity="0.1"
                            />
                          </linearGradient>
                          <linearGradient
                            id="656a49b8-0e74-4269-923d-a5cb8c729e5a"
                            x1="589"
                            y1="657"
                            x2="589"
                            y2="150"
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
                          />
                          <linearGradient
                            id="4ac03110-48b7-4c46-9a7b-750500b44d13"
                            x1="483.99"
                            y1="408.82"
                            x2="483.99"
                            y2="324.2"
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
                          />
                          <linearGradient
                            id="659745b9-c7a7-4aa8-bbf0-7b73c169c514"
                            x1="589.48"
                            y1="408.82"
                            x2="589.48"
                            y2="324.2"
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
                          />
                          <linearGradient
                            id="ee701dec-23cf-49d9-a833-d49e1cd62e17"
                            x1="694.96"
                            y1="408.82"
                            x2="694.96"
                            y2="324.2"
                            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                            xlinkHref="#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
                          />
                        </defs>
                        <title>typing</title>
                        <polygon
                          points="0 0 599 0 599 434.06 218.15 434.06 177 508 133.77 434.06 0 434.06 0 0"
                          fill="url(#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869)"
                        />
                        <polygon
                          points="7.57 8.33 589.48 8.33 589.48 427.95 211.79 427.95 176.81 503.3 137.52 427.95 7.57 427.95 7.57 8.33"
                          fill="#f5f5f5"
                        />
                        <rect
                          x="237.18"
                          y="254.1"
                          width="433.53"
                          height="18.55"
                          transform="translate(751.89 406.75) rotate(-180)"
                          fill="#6c63ff"
                          opacity="0.3"
                        />
                        <rect
                          x="237.18"
                          y="294.67"
                          width="433.53"
                          height="18.55"
                          transform="translate(751.89 487.89) rotate(-180)"
                          fill="#6c63ff"
                          opacity="0.3"
                        />
                        <rect
                          x="237.18"
                          y="335.24"
                          width="433.53"
                          height="18.55"
                          transform="translate(751.89 569.03) rotate(-180)"
                          fill="#6c63ff"
                          opacity="0.3"
                        />
                        <rect
                          x="237.18"
                          y="375.81"
                          width="433.53"
                          height="18.55"
                          transform="translate(751.89 650.17) rotate(-180)"
                          fill="#6c63ff"
                          opacity="0.3"
                        />
                        <polygon
                          points="885 150 293 150 293 583.21 675 583 711 657 752.79 583.21 885 583.21 885 150"
                          fill="url(#656a49b8-0e74-4269-923d-a5cb8c729e5a)"
                        />
                        <polygon
                          points="880.43 156.7 298.52 156.7 298.52 576.32 676.21 576.32 711.19 651.67 750.48 576.32 880.43 576.32 880.43 156.7"
                          fill="#fff"
                        />
                        <circle
                          cx="483.99"
                          cy="366.51"
                          r="42.31"
                          fill="url(#4ac03110-48b7-4c46-9a7b-750500b44d13)"
                        />
                        <circle
                          cx="589.48"
                          cy="366.51"
                          r="42.31"
                          fill="url(#659745b9-c7a7-4aa8-bbf0-7b73c169c514)"
                        />
                        <circle
                          cx="694.96"
                          cy="366.51"
                          r="42.31"
                          fill="url(#ee701dec-23cf-49d9-a833-d49e1cd62e17)"
                        />
                        <circle
                          cx="483.99"
                          cy="366.51"
                          r="38.25"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="589.48"
                          cy="366.51"
                          r="38.25"
                          fill="#6c63ff"
                          opacity="0.6"
                        />
                        <circle
                          cx="694.96"
                          cy="366.51"
                          r="38.25"
                          fill="#6c63ff"
                          opacity="0.3"
                        />
                      </svg>
                    </div>
                    <div>
                      <h1 class="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                        Search news with your voice
                      </h1>

                      <p class="text-gray-600 md:text-xl md:px-18">
                        Artificial Intelligence, now bringing you the latest
                        headlines.
                      </p>
                    </div>
                  </div>

                  {/* <div class="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-64"></div> */}
                  <div class="hidden xl:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 mr-24 mt-40"></div>
                </div>
              </div>

              <svg
                class="fill-current bg-gray-200 text-white hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill-opacity="1"
                  d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
              </svg>
            </div>

            <div
              class="max-w-5xl mx-auto bg-white shadow-lg relative hidden md:block"
              style={{ marginTop: "-310px", borderRadius: "20px" }}
            >
              <div
                class="h-10 w-20 bg-yellow-500 absolute rounded-t-full top-0 left-0  -mt-4 invisible xl:visible "
                // style={{ zIndex: "-1" }}
              ></div>

              <div
                class="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-40 mt-12"
                // style={{ zIndex: "-1" }}
              ></div>

              {/* <div class="h-auto bg-white rounded-t-lg border-b border-gray-100">
             
              </div> */}
            </div>

            <div className="max-w-6xl mx-auto  overflow-y   rounded-lg">
              <NewsCards
                articles={newsArticles}
                activeArticle={activeArticle}
              />
            </div>

            <div class="px-4 md:hidden">
              <div
                class="-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20"
                style={{ borderRadius: "20px" }}
              ></div>
            </div>

            <p class="text-center p-4 text-gray-600 mt-10">
              Created by{" "}
              <a class="border-b text-blue-500" target="_blank">
                stevenkeezer
              </a>
              . AI News is powered by
              <a
                href="https://alan.app/"
                target="_blank"
                class="border-b text-blue-500"
              >
                {" "}
                AlanAI
              </a>
            </p>
          </div>
        </div>
        {/* <main>
          <div class=" mx-auto py-6 ">
            <div class=" py-6 ">
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <div className={classes.logoContainer}></div>
              </div>
            </div>
          </div>
        </main> */}
      </div>
    </div>
  );
};

export default App;
