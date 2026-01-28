"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Wrench } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "타이어 가격", href: "/pricing" },
  { label: "예약하기", href: "/booking" },
  { label: "오시는 길", href: "/location" },
] as const

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold leading-tight sm:text-base">
            타이어트랙 <span className="text-primary">양재점</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                <span
                  className={cn(
                    "relative",
                    active &&
                      "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-secondary"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" asChild className="gap-2">
            <a href="tel:1688-4878" aria-label="전화하기">
              <Phone className="h-4 w-4" />
              1688-4878
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/booking">예약하기</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="메뉴 열기">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Wrench className="h-5 w-5" />
                  </span>
                  타이어트랙 양재점
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 grid gap-2">
                {NAV_ITEMS.map((item) => {
                  const active = pathname === item.href
                  return (
                    <Button
                      key={item.href}
                      variant={active ? "secondary" : "ghost"}
                      className="justify-start"
                      asChild
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  )
                })}

                <div className="mt-2 grid gap-2">
                  <Button variant="outline" asChild className="justify-start gap-2">
                    <a href="tel:1688-4878">
                      <Phone className="h-4 w-4" />
                      1688-4878
                    </a>
                  </Button>
                  <Button variant="secondary" asChild className="justify-start">
                    <Link href="/booking">예약하기</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
