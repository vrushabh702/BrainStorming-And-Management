const ActiveUsers = () => {
  return (
    <div className="max-w-[14rem] w-full sm:w-auto  bg-[#fbf7ff] p-6 rounded-lg shadow-lg">
      <h3 className="mt-6 font-semibold text-lg">
        Active user list on discussion
      </h3>
      <div className="flex mt-2 lg:flex-wrap">
        <div className="bg-[#d9b8ff] text-[#9881b3] p-2 rounded-full  h-auto  shadow-md w-full sm:w-[12rem] min-w-[120px] flex items-center justify-center">
          <div className="bg-[#d9b8ff] border-[#9747ff] border-2 rounded-full h-[3rem] w-[3rem] flex items-center justify-center me-2">
            <Image
              className="h-[3rem] w-[3rem] rounded-full"
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
