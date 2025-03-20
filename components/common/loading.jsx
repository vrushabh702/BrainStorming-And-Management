const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"></div>
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  )
}

export default Loading
