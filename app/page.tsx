import Link from "next/link"
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Clock,
  Gauge,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Timer,
  Wrench,
  Zap,
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
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1e40af] to-[#172554] text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/30 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="gap-1 text-sm">
                <Sparkles className="h-3.5 w-3.5" />
                슈퍼카 전문
              </Badge>
              <Badge variant="outline" className="border-white/30 bg-white/5 text-white text-sm">
                3D 장비 완비
              </Badge>
              <Badge variant="outline" className="border-white/30 bg-white/5 text-white text-sm">
                24시간 상담
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              타이어트랙 <span className="text-secondary">양재점</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 sm:text-xl">
              슈퍼카 전문 작업부터 3D 휠얼라인먼트까지.
              <br className="hidden sm:block" />
              프리미엄 타이어 서비스의 새로운 기준을 제시합니다.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" size="lg" asChild className="gap-2">
                <Link href="/booking">
                  예약하기 <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href="/pricing">타이어 가격 보기</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 text-xs text-primary-foreground/80 sm:text-sm">
              <div className="rounded-lg border border-white/15 bg-white/5 p-3">
                <div className="font-semibold text-white">슈퍼카 전문</div>
                <div>고급차 작업</div>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-3">
                <div className="font-semibold text-white">3D 장비</div>
                <div>정밀 측정</div>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-3">
                <div className="font-semibold text-white">빠른 작업</div>
                <div>예약 우선</div>
              </div>
            </div>
          </div>

          <Card className="border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-xl">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                오늘 바로 점검 가능
              </CardTitle>
              <CardDescription className="text-white/80 text-base">
                전화 한 통으로 간편하게 예약하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-semibold">운영 시간</div>
                    <div className="text-sm text-white/80">
                      평일 09:00 - 19:00 · 주말 09:00 - 18:00
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-semibold">전화</div>
                    <a className="text-sm text-white/80 underline-offset-4 hover:underline" href="tel:1688-4878">
                      1688-4878
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-semibold">위치</div>
                    <div className="text-sm text-white/80">경기도 과천시 주암동 (양재 인근)</div>
                  </div>
                </div>
              </div>

              <Separator className="bg-white/15" />

              <div className="grid gap-2">
                <Button variant="secondary" asChild className="w-full">
                  <Link href="/booking">예약하고 방문하기</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="/location">오시는 길 확인</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="border-primary/20 text-primary">
              서비스
            </Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              타이어 전문 작업, 한 곳에서
            </h2>
            <p className="mt-3 text-muted-foreground">
              교체부터 점검/정비까지, 주행 안전과 승차감을 동시에 잡습니다.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="relative overflow-hidden border-primary/20 shadow-lg">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-secondary/10" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-secondary" />
                  프리미엄 타이어 교체
                </CardTitle>
                <CardDescription>
                  슈퍼카부터 수입차까지, 차량 특성에 최적화된 타이어를 제안합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                정품 타이어 · 3D 고속 휠발란서 · 정밀 공기압 세팅까지 완벽하게.
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary/20 shadow-lg">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/10" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  3D 휠얼라인먼트
                </CardTitle>
                <CardDescription>
                  최신 3D 장비로 편마모를 방지하고 승차감을 극대화합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                정밀 측정과 조정으로 타이어 수명을 늘리고 연비를 개선합니다.
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary/20 shadow-lg">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-secondary/10" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-secondary" />
                  긴급 출동 서비스
                </CardTitle>
                <CardDescription>
                  펑크나 타이어 손상 시 신속하게 대응합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                24시간 긴급 상담 · 현장 출동 · 전문적인 수리로 안심하세요.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="border-t bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="border-secondary/20 text-secondary">
              전문 장비
            </Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              최첨단 장비로 완벽하게
            </h2>
            <p className="mt-3 text-muted-foreground">
              슈퍼카와 프리미엄 차량을 위한 최고 수준의 정비 장비를 갖추고 있습니다.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/10 text-center">
              <CardHeader>
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-base">3D 고속 휠발란서</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                정밀 측정으로 진동을 완벽하게 제거합니다
              </CardContent>
            </Card>

            <Card className="border-primary/10 text-center">
              <CardHeader>
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Gauge className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-base">3D 휠얼라인먼트</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                편마모 방지와 연비 개선을 동시에
              </CardContent>
            </Card>

            <Card className="border-primary/10 text-center">
              <CardHeader>
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-base">슈퍼카 전용 리프트</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                저차고 고급 차량도 안전하게 작업
              </CardContent>
            </Card>

            <Card className="border-primary/10 text-center">
              <CardHeader>
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <ShieldCheck className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-base">정품 타이어</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                공식 수입 정품만을 취급합니다
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t bg-gradient-to-b from-muted/30 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="border-primary/20 text-primary">
              신뢰의 이유
            </Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              왜 타이어트랙을 선택하나요?
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold">10년 이상의 경력</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                수많은 슈퍼카와 프리미엄 차량을 다룬 노하우
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-white shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold">고객 만족도 98%</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                정확한 진단과 투명한 가격으로 신뢰를 쌓습니다
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold">AS 보증</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                작업 후 문제 발생 시 무상 재작업을 보증합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t bg-muted/30 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <Badge variant="outline" className="border-secondary/20 text-secondary">
                진행 방식
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                빠르고 정확한 프로세스
              </h2>
              <p className="text-muted-foreground">
                작업 전후를 비교할 수 있도록, 필요한 항목만 명확하게 안내합니다.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "예약/문의",
                  desc: "차량 정보와 희망 일정만 알려주면 됩니다.",
                },
                {
                  title: "점검 & 제안",
                  desc: "상태 진단 후 옵션/가격을 투명하게 안내합니다.",
                },
                {
                  title: "작업 & 출고",
                  desc: "정밀 장착/밸런스 후 안전하게 출고합니다.",
                },
              ].map((s, idx) => (
                <Card key={s.title} className="border-primary/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-base">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {idx + 1}
                      </span>
                      {s.title}
                    </CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-primary to-primary/90 p-8 text-primary-foreground shadow-sm sm:p-10">
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-secondary/25 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  안전한 주행, 오늘부터 시작하세요
                </h3>
                <p className="text-primary-foreground/85">
                  간단 예약 후 방문하면 더 빠르게 작업을 도와드립니다.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button variant="secondary" size="lg" asChild className="gap-2">
                  <Link href="/booking">
                    예약하기 <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="/location">오시는 길</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
