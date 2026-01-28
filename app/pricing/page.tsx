import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Phone,
  MessageCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              투명한 가격 안내
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              타이어 가격표
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              정품 타이어를 합리적인 가격에 제공합니다.
              <br className="hidden sm:block" />
              타이어 지참 시 장착만도 가능합니다!
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button variant="default" size="lg" asChild className="gap-2">
                <a href="tel:0507-1351-6657">
                  <Phone className="h-4 w-4" />
                  전화 견적 문의
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/booking">온라인 견적 신청</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 타이어 브랜드 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              인기 타이어 브랜드
            </h2>
            <p className="mt-3 text-muted-foreground">
              프리미엄부터 실속형까지 다양한 브랜드를 취급합니다
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 프리미엄 브랜드 */}
            <Card className="relative overflow-hidden border-primary/20">
              <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-primary/10" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>미쉐린 (MICHELIN)</CardTitle>
                  <Badge variant="secondary">프리미엄</Badge>
                </div>
                <CardDescription>
                  세계 최고 수준의 타이어 브랜드
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Pilot Sport 4/5 시리즈</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Primacy 4 시리즈</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>슈퍼카 전용 타이어</span>
                </div>
                <p className="pt-2 text-sm text-muted-foreground">
                  * 사이즈별 가격 상이 (전화 문의)
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary/20">
              <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-primary/10" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>컨티넨탈 (Continental)</CardTitle>
                  <Badge variant="secondary">프리미엄</Badge>
                </div>
                <CardDescription>
                  독일 명품 타이어 브랜드
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>UltraContact UC6/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>SportContact 6/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>수입차 순정 장착</span>
                </div>
                <p className="pt-2 text-sm text-muted-foreground">
                  * 사이즈별 가격 상이 (전화 문의)
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary/20">
              <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-primary/10" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>피렐리 (Pirelli)</CardTitle>
                  <Badge variant="secondary">프리미엄</Badge>
                </div>
                <CardDescription>
                  스포츠카 전문 이탈리아 브랜드
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>P Zero 시리즈</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Cinturato P7</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>페라리/람보르기니 순정</span>
                </div>
                <p className="pt-2 text-sm text-muted-foreground">
                  * 사이즈별 가격 상이 (전화 문의)
                </p>
              </CardContent>
            </Card>

            {/* 가성비 브랜드 */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>한국타이어 (Hankook)</CardTitle>
                  <Badge>인기</Badge>
                </div>
                <CardDescription>
                  국내 1위 브랜드, 뛰어난 품질
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>벤투스 S1 evo3</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>키너지 4S2</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>합리적인 가격</span>
                </div>
                <p className="pt-2 text-sm text-muted-foreground">
                  * 사이즈별 가격 상이 (전화 문의)
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>금호타이어 (Kumho)</CardTitle>
                  <Badge>인기</Badge>
                </div>
                <CardDescription>
                  국내 2위 브랜드, 높은 가성비
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>엑스타 PS71</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>솔루스 TA51</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>가성비 최고</span>
                </div>
                <p className="pt-2 text-sm text-muted-foreground">
                  * 사이즈별 가격 상이 (전화 문의)
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>넥센타이어 (Nexen)</CardTitle>
                  <Badge>가성비</Badge>
                </div>
                <CardDescription>
                  합리적인 가격의 실속형 브랜드
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>N'Fera Sport</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>N'blue HD Plus</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>저렴한 가격</span>
                </div>
                <p className="pt-2 text-sm text-muted-foreground">
                  * 사이즈별 가격 상이 (전화 문의)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 장착비 안내 */}
      <section className="border-t bg-muted/30 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                타이어 장착 서비스
              </h2>
              <p className="mt-3 text-muted-foreground">
                타이어를 직접 구매하셨나요? 장착만도 환영합니다!
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card className="border-secondary/20 ring-2 ring-secondary/10">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-secondary" />
                    <CardTitle>타이어 지참 장착</CardTitle>
                  </div>
                  <CardDescription>
                    온라인 구매 타이어 장착 OK
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">승용차 (1본)</span>
                    <span className="font-semibold">15,000원~</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SUV (1본)</span>
                    <span className="font-semibold">20,000원~</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">스포츠카/슈퍼카 (1본)</span>
                    <span className="font-semibold">25,000원~</span>
                  </div>
                  <p className="pt-2 text-xs text-muted-foreground">
                    * 휠발란스, 밸브 교체 포함
                    <br />* 사이즈/차종에 따라 가격 변동 가능
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    추가 서비스
                  </CardTitle>
                  <CardDescription>
                    함께 받으시면 더 안전합니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">3D 휠얼라인먼트</span>
                    <span className="font-semibold">80,000원~</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">질소 충전 (4본)</span>
                    <span className="font-semibold">20,000원</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">펑크 수리</span>
                    <span className="font-semibold">20,000원~</span>
                  </div>
                  <p className="pt-2 text-xs text-muted-foreground">
                    * 차종/상태에 따라 가격 변동 가능
                    <br />* 정확한 견적은 전화 문의
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-primary to-primary/90 p-8 text-primary-foreground shadow-lg sm:p-12">
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-secondary/25 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  정확한 견적이 필요하신가요?
                </h3>
                <p className="text-primary-foreground/85">
                  차량 정보와 원하시는 타이어를 알려주시면
                  <br className="hidden sm:block" />
                  최적의 가격으로 안내해드립니다.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:justify-end">
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="gap-2"
                >
                  <a href="tel:0507-1351-6657">
                    <Phone className="h-4 w-4" />
                    전화 상담
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="/booking">
                    견적 신청 <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
