"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const logos = [
  "/images/home.svg",
  "/images/alliance.svg",
  "/images/robin.svg",
  "/images/isac.svg",
  "/images/easy.svg",
  "/images/ready.svg",
]

export default function LogoCarousel() {
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (listRef.current) {
      const clone = listRef.current.cloneNode(true) as HTMLUListElement
      clone.setAttribute("aria-hidden", "true")
      listRef.current.parentNode?.appendChild(clone)
    }
  }, [])

  return (
    <div
      className="w-full md:w-[70%] py-8 inline-flex flex-nowrap overflow-hidden 
                 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        ref={listRef}
        className="flex items-center justify-center md:justify-start 
                   [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {logos.map((logo, i) => (
          <li key={i}>
            <Image width={100} height={30} src={logo || "/placeholder.svg"} alt={`Client logo ${i + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}
