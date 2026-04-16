const escrowSnippet = `type EscrowStatus = "created" | "funded" | "delivered" | "released" | "refunded"

export async function releaseEscrow(dealId: string, buyerId: string) {
  return prisma.$transaction(async (tx) => {
    const deal = await tx.deal.findUniqueOrThrow({ where: { id: dealId } })

    if (deal.status !== "delivered") throw new Error("Deal is not delivered yet")
    if (deal.buyerId !== buyerId) throw new Error("Only buyer can release funds")

    await tx.escrow.update({
      where: { dealId },
      data: { status: "released", releasedAt: new Date() },
    })

    return tx.wallet.update({
      where: { userId: deal.sellerId },
      data: { balance: { increment: deal.amount } },
    })
  })
}`

export const translations = {
  en: {
    nav: {
      brand: "timur.dev",
      links: {
        work: "work",
        proof: "proof",
        stack: "stack",
        contact: "contact",
      },
      availability: "available for work",
      languageLabel: "language",
    },
    hero: {
      shippingLabel: "currently shipping",
      shippingProject: "SafeLoot v2",
      name: "Timur Khabosha",
      role: "Full-stack Developer",
      description:
        "I design and build reliable web products end to end - from database schemas and APIs to interfaces people actually trust. Obsessed with performance, clean architecture, and shipping work that holds up under real traffic.",
      ctaProjects: "view projects",
      ctaContact: "get in touch",
      aboutFileName: "about.json",
      about: {
        roleKey: "role",
        roleValue: "Full-stack Developer",
        focusKey: "focus",
        focusValues: ["TypeScript", "Next.js", "APIs"],
        shippingKey: "shipping",
        shippingValue: "SafeLoot",
        reviewsKey: "reviews",
        reviewsValue: "1400",
        statusKey: "status",
        statusValue: "available",
      },
      location: "Remote - UTC+3",
    },
    projects: {
      sectionKicker: "selected work",
      sectionTitle: "Projects I've built",
      sectionDescription:
        "Production systems - not demos. Each one solves a real problem for real users.",
      featuredBadge: "featured",
      featuredCode: "project_01",
      featuredStatus: "active development",
      productName: "SafeLoot",
      productDescription:
        "SafeLoot is an ambitious MVP of a digital goods marketplace, currently in active development. The core product focus is trust: escrow-protected transactions and a dynamic rating model that adapts as users complete deals.",
      bulletPoints: [
        "Escrow-first deal lifecycle: created -> funded -> delivered -> released/refunded",
        "Dynamic reputation system recalculates buyer and seller ratings after each completed or disputed deal",
        "MVP scope is intentionally focused on transaction safety and trust mechanics before public scale",
        "Current stage: private build with ongoing iteration on edge cases and automated tests",
      ],
      ctaProgress: "follow build progress",
      ctaSource: "source",
      terminalPath: "~/safeloot/escrow.ts",
      codeSnippet: escrowSnippet,
      safelootStack: ["Next.js", "Prisma", "Tailwind CSS"],
      moreCards: [
        {
          code: "project_02",
          title: "More coming soon",
          description: "Currently heads-down on SafeLoot v2. New case studies land here next.",
        },
        {
          code: "project_03",
          title: "Client work",
          description:
            "Select freelance engagements - full-stack builds, performance audits, rescue missions.",
        },
      ],
    },
    achievement: {
      sectionKicker: "proof of work",
      sectionTitle: "Trusted by the marketplace",
      badge: "marketplace achievement",
      reviewsLead: "Over",
      reviewsHighlight: "1,400 verified reviews",
      reviewsDescription:
        "earned across a major freelance marketplace - built one delivered project at a time, with a near-perfect rating and clients who keep coming back.",
      starSummary: "4.97 average - 1,400+ reviews",
      liveLabel: "live",
      metrics: [
        { label: "verified reviews", value: "1,400+" },
        { label: "avg. rating", value: "4.97 / 5" },
        { label: "repeat clients", value: "38%" },
        { label: "on-time delivery", value: "99.2%" },
      ],
      reviews: [
        {
          quote: "Instant delivery - the deal was done in 2 minutes.",
          author: "Marketplace client",
        },
        {
          quote:
            "Game-side activation failed at first, but seller explained everything and helped me finish it.",
          author: "Marketplace client",
        },
        {
          quote: "Best price I found today, and communication was clear and respectful.",
          author: "Marketplace client",
        },
      ],
    },
    stack: {
      sectionKicker: "stack",
      sectionTitle: "Tools I reach for",
      sectionDescription: "Boring where it matters. Sharp where it counts.",
      groups: [
        {
          label: "frontend",
          items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand"],
        },
        {
          label: "backend",
          items: ["Node.js", "tRPC", "Prisma", "PostgreSQL", "Redis"],
        },
        {
          label: "infra",
          items: ["Vercel", "Docker", "AWS", "Cloudflare", "GitHub Actions"],
        },
        {
          label: "tooling",
          items: ["Stripe", "Resend", "Sentry", "Playwright", "Vitest"],
        },
      ],
    },
    contact: {
      sectionKicker: "contact",
      sectionTitle: "Have something worth building?",
      sectionDescription:
        "I take on a small number of projects at a time so I can go deep. If your idea needs a developer who ships - let's talk.",
      channels: {
        emailLabel: "email",
        githubLabel: "github",
        linkedinLabel: "linkedin",
      },
      footer: {
        builtBy: "built by Timur Khabosha",
        deploy: "v2.0.1 - last deploy just now",
      },
    },
  },
  ru: {
    nav: {
      brand: "timur.dev",
      links: {
        work: "работы",
        proof: "отзывы",
        stack: "стек",
        contact: "контакт",
      },
      availability: "доступен для заказов",
      languageLabel: "язык",
    },
    hero: {
      shippingLabel: "сейчас в разработке",
      shippingProject: "SafeLoot v2",
      name: "Timur Khabosha",
      role: "Full-stack разработчик",
      description:
        "Я проектирую и создаю надежные веб-продукты под ключ - от схем базы данных и API до интерфейсов, которым действительно доверяют. Ориентир на производительность, чистую архитектуру и стабильную работу под реальной нагрузкой.",
      ctaProjects: "смотреть проекты",
      ctaContact: "связаться",
      aboutFileName: "about.json",
      about: {
        roleKey: "роль",
        roleValue: "Full-stack разработчик",
        focusKey: "фокус",
        focusValues: ["TypeScript", "Next.js", "API"],
        shippingKey: "проект",
        shippingValue: "SafeLoot",
        reviewsKey: "отзывов",
        reviewsValue: "1400",
        statusKey: "статус",
        statusValue: "доступен",
      },
      location: "Удаленно - UTC+3",
    },
    projects: {
      sectionKicker: "избранные работы",
      sectionTitle: "Проекты, которые я создал",
      sectionDescription:
        "Боевые системы - не демо. Каждый проект решает реальную задачу реальных пользователей.",
      featuredBadge: "флагман",
      featuredCode: "project_01",
      featuredStatus: "активная разработка",
      productName: "SafeLoot",
      productDescription:
        "SafeLoot - амбициозный MVP маркетплейса цифровых товаров, который находится в активной разработке. Ключевой фокус продукта - доверие: сделки с эскроу-защитой и динамическая модель рейтинга, которая обновляется после каждой сделки.",
      bulletPoints: [
        "Жизненный цикл сделки через эскроу: создана -> пополнена -> доставлена -> выплата/возврат",
        "Динамическая система репутации пересчитывает рейтинг покупателя и продавца после каждой завершенной или спорной сделки",
        "MVP намеренно сфокусирован на безопасности транзакций и механиках доверия до публичного масштабирования",
        "Текущий этап: закрытая сборка с постоянной проработкой пограничных случаев и автотестов",
      ],
      ctaProgress: "следить за прогрессом",
      ctaSource: "исходники",
      terminalPath: "~/safeloot/escrow.ts",
      codeSnippet: escrowSnippet,
      safelootStack: ["Next.js", "Prisma", "Tailwind CSS"],
      moreCards: [
        {
          code: "project_02",
          title: "Скоро больше",
          description: "Сейчас основной фокус на SafeLoot v2. Новые кейсы появятся здесь дальше.",
        },
        {
          code: "project_03",
          title: "Клиентская работа",
          description:
            "Избранные фриланс-заказы - full-stack разработка, аудит производительности и rescue-задачи.",
        },
      ],
    },
    achievement: {
      sectionKicker: "подтверждение результата",
      sectionTitle: "Маркетплейс доверяет",
      badge: "достижение на маркетплейсе",
      reviewsLead: "Более",
      reviewsHighlight: "1 400 подтвержденных отзывов",
      reviewsDescription:
        "на крупном фриланс-маркетплейсе - каждый отзыв получен за реально выполненную работу, с почти идеальным рейтингом и клиентами, которые возвращаются.",
      starSummary: "Средний рейтинг 4.97 - 1 400+ отзывов",
      liveLabel: "live",
      metrics: [
        { label: "подтвержденных отзывов", value: "1 400+" },
        { label: "средний рейтинг", value: "4.97 / 5" },
        { label: "повторных клиентов", value: "38%" },
        { label: "сделок вовремя", value: "99.2%" },
      ],
      reviews: [
        {
          quote: "Моментальная выдача - сделка заняла 2 минуты.",
          author: "Клиент маркетплейса",
        },
        {
          quote:
            "С активацией сначала были проблемы со стороны игры, но продавец все объяснил и помог довести до конца.",
          author: "Клиент маркетплейса",
        },
        {
          quote: "Лучшая цена из всех, что нашел сегодня, и очень адекватное общение.",
          author: "Клиент маркетплейса",
        },
      ],
    },
    stack: {
      sectionKicker: "стек",
      sectionTitle: "Инструменты, которые я выбираю",
      sectionDescription: "Просто там, где это важно. Точно там, где это решает.",
      groups: [
        {
          label: "фронтенд",
          items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand"],
        },
        {
          label: "бэкенд",
          items: ["Node.js", "tRPC", "Prisma", "PostgreSQL", "Redis"],
        },
        {
          label: "инфра",
          items: ["Vercel", "Docker", "AWS", "Cloudflare", "GitHub Actions"],
        },
        {
          label: "инструменты",
          items: ["Stripe", "Resend", "Sentry", "Playwright", "Vitest"],
        },
      ],
    },
    contact: {
      sectionKicker: "контакт",
      sectionTitle: "Есть идея, которую стоит реализовать?",
      sectionDescription:
        "Я беру ограниченное число проектов, чтобы глубоко погружаться в задачу. Если вашему продукту нужен разработчик, который доводит до результата - давайте обсудим.",
      channels: {
        emailLabel: "почта",
        githubLabel: "github",
        linkedinLabel: "linkedin",
      },
      footer: {
        builtBy: "собрал Timur Khabosha",
        deploy: "v2.0.1 - последний деплой только что",
      },
    },
  },
  ua: {
    nav: {
      brand: "timur.dev",
      links: {
        work: "роботи",
        proof: "відгуки",
        stack: "стек",
        contact: "контакт",
      },
      availability: "доступний для замовлень",
      languageLabel: "мова",
    },
    hero: {
      shippingLabel: "зараз у розробці",
      shippingProject: "SafeLoot v2",
      name: "Timur Khabosha",
      role: "Full-stack розробник",
      description:
        "Я проєктую та будую надійні веб-продукти під ключ - від схем бази даних і API до інтерфейсів, яким справді довіряють. Фокус на продуктивності, чистій архітектурі та стабільній роботі під реальним навантаженням.",
      ctaProjects: "дивитись проєкти",
      ctaContact: "зв'язатися",
      aboutFileName: "about.json",
      about: {
        roleKey: "роль",
        roleValue: "Full-stack розробник",
        focusKey: "фокус",
        focusValues: ["TypeScript", "Next.js", "API"],
        shippingKey: "проєкт",
        shippingValue: "SafeLoot",
        reviewsKey: "відгуків",
        reviewsValue: "1400",
        statusKey: "статус",
        statusValue: "доступний",
      },
      location: "Віддалено - UTC+3",
    },
    projects: {
      sectionKicker: "обрані роботи",
      sectionTitle: "Проєкти, які я створив",
      sectionDescription:
        "Продакшн-системи - не демо. Кожен проєкт вирішує реальну задачу для реальних користувачів.",
      featuredBadge: "флагман",
      featuredCode: "project_01",
      featuredStatus: "активна розробка",
      productName: "SafeLoot",
      productDescription:
        "SafeLoot - амбітний MVP маркетплейсу цифрових товарів, який зараз у активній розробці. Ключовий фокус продукту - довіра: угоди із захистом через ескроу та динамічна модель рейтингу, що оновлюється після кожної угоди.",
      bulletPoints: [
        "Життєвий цикл угоди через ескроу: створено -> поповнено -> доставлено -> виплата/повернення",
        "Динамічна система репутації перераховує рейтинг покупця і продавця після кожної завершеної або спірної угоди",
        "MVP навмисно сфокусований на безпеці транзакцій і механіках довіри до публічного масштабування",
        "Поточний етап: приватна збірка з постійною роботою над edge-кейсами та автотестами",
      ],
      ctaProgress: "стежити за прогресом",
      ctaSource: "джерело",
      terminalPath: "~/safeloot/escrow.ts",
      codeSnippet: escrowSnippet,
      safelootStack: ["Next.js", "Prisma", "Tailwind CSS"],
      moreCards: [
        {
          code: "project_02",
          title: "Скоро більше",
          description: "Зараз фокус на SafeLoot v2. Нові кейси з'являться тут далі.",
        },
        {
          code: "project_03",
          title: "Клієнтська робота",
          description:
            "Вибрані фриланс-замовлення - full-stack розробка, аудит продуктивності та rescue-задачі.",
        },
      ],
    },
    achievement: {
      sectionKicker: "підтвердження результату",
      sectionTitle: "Маркетплейс довіряє",
      badge: "досягнення на маркетплейсі",
      reviewsLead: "Понад",
      reviewsHighlight: "1 400 підтверджених відгуків",
      reviewsDescription:
        "на великому фриланс-маркетплейсі - кожен відгук отримано за реально виконану роботу, з майже ідеальним рейтингом і клієнтами, які повертаються.",
      starSummary: "Середній рейтинг 4.97 - 1 400+ відгуків",
      liveLabel: "live",
      metrics: [
        { label: "підтверджених відгуків", value: "1 400+" },
        { label: "середній рейтинг", value: "4.97 / 5" },
        { label: "повторних клієнтів", value: "38%" },
        { label: "угод вчасно", value: "99.2%" },
      ],
      reviews: [
        {
          quote: "Миттєва видача - угода зайняла 2 хвилини.",
          author: "Клієнт маркетплейсу",
        },
        {
          quote:
            "З активацією спочатку були проблеми з боку гри, але продавець усе пояснив і допоміг завершити.",
          author: "Клієнт маркетплейсу",
        },
        {
          quote: "Найкраща ціна, яку знайшов сьогодні, і адекватне спілкування.",
          author: "Клієнт маркетплейсу",
        },
      ],
    },
    stack: {
      sectionKicker: "стек",
      sectionTitle: "Інструменти, які я обираю",
      sectionDescription: "Просто там, де це важливо. Точно там, де це вирішує.",
      groups: [
        {
          label: "фронтенд",
          items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand"],
        },
        {
          label: "бекенд",
          items: ["Node.js", "tRPC", "Prisma", "PostgreSQL", "Redis"],
        },
        {
          label: "інфра",
          items: ["Vercel", "Docker", "AWS", "Cloudflare", "GitHub Actions"],
        },
        {
          label: "інструменти",
          items: ["Stripe", "Resend", "Sentry", "Playwright", "Vitest"],
        },
      ],
    },
    contact: {
      sectionKicker: "контакт",
      sectionTitle: "Є ідея, яку варто реалізувати?",
      sectionDescription:
        "Я беру обмежену кількість проєктів, щоб глибоко занурюватися в задачу. Якщо вашому продукту потрібен розробник, який доводить до результату - давайте обговоримо.",
      channels: {
        emailLabel: "пошта",
        githubLabel: "github",
        linkedinLabel: "linkedin",
      },
      footer: {
        builtBy: "зробив Timur Khabosha",
        deploy: "v2.0.1 - останній деплой щойно",
      },
    },
  },
} as const

export type Language = keyof typeof translations
export type PageTranslations = (typeof translations)[Language]
