import Image from "next/image"

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/landingPage/banner.webp"
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white z-10 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the Brainstorming App
          </h1>
          <p className="text-lg mb-6">
            Your go-to tool for generating and sharing ideas with your team.
            Let's collaborate!
          </p>
          <a
            href="#agenda"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="bg-slate-100 py-16" id="agenda">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/landingPage/agenda.webp"
              alt="Agenda Image"
              className="rounded-lg shadow-lg"
              height={600}
              width={400}
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">
              Agenda
            </h2>
            <p className="text-lg mb-6">
              Organize your ideas, set meeting goals, and collaborate on
              specific topics efficiently.
            </p>
            <p className="text-lg mb-6">
              Easily manage your brainstorming sessions with a clear agenda for
              everyone to follow.
            </p>
            <a
              href="agenda"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
            >
              Explore Agenda
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Brainstorming
            </h2>
            <p className="text-lg mb-6">
              Collaborate with your team, share ideas, and take your creativity
              to the next level.
            </p>
            <p className="text-lg mb-6">
              Easily organize and track the ideas that matter most for your
              team’s success.
            </p>
            <a
              href="brainstorming"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Explore Brainstorming
            </a>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/landingPage/brainStorming.webp"
              alt="Brainstorming Image"
              className="rounded-lg shadow-lg"
              height={600}
              width={400}
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16" id="next-step">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/landingPage/nextStep.webp"
              alt="Next Step Image"
              className="rounded-lg shadow-lg"
              height={600}
              width={400}
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              Next Steps
            </h2>
            <p className="text-lg mb-6">
              Track action items, set deadlines, and ensure follow-up to make
              progress on your projects.
            </p>
            <p className="text-lg mb-6">
              With Next Steps, you’ll never miss a task again, ensuring clear
              ownership and accountability.
            </p>
            <a
              href="next-step"
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              Explore Next Steps
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white py-6 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold mb-2">Brainstorming App</p>
              <p>&copy; 2025 All Rights Reserved.</p>
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-white hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                Terms of Service
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
