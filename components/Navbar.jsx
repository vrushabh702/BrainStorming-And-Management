import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-slate-700 p-4 gap-4 ">
      <Link legacyBehavior href="/">
        <a className="text-blue-50 hover:underline hover:text-blue-200">Home</a>
      </Link>
      <Link legacyBehavior href="/agenda">
        <a className="text-blue-50 hover:underline hover:text-blue-200  ">
          Agenda
        </a>
      </Link>
      <Link legacyBehavior href="/brainstorming">
        <a className="text-blue-50 hover:underline hover:text-blue-200  ">
          Brainstorming
        </a>
      </Link>
      <Link legacyBehavior href="/next-step">
        <a className="text-blue-50 hover:underline hover:text-blue-200  ">
          NextStep
        </a>
      </Link>
    </nav>
  )
}

export default Navbar
