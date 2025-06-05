"use client"

import type React from "react"
import { motion, useAnimation } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { WashingMachine } from "@/components/ui/washing-machine"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { WashingMachineDiagnostic } from "@/components/washing-machine-diagnostic"
import { BrandCarousel } from "@/components/brand-carousel"
import { RepairRulesSection } from "@/components/repair-rules-section"
import { ServiceAdvantagesSection } from "@/components/service-advantages-section"
import { CallMasterSection } from "@/components/call-master-section"
import { WaterContactsSection } from "@/components/water-contacts-section"
import { LoadingScreen } from "@/components/loading-screen"
import { Phone, DollarSign, X, Calendar, Clock } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format, addDays } from "date-fns"
import { uk } from "date-fns/locale"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function WashingMachineRepairLanding() {
  const buttonControls = useAnimation()
  const [showCallForm, setShowCallForm] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasShownLoading, setHasShownLoading] = useState(false)
  const pathname = usePathname()

  const pricesRef = useRef<HTMLDivElement>(null)
  const advantagesRef = useRef<HTMLDivElement>(null)
  const contactsRef = useRef<HTMLDivElement>(null)

  // Показываем загрузочный экран только при первом заходе на главную
  useEffect(() => {
    if (pathname === "/" && !hasShownLoading) {
      setIsLoading(true)
      setHasShownLoading(true)
    }
  }, [pathname, hasShownLoading])

  // Generate available times (every 30 minutes from 8:00 to 20:00)
  const availableTimes = Array.from({ length: 25 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8
    const minute = i % 2 === 0 ? "00" : "30"
    return `${hour}:${minute}`
  })

  // Animate the button every 3 seconds
  useEffect(() => {
    if (showCallForm || isLoading) return // Don't animate when form is open or loading

    const animateButton = async () => {
      while (true) {
        await buttonControls.start({
          y: -8,
          scale: 1.05,
          transition: { duration: 0.4, ease: "easeOut" },
        })
        await new Promise((resolve) => setTimeout(resolve, 300))
        await buttonControls.start({
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: "easeIn" },
        })
        await new Promise((resolve) => setTimeout(resolve, 3000))
      }
    }

    animateButton()
  }, [buttonControls, showCallForm, isLoading])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { phoneNumber, date, time })
    setFormSubmitted(true)

    setTimeout(() => {
      setFormSubmitted(false)
      setShowCallForm(false)
      setPhoneNumber("")
      setDate(undefined)
      setTime(undefined)
    }, 3000)
  }

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length === 0) return ""
    if (digits.length <= 2) return `+38${digits}`
    if (digits.length <= 5) return `+38 (${digits.slice(2)})`
    if (digits.length <= 8) return `+38 (${digits.slice(2, 5)}) ${digits.slice(5)}`
    if (digits.length <= 10) return `+38 (${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8)}`
    return `+38 (${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10, 12)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value)
    setPhoneNumber(formattedNumber)
  }

  const scrollToPrices = () => {
    pricesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - распределяем контент равномерно по экрану */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col justify-between items-center px-4 min-h-screen py-20"
        >
          {/* Header with Water Text Animation - в верхней части */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center flex-shrink-0"
          >
            <WaterTextAnimation
              text="Ремонт Стиральных Машин"
              className="text-3xl md:text-6xl font-cormorant font-semibold tracking-wide mb-2"
              color="#1B6568"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-3xl md:text-6xl font-cormorant font-semibold tracking-wide mb-12"
              style={{ color: "#1B6568" }}
            >
              в Одессе!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Професійний ремонт будь-яких марок пральних машин. Швидко, якісно, з гарантією.
            </motion.p>
          </motion.div>

          {/* Washing Machine Animation - в центре */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
            className="flex-grow flex items-center justify-center"
          >
            <WashingMachine />
          </motion.div>

          {/* Action Buttons - в нижней части */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md flex-shrink-0"
          >
            <motion.button
              animate={buttonControls}
              whileHover={{ y: -8, scale: 1.05 }}
              onClick={() => setShowCallForm(true)}
              className="flex-1 px-6 py-3 text-white rounded-lg font-semibold text-lg flex items-center justify-center shadow-lg tracking-wide"
              style={{ backgroundColor: "#1B6568" }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Вызвать Мастера
            </motion.button>

            <button
              onClick={scrollToPrices}
              className="flex-1 px-6 py-3 rounded-lg border border-neutral-300 bg-neutral-100 text-neutral-500 hover:-translate-y-1 transform transition duration-200 hover:shadow-md flex items-center justify-center font-medium text-lg tracking-wide"
              style={{ color: "#1B6568" }}
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Посмотреть Цены
            </button>
          </motion.div>
        </motion.div>
      </AuroraBackground>

      {/* Prices Section */}
      <section
        ref={pricesRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <WaterTextAnimation
              text="Онлайн-диагностика"
              className="text-4xl md:text-6xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              Узнайте примерную стоимость ремонта вашей стиральной машины
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <WashingMachineDiagnostic />
          </motion.div>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* Repair Rules Section */}
      <RepairRulesSection />

      {/* Service Advantages Section */}
      <ServiceAdvantagesSection />

      {/* Call Master Section (replaces Advantages) */}
      <CallMasterSection />

      {/* Contacts Section with Water Animation */}
      <WaterContactsSection onCallMaster={() => setShowCallForm(true)} />

      {/* Call Master Form */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showCallForm ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showCallForm ? "auto" : "none" }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: showCallForm ? 0 : 50,
            opacity: showCallForm ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: "#1B6568" }}>
            <h3 className="text-xl font-semibold text-white tracking-wide">Вызов мастера</h3>
            <button onClick={() => setShowCallForm(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#e6f7f5" }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#1B6568" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold mb-2 tracking-wide" style={{ color: "#1B6568" }}>
                  Заявка принята!
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
                  Мы свяжемся с вами в ближайшее время для подтверждения.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg">
                    Номер телефона
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+38 (___) ___-__-__"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    required
                    className="w-full text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-lg">Дата визита</Label>
                  <div className="grid gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal text-lg",
                            !date && "text-muted-foreground",
                          )}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: uk }) : "Выберите дату"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date() || date > addDays(new Date(), 7)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg">Время визита</Label>
                  <div className="grid gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal text-lg",
                            !time && "text-muted-foreground",
                          )}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time || "Выберите время"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0" align="start">
                        <div className="h-60 overflow-y-auto p-2">
                          {availableTimes.map((t) => (
                            <button
                              key={t}
                              className={cn(
                                "w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-lg",
                                time === t && "bg-gray-100 dark:bg-gray-700",
                              )}
                              onClick={() => {
                                setTime(t)
                                document
                                  .querySelector('[data-state="open"]')
                                  ?.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
                              }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full text-white text-lg font-medium tracking-wide py-6 hover:opacity-90"
                  style={{ backgroundColor: "#1B6568" }}
                  disabled={!phoneNumber || !date || !time}
                >
                  Отправить заявку
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
