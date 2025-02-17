"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { cn } from "@/lib/utils"
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu"

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  href: string;
  logo?: string;
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isCommitteesOpen, setIsCommitteesOpen] = React.useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false)
  const [showMobileHeader, setShowMobileHeader] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  // Add scroll handler
  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // scroll down
          setShowMobileHeader(false)
        } else { // scroll up
          setShowMobileHeader(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (isMenuOpen) {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY, isMenuOpen])

  return (
    <div className="max-w-7xl px-4 flex items-center mt-5 mx-auto justify-between relative z-50 pb-4 border-b border-gray-200">
      <a href="/" className="mr-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1562.98 1749.08" className="w-14 h-14">
          <path 
            fill="#2a3e77" 
            d="M1472.98,371.39L871.49,24.12c-55.69-32.15-124.31-32.15-180,0L90,371.39C34.31,403.54,0,462.96,0,527.27v694.54c0,64.31,34.31,123.73,90,155.88l601.49,347.27c55.69,32.15,124.31,32.15,180,0l601.49-347.27c55.69-32.15,90-91.58,90-155.88v-694.54c0-64.31-34.31-123.73-90-155.88Z"
          />
          <g fill="#fff">
            <path d="M453.84,707.29h49.95c6.93,0,10.41,3.47,10.41,10.41v293.97c0,6.94-3.47,10.41-10.41,10.41h-51.77c-5.72,0-9.72-2.69-11.97-8.06l-6.5-15.61c-21.68,20.29-48.91,30.44-81.69,30.44-29.66,0-56.97-7.32-81.95-21.98-24.97-14.65-44.75-34.51-59.31-59.57-14.57-25.06-21.85-52.51-21.85-82.34s7.33-56.93,21.98-81.82c14.65-24.88,34.47-44.62,59.44-59.18s52.2-21.85,81.69-21.85c33.12,0,60.62,10.32,82.47,30.96l7.54-17.69c2.25-5.37,6.24-8.06,11.97-8.06ZM392.84,934.27c11.88-6.67,21.24-15.95,28.1-27.84,6.85-11.88,10.28-25.28,10.28-40.19s-3.38-28.66-10.15-40.71c-6.76-12.05-16.04-21.55-27.84-28.49-11.8-6.93-24.89-10.41-39.28-10.41s-27.45,3.43-39.15,10.28c-11.71,6.85-20.9,16.35-27.58,28.49-6.68,12.14-10.02,25.75-10.02,40.84s3.29,28.53,9.89,40.32c6.59,11.8,15.65,21.03,27.19,27.71,11.53,6.68,24.58,10.02,39.15,10.02s27.53-3.34,39.41-10.02Z"/>
            <path d="M645.18,1007.9c-24.71-14.65-44.05-34.47-58.01-59.44-13.96-24.97-20.94-52.29-20.94-81.95s6.93-57.53,20.81-82.6c13.87-25.06,33.21-44.96,58.01-59.7,24.8-14.74,52.81-22.11,84.03-22.11,20.46,0,39.67,3.04,57.62,9.1,17.95,6.07,34.03,14.66,48.26,25.75,2.95,2.43,4.42,5.03,4.42,7.8,0,2.08-.78,4.34-2.34,6.76l-33.04,47.09c-2.26,3.3-4.86,4.94-7.8,4.94-1.91,0-4.16-.87-6.76-2.6-8.85-6.07-17.69-10.67-26.54-13.79-8.85-3.12-18.99-4.68-30.44-4.68-14.05,0-27.06,3.64-39.02,10.93s-21.51,17.3-28.62,30.05c-7.11,12.75-10.67,27.1-10.67,43.06s3.6,29.75,10.8,42.4c7.2,12.66,16.82,22.59,28.88,29.79,12.05,7.2,25.01,10.8,38.89,10.8,11.27,0,21.37-1.52,30.31-4.55,8.93-3.03,17.73-7.58,26.41-13.66,2.6-1.73,4.85-2.6,6.76-2.6,2.95,0,5.55,1.65,7.8,4.94l33.04,47.09c1.73,2.43,2.6,4.77,2.6,7.02s-1.04,4.34-3.12,6.24c-14.4,11.45-30.7,20.29-48.91,26.54-18.21,6.24-37.9,9.37-59.05,9.37-30.87,0-58.66-7.33-83.38-21.98Z"/>
            <path d="M1327.69,715.75c17.52,10.84,31.04,26.97,40.58,48.39,9.54,21.42,14.31,47.57,14.31,78.44v169.1c0,6.94-3.47,10.41-10.41,10.41h-67.64c-6.94,0-10.41-3.47-10.41-10.41v-165.98c0-19.42-4.51-34.73-13.53-45.92-9.02-11.19-21.94-16.78-38.76-16.78-10.76,0-20.42,2.73-29.01,8.19-8.58,5.46-15.48,12.71-20.68,21.72-5.2,9.02-8.24,18.82-9.11,29.4v169.36c0,6.94-3.47,10.41-10.41,10.41h-67.64c-6.94,0-10.41-3.47-10.41-10.41v-165.98c0-19.42-4.51-34.73-13.53-45.92-9.02-11.19-21.94-16.78-38.76-16.78-11.45,0-21.64,3.08-30.57,9.24-8.93,6.16-15.91,14.27-20.94,24.32-5.03,10.06-7.54,20.73-7.54,32v163.11c0,6.94-3.47,10.41-10.41,10.41h-67.64c-6.94,0-10.41-3.47-10.41-10.41v-293.97c0-6.93,3.47-10.41,10.41-10.41h51.77c2.95,0,5.37.65,7.28,1.95,1.91,1.3,3.47,3.34,4.68,6.11l6.76,16.39c12.31-10.41,26.1-18.38,41.36-23.93,15.26-5.55,31.65-8.32,49.17-8.32,20.46,0,38.67,4.08,54.63,12.23,15.95,8.15,28.96,20.12,39.02,35.9,12.83-15.43,28.31-27.32,46.44-35.64,18.12-8.33,37.94-12.49,59.44-12.49,23.76,0,44.4,5.42,61.92,16.26Z"/>
          </g>
        </svg>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden font-roboto md:block flex-grow">
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md`}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/meetus" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md`}>
                  Meet Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Committees</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full hover:bg-gray-100 border border-gray-200 select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/events"
                      >
                        <div className="mb-2 text-lg font-medium">
                          Events
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          View the schedule of events for the semester.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/explore" className="hover:bg-gray-100 h-full" title="acm.explore" logo="/explore-icon.svg">
                    Learn a vast array of topics in computer science.
                  </ListItem>
                  <ListItem href="/ai" className="hover:bg-gray-100 h-full" title="acm.ai" logo="/ai-icon.svg">
                    Learn AI/ML fundamentals, build models, and solve problems.
                  </ListItem>
                  <ListItem href="/web" className="hover:bg-gray-100 h-full" title="acm.web" logo="/web-icon.svg">
                    Learn how to build websites and web applications.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <ListItem href="/sponsors" className="hover:bg-gray-100 h-full" title="Our Sponsors">
                    View our current sponsors and learn about partnership opportunities.
                  </ListItem>
                  <ListItem href="/friends" className="hover:bg-gray-100 h-full" title="Our Friends">
                    View our club friends.
                  </ListItem>
                  <ListItem href="/contact" className="hover:bg-gray-100 h-full" title="Contact Us">
                    Get in touch with PSU ACM leadership.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Desktop Join Button */}
      <div className="hidden md:block ml-12">
        <Link href="/join">
          <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
            <span>Join Us</span>
        </HoverBorderGradient>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-screen max-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden border">
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="p-4 space-y-2">
                <Link href="/about" className="block p-2 hover:bg-gray-100 rounded">
                  About
                </Link>
                <Link href="/meetus" className="block p-2 hover:bg-gray-100 rounded">
                  Meet Us
                </Link>
                
                {/* Committees Section */}
                <div>
                  <button
                    className="flex w-full justify-between items-center p-2 hover:bg-gray-100 rounded"
                    onClick={() => setIsCommitteesOpen(!isCommitteesOpen)}
                  >
                    Committees
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isCommitteesOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {isCommitteesOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link href="/events" className="block p-2 hover:bg-gray-100 rounded">
                        <div>
                          <div className="font-bold">Events</div>
                          <div className="text-sm text-gray-500">View the schedule of events for the semester.</div>
                        </div>
                      </Link>
                      <Link href="/explore" className="block p-2 hover:bg-gray-100 rounded">
                        <div className="flex items-center gap-2">
                          <Image src="/explore-icon.svg" alt="acm.explore" width={40} height={40} />
                          <div>
                            <div className="font-bold">acm.explore</div>
                            <div className="text-sm text-gray-500">Learn a vast array of topics in computer science.</div>
                          </div>
                        </div>
                      </Link>
                      <Link href="/ai" className="block p-2 hover:bg-gray-100 rounded">
                        <div className="flex items-center gap-2">
                          <Image src="/ai-icon.svg" alt="acm.ai" width={40} height={40} />
                          <div>
                            <div className="font-bold">acm.ai</div>
                            <div className="text-sm text-gray-500">Learn AI/ML fundamentals, build models, and solve problems.</div>
                          </div>
                        </div>
                      </Link>
                      <Link href="/web" className="block p-2 hover:bg-gray-100 rounded">
                        <div className="flex items-center gap-2">
                          <Image src="/web-icon.svg" alt="acm.web" width={40} height={40} />
                          <div>
                            <div className="font-bold">acm.web</div>
                            <div className="text-sm text-gray-500">Learn how to build websites and web applications.</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Resources Section */}
                <div>
                  <button
                    className="flex w-full justify-between items-center p-2 hover:bg-gray-100 rounded"
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  >
                    Resources
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isResourcesOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {isResourcesOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link href="/sponsors" className="block p-2 hover:bg-gray-100 rounded">
                        <div>
                          <div className="font-bold">Our Sponsors</div>
                          <div className="text-sm text-gray-500">View our current sponsors and learn about partnership opportunities.</div>
                        </div>
                      </Link>
                      <Link href="/friends" className="block p-2 hover:bg-gray-100 rounded">
                        <div>
                          <div className="font-bold">Our Friends</div>
                          <div className="text-sm text-gray-500">View our club friends.</div>
                        </div>
                      </Link>
                      <Link href="/contact" className="block p-2 hover:bg-gray-100 rounded">
                        <div>
                          <div className="font-bold">Contact Us</div>
                          <div className="text-sm text-gray-500">Get in touch with PSU ACM leadership.</div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/join" className="block mt-4">
                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
                    Join Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, href, logo, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          href={href}
          {...props}
        >
          <div className="flex items-center gap-2">
            {logo && <img src={logo} alt="" className="w-8 h-8" />}
            <div className="text-lg font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
