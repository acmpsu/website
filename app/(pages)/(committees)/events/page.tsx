import {EventCards} from "@/app/components/EventCards"
import Navigation from "@/app/components/Navigation"
import Footer from "@/app/components/Footer"

export default function Schedule() {
  return (
    <div>
      <Navigation />
      <div className="flex items-center mt-20 justify-center">
        <h1 className="text-4xl font-bold">Schedule</h1>
      </div>

      <div className="flex w-full max-w-[1400px] mx-auto mt-10 mb-20 px-4">
        <div className="w-full">
          <EventCards />
        </div>
      </div>
      <Footer />



    </div>
  )
}
