import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col gap-8  md:pt-8  md:px-28 justify-start">
      <div className="flex flex-col justify-end px-3 items-center ">
        <div className="flex flex-col md:flex-row  justify-between w-full pb-10 items-end">
          <div className="flex flex-col gap-2  ">
            <div className="text-lg md:text-xl font-semibold flex justify-start items-center gap-2">
              <Image src={"/images/logo.svg"} alt="Logo" width={30} height={30} />
              Steve Kaplan AI
            </div>
            <div className="text-gray-500 text-sm md:w-[50%]">
              Crafting meaningful digital experiences that combine strategy, design, and technology to drive real
              results.
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link href={"https://www.facebook.com/stevekaplanai/"} className="relative w-5 h-5 overflow-hidden">
              <Image src={"/images/fb.svg"} alt="Facebook" fill />
            </Link>
            <Link href={"https://www.instagram.com/stevekaplanai/"} className=" relative w-5 h-5 overflow-hidden">
              <Image src={"/images/insta.svg"} alt="Instagram" fill />
            </Link>
            <Link href={"https://twitter.com/histevekaplan"} className="relative w-5 h-5 overflow-hidden">
              <Image src={"/images/twitter.svg"} alt="Twitter" fill />
            </Link>
            <Link href={"https://www.linkedin.com/in/stevekaplanai/"} className="relative w-5 h-5 overflow-hidden">
              <Image src={"/images/linkedin.svg"} alt="LinkedIn" fill />
            </Link>
            <Link href={"https://www.youtube.com/@stevekaplanai"} className="relative w-6 h-6 overflow-hidden">
              <Image src={"/images/youtube.svg"} alt="YouTube" fill />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 text-gray-500 justify-between items-center pb-4 text-sm border-t pt-4">
          <div>©2025 Steve Kaplan AI. All Rights Reserved</div>
          <div className="flex justify-center items-center text-xs md:text-sm gap-4">
            <div className="md:border-r  md:pr-4">Terms of Service</div>
            <div>Privacy policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
