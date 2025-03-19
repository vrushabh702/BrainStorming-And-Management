export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
