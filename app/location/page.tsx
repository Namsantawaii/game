import Link from "next/link"
import {
  ArrowRight,
  Bus,
  Car,
  Clock,
  MapPin,
  Navigation,
  Phone,
  Subway,
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

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              찾아오시는 길
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              오시는 길
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              서울 서초구 양재동에 위치해 있습니다
              <br className="hidden sm:block" />
              벤츠 양재서비스센터 맞은편에서 만나요!
            </p>
          </div>
        </div>
      </section>

      {/* 지도 & 주소 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
            {/* 지도 */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    매장 위치
                  </CardTitle>
                  <CardDescription>
                    서울 서초구 바우뫼로 210
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* 네이버 지도 iframe 또는 카카오 맵 */}
                  <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                    <iframe
                      src="https://map.kakao.com/link/map/타이어트랙 양재점,37.4765,127.0356"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" asChild className="flex-1 gap-2">
                      <a
                        href="https://map.naver.com/p/search/타이어트랙 양재점"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="h-4 w-4" />
                        네이버 지도
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1 gap-2">
                      <a
                        href="https://map.kakao.com/link/search/타이어트랙 양재점"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="h-4 w-4" />
                        카카오맵
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>상세 주소</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
                      <div>
                        <div className="font-semibold">주소</div>
                        <div className="text-sm text-muted-foreground">
                          서울 서초구 바우뫼로 210
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Navigation className="mt-0.5 h-5 w-5 text-secondary" />
                      <div>
                        <div className="font-semibold">찾아오시는 길</div>
                        <div className="text-sm text-muted-foreground">
                          한성자동차 메르세데스벤츠 양재서비스센터 맞은편
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 text-secondary" />
                      <div>
                        <div className="font-semibold">전화번호</div>
                        <a
                          href="tel:0507-1351-6657"
                          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                        >
                          0507-1351-6657
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 사이드바 정보 */}
            <div className="space-y-6">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    영업시간
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">월요일</span>
                    <span className="font-medium">09:00 - 19:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">화요일</span>
                    <span className="font-medium">09:00 - 19:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">수요일</span>
                    <span className="font-medium">09:00 - 19:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">목요일</span>
                    <span className="font-medium">09:00 - 19:00</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <span className="text-sm text-muted-foreground">금요일</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">토요일</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <span className="text-sm text-muted-foreground">일요일</span>
                    <span className="font-medium text-secondary">정기휴무</span>
                  </div>

                  <div className="mt-4 rounded-lg border border-secondary/20 bg-secondary/5 p-3 text-xs text-muted-foreground">
                    📞 방문 전 전화 예약하시면 대기시간을 줄일 수 있습니다
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">빠른 예약</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="default" asChild className="w-full gap-2">
                    <a href="tel:0507-1351-6657">
                      <Phone className="h-4 w-4" />
                      전화 예약
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full gap-2">
                    <Link href="/booking">
                      온라인 예약 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 교통편 안내 */}
      <section className="border-t bg-muted/30 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold">
              대중교통 이용 안내
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Subway className="h-5 w-5 text-primary" />
                    지하철
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="space-y-2">
                    <div>
                      <div className="font-medium">신분당선</div>
                      <div className="text-muted-foreground">양재시민의숲역 4번 출구</div>
                    </div>
                    <div>
                      <div className="font-medium">3호선</div>
                      <div className="text-muted-foreground">양재역 8번 출구</div>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      도보 약 10~15분
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Bus className="h-5 w-5 text-primary" />
                    버스
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="space-y-2">
                    <div>
                      <div className="font-medium">간선버스</div>
                      <div className="text-muted-foreground">401, 440, 441</div>
                    </div>
                    <div>
                      <div className="font-medium">지선버스</div>
                      <div className="text-muted-foreground">3422, 4318, 4319</div>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      양재역 정류장 하차
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Car className="h-5 w-5 text-primary" />
                    자가용
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="space-y-2">
                    <div>
                      <div className="font-medium">경부고속도로</div>
                      <div className="text-muted-foreground">양재 IC 이용</div>
                    </div>
                    <div>
                      <div className="font-medium">주차</div>
                      <div className="text-muted-foreground">매장 앞 주차 가능</div>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      네비게이션: "타이어트랙 양재점"
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
