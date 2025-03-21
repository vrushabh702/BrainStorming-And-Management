import { useEffect, useState } from "react"
import Loading from "./loading"

const Cards = ({ variant }) => {
  const [cards, setCards] = useState([])
  const [style, setStyle] = useState([])
  const [CustomizedStyle, setCustomizedStyle] = useState({})

  console.log("cards", cards)
  console.log("variant from parent:", variant)

  const fetchCards = async () => {
    try {
      const cardsResponse = await fetch("/api/commonCards")
      const data = await cardsResponse.json()
      setCards(data)
      const styleResponse = await fetch("/api/cardStyle")
      const styleData = await styleResponse.json()
      setStyle(styleData)
      const formatedStyle = styleData.reduce(
        (acc, { variant, bg, bg_card, text, border }) => {
          acc[variant] = { bg, bg_card, text, border }

          return acc
        },
        {}
      )
      setCustomizedStyle(formatedStyle)
      console.log("formatedStyle", formatedStyle)
    } catch (error) {
      console.error("Error fetching cards", error)
    }
  }
  useEffect(() => {
    fetchCards()
  }, [])

  console.log("card style", style)

  const filteredCards = cards.filter((card) => card.variant === variant)
  console.log("filteredCards:", filteredCards)

  if (
    cards.length === 0 ||
    style.length === 0
    // || Object.keys(CustomizedStyle).length === 0
  ) {
    return <Loading />
  }
  // agenda: {
  //   bg: "bg-[#fbf7ff]",
  //   bg_card: "bg-[#d9b8ff]",
  //   text: "text-[#9881b3]",
  //   border: "border-[#9747ff]",
  // },
  const selectedStyle = CustomizedStyle[variant] || CustomizedStyle.agenda
  console.log("selectedStyle", selectedStyle)

  return (
    <div className="grid grid-cols-auto sm:grid-cols-auto gap-4">
      {filteredCards.map((card, index) => (
        <div
          key={index}
          className={`max-w-[14rem] w-full sm:w-auto ${selectedStyle.bg} p-6 rounded-lg shadow-lg`}
        >
          <h3 className="mt-6 font-semibold text-lg">{card.title}</h3>
          <div className="flex mt-2 lg:flex-wrap">
            <div
              className={`${selectedStyle.bg_card} ${selectedStyle.text} p-4 rounded-md  h-[12rem]  shadow-md  w-full sm:w-[12rem] min-w-[120px]`}
            >
              <div
                className={`${selectedStyle.bg_card} ${selectedStyle.border} border-2 rounded-full h-[2rem] w-[2rem] flex items-center justify-center`}
              >
                +
              </div>
              {card.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
