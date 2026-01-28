"use client"

import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* 카카오톡 상담 버튼 */}
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
        aria-label="카카오톡 상담"
        title="카카오톡 상담"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* 전화 버튼 */}
      <Button
        size="lg"
        asChild
        className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-secondary hover:bg-secondary/90"
        aria-label="전화 문의"
        title="전화 문의: 0507-1351-6657"
      >
        <a href="tel:0507-1351-6657">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  )
}
