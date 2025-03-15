import Link from "next/link"
import Image from "next/image"
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/discord'
import 'react-social-icons/discord'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Logo */}
          <div className="md:w-1/4">
            <Link href="/" className="inline-block">
              <Image 
                src="/acm-logo.svg" 
                alt="ACM Logo" 
                width={50} 
                height={50} 
              />
            </Link>
          </div>

          {/* Navigation Columns Container */}
          <div className="grid grid-cols-3 gap-4 md:gap-12 md:ml-auto">
            {/* What We Do Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">ACM</h3>
              <ul>
                <li>
                  <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/meetus" className="text-sm text-gray-500 hover:text-gray-900">
                    Meet Us
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-sm text-gray-500 hover:text-gray-900">
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-sm text-gray-500 hover:text-gray-900">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Committees Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Committees</h3>
              <ul>
                <li>
                  <Link href="/explore" className="text-sm text-gray-500 hover:text-gray-900">
                    acm.explore
                  </Link>
                </li>
                <li>
                  <Link href="/ai" className="text-sm text-gray-500 hover:text-gray-900">
                    acm.ai
                  </Link>
                </li>
                {/* <li>
                  <Link href="/web" className="text-sm text-gray-500 hover:text-gray-900">
                    acm.web
                  </Link>
                </li>       */}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Resources</h3>
              <ul>
                <li>
                  <Link href="/sponsors" className="text-sm text-gray-500 hover:text-gray-900">
                    Our Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/friends" className="text-sm text-gray-500 hover:text-gray-900">
                    Our Friends
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8 flex items-center justify-between">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} PSU ACM</p>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <Link href="https://www.linkedin.com/company/association-for-computing-machinery-penn-state0/posts/?feedView=all" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="linkedin">
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
                </svg>
            </Link>

            <Link href="https://discord.gg/kESvzTwbcc" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" enable-background="new 0 0 100 100" viewBox="0 0 100 100" id="discord">
                <path id="Layer_2" d="M85.778,24.561c-11.641-8.71-22.793-8.466-22.793-8.466s-1.14,1.302-1.14,1.302c13.839,4.152,20.27,10.257,20.27,10.257
                        c-19.799-10.901-45.019-10.823-65.613,0c0,0,6.675-6.431,21.328-10.583c0,0-0.814-0.977-0.814-0.977s-11.071-0.244-22.793,8.466
                        c0,0-11.722,21.084-11.722,47.052c0,0,6.838,11.722,24.829,12.292c0,0,3.012-3.582,5.454-6.675
                        c-10.339-3.093-14.246-9.524-14.246-9.524c6.495,4.064,13.063,6.608,21.247,8.222c13.316,2.741,29.879-0.077,42.249-8.222
                        c0,0-4.07,6.594-14.734,9.606c2.442,3.012,5.373,6.512,5.373,6.512C90.662,83.254,97.5,71.532,97.5,71.613
                        C97.5,45.645,85.778,24.561,85.778,24.561z M34.818,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.333-11.892,16.357-11.855,16.607,0
                        C43.121,60.054,39.458,64.043,34.818,64.043z M64.531,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.366-11.869,16.19-11.874,16.607,0
                        C72.834,60.054,69.171,64.043,64.531,64.043z"></path>
                </svg>
            </Link>

            <Link href="https://www.instagram.com/psu.acm/?hl=en" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2476 2476" id="instagram">
                <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
            </svg>

            </Link>

            <Link href="https://groupme.com/join_group/105326747/CSj2fp99" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GroupMe</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" id="groupme">
            <g>
                <path d="M24 2H8a5 5 0 0 0-5 5v13a5 5 0 0 0 5 5h3.44l3.79 4.63a1 1 0 0 0 1.54 0L20.56 25H24a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Zm3 18a3 3 0 0 1-3 3h-3.91a1 1 0 0 0-.77.37L16 27.42l-3.32-4.05a1 1 0 0 0-.77-.37H8a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3Z"></path>
                <path d="M19.2 17.4a4 4 0 0 1-6.4 0 1 1 0 1 0-1.6 1.2 6 6 0 0 0 9.6 0 1 1 0 0 0-1.6-1.2zM12.5 12a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V14h2v.5a1 1 0 0 0 2 0V14h.5a1 1 0 0 0 0-2H19v-2h.5a1 1 0 0 0 0-2H19v-.5a1 1 0 0 0-2 0V8h-2v-.5a1 1 0 0 0-2 0V8h-.5a1 1 0 0 0 0 2h.5v2zm2.5-2h2v2h-2z"></path>
            </g>
            </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
