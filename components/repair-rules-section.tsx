"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import Image from "next/image"

const rules = [
  {
    image: "/images/repairman-stairs.png",
    title: "Соблюдает договора и время прибытия на адрес",
    description: "Наш мастер всегда приезжает вовремя и выполняет все договоренности",
  },
  {
    image: "/images/repairman-warranty.png",
    title: "Предоставляет гарантию до 24 мес. на работу и запчасти",
    description: "Официальная гарантия на все виды ремонтных работ и установленные детали",
  },
  {
    image: "/images/tools-cleanliness.png",
    title: "Соблюдает чистоту и порядок рабочего места",
    description: "Аккуратная работа без повреждения вашего имущества и интерьера",
  },
  {
    image: "/images/phone-timer.png",
    title: "Работает быстро и качественно",
    description: "Эффективное решение проблем в кратчайшие сроки с высоким качеством",
  },
  {
    image: "/images/repairman-portrait.png",
    title: "Опыт мастеров по ремонту стиральных машин не менее 5 лет",
    description: "Только опытные специалисты с подтвержденной квалификацией",
  },
]

export function RepairRulesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <WaterTextAnimation
            text="Мастер по ремонту стиральных машин соблюдает ряд правил"
            className="text-3xl md:text-5xl font-semibold mb-6 tracking-wide"
            color="#1B6568"
          />
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Наши специалисты работают по строгим стандартам качества и профессионализма
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-gray-400/50 transition-all duration-300 overflow-hidden border border-gray-200 group hover:border-transparent hover:translate-y-[-4px]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={rule.image || "/placeholder.svg"}
                  alt={rule.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 leading-tight" style={{ color: "#1B6568" }}>
                  {rule.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">{rule.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
