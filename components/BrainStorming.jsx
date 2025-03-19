import Image from "next/image"
import React from "react"
import Navbar from "./Navbar"

const BrainStorming = () => {
  return (
    <div>
      <Navbar></Navbar>

      <section className="p-6 md:p-10 bg-gray-100 min-h-screen flex flex-row items-center">
        {/* side bar */}

        {/* Container */}
        <div className="w-full max-w-4xl bg-[#f5fbff] shadow-lg rounded-lg p-6 md:p-10">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="p-1 bg-blue-500 text-white  text-xs rounded-full">
              Brainstorming
            </div>
          </div>

          {/* Title */}
          <div className="flex items-center justify-baseline">
            <div className="me-5">
              <Image
                src="/assets/images/brainStorming/idea.png"
                height={20}
                width={20}
                className="w-20 h-20"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold mt-4">Rapid ideation</h1>
              <p className="text-gray-600 text-lg font-semibold">6 min</p>
              <p className="text-gray-500 text-sm mt-2 md:w-[25rem]">
                Grab a sticky. Write an idea on it. Grab another. Write another.
                Again, and again, and again—as fast as you can!
              </p>
            </div>
          </div>

          {/* Sticky Notes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-full h-24 sm:h-[12rem] bg-[#80caff] text-[#5a8eb3] p-2 rounded-lg flex items-center justify-center text-sm text-center"
              >
                Type anything, @mention anyone
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrainStorming
