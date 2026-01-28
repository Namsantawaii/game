"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  Car,
  Check,
  MessageCircle,
  Phone,
  User,
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

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    tire: "",
    date: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 카카오톡 또는 전화 상담으로 연결
    const message = `
[견적 신청]
이름: ${formData.name}
연락처: ${formData.phone}
차량: ${formData.car}
서비스: ${formData.service}
타이어: ${formData.tire || "미정"}
희망일시: ${formData.date}
추가사항: ${formData.message || "없음"}
    `.trim()

    // 전화 또는 카카오톡으로 안내
    alert("견적 신청이 접수되었습니다!\n곧 연락드리겠습니다.\n\n더 빠른 상담을 원하시면 전화 주세요!\n☎ 0507-1351-6657")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              빠른 예약 시스템
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              견적 신청 & 예약하기
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              간단한 정보만 남겨주시면 빠르게 연락드립니다.
              <br className="hidden sm:block" />
              전화 상담이 더 빠릅니다!
            </p>
          </div>
        </div>
      </section>

      {/* 빠른 연락 버튼 */}
      <section className="border-b py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <Button
                variant="default"
                size="lg"
                asChild
                className="h-auto flex-col gap-2 py-6"
              >
                <a href="tel:0507-1351-6657">
                  <Phone className="h-6 w-6" />
                  <div>
                    <div className="text-base font-semibold">전화 상담</div>
                    <div className="text-xs opacity-90">0507-1351-6657</div>
                  </div>
                </a>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="h-auto flex-col gap-2 py-6"
              >
                <MessageCircle className="h-6 w-6" />
                <div>
                  <div className="text-base font-semibold">카카오톡 상담</div>
                  <div className="text-xs opacity-90">1:1 채팅 문의</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 견적 신청 폼 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_400px]">
            {/* 폼 */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">온라인 견적 신청</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  아래 정보를 입력하시면 빠르게 견적을 안내해드립니다
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <User className="h-4 w-4" />
                      고객 정보
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        이름 <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="홍길동"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        연락처 <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Car className="h-4 w-4" />
                      차량 정보
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        차량 정보 <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.car}
                        onChange={(e) =>
                          setFormData({ ...formData, car: e.target.value })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="예: 벤츠 E클래스, BMW 5시리즈"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        원하시는 서비스 <span className="text-secondary">*</span>
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">선택하세요</option>
                        <option value="tire-purchase">타이어 구매 + 장착</option>
                        <option value="tire-installation">타이어 지참 장착만</option>
                        <option value="alignment">휠얼라인먼트</option>
                        <option value="repair">펑크 수리</option>
                        <option value="check">타이어 점검</option>
                        <option value="other">기타 (메시지에 작성)</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        타이어 브랜드/모델 (선택사항)
                      </label>
                      <input
                        type="text"
                        value={formData.tire}
                        onChange={(e) =>
                          setFormData({ ...formData, tire: e.target.value })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="예: 미쉐린 PS4, 금호 엑스타"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Calendar className="h-4 w-4" />
                      예약 정보
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        희망 날짜/시간 <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="예: 1월 30일 오후 2시"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        추가 문의사항
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="궁금하신 점이나 요청사항을 자유롭게 작성해주세요"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" size="lg" className="w-full gap-2">
                  견적 신청하기 <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  신청하신 내용은 개인정보처리방침에 따라 안전하게 관리됩니다
                </p>
              </form>
            </div>

            {/* 사이드바 */}
            <div className="space-y-6">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardHeader>
                  <CardTitle>빠른 상담</CardTitle>
                  <CardDescription>
                    전화나 카카오톡이 더 빠릅니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" asChild className="w-full gap-2">
                    <a href="tel:0507-1351-6657">
                      <Phone className="h-4 w-4" />
                      0507-1351-6657
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    카카오톡 상담
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">영업시간</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">월 ~ 목</span>
                    <span className="font-medium">09:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">금 · 토</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">일요일</span>
                    <span className="font-medium text-secondary">정기휴무</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">준비사항</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <span>차량 정보 (모델, 연식)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <span>타이어 지참 시 사이즈 확인</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <span>작업시간 약 1-2시간 소요</span>
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
