import { connectDB } from "@/libs/db"

export default async function handler(req, res) {
  try {
    const connection = await connectDB()
    const [rows] = await connection.execute("SELECT * FROM card_styles")
    await connection.end()

    return res.status(200).json(rows)
  } catch (error) {
    console.error("Database error:", error)
    res.status(500).json({ error: "Failed to fetch data 2" })
  }
}
