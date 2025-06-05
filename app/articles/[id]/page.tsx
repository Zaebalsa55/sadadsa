"use client"

import type React from "react"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

const articles = [
  {
    id: 1,
    title: "Как почистить стиральную машину?",
    excerpt:
      "Подробное руководство по очистке стиральной машины от накипи, плесени и неприятных запахов. Узнайте, как продлить срок службы вашей техники.",
    content: `
      <h2>Зачем нужно чистить стиральную машину?</h2>
      <p>Регулярная чистка стиральной машины необходима для поддержания её работоспособности и продления срока службы. Накипь, остатки моющих средств и грязь могут привести к поломкам и неприятным запахам.</p>
      
      <h2>Что понадобится для чистки:</h2>
      <ul>
        <li>Лимонная кислота или уксус</li>
        <li>Пищевая сода</li>
        <li>Мягкая тряпка</li>
        <li>Старая зубная щётка</li>
      </ul>
      
      <h2>Пошаговая инструкция:</h2>
      <ol>
        <li><strong>Очистка барабана:</strong> Засыпьте 100-200г лимонной кислоты в барабан и запустите стирку при температуре 90°C без белья.</li>
        <li><strong>Чистка лотка для порошка:</strong> Выньте лоток и промойте его тёплой водой с содой.</li>
        <li><strong>Очистка фильтра:</strong> Найдите сливной фильтр внизу машины и промойте его под проточной водой.</li>
        <li><strong>Протирка резинки:</strong> Очистите резиновую манжету от грязи и плесени.</li>
      </ol>
      
      <h2>Профилактика:</h2>
      <p>Проводите такую чистку раз в 2-3 месяца. После каждой стирки оставляйте дверцу приоткрытой для проветривания.</p>
    `,
    author: "Мастер Сергей",
    date: "15 декабря 2024",
    readTime: "5 мин",
    image: "/images/washing-machine-reference.png",
  },
  {
    id: 2,
    title: "Как правильно пользоваться стиральной машиной?",
    excerpt:
      "Советы по правильному использованию стиральной машины, которые помогут избежать поломок и обеспечить качественную стирку.",
    content: `
      <h2>Основные правила эксплуатации</h2>
      <p>Правильное использование стиральной машины не только обеспечивает качественную стирку, но и значительно продлевает срок службы техники.</p>
      
      <h2>Подготовка к стирке:</h2>
      <ul>
        <li>Проверьте карманы на наличие мелких предметов</li>
        <li>Рассортируйте бельё по цвету и типу ткани</li>
        <li>Не перегружайте барабан</li>
        <li>Застегните молнии и пуговицы</li>
      </ul>
      
      <h2>Выбор программы стирки:</h2>
      <ol>
        <li><strong>Хлопок:</strong> Для белых и цветных хлопковых тканей при температуре 40-90°C</li>
        <li><strong>Синтетика:</strong> Для искусственных тканей при температуре 30-60°C</li>
        <li><strong>Деликатная стирка:</strong> Для шёлка, шерсти и кружева при температуре 30°C</li>
        <li><strong>Быстрая стирка:</strong> Для слабозагрязнённых вещей</li>
      </ol>
      
      <h2>Дозировка моющих средств:</h2>
      <p>Используйте рекомендованное количество порошка согласно инструкции. Избыток моющего средства может привести к образованию пены и плохому полосканию.</p>
      
      <h2>После стирки:</h2>
      <p>Сразу после окончания программы достаньте бельё из машины, чтобы избежать появления неприятного запаха и складок.</p>
    `,
    author: "Мастер Андрей",
    date: "12 декабря 2024",
    readTime: "7 мин",
    image: "/images/repairman-portrait.png",
  },
  {
    id: 3,
    title: "Частые поломки стиральных машин",
    excerpt: "Разбираем самые распространённые неисправности стиральных машин, их причины и способы устранения.",
    content: `
      <h2>Топ-10 частых поломок</h2>
      <p>Знание основных неисправностей поможет вам быстро определить проблему и принять правильное решение о ремонте.</p>
      
      <h2>1. Машина не сливает воду</h2>
      <p><strong>Причины:</strong> Засор сливного фильтра, поломка насоса, засор сливного шланга.</p>
      <p><strong>Решение:</strong> Проверьте и очистите фильтр, при необходимости обратитесь к мастеру.</p>
      
      <h2>2. Не нагревается вода</h2>
      <p><strong>Причины:</strong> Поломка ТЭНа, неисправность датчика температуры, проблемы с модулем управления.</p>
      <p><strong>Решение:</strong> Требуется диагностика и замена неисправных деталей.</p>
      
      <h2>3. Сильная вибрация и шум</h2>
      <p><strong>Причины:</strong> Износ подшипников, разбалансировка барабана, неправильная установка.</p>
      <p><strong>Решение:</strong> Проверьте установку машины, при сильном шуме обратитесь к специалисту.</p>
      
      <h2>4. Течёт вода</h2>
      <p><strong>Причины:</strong> Повреждение манжеты люка, износ патрубков, поломка помпы.</p>
      <p><strong>Решение:</strong> Немедленно прекратите использование и вызовите мастера.</p>
      
      <h2>5. Не открывается дверца</h2>
      <p><strong>Причины:</strong> Поломка замка, проблемы с электроникой, деформация дверцы.</p>
      <p><strong>Решение:</strong> Не применяйте силу, обратитесь к специалисту.</p>
      
      <h2>Профилактика поломок:</h2>
      <ul>
        <li>Регулярно чистите фильтр и лоток для порошка</li>
        <li>Не перегружайте машину</li>
        <li>Используйте качественные моющие средства</li>
        <li>Проводите профилактическую чистку раз в 3 месяца</li>
      </ul>
    `,
    author: "Мастер Дмитрий",
    date: "10 декабря 2024",
    readTime: "8 мин",
    image: "/images/tools-cleanliness.png",
  },
  {
    id: 4,
    title: "Жена застряла в машине - что делать?",
    excerpt:
      "Юмористическая статья о том, как 'починить' самую важную 'деталь' в доме, когда она 'застревает' в стиральной машине.",
    content: `
      <h2>Диагностика проблемы</h2>
      <p>Если ваша жена 'застряла' в стиральной машине (то есть проводит слишком много времени, пытаясь её починить), не паникуйте! Это распространённая 'поломка', которую можно легко устранить.</p>
      
      <h2>Симптомы 'неисправности':</h2>
      <ul>
        <li>Жена стоит перед машиной и грустно на неё смотрит</li>
        <li>Слышны звуки типа "Опять эта машина!" или "Почему она не работает?"</li>
        <li>Попытки самостоятельного 'ремонта' с помощью постукивания</li>
        <li>Чтение инструкции в 10-й раз подряд</li>
      </ul>
      
      <h2>Алгоритм 'ремонта':</h2>
      <ol>
        <li><strong>Шаг 1:</strong> Подойдите к жене и обнимите её</li>
        <li><strong>Шаг 2:</strong> Скажите: "Дорогая, я вызову мастера"</li>
        <li><strong>Шаг 3:</strong> Позвоните нам по телефону +38 (067) 123-45-67</li>
        <li><strong>Шаг 4:</strong> Приготовьте чай и ждите мастера</li>
        <li><strong>Шаг 5:</strong> Наслаждайтесь благодарностью жены</li>
      </ol>
      
      <h2>Профилактика:</h2>
      <p>Чтобы избежать повторения ситуации, рекомендуем:</p>
      <ul>
        <li>Регулярное техническое обслуживание стиральной машины</li>
        <li>Своевременный вызов мастера при первых признаках неисправности</li>
        <li>Больше комплиментов жене (это всегда работает!)</li>
      </ul>
      
      <h2>Гарантия результата</h2>
      <p>Мы гарантируем, что после нашего визита ваша жена будет довольна, стиральная машина будет работать, а вы станете героем дня!</p>
      
      <p><em>Внимание: данная статья написана с юмором. Мы с уважением относимся ко всем нашим клиентам и их семьям!</em></p>
    `,
    author: "Мастер Юрий",
    date: "8 декабря 2024",
    readTime: "3 мин",
    image: "/images/repairman-warranty.png",
  },
]

export default function ArticlePage() {
  const params = useParams()
  const articleId = Number.parseInt(params.id as string)
  const article = articles.find((a) => a.id === articleId)

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4" style={{ color: "#1B6568" }}>
            Статья не найдена
          </h1>
          <Link href="/articles" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Вернуться к статьям
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href="/articles"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Вернуться к статьям
            </Link>

            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-6">
              <User className="w-4 h-4 mr-1" />
              <span className="mr-4">{article.author}</span>
              <Clock className="w-4 h-4 mr-1" />
              <span className="mr-4">{article.readTime}</span>
              <span>{article.date}</span>
            </div>

            <WaterTextAnimation
              text={article.title}
              className="text-3xl md:text-5xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />

            <div
              className="prose prose-lg max-w-none"
              style={
                {
                  "--tw-prose-headings": "#1B6568",
                  "--tw-prose-links": "#0d9488",
                  "--tw-prose-bold": "#1B6568",
                } as React.CSSProperties
              }
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
