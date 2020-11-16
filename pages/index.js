import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/FooterAdmin.js";

export default function Landing() {
  return (
    <>
    
    <Head>
      <title>Falck Snow Blowing</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('landing.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    Snow removal without the hassle.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Residential snow removal serving the Wahpeton/Breckenridge area.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24 border-none">
          <div className="container mx-auto px-4" id="services">

            <div className="flex flex-wrap">
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-snowflake text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Wahpeton / Breckenridge Snow Removal.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let the snow get you down. Falck Snow Blowing offers snow removal services for the Wahpeton/Breckenridge area. Why not have a cup of hot tea while we do the work for you?
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Call us today for a quote.
                </p>
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <a href="tel:1-701-640-3832" className="font-bold text-white mt-8">
                    <i className="fas fa-phone pr-4"></i>
                    701-640-3832
                  </a>
                </button>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <Image
                    alt="..."
                    src="/241.jpg"
                    height={600}
                    width={600}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-gray-800 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Snow Removal Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Don't let the North Dakota winters get you down. We provide fast and effective snow removal services for residents of the Wahpeton/Breckenridge.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4" id="about">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Image
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/249.jpg"
                  height={600}
                  width={300}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-300">
                    <i className="fas fa-info text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">About Us</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Having survived many winters in the arctic tundra of North Dakota, Jackson Falck has years of experience in heavy equipment operation and snow removal in Wahpeton, ND and Breckenridge, MN.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-snowplow"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            State of the art equipment
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-skiing"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Fast and effective snow removal
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-map-marker-alt"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Locally-owned small business</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 pt-16 sm:pt-16 lg:pt-24 lg:pb-56">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Need help removing snow?
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record high snow falls in the back of your mind and call Falck Snow Blowing to do the work for you.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excellent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Professional and safe snow removal services.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Competitive Pricing
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  We strive to keep our prices competitive and affordable.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Quick response time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  We respond in a timely manner so you can live your life without the worry of being snowed-in.
                </p>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-white text-gray-900 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                 <a href="tel:1-701-640-3832" className="font-bold mt-8">
                    <i className="fas fa-phone pr-4"></i>
                    701-640-3832
                  </a>
                  </button>
            </div>
          </div>

        </section>
      </main>
      <Footer />
      <style jsx global>{`
     .min-h-screen { min-height: 80vh; },
     html,
     body {
      margin: 0px auto;
      letter-spacing: -0.02em;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1,
    h2,
    h3,
    h4,
    {
      font-family: "Inter";
      font-weight: 800;
      letter-spacing: -0.07em;
    }

    h5, h6 
      {
        font-family: "Inter";
        font-weight: 600;
        letter-spacing: -0.03em;
      }
 
      `}</style>
    </>
  );
}
