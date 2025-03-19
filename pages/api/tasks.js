export default function handler(req, res) {
  if (req.method === "GET") {
    const tasks = [
      {
        id: 1,
        status: "✅",
        task: "Add a new task",
        assignee: "@mention your teamate",
        dueDate: "july 8",
      },
      {
        id: 2,
        status: "🟡",
        task: "Add a new task",
        assignee: "@",
        dueDate: "july 8",
      },
      {
        id: 1,
        status: "🔴",
        task: "Add a new task",
        assignee: "@",
        dueDate: "",
      },
    ]
    res.status(200).json(tasks)
  } else if (req.method === "POST") {
    const newTask = req.body
    res.status(201).json(newTask)
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
