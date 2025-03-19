import Agenda from "@/components/Agenda"
import Layout from "./layout"
import BrainStorming from "@/components/BrainStorming"

import { Caveat } from "next/font/google"
import NextStep from "@/components/NextStep"
import Navbar from "@/components/Navbar"
export const caveat = Caveat({ subsets: ["latin"], weight: "700" })

export default function Index() {
  return (
    <div className="">
      <Navbar></Navbar>
      {/* <Agenda></Agenda> */}
      {/* <BrainStorming></BrainStorming> */}
      <NextStep></NextStep>
    </div>
  )
}
