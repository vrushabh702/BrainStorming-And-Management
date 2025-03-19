import React from "react"
import Image from "next/image"
import { caveat } from "@/pages"
import Navbar from "./Navbar"

const Agenda = () => {
  return (
    <section>
      <Navbar></Navbar>
      {/* <h1 className={caveat.className}>BRAINSTORM FOR NEW PROJECT IDEAS</h1> */}
      {/* lg:flex-wrap add this  */}
      <div className="bg-slate-100 p-6 flex  gap-6 ">
        <div className="max-w-[14rem] w-full sm:w-auto bg-[#fbf7ff] p-6 rounded-lg shadow-lg">
          <h3 className="mt-6 font-semibold text-lg">
            Add discussion topics as a group
          </h3>
          <div className="flex mt-2 lg:flex-wrap">
            <div className="bg-[#d9b8ff] text-[#9881b3] p-4 rounded-md  h-[12rem]  shadow-md  w-full sm:w-[12rem] min-w-[120px]">
              <div className="bg-[#d9b8ff]  border-purple-500 border-2 rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
                +
              </div>
              Type anything, @mention anyone
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-[#fbf7ff] p-6 rounded-lg shadow-lg w-full">
          <h1
            className={`${caveat.className} text-2xl md:text-3xl font-bold text-center mb-4`}
          >
            BRAINSTORM FOR NEW PROJECT IDEAS
          </h1>

          <div className="bg-purple-200 p-1 rounded-full inline-block text-[#9747ff] text-xs font-semibold">
            Agenda
          </div>
          <p className="mt-2 font-semibold text-lg">Agenda — Mon Jan 29 2024</p>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex-1 bg-[#efe3ff] p-4 border-2 border-[#9747ff] min-h-[16rem] w-full md:w-1/4 rounded-lg shadow-md">
              <h2 className={`text-lg font-semibold ${caveat.className}`}>
                WHO'S HERE?
              </h2>
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Stamp Your Face"
                className="mt-2 w-24"
              /> */}
            </div>

            <div className="flex-1 bg-[#efe3ff] p-4 border-2 rounded-lg  border-[#9747ff] w-full sm:w-1/4  shadow-md">
              <h2 className={`text-lg font-semibold ${caveat.className}`}>
                MEETING GOALS
              </h2>
              <ul className="list-disc list-inside mt-2">
                <li>Add a meeting goal here</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-6 font-semibold text-lg">
            Add discussion topics as a group
          </h3>
          <div className="flex gap-4 mt-2 lg:flex-wrap">
            <div className="bg-[#d9b8ff] p-4 rounded-md text-[#9881b3] h-[12rem]  shadow-md  w-full sm:w-1/4  min-w-[120px]">
              Type anything, @mention anyone
            </div>
            <div className="bg-[#d9b8ff] p-4 rounded-md text-[#9881b3] shadow-md  w-full sm:w-1/4 min-w-[120px]">
              Type anything, @mention anyone
            </div>
            <div className="bg-[#d9b8ff] p-4 rounded-md text-[#9881b3] shadow-md w-full sm:w-1/4 min-w-[120px]">
              Type anything, @mention anyone
            </div>
          </div>
        </div>

        <div className="max-w-[14rem] w-full sm:w-auto  bg-[#fbf7ff] p-6 rounded-lg shadow-lg">
          <h3 className="mt-6 font-semibold text-lg">
            Active user list on discussion
          </h3>
          <div className="flex mt-2 lg:flex-wrap">
            <div className="bg-[#d9b8ff] text-[#9881b3] p-2 rounded-full  h-auto  shadow-md w-full sm:w-[12rem] min-w-[120px] flex items-center justify-center">
              <div className="bg-[#d9b8ff] border-purple-500 border-2 rounded-full h-[3rem] w-[3rem] flex items-center justify-center me-2">
                <Image
                  className="h-[3rem] w-[3rem] rounded-full"
                  height={48}
                  width={48}
                  src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                ></Image>
              </div>
              Jack Resider
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agenda
