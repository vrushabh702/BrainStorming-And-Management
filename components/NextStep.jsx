import React, { useEffect, useState } from "react"

const NextStep = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
  }, [])
  return (
    <section className="p-6 md:p-10 bg-slate-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl text-slate-500 font-bold mb-4">
        Welcome to the Brainstorming App
      </h1>
      {/* Container */}
      <div className="w-full max-w-4xl bg-[#f3fdf6] shadow-lg rounded-lg p-6 md:p-10 border border-green-200">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-1 bg-[#94f7b5] text-black  text-xs rounded-lg">
            Next steps
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mt-4">Next Steps</h1>
        <p className="text-gray-600 text-sm mt-1">
          Track action items in the table below.
        </p>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Task</th>
                <th className="p-3 text-left">Assignee</th>
                <th className="p-3 text-left">Due date</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-300">
                  <td className="p-3 border border-gray-300">{task.status}</td>
                  <td className="p-3 border border-gray-300">{task.task}</td>
                  <td className="p-3 border border-gray-300">
                    {task.assignee}
                  </td>
                  <td className="p-3 border border-gray-300">{task.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default NextStep
