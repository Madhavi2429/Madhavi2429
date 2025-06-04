"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { Home, BarChart2, Mail, User } from "lucide-react"
import { MobileSidebar } from "./MobileSidebar"
import Image from "next/image"

type NavigationItem = {
  title: string
  href: string
  icon: LucideIcon
}

const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Services",
    href: "/services",
    icon: BarChart2,
  },
  {
    title: "Products",
    href: "/products",
    icon: Mail,
  },
  {
    title: "AI Tools & Software",
    href: "/aitools",
    icon: User,
  },
]

const Navigation = () => {
  const pathname = usePathname()
  return (
    <div className="flex  justify-between p-6 md:px-16 w-full ">
      <Link href="/" className="text-xl font-bold text-[#1570ef] flex justify-center items-center gap-2">
        <Image src={"/images/logo.svg"} alt="Logo" width={30} height={30} />
        Steve Kaplan AI
      </Link>
      <div className="hidden md:flex justify-center items-center gap-6 font-medium text-gray-500">
        <Link href="/" className={`${pathname === "/" && "text-black font-bold"} hover:text-black transition-colors`}>
          Home
        </Link>
        <Link
          href="/services"
          className={`${pathname.includes("/services") && "text-black font-bold"} hover:text-black transition-colors`}
        >
          Services
        </Link>
        <Link
          href="/products"
          className={`${pathname.includes("/products") && "text-black font-bold"} hover:text-black transition-colors`}
        >
          Products
        </Link>
        <Link
          href="/aitools"
          className={`${pathname.includes("/aitools") && "text-black font-bold"} hover:text-black transition-colors`}
        >
          AI tools & software
        </Link>
      </div>
      <button
        onClick={() => {
          console.log("Contact Me button clicked") // Add this for debugging
          const contactSection = document.getElementById("contact")
          if (contactSection) {
            console.log("Found contact section, scrolling...") // Add this for debugging
            contactSection.scrollIntoView({ behavior: "smooth" })
          } else {
            console.log("Contact section not found, trying mailto fallback") // Add this for debugging
            // Fallback to mailto if no contact section exists
            window.location.href = "mailto:steve@gtmvp.com"
          }
        }}
        className="bg-[#1570ef] hidden md:flex hover:bg-[#6a91c9] rounded-sm text-white px-6 py-2 text-sm font-medium transition-colors items-center justify-center"
      >
        Contact Me
      </button>
      <MobileSidebar title="Steve Kaplan AI" items={navigationItems} />
    </div>
  )
}

export default Navigation
