import Image from "next/image"

const ActiveUsers = ({ variant }) => {
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
      className={`max-w-[14rem] w-full sm:w-auto  ${selectedStyle.bg} p-6 rounded-lg shadow-lg`}
    >
      <h3 className="mt-6 font-semibold text-lg">
        Active user list on discussion
      </h3>
      <div className="flex mt-2 lg:flex-wrap">
        <div
          className={`  ${selectedStyle.bg_card}  ${selectedStyle.text} p-2 rounded-full  h-auto  shadow-md w-full sm:w-[12rem] min-w-[120px] flex items-center justify-center`}
        >
          <div
            className={`  ${selectedStyle.bg_card}  ${selectedStyle.border} border-2 rounded-full h-[3rem] w-[3rem] flex items-center justify-center me-2`}
          >
            <Image
              className={`h-[3rem] w-[3rem] rounded-full ${selectedStyle.border} border-2`}
              height={48}
              width={48}
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            ></Image>
          </div>
          Jack Resider
        </div>
      </div>
    </div>
  )
}

export default ActiveUsers
