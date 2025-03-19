import Layout from "./layout"

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold text-white mb-4">
          Hi, I'm [Vrushabh Patil]
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          A passionate web developer building modern web applications.
        </p>
        <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300">
          View My Work
        </button>
      </section>
    </Layout>
  )
}
