import Link from "next/link"
import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react"

import { Separator } from "@/components/ui/separator"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">타이어트랙 양재점</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              슈퍼카 전문 작업부터 3D 휠얼라인먼트까지.<br />
              프리미엄 타이어 서비스의 새로운 기준.
            </p>
            <div className="flex gap-2 pt-2">
              <div className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                슈퍼카 전문
              </div>
              <div className="rounded-md border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs font-medium text-secondary">
                3D 장비
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">바로가기</h3>
            <div className="grid gap-2 text-sm">
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                타이어 가격
              </Link>
              <Link href="/booking" className="text-muted-foreground hover:text-foreground">
                예약하기
              </Link>
              <Link href="/location" className="text-muted-foreground hover:text-foreground">
                오시는 길
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">매장 정보</h3>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-secondary" />
                <div>
                  <div className="text-foreground">운영 시간</div>
                  <div>평일 09:00 - 19:00 · 주말 09:00 - 18:00</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-secondary" />
                <div>
                  <div className="text-foreground">전화</div>
                  <a className="hover:text-foreground" href="tel:1688-4878">
                    1688-4878
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
                <div>
                  <div className="text-foreground">주소</div>
                  <div>경기도 과천시 주암동 (양재 인근)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <div className="font-medium text-foreground">© {new Date().getFullYear()} 타이어트랙 양재점. All rights reserved.</div>
            <div>프리미엄 타이어 서비스 전문점</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Powered by</span>
            <span className="font-semibold text-foreground">Next.js 14</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

