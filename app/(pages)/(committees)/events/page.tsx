import {EventCards} from "@/app/components/Table"
import Navigation from "@/app/components/Navigation"
import Footer from "@/app/components/Footer"

export default function Schedule() {
  return (
    <div>
      <Navigation />
      <div className="flex items-center mt-20 justify-center">
        <h1 className="text-4xl font-bold">Schedule</h1>
      </div>

      <div className="flex w-3/4 mx-auto mt-10 mb-20 items-center">
        <EventCards />
      </div>
      <Footer />



    </div>
  )
}
