import { Caveat } from "next/font/google"

import LandingPage from "@/components/LandingPage"
export const caveat = Caveat({ subsets: ["latin"], weight: "700" })

export default function Index() {
  return (
    <div className="">
      <LandingPage></LandingPage>
    </div>
  )
}
