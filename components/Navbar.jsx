import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-slate-700 p-6 gap-4 ">
      <Link legacyBehavior href="/">
        <a className="text-blue-500 hover:underline">Home</a>
      </Link>
      <Link legacyBehavior href="/brainstorming">
        <a className="text-blue-500 hover:underline">Brainstorming</a>
      </Link>
      <Link legacyBehavior href="/agenda">
        <a className="text-blue-500 hover:underline">Agenda</a>
      </Link>
    </nav>
  )
}

export default Navbar
