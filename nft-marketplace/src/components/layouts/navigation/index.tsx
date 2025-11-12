import { Link } from "react-router-dom"
import Logo from "../../../assets/icons/nav/logo.svg"
import UserIcon from "../../../assets/icons/User.svg"
import ButtonLink from "../../ui/ButtonLink"

export default function Navigation() {
  return (
    <header className="w-full bg-(--color-background)">
      <div className="mx-[50px] h-[100px] flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0 select-none">
          <img src={Logo} alt="NFT Marketplace" className="md:h-10 w-[243px] h-[32px]" />
        </Link>

        <div className="flex items-center gap-2.5">
          <Link to="/home" className="font-semibold! px-5 text-white! hover:opacity-90">
            Marketplace
          </Link>
          <Link to="/home" className="font-semibold! px-5 text-white! hover:opacity-90">
            Rankings
          </Link>
          <Link to="/home" className="font-semibold! px-5 text-white! hover:opacity-90">
            Connect a wallet
          </Link>

          <ButtonLink to="/home" startIcon={<img src={UserIcon} alt="User" className="w-5 h-5" />}>
            Sign Up
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
