"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { Phone, Clock, Users, Wrench, DollarSign, MapPin, CheckCircle } from "lucide-react"

const advantages = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Простой вызов мастера",
    description:
      "Позвоните в наш центр по телефону, напишите нам в WhatsApp или Viber или заполните специальную форму на сайте",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Работаем с 9 до 21",
    description: "Мы готовы приехать к вам чрезвычайно быстро. Это по-настоящему срочный ремонт в течении 2-3 часов",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Большой штат сотрудников",
    description: "Наши механики по бытовой технике локализованы в разных районах Одессы. Мы всегда свободны для Вас!",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Современное оборудование",
    description: "Мы не жалеем средств на хорошую аппаратуру и инструменты по диагностике и ремонту",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Низкие цены",
    description:
      "У нас низкие цены на услуги благодаря большому количеству клиентов, быстрой работе и отличному оборудованию",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Выезд по Одессе БЕСПЛАТНО",
    description:
      "Наша команда выполняет сервисный ремонт стиральных машин в Одессе, абсолютно в любом районе нашего города",
  },
]

export function CallMasterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <WaterTextAnimation
            text="Вызвать мастера так просто!"
            className="text-4xl md:text-6xl font-semibold mb-6 tracking-wide"
            color="#1B6568"
          />
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
            Позвоните в наш центр по телефону, напишите нам в WhatsApp или Viber или заполните специальную форму на
            сайте и сервисный ремонт Вашей стиральной машины практически начался!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-60" // Уменьшено с h-80 до h-60 (25% уменьшение)
            >
              <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-4 border-teal-600 p-6 flex flex-col justify-center text-center">
                <div className="text-teal-600 mb-4 flex justify-center">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-4 leading-tight" style={{ color: "#1B6568" }}>
                  {advantage.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 max-w-4xl mx-auto border border-teal-200">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-semibold" style={{ color: "#1B6568" }}>
                Гарантия качества
              </h3>
            </div>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Мы даем гарантию, что Вы и Ваша помощница по стирке останетесь довольны результатом! Также мы дарим Вам
              приятную скидку 5% на весь спектр наших услуг при последующем обращении!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
