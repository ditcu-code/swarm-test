import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { setItems } from "./features/nft/nftSlice"
import { selectNfts } from "./features/nft/selectors"
import { logout, setProfile } from "./features/user/userSlice"
import Home from "./pages/Home"

function App() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectNfts)
  const user = useAppSelector((s) => s.user.profile)

  const addMockNft = () => {
    const id = Math.random().toString(36).slice(2)
    const next = [
      ...items,
      {
        id,
        name: `Mock NFT #${items.length + 1}`,
        imageUrl: "/vite.svg",
        priceEth: 0.1 * (items.length + 1),
      },
    ]
    dispatch(setItems(next))
  }

  const signIn = () => dispatch(setProfile({ id: "u1", username: "demo-user" }))
  const signOut = () => dispatch(logout())

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="max-w-4xl mx-auto p-8 space-y-6">
            <header className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">NFT Marketplace</h1>
              <div className="flex items-center gap-3">
                <span className="text-sm opacity-80">
                  {user ? `Signed in as ${user.username}` : "Guest"}
                </span>
                {user ? (
                  <button onClick={signOut} className="px-3 py-1 rounded border">
                    Sign out
                  </button>
                ) : (
                  <button onClick={signIn} className="px-3 py-1 rounded border">
                    Sign in
                  </button>
                )}
              </div>
            </header>

            <section className="space-y-3">
              <div className="flex items-center gap-3">
                <button onClick={addMockNft} className="px-4 py-2 rounded border">
                  Add mock NFT
                </button>
                <span className="text-sm opacity-80">Count: {items.length}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((nft) => (
                  <div key={nft.id} className="rounded-lg border p-4 space-y-2 bg-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={nft.imageUrl} alt={nft.name} className="w-16 h-16" />
                    <div className="font-medium">{nft.name}</div>
                    <div className="text-sm opacity-80">{nft.priceEth.toFixed(2)} ETH</div>
                  </div>
                ))}
              </div>
            </section>

            <Link to="/home" className="inline-block px-4 py-2 border rounded mt-4">
              Go to Home
            </Link>

            <p className="opacity-70 text-sm">Edit src/App.tsx to change this demo.</p>
          </div>
        }
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
