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
  "YOURALANKEY";

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

                <div></div>

                <div class="hidden md:flex  items-center">
                  <div class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-4">
                    <img class="w-12" src="./GitLogo.png"></img>
                  </div>
                  <a
                    href="#"
                    class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-gray-200 md:overflow-hidden ">
              <div class="px-4  pt-8 pb-8 flex">
                <div class="relative w-full mx-auto md:mx-auto md:invisible lg:visible">
                  <div class="flex sm:flex-row flex-col items-center lg:gap-10 max-w-screen-xl mx-auto justify-center">
                    <div>
                      <h1 class="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                        Search the news hands-free
                      </h1>
                      <p class="text-gray-600 md:text-xl md:px-18">
                        Powered by artificial intelligence to bring you the
                        latest headlines.
                      </p>
                      <div class="flex mt-6 ">
                        <span class="text-gray-600 italic">
                          Try saying: Show me the latest news
                        </span>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="w-screen max-w-sm"
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 364.7 252.27"
                      >
                        <defs>
                          <linearGradient
                            id="linear-gradient"
                            x1="-82.33"
                            y1="-5.84"
                            x2="668.51"
                            y2="555.72"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.01" />
                            <stop offset="0.08" stop-opacity="0.69" />
                            <stop offset="0.21" stop-opacity="0.32" />
                            <stop offset="1" stop-opacity="0" />
                          </linearGradient>
                          <linearGradient
                            id="linear-gradient-2"
                            x1="169.29"
                            y1="158.63"
                            x2="247.42"
                            y2="406.75"
                            xlinkHref="#linear-gradient"
                          />
                          <linearGradient
                            id="linear-gradient-3"
                            x1="188.89"
                            y1="70.29"
                            x2="141.12"
                            y2="393.21"
                            xlinkHref="#linear-gradient"
                          />
                          <linearGradient
                            id="linear-gradient-4"
                            x1="181.1"
                            y1="118.92"
                            x2="238.34"
                            y2="383.44"
                            xlinkHref="#linear-gradient"
                          />
                          <linearGradient
                            id="linear-gradient-5"
                            x1="141.52"
                            y1="115.44"
                            x2="104.71"
                            y2="364.26"
                            xlinkHref="#linear-gradient"
                          />
                          <linearGradient
                            id="linear-gradient-6"
                            x1="140.64"
                            y1="230.56"
                            x2="121.06"
                            y2="280.93"
                            xlinkHref="#linear-gradient"
                          />
                          <linearGradient
                            id="linear-gradient-7"
                            x1="227.27"
                            y1="31.41"
                            x2="311.18"
                            y2="764.24"
                            xlinkHref="#linear-gradient"
                          />
                          <linearGradient
                            id="linear-gradient-8"
                            x1="270.38"
                            y1="119.43"
                            x2="294.31"
                            y2="236.55"
                            xlinkHref="#linear-gradient"
                          />
                          <linearGradient
                            id="linear-gradient-9"
                            x1="215.42"
                            y1="160.73"
                            x2="348.7"
                            y2="150.41"
                            xlinkHref="#linear-gradient"
                          />
                          <linearGradient
                            id="linear-gradient-10"
                            x1="208.92"
                            y1="79.5"
                            x2="330.56"
                            y2="186.12"
                            xlinkHref="#linear-gradient"
                          />
                        </defs>
                        <title>8</title>
                        <path
                          d="M182.65,54.48c-2.85,1.32-5.65,2.75-8.4,4.32C142.1,77.1,119.6,111.45,84.4,122.86c-9.53,3.09-19.76,3.94-27.46,10.7a82.36,82.36,0,0,0-14.37,17.26,113.52,113.52,0,0,0-16.4,43.54c-4.81,30,1.92,63.78,25.79,84.33,17.94,15.46,44.64,16.24,67.11,12.06,12.89-2.39,25.24-7.05,38-10.12a157.66,157.66,0,0,1,68-1.21c14.83,3,29.16,8.17,44,11.34,10.66,2.29,21.76,3.56,32.64,2.15,10.44-1.35,18.49-6.33,28-10.35,18.09-7.67,36.4-17.45,47.93-33.94a67.52,67.52,0,0,0,11.59-44.14A74.43,74.43,0,0,0,371,162.42c-4.59-5.28-10.59-9.94-12.83-16.66s-2.59-14.56-3.29-21.45c-1.52-15.11-3.34-30.65-10.7-43.93C336,65.62,321.51,55.05,305.7,49.1s-32.9-7.65-49.79-7.85C230.9,41,205.23,44,182.65,54.48Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                          opacity="0.18"
                          style={{ isolation: "isolate" }}
                        />
                        <path
                          d="M349.48,186.25l-17,12L257,251.28a182.54,182.54,0,0,1-18.08,11.48c-5.09,2.75-8,8-14.16,9.4a24.51,24.51,0,0,1-9.23-.16,86.43,86.43,0,0,1-14.61-3.71c-.58-.2-1.41-.32-1.67.24s1.14.5.65.12c-44.25-6-86.53-22-130.38-30.4a2.39,2.39,0,0,1-.45-4.57c3.53-1.44,7.38-2,11.27-2.76,7-1.29,13.9-2.55,20.88-3.69a351,351,0,0,1,42.53-4.72c23.68-1,47.58,1.53,71-2.14C237,216.89,257.94,208,278.64,199.1c5-2.14,10.09-4.36,14-8.12,3.07-2.95,5.53-6.84,9.44-8.78,4.06-2,9-1.65,13.36-1.45C326.94,181.26,338.3,183.6,349.48,186.25Z"
                          transform="translate(-24.71 -41.23)"
                          fill="url(#linear-gradient)"
                        />
                        <path
                          d="M71.44,223.36l98.84-43a11.86,11.86,0,0,1,6.93-1.15L299.46,189.6c2.34.33,1.92,10.39,0,12l-72.2,61.46a18.15,18.15,0,0,1-16.17,4.06L72.31,233.37C70.54,232.94,69.78,224.18,71.44,223.36Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M71.44,223.36l98.84-43a11.86,11.86,0,0,1,6.93-1.15L299.46,189.6c2.34.33,1.92,10.39,0,12l-72.2,61.46a18.15,18.15,0,0,1-16.17,4.06L72.31,233.37C70.54,232.94,69.78,224.18,71.44,223.36Z"
                          transform="translate(-24.71 -41.23)"
                          fill="url(#linear-gradient-2)"
                        />
                        <path
                          d="M299.49,194.47l-72.2,61.46A18.13,18.13,0,0,1,211.12,260L72.31,226.24c-1.77-.43-2-3.23-.35-4.06L110,200.71l10-5.62L150.41,178a11.85,11.85,0,0,1,6.93-1.15l140.92,12.26C300.6,189.39,301.38,192.86,299.49,194.47Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <polygon
                          points="132.62 138.97 261.43 158.02 221.78 190.22 89.59 163.47 132.62 138.97"
                          fill="url(#linear-gradient-3)"
                        />
                        <path
                          d="M287.7,202.73c-.38,1.15-1.63,1.74-2.76,2.19a244.67,244.67,0,0,1-25.16,7.92c-8.09,2.23-16.53,4.48-24.79,3a9.27,9.27,0,0,0-3.18-.26c-1.76.32-3.06,1.75-4.43,2.88-6.83,5.62-16.81,4.34-25.51,2.76a65.89,65.89,0,0,0,.56-8.65,405.51,405.51,0,0,1-69.53-4.74c-5-.77-18.51-1.38-21.92-5.53a5.35,5.35,0,0,1-1-1.56l10-5.62a6.08,6.08,0,0,1,1.34.21,247.45,247.45,0,0,0,81.82,8.5c.71-3.59-3-8.08-.18-10.46a5.06,5.06,0,0,1,3.19-.93A25.7,25.7,0,0,1,218.37,195c2.25,1.1,4.37,2.54,6.8,3.16a22.11,22.11,0,0,0,7.22.23,414.86,414.86,0,0,1,46.11-.88c2.53.09,5.18.24,7.33,1.57C287.09,199.84,288.18,201.32,287.7,202.73Z"
                          transform="translate(-24.71 -41.23)"
                          fill="url(#linear-gradient-4)"
                        />
                        <polygon
                          points="119.14 171.45 172.22 182.18 144.77 204.57 89.59 192.19 119.14 171.45"
                          fill="url(#linear-gradient-5)"
                        />
                        <path
                          d="M117.31,237.3a8.59,8.59,0,0,0,5.47,4.47c3.9.94,26.63,6.76,26.63,6.76s3.7.44,5.75-2Z"
                          transform="translate(-24.71 -41.23)"
                          fill="url(#linear-gradient-6)"
                        />
                        <path
                          d="M153.29,176.79l145.38,20.69a4.22,4.22,0,0,0,4.72-3.35L324.13,89.4a8.11,8.11,0,0,0-7.25-9.66L173.31,67.15a8.11,8.11,0,0,0-8.77,7.2Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M153.29,176.79l145,20.63a4.63,4.63,0,0,0,5.19-3.68L324.13,89.4a8.11,8.11,0,0,0-7.25-9.66L173.31,67.15a8.11,8.11,0,0,0-8.77,7.2Z"
                          transform="translate(-24.71 -41.23)"
                          fill="url(#linear-gradient-7)"
                        />
                        <polygon
                          points="271.33 150.23 291.98 44.56 145.57 31.04 133.93 131.09 271.33 150.23"
                          fill="#fff"
                        />
                        <path
                          d="M284,105,181.31,94.31l2.33-13L286.36,92a6.21,6.21,0,0,1,5.72,7.24h0A7.4,7.4,0,0,1,284,105Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <polygon
                          points="156.6 53.08 239.55 61.73 241.88 48.69 158.93 40.03 156.6 53.08"
                          fill="#fff"
                          opacity="0.56"
                        />
                        <ellipse
                          cx="277.87"
                          cy="96.99"
                          rx="3.41"
                          ry="3.13"
                          transform="translate(-40.95 66.66) rotate(-21.36)"
                          fill="none"
                          stroke="#fff"
                          strokeMiterlimit="10"
                          stroke-width="1.04"
                        />
                        <path
                          d="M280,102.42c-.07-.17-.94-2.54-.94-2.54"
                          transform="translate(-24.71 -41.23)"
                          fill="none"
                          stroke="#fff"
                          strokeMiterlimit="10"
                          stroke-width="1.04"
                        />
                        <polygon
                          points="258.3 82.59 153.5 71.37 154.05 69.65 258.84 80.87 258.3 82.59"
                          fill="#1eb2ff"
                          opacity="0.18"
                          style={{ isolation: "isolate" }}
                        />
                        <polygon
                          points="190.76 68.83 155.37 64.64 156.09 61.56 191.49 65.42 190.76 68.83"
                          fill="#1eb2ff"
                          opacity="0.18"
                          style={{ isolation: "isolate" }}
                        />
                        <polygon
                          points="257 89.52 152.2 78.3 152.74 76.58 257.54 87.8 257 89.52"
                          fill="#1eb2ff"
                          opacity="0.18"
                          style={{ isolation: "isolate" }}
                        />
                        <g opacity="0.66" style={{ isolation: "isolate" }}>
                          <polygon
                            points="185.13 96.51 149.74 92.33 150.46 89.24 185.86 93.1 185.13 96.51"
                            fill="#1eb2ff"
                            opacity="0.18"
                            style={{ isolation: "isolate" }}
                          />
                          <polygon
                            points="252.39 110.89 147.59 99.67 148.14 97.94 252.94 109.17 252.39 110.89"
                            fill="#1eb2ff"
                            opacity="0.18"
                            style={{ isolation: "isolate" }}
                          />
                          <polygon
                            points="250 118.91 145.2 107.69 145.75 105.97 250.54 117.19 250 118.91"
                            fill="#1eb2ff"
                            opacity="0.18"
                            style={{ isolation: "isolate" }}
                          />
                        </g>
                        <polygon
                          points="247.97 136.24 143.28 122.57 143.82 120.86 248.51 134.53 247.97 136.24"
                          fill="#1eb2ff"
                          opacity="0.18"
                          style={{ isolation: "isolate" }}
                        />
                        <path
                          d="M214.59,167.37S107.49,202.83,92.85,171s65.53-40.55,65.53-40.55S64.7,139.78,85.72,179.1s135.26.44,135.26.44Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fff"
                        />
                        <path
                          d="M214.84,165.9a9,9,0,0,0,1.16,4.15l2.64,5.64a13.74,13.74,0,0,0,2.34,3.85,7,7,0,0,0,6,2,3,3,0,0,0,2.46-1.6c.45-1.17-.31-2.42-.92-3.51-1.64-2.93-2.34-6.27-3.12-9.53-.6-2.54-1.82-6.12-4.92-6.48C217.74,160.1,215,163.23,214.84,165.9Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M241.74,152.76s-22.66-20.73-44.81,0c0,0,17.12-2.21,22.4,7.22Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M251,171.71s-1.08,30.7-31.39,32c0,0,13.57-10.67,10.54-21.05Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M219.33,160s71.45-41,111.62-34.44c0,0-9.08,29.52-100.83,57.1Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fff"
                        />
                        <path
                          d="M331,125.54s-9.08,29.52-100.83,57.1l-3.27-6.87L219.33,160s63.42-36.44,104.35-35.14A56.19,56.19,0,0,1,331,125.54Z"
                          transform="translate(-24.71 -41.23)"
                          fill="url(#linear-gradient-8)"
                        />
                        <path
                          d="M331,125.54c-6.35,8.33-28.27,23.68-73.33,40.05q-3.82,1.4-7.87,2.8-10.65,3.68-22.9,7.38L219.34,160s7.81-4.69,19.75-10.65c6.3-3.15,13.75-6.65,21.81-10C283.39,130,310.65,121.75,331,125.54Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fff"
                        />
                        <path
                          d="M275.94,140.85c-3.81,1.59-8.09,1.33-12.21,1.6a15.79,15.79,0,0,0-3.62.57,18.67,18.67,0,0,0-6.25,4,1.36,1.36,0,0,0-.52.69,1.32,1.32,0,0,0,.2.83,41.6,41.6,0,0,0,3.14,5.35c1.4,2,3.05,4.13,3,6.59a9,9,0,0,1-2.09,5.12l-.3.42a56.16,56.16,0,0,1-4.69,5.53c-1.24,1.28-.44,5.19-3.44,4.25-2.61-.81-1.34-3.91-.45-5.54l1-1.86,1.68-3.11c1.28-2.35,2.58-5.14,1.5-7.59-.76-1.71-2.51-2.74-4.15-3.66a63.69,63.69,0,0,0-9.7-4.69c6.3-3.15,13.75-6.65,21.81-10a114.41,114.41,0,0,0,15.82.23C277.11,140,276.49,140.62,275.94,140.85Z"
                          transform="translate(-24.71 -41.23)"
                          fill="url(#linear-gradient-9)"
                        />
                        <circle
                          cx="242.33"
                          cy="109.06"
                          r="8.22"
                          fill="#1eb2ff"
                        />
                        <circle
                          cx="242.33"
                          cy="108.78"
                          r="5.6"
                          fill="url(#linear-gradient-10)"
                        />
                        <path
                          d="M254.75,132.39c0,.05-1.18-.15-1.15-.09a2.56,2.56,0,0,0,1,.72,36.1,36.1,0,0,0,4.34,1.44c1.47.15,2.18-1.24,2.64-2.41.37-.94.75-1.88,1.14-2.81a5.6,5.6,0,0,0,.56-1.91,1,1,0,0,0-.06-.45.84.84,0,0,0-.45-.4,1.22,1.22,0,0,0-.92,0c-.54.23-.79.84-1.06,1.36-.63,1.19-1.62,2.16-2.16,3.39a1.56,1.56,0,0,1-1.11-.37l-1.75-1.14a.64.64,0,0,0-.29-.13.53.53,0,0,0-.45.21,2.38,2.38,0,0,0-.54,1.34,1.94,1.94,0,0,0,0,.76A1.92,1.92,0,0,0,254.75,132.39Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fcab9a"
                        />
                        <path
                          d="M256.1,129.67l.62.38c.09,0,.18.1.21.2a.41.41,0,0,1,0,.22l-.41,1.82a5.94,5.94,0,0,1-.86,2.29c-.24.33-2-.89-2.3-1.05a7.54,7.54,0,0,1-1.93-1.85,3.07,3.07,0,0,1-.55-1,4.11,4.11,0,0,1,.4-2.71c.7-1.37,1.88-.69,2.77.15A13.71,13.71,0,0,0,256.1,129.67Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M244.81,175.09a.66.66,0,0,0,.2.34A14.39,14.39,0,0,0,250,178.6a.79.79,0,0,0,.37.1.53.53,0,0,0,.42-.55,1.41,1.41,0,0,0-.27-.7,13.34,13.34,0,0,0-1.23-1.65,2.1,2.1,0,0,1-.75-1.39,3.54,3.54,0,0,1,.21-.79c.3-1.13-1.58-1.36-2.37-1.09A3.28,3.28,0,0,0,244.81,175.09Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fcab9a"
                        />
                        <path
                          d="M240.21,143.33s-3.41,4.76.1,9c2.43,2.94,6.08,4.94,9.44,6.62.59.3,1.29.54,1.86.9,1.11.7.43,1.29-.16,2.22q-2.22,3.57-4.48,7.09a10,10,0,0,0-1.75,4l3.81,1.16a72.82,72.82,0,0,1,7-9.93c1.13-1.34,2.59-3,2.38-4.86a9,9,0,0,0-2.18-4.63l-7.13-8.28Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#473f47"
                        />
                        <path
                          d="M256.77,120.58c.12.35.46.63.51,1s-.33.81-.58,1.22-.42,1.2-.76,1.75a.63.63,0,0,1-.28.28,1,1,0,0,1-.34.06,5.08,5.08,0,0,1-1.34-.22.4.4,0,0,0-.26-.06.36.36,0,0,0-.16.2,7.17,7.17,0,0,0-.71,3.38c0,.38,0,.86-.31,1.05a.62.62,0,0,1-.38.1c-.88,0-1.55-.79-2-1.57a10.2,10.2,0,0,1-.85-2.21,1.79,1.79,0,0,1-.08-.69,2.3,2.3,0,0,1,.28-.77,15,15,0,0,0,1.07-2.71,12.32,12.32,0,0,1,1.24-3.51,2,2,0,0,1,.95-.77,2.54,2.54,0,0,1,1.34.07,3.56,3.56,0,0,1,2.27,1.36C256.55,118.8,256.63,120.13,256.77,120.58Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fcab9a"
                        />
                        <path
                          d="M248,147.24a5.38,5.38,0,0,1-2.29-.13,11.88,11.88,0,0,0-3.32-.19,12.89,12.89,0,0,0-1.93.65,3.64,3.64,0,0,1-3-.51c0-.15,0-.31,0-.46.15-1.34-.41-3.24,0-4.53,1.47-5.15,2.72-9,5.65-13.42.84-1.27,4.15-2.9,5.51-3.58a2.49,2.49,0,0,1,1-.29,2.61,2.61,0,0,1,1.15.32c1.21.59,1.68,1.69,2.27,2.83a11,11,0,0,1,1.38,3.77c.15,1.72.76,3.33-.22,4.93-1.35,2.25-3.59,3.77-4.84,6.2A2.34,2.34,0,0,0,249,144c0,.58.41,1.11.41,1.69A1.78,1.78,0,0,1,248,147.24Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M255.71,139.13c.48.22,1,.41,1.41.57a28.78,28.78,0,0,0,7.25,1.32,43.57,43.57,0,0,0,9.34.17,8.36,8.36,0,0,0,3.6-1.13c.32-.21.65-.59.49-.94a.86.86,0,0,0-.4-.35,7.26,7.26,0,0,0-3.91-.82c0-.47-.12-1.07-.58-1.11s-.73.59-1,1c-.6,1-2,1.11-3.12,1.1a33.18,33.18,0,0,1-7.7-.79,17.06,17.06,0,0,1-3.66-1.33c-.75-.38-2.26-1.95-3-1.11S253,137.11,254,138A6.78,6.78,0,0,0,255.71,139.13Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fcab9a"
                        />
                        <path
                          d="M251.81,129.48s3.92,5.53,4.49,5.86-3.52,4.35-3.52,4.35-4.74-5.13-5.29-7.75S249.39,127.52,251.81,129.48Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M256.35,118a2.09,2.09,0,0,1-1.43.84,10.57,10.57,0,0,1-1.49.13s-.09,0-.12,0a.2.2,0,0,0-.05.15,2.81,2.81,0,0,1-1,2,.49.49,0,0,0-.18.2.55.55,0,0,0,0,.36,3.52,3.52,0,0,1,0,1.21,1.86,1.86,0,0,1-.54,1.07.38.38,0,0,0-.15.21.39.39,0,0,0,.06.21,1.71,1.71,0,0,1-.08,1.27,3.21,3.21,0,0,0-2.68-.58,1.34,1.34,0,0,0-.76.32c-1.34,1.41-2.44,3.08-3.85,4.44-.6.58-1.27,1.09-1.83,1.72a12.55,12.55,0,0,0-2,3.43,12.47,12.47,0,0,1-1.45,2.75,3.94,3.94,0,0,1-2.56,1.61,3.51,3.51,0,0,1-2.67-.92,4.39,4.39,0,0,1-1.2-4.62,1.16,1.16,0,0,0,.1-.81,1.2,1.2,0,0,0-.32-.39,3.43,3.43,0,0,1,0-4.75c.67-.63,2.28-1.24,2.37-2.28s-.84-2.07-.46-3.27a3.38,3.38,0,0,1,.59-1,5.07,5.07,0,0,1,1.9-1.67,7.45,7.45,0,0,1,2.4-.39c2.62-.18,5.36-1,7.09-3a12.86,12.86,0,0,1,1.28-1.46,5.39,5.39,0,0,1,1.82-.92,7.18,7.18,0,0,1,4.94-.07,4,4,0,0,1,2.31,2.61A1.93,1.93,0,0,1,256.35,118Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fc682d"
                        />
                        <path
                          d="M256.06,122.33a10.92,10.92,0,0,1-1.15-.1c-.11.21.39,1,.5,1.06a.29.29,0,0,0,.38,0,.56.56,0,0,0,.09-.21l.18-.76"
                          transform="translate(-24.71 -41.23)"
                          fill="#fff"
                        />
                        <circle cx="230.45" cy="79.1" r="0.3" fill="#231f20" />
                        <rect
                          x="260.99"
                          y="124.06"
                          width="1.44"
                          height="3.94"
                          rx="0.5"
                          transform="translate(3.49 -87.98) rotate(10.78)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M261.43,124.35a1.44,1.44,0,0,0-1.19.91,1.63,1.63,0,0,0,.64,1.74,4.09,4.09,0,0,0,1.84.67.65.65,0,0,0,.58-.08.64.64,0,0,0,.16-.34,3.47,3.47,0,0,0,.19-1.39A2.11,2.11,0,0,0,261.43,124.35Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#fcab9a"
                        />
                        <path
                          d="M259.61,122.2l-.1,1.14a.59.59,0,0,0,.44.7,15.55,15.55,0,0,1,5.53,1.44,19.29,19.29,0,0,1,2.68,1.82c.34.27.83,0,.91-.58l.89-6c.08-.53-.3-.9-.7-.7-1.67.85-5.42,2.41-8.89,1.45C260,121.38,259.65,121.73,259.61,122.2Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#1eb2ff"
                        />
                        <path
                          d="M245.05,173.86a2.41,2.41,0,0,0-1,1.32.84.84,0,0,0,0,.52,1,1,0,0,0,.31.38,21.93,21.93,0,0,0,5.34,3.51,2.18,2.18,0,0,0,.79.23.79.79,0,0,0,.72-.31,1,1,0,0,0,.14-.53,2.55,2.55,0,0,0-2.57-2.63,4.56,4.56,0,0,1-.74,0,1.88,1.88,0,0,1-.64-.3,9.72,9.72,0,0,1-1.48-1.06A13.53,13.53,0,0,1,245.05,173.86Z"
                          transform="translate(-24.71 -41.23)"
                          fill="#473f47"
                        />
                      </svg>
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
