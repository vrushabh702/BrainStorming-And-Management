import React, { useEffect, useState } from "react"
import Image from "next/image"
import { caveat } from "@/pages"
import Navbar from "./Navbar"
import Cards from "./common/cards"
import ActiveUsers from "./common/ActiveUsers"
import Loading from "./common/loading"

const Agenda = () => {
  const [agendaData, setAgendaData] = useState(null)
  const [editableIndex, setEditableIndex] = useState(null)
  const [tempValue, setTempValue] = useState("")
  const [droppedUsers, setDroppedUsers] = useState([])
  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const [users, setUsers] = useState([])
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const fetchAgendaData = async () => {
      try {
        const response = await fetch("/api/agenda")
        const data = await response.json()
        setAgendaData(data)
      } catch (error) {
        console.error("Error fetching agenda data:", error)
      }
    }
    fetchAgendaData()
  }, [])

  if (!agendaData) {
    return <Loading />
  }

  const handleEditClick2 = (index, value) => {
    setEditableIndex(index)
    setTempValue(value)
  }

  const handleInputChange2 = (e) => {
    setTempValue(e.target.value)
  }

  const handleBlur2 = () => {
    setEditableIndex(null) // Save and exit editing mode
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
    // setIsDraggingOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)

    // setIsDraggingOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    // setIsDraggingOver(false)

    const name = e.dataTransfer.getData("text")
    const imageUrl = e.dataTransfer.getData("imageUrl")

    if (!users.some((user) => user.name === name)) {
      setUsers([...users, { name, imageUrl }])
    }

    // const data = JSON.parse(e.dataTransfer.getData("text/plain"))
    // setDroppedUsers([...droppedUsers, data])
  }

  return (
    <section>
      {/* <h1 className={caveat.className}>BRAINSTORM FOR NEW PROJECT IDEAS</h1> */}
      {/* lg:flex-wrap add this  */}
      <div className="bg-slate-100 p-6 flex  gap-6 ">
        <Cards variant={agendaData.variant}></Cards>

        <div className="max-w-4xl mx-auto bg-[#fbf7ff] p-6 rounded-lg shadow-lg w-full">
          <h1
            className={`${caveat.className} text-2xl md:text-3xl font-bold text-center mb-4`}
          >
            {agendaData.title}
          </h1>

          <div className="bg-purple-200 p-1 rounded-full inline-block text-[#9747ff] text-xs font-semibold">
            {agendaData.agenda.agendaTag}
          </div>
          <p className="mt-2 font-semibold text-lg">{agendaData.agenda.date}</p>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div
              className={`flex-1 bg-[#efe3ff] p-4 border-2 border-dashed ${
                isDragging ? "border-[#9747ff]" : "border-[#9747ff]/50"
              }  min-h-[16rem] w-full md:w-1/4 rounded-lg shadow-md cursor-pointer transition-colors duration-200 
              
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <h2 className={`text-lg font-semibold ${caveat.className}`}>
                {agendaData.agenda.whoIsHere}
                <br></br>
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-[#d9b8ff] px-3 py-1 rounded-full"
                  >
                    <div className="relative h-8 w-8">
                      <Image
                        src={user.imageUrl}
                        alt={user.name}
                        fill
                        // height={8}
                        // width={8}
                        className="rounded  full border-2 border-[#9747ff] object-cover"
                        draggable={false}
                      />
                    </div>
                    <span className="text-sm text-[#9747ff]">{user.name}</span>
                  </div>
                ))}
              </div>
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Stamp Your Face"
                className="mt-2 w-24"
              /> */}
            </div>

            <div className="flex-1 bg-[#efe3ff] p-4 border-2 rounded-lg  border-[#9747ff] w-full sm:w-1/4  shadow-md">
              <h2 className={`text-lg font-semibold ${caveat.className}`}>
                {agendaData.agenda.meetingGoals}
              </h2>
              <ul className="list-disc list-inside mt-2">
                {agendaData.goals.map((goal, index) => (
                  <li key={index}>
                    {editableIndex === index ? (
                      <input
                        type="text"
                        value={tempValue}
                        onChange={handleInputChange2}
                        onBlur={handleBlur2}
                        autoFocus
                        className="border-b-2 border-[#9747ff] focus:outline-none"
                      />
                    ) : (
                      <span onClick={() => handleEditClick2(index, goal)}>
                        {tempValue ? tempValue : goal}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-6 font-semibold text-lg">
            {agendaData.agenda.discussionPrompt}
          </h3>
          <div className="flex gap-4 mt-2 lg:flex-wrap">
            {agendaData.discussionTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-[#d9b8ff] p-4 rounded-md text-[#9881b3] h-[12rem]  shadow-md  w-full sm:w-1/4  min-w-[120px]"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>

        <ActiveUsers variant="agenda"></ActiveUsers>
      </div>
    </section>
  )
}

export default Agenda
