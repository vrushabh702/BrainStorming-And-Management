import { connectDB } from "@/libs/db"

export default async function handler(req, res) {
  try {
    const connection = await connectDB()
    const [rows] = await connection.execute("select * from agenda")
    connection.end()

    if (rows.length === 0) {
      return res.status(404).json({ message: "No agenda found" })
    }

    const agendaData = rows.map((row) => ({
      title: row.title,
      agenda: {
        date: row.date,
        agendaTag: row.agendaTag,
        whoIsHere: row.whoIsHere,
        meetingGoals: row.meetingGoals,
        discussionPrompt: row.discussionPrompt,
      },
      goals: JSON.parse(row.goals),

      discussionTopics: JSON.parse(row.discussionTopics),
      variant: row.variant,
    }))[0]
    return res.status(200).json(agendaData)
  } catch (error) {
    console.error("Database Error", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
