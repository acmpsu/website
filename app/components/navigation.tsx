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
  const [isLearningOpen, setIsLearningOpen] = React.useState(false)
  const [isSponsorsOpen, setIsSponsorsOpen] = React.useState(false)
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
    <div className="max-w-7xl mt-4 px-4 flex items-center mx-auto justify-between relative z-50">
      <a href="/" className="mr-12">
        <Image src="/acm-logo.png" alt="ACM Logo" width={70} height={70} />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden font-roboto md:block flex-grow">
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Link href="/whatwedo" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md`}>
                  What We Do
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
              <NavigationMenuTrigger>
                Learning
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 bg-white p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <div
                        className="flex bg-gray-100 h-full w-full select-none flex-col justify-center items-center text-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-gray-200 transition-colors cursor-pointer"
                        onClick={() => window.location.href = '/events'}
                      >
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            View All Events
                          </div>
                          <svg 
                            className="w-5 h-5"
                            fill="none" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              d="M9 5l7 7-7 7"
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2}
                              className="stroke-[url(#gradient)]"
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563eb" /> {/* blue-600 */}
                                <stop offset="100%" stopColor="#9333ea" /> {/* purple-600 */}
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out our upcoming workshops, presentations, and learning opportunities.
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <div className="grid grid-rows-2 h-full gap-3">
                    <ListItem className="hover:bg-gray-100 h-full" href="/devpsu" logo="/devpsu-logo.png" title="DEV PSU">
                      Learning basic to advanced topics in development.
                    </ListItem>
                    <ListItem className="hover:bg-gray-100 h-full" href="/mlpsu" logo="/mlpsu-logo.png" title="ML PSU">
                      Learning how to use and create machine learning models.
                    </ListItem>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 bg-white p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <div
                        className="flex bg-gray-100 h-full w-full select-none flex-col justify-center items-center text-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 text-lg font-medium">
                          Partner with PSU ACM
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Connect with talented students and support technology education at Penn State University.
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <div className="grid grid-rows-3 h-full gap-3">
                    <ListItem 
                      className="hover:bg-gray-100 h-full" 
                      href="/sponsors" 
                      title="Our Sponsors"
                    >
                      View our current sponsors and learn about partnership opportunities.
                    </ListItem>

                    <ListItem 
                      className="hover:bg-gray-100 h-full" 
                      href="/friends" 
                      title="Our Friends"
                    >
                      View our club friends and learn about our events with them.
                    </ListItem>

                    <ListItem 
                      className="hover:bg-gray-100 h-full" 
                      href="/contact" 
                      title="Contact Us"
                    >
                      Get in touch with PSU ACM leadership for inquiries and collaboration.
                    </ListItem>
                  </div>
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
                <Link href="/whatwedo" className="block p-2 hover:bg-gray-100 rounded">
                  What We Do
                </Link>
                <Link href="/aboutus" className="block p-2 hover:bg-gray-100 rounded">
                  About Us
                </Link>
                
                {/* Learning Section */}
                <div>
                  <button
                    className="flex w-full justify-between items-center p-2 hover:bg-gray-100 rounded"
                    onClick={() => setIsLearningOpen(!isLearningOpen)}
                  >
                    Learning
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isLearningOpen ? 'rotate-180' : ''
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
                  
                  {isLearningOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link href="/events" className="block p-2 hover:bg-gray-100 rounded">
                        <div className="flex items-center justify-between">
                          <span className="font-bold">All Events</span>
                          <svg 
                            className="w-4 h-4 text-gray-500"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                      <Link href="/devpsu" className="block p-2 hover:bg-gray-100 rounded">
                        <div className="flex items-center gap-2">
                          <Image src="/devpsu-logo.png" alt="DEV PSU" width={40} height={40} />
                          <div>
                            <div className="font-bold">DEV PSU</div>
                            <div className="text-sm text-gray-500">Learning basic to advanced topics in development.</div>
                          </div>
                        </div>
                      </Link>
                      <Link href="/mlpsu" className="block p-2 hover:bg-gray-100 rounded">
                        <div className="flex items-center gap-2">
                          <Image src="/mlpsu-logo.png" alt="ML PSU" width={40} height={40} />
                          <div>
                            <div className="font-bold">ML PSU</div>
                            <div className="text-sm text-gray-500">Learning how to use and create machine learning models.</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Sponsors & Contact Section */}
                <div>
                  <button
                    className="flex w-full justify-between items-center p-2 hover:bg-gray-100 rounded"
                    onClick={() => setIsSponsorsOpen(!isSponsorsOpen)}
                  >
                    Relations & Contact
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isSponsorsOpen ? 'rotate-180' : ''
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
                  
                  {isSponsorsOpen && (
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
            {logo && <img src={logo} alt="" className="w-6 h-6" />}
            <div className="text-sm font-medium leading-none">{title}</div>
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