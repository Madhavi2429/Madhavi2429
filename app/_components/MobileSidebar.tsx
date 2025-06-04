"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface MobileSidebarProps {
  title?: string
  items: {
    title: string
    href: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
  className?: string
}

export function MobileSidebar({ title = "Menu", items, className }: MobileSidebarProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="font-semibold text-xl flex gap-2 text-[#1570ef] font-sans ">
            <Image src={"/images/logo.svg"} alt="Logo" width={30} height={30} />
            {title}
          </SheetTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)}>
            <span className="sr-only">Close</span>
          </Button>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <nav className={cn("flex flex-col gap-1 p-2", className)}>
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium font-sans transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.title}
              </a>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
