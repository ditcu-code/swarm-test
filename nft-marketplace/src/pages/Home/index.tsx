import Navigation from "../../components/layouts/navigation"

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4">Home</h2>
        <p className="text-sm opacity-80">
          Welcome to the NFT Marketplace. Explore trending collections and
          creators.
        </p>
      </main>
    </div>
  )
}
