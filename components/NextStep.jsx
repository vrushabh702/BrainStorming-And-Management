import React, { useEffect, useState } from "react"
import Loading from "./common/loading"

const NextStep = () => {
  const [nextPageData, setNextPageData] = useState(null)
  const [nextTableData, setNextTableData] = useState(null)
  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [newTask, setNewTask] = useState({
    status: "🔴 InComplete",
    task: "",
    assignee: { name: "", email: "", photo: "" },
    dueDate: "",
  })

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }])
    setNewTask({
      status: "🔴 InComplete",
      task: "",
      assignee: { name: "", email: "", photo: "" },
      dueDate: "",
    })
    setShowForm(false)
  }

  const fetchNextPageData = async () => {
    try {
      const nextPageRes = await fetch("/api/nextStepPage")
      const nextPageData = await nextPageRes.json()
      setNextPageData(nextPageData[0])
      console.log("nextPageData", nextPageData)
      const nextTableRes = await fetch("/api/nextTable")
      const nextTableData = await nextTableRes.json()
      setNextTableData(nextTableData)
    } catch (error) {
      console.error("Error fetching next page data:", error)
    }
  }

  useEffect(() => {
    fetchNextPageData()
  }, [])

  if (!nextPageData) {
    return <Loading />
  }

  return (
    <section className="p-6 md:p-10 bg-slate-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl text-slate-500 font-bold mb-4">
        {nextPageData.welcomeMessage}
      </h1>
      {/* Container */}
      <div className="w-full max-w-4xl bg-[#f3fdf6] shadow-lg rounded-lg p-6 md:p-10 border border-green-200">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-[#94f7b5] text-black  text-xs rounded-lg">
              {nextPageData.nextStepsLabel}
            </div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#94f7b5] text-black px-4 py-2 rounded-lg hover:bg-[#7ad99c] transition-all"
          >
            Add Task
          </button>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mt-4">
          {nextPageData.nextStepsTitle}
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          {nextPageData.trackActionItems}
        </p>

        {showForm && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center  justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New Task</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>

                  <select
                    value={newTask.status}
                    onChange={(e) =>
                      setNewTask({ ...newTask, status: e.target.value })
                    }
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="✅ Completed">✅ Completed</option>
                    <option value="🟡 InProgress">🟡 InProgress</option>
                    <option value="🔴 InComplete">🔴 InComplete</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Task
                  </label>
                  <input
                    type="text"
                    value={newTask.task}
                    onChange={(e) =>
                      setNewTask({ ...newTask, task: e.target.value })
                    }
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Assignee
                  </label>
                  <div className="flex flex-wrap items-center gap mt-1">
                    <div className="flex  items-baseline justify-between">
                      <input
                        type="text"
                        placeholder="Name"
                        value={newTask.assignee.name}
                        onChange={(e) =>
                          setNewTask({
                            ...newTask,
                            assignee: {
                              ...newTask.assignee,
                              name: e.target.value,
                            },
                          })
                        }
                        className="p-2 border border-gray-300 rounded-lg flex"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={newTask.assignee.email}
                        onChange={(e) =>
                          setNewTask({
                            ...newTask,
                            assignee: {
                              ...newTask.assignee,
                              email: e.target.value,
                            },
                          })
                        }
                        className="p-2 border border-gray-300 rounded-lg flex"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Photo URL"
                      value={newTask.assignee.photo}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          assignee: {
                            ...newTask.assignee,
                            photo: e.target.value,
                          },
                        })
                      }
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) =>
                      setNewTask({ ...newTask, dueDate: e.target.value })
                    }
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowForm(false)}
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddTask}
                    className="bg-[#94f7b5] text-black px-4 py-2 rounded-lg hover:bg-[#7ad99c] transition-all"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="rounded-2xl">
              <tr className="bg-black rounded-2xl text-white">
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
                    <div className="flex items-center gap-2">
                      <img
                        src={task.assignee.photo}
                        alt={task.assignee.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{task.assignee.name}</p>
                        <p className="text-sm text-gray-600">
                          {task.assignee.email}
                        </p>
                      </div>
                    </div>
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
