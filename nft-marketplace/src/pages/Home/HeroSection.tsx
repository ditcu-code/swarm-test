import RocketLaunchIcon from "../../assets/icons/RocketLaunch.svg"
import ButtonLink from "../../components/ui/ButtonLink"

type Stat = { label: string; value: string }

const stats: Stat[] = [
  { label: "Total Sales", value: "240k+" },
  { label: "Auctions", value: "100k+" },
  { label: "Artists", value: "20k+" },
]

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-5xl flex flex-row py-20">
        <div className="basis-1/2 text-left">
          <h1 className="font-semibold mb-5">Discover Digital Art & Collect NFTs</h1>
          <div className="gap-7.5 flex flex-col">
            <p>
              Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell Art From More
              Than 20k Nft Artists.
            </p>

            <div>
              <ButtonLink to="/home" startIcon={<img src={RocketLaunchIcon} alt="User" />}>
                Get Started
              </ButtonLink>
            </div>

            <div className="inline-flex gap-7.5">
              {stats.map((s) => (
                <div key={s.label}>
                  <h4 className="font-bold w-37.5 font-['Space_Mono']">{s.value}</h4>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="basis-1/2"></div>
      </div>
    </div>
  )
}
