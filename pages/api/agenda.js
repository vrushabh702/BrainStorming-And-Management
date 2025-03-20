export default async function handler(req, res) {
  try {
    const url =
      "https://raw.githubusercontent.com/vrushabh702/backend_json/main/brainStormingApp/agenda.json"

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to fetch agenda data" })
  }
}
