import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [result1, result2] = await Promise.all([
        axios(
          "https://api.thingspeak.com/channels/2022914/fields/1.json?api_key=D7U7PMQOVKWMF128&results=1"
        ),
        axios(
          "https://api.thingspeak.com/channels/2022914/fields/3.json?api_key=D7U7PMQOVKWMF128&results=10"
        ),
      ]);
      setData1(result1.data.feeds);
      setData2(result2.data.feeds);
    };

    fetchData();
  }, []);

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Monitoring Hidroponics System v0.1.4
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Last Updated :
              </p>
              {data1.map((entry) => {
                if (!entry.field1) {
                  return null;
                }
                return (
                  <div key={entry.id}>
                    <p className="mt-0 text-lg leading-2 text-black-600"> {entry.created_at}</p>
                  </div>
                );
              })}
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Suhu :
              </p>
              {data1.map((entry) => {
                if (!entry.field1) {
                  return null;
                }
                return (
                  <div key={entry.id}>
                    <p className="mt-0 text-lg leading-2 text-black-600"> {entry.field1} c</p>
                  </div>
                );
              })}
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Prox. Tinggi Tananaman :
              </p>
              {data2.map((entry) => {
                if (!entry.field3) {
                  return null;
                }
                return (
                  <div key={entry.id}>
                    <p className="mt-0 text-lg leading-2 text-black-600"> {entry.field3} cm</p>
                  </div>
                );
              })}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-rose-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Refresh
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}
