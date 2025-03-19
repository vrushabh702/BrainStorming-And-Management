const Cards = ({ variant }) => {
  const styles = {
    brainstorming: {
      bg: "bg-[#f5fbff]",
      bg_card: "bg-[#80caff]",
      text: "text-[#5a8eb3]",
      border: "border-[#0d99ff]",
    },
    agenda: {
      bg: "bg-[#fbf7ff]",
      bg_card: "bg-[#d9b8ff]",
      text: "text-[#9881b3]",
      border: "border-[#9747ff]",
    },
  }
  const selectedStyle = styles[variant] || styles.agenda
  return (
    <div
      className={`max-w-[14rem] w-full sm:w-auto ${selectedStyle.bg} p-6 rounded-lg shadow-lg`}
    >
      <h3 className="mt-6 font-semibold text-lg">
        Add discussion topics as a group
      </h3>
      <div className="flex mt-2 lg:flex-wrap">
        <div
          className={`${selectedStyle.bg_card} ${selectedStyle.text} p-4 rounded-md  h-[12rem]  shadow-md  w-full sm:w-[12rem] min-w-[120px]`}
        >
          <div
            className={`${selectedStyle.bg_card} ${selectedStyle.border} border-2 rounded-full h-[2rem] w-[2rem] flex items-center justify-center`}
          >
            +
          </div>
          Type anything, @mention anyone
        </div>
      </div>
    </div>
  )
}

export default Cards
