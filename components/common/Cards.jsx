const Cards = () => {
  return (
    <div className="max-w-[14rem] w-full sm:w-auto bg-[#fbf7ff] p-6 rounded-lg shadow-lg">
      <h3 className="mt-6 font-semibold text-lg">
        Add discussion topics as a group
      </h3>
      <div className="flex mt-2 lg:flex-wrap">
        <div className="bg-[#d9b8ff] text-[#9881b3] p-4 rounded-md  h-[12rem]  shadow-md  w-full sm:w-[12rem] min-w-[120px]">
          <div className="bg-[#d9b8ff]  border-[#9747ff] border-2 rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
            +
          </div>
          Type anything, @mention anyone
        </div>
      </div>
    </div>
  )
}

export default Cards
