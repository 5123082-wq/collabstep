import type { ModalId } from "@/components/providers/modal-provider";

export type BlueprintAction = {
  id: string;
  label: string;
  variant?: "primary" | "secondary" | "outline";
  modalId?: ModalId;
  href?: string;
};

export type BlueprintSection = {
  title: string;
  description?: string;
  items?: string[];
  tags?: string[];
};

export type BlueprintTable = {
  name: string;
  description?: string;
  columns: string[];
};

export type BlueprintModal = {
  id: ModalId;
  label: string;
  description?: string;
};

export type PageBlueprint = {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
  actions?: BlueprintAction[];
  sections?: BlueprintSection[];
  tables?: BlueprintTable[];
  modals?: BlueprintModal[];
  states?: string[];
  checklist?: string[];
  notes?: string[];
};

const defaultStates = ["loading", "empty", "error", "success", "validation"];

const projectBreadcrumbs = [
  { label: "Проекты", href: "/projects" },
  { label: "Project Alpha", href: "/projects/project" }
];

export const pageBlueprints: Record<string, PageBlueprint> = {
  home: {
    title: "Главная",
    description: "Дэшборд по всем активным workspace: KPI, задачи, уведомления, быстрые действия.",
    actions: [
      { id: "home-quick-create", label: "Создать действие", variant: "primary", modalId: "quick-create" },
      { id: "home-open-command", label: "Command Palette", variant: "outline", modalId: "command-palette" }
    ],
    sections: [
      {
        title: "KPI-виджеты",
        description: "Пульс проектов, займов, AI-сессий.",
        items: ["Выручка", "Активные проекты", "Заблокированные этапы", "AI-сессии за неделю"]
      },
      {
        title: "Последние активности",
        description: "Лента событий по workspace и проектам.",
        items: ["Комментарии", "AI-ответы", "Эскроу", "Новые отклики"]
      }
    ],
    notes: ["Глобальный поиск, быстрое создание, уведомления доступны из хедера."],
    states: defaultStates
  },
  "home/updates": {
    title: "Обновления",
    description: "Новости продукта, релизы, изменения тарифов.",
    sections: [
      {
        title: "Список релизов",
        description: "Карточки релизов по датам с фильтрами по типу изменения.",
        items: ["UI", "AI", "Проектный менеджмент", "Финансы"]
      }
    ],
    tables: [
      { name: "История релизов", columns: ["Дата", "Версия", "Раздел", "Ссылка на документацию"] }
    ],
    states: ["timeline", ...defaultStates]
  },
  "home/reports": {
    title: "Отчёты",
    description: "Конструктор отчётов по задачам, найму и финансам.",
    actions: [
      { id: "home-report-new", label: "Создать отчёт", variant: "primary", modalId: "generic-report-builder" }
    ],
    sections: [
      { title: "Шаблоны отчётов", items: ["KPI проектов", "Отчёт по затратам", "AI usage", "Найм"] }
    ],
    tables: [
      { name: "Сохранённые отчёты", columns: ["Название", "Автор", "Обновлено", "Поделиться"] }
    ],
    modals: [
      { id: "generic-report-builder", label: "Конструктор отчёта", description: "Мастер создания кастомного отчёта" }
    ],
    states: defaultStates
  },
  workspaces: {
    title: "Workspaces",
    description: "Каталог организаций, управление доступами и статусами.",
    actions: [
      { id: "workspace-create", label: "Новый workspace", variant: "primary", modalId: "create-workspace" },
      { id: "workspace-invite", label: "Пригласить", variant: "secondary", modalId: "workspace-invite" }
    ],
    sections: [
      { title: "Фильтры", description: "Статус, роль, активность, план.", items: ["Поиск", "Теги", "Планы"] },
      { title: "Карточки workspace", items: ["Статус", "План", "AI-кредиты", "Уведомления"] }
    ],
    tables: [
      { name: "Список workspaces", columns: ["Название", "План", "Проекты", "Участники", "Последняя активность"] }
    ],
    modals: [
      { id: "create-workspace", label: "Создать workspace" },
      { id: "workspace-invite", label: "Пригласить участников" }
    ],
    states: defaultStates
  },
  "workspaces/new": {
    title: "Создать Workspace",
    description: "Форма создания организации и выбора плана.",
    actions: [
      { id: "workspace-save", label: "Создать", variant: "primary", modalId: "create-workspace" }
    ],
    sections: [
      { title: "Форма", items: ["Название", "Slug", "Страна", "Валюта", "План"] }
    ],
    checklist: ["Подтвердить домен", "Загрузить логотип", "Пригласить команду"],
    states: ["draft", ...defaultStates]
  },
  "workspaces/plans": {
    title: "Планы & Seats",
    description: "Управление тарифами и местами участников.",
    actions: [
      { id: "workspace-change-plan", label: "Сменить план", modalId: "workspace-change-plan" },
      { id: "workspace-buy-seats", label: "Купить места", variant: "secondary", modalId: "workspace-buy-seats" }
    ],
    sections: [
      { title: "Текущий план", items: ["Лимиты", "AI-кредиты", "Доступные интеграции"] }
    ],
    tables: [
      { name: "Использование мест", columns: ["Роль", "Всего", "Занято", "Доступно"] }
    ],
    modals: [
      { id: "workspace-buy-seats", label: "Купить места" },
      { id: "workspace-remove-seats", label: "Удалить места" },
      { id: "workspace-change-plan", label: "Сменить план" }
    ],
    states: defaultStates
  },
  "workspaces/invoices": {
    title: "Инвойсы",
    description: "История платежей и счетов по workspace.",
    actions: [
      { id: "workspace-pay-invoice", label: "Оплатить счёт", modalId: "workspace-pay-invoice" }
    ],
    tables: [
      { name: "Инвойсы", columns: ["Номер", "Период", "Сумма", "Статус", "Действие"] }
    ],
    modals: [
      { id: "workspace-pay-invoice", label: "Оплатить счёт" }
    ],
    states: defaultStates
  },
  "workspaces/settings": {
    title: "Настройки Workspace",
    description: "Брендинг, домен, политики доступа.",
    actions: [
      { id: "workspace-delete", label: "Удалить workspace", variant: "outline", modalId: "workspace-delete" }
    ],
    sections: [
      { title: "Брендинг", items: ["Логотип", "Цвета", "Фон"] },
      { title: "Домен", items: ["Проверка записи", "SSL", "Редиректы"] },
      { title: "Политики", items: ["2FA", "Ограничения ролей", "Журнал действий"] }
    ],
    modals: [
      { id: "workspace-delete", label: "Удаление workspace" }
    ],
    states: defaultStates
  },
  "workspaces/audit": {
    title: "Аудит-лог",
    description: "Лента действий в рамках организации.",
    tables: [
      { name: "Журнал", columns: ["Дата", "Пользователь", "Действие", "Контекст", "IP"] }
    ],
    states: ["timeline", ...defaultStates]
  },
  marketplace: {
    title: "Маркетплейс",
    description: "Общий каталог проектов, специалистов, подрядчиков и шаблонов.",
    sections: [
      { title: "Быстрые фильтры", items: ["Категории", "Бюджет", "NDA", "AI-ready"] },
      { title: "Витрина", items: ["Карточки", "Сортировка", "Сохранить"] }
    ],
    states: defaultStates
  },
  "marketplace/projects": {
    title: "Маркетплейс · Проекты",
    description: "Публичные вакансии и проекты, открытые для откликов.",
    actions: [
      { id: "marketplace-project-apply", label: "Откликнуться", modalId: "marketplace-project-apply" },
      { id: "marketplace-project-question", label: "Задать вопрос", variant: "secondary", modalId: "marketplace-project-question" }
    ],
    sections: [
      { title: "Карточка проекта", items: ["Teaser", "Команда", "Требования", "Стек", "CTA"] },
      { title: "Фильтры", items: ["Уровень", "Бюджет", "Тип сотрудничества"] }
    ],
    modals: [
      { id: "marketplace-project-apply", label: "Откликнуться" },
      { id: "marketplace-project-question", label: "Задать вопрос" },
      { id: "marketplace-project-nda", label: "Подписать NDA" },
      { id: "marketplace-project-report", label: "Пожаловаться" }
    ],
    states: defaultStates
  },
  "marketplace/specialists": {
    title: "Специалисты",
    description: "Каталог специалистов с рейтингами, кейсами и доступностью.",
    actions: [
      { id: "marketplace-specialist-invite", label: "Пригласить", modalId: "marketplace-specialist-invite" },
      { id: "marketplace-specialist-interview", label: "Назначить интервью", variant: "secondary", modalId: "marketplace-specialist-interview" }
    ],
    sections: [
      { title: "Профиль специалиста", items: ["Скиллы", "Рейтинги", "Портфолио", "AI-теги"] }
    ],
    modals: [
      { id: "marketplace-specialist-invite", label: "Пригласить" },
      { id: "marketplace-specialist-interview", label: "Интервью" }
    ],
    states: defaultStates
  },
  "marketplace/contractors": {
    title: "Подрядчики",
    description: "Агенства и студии с пакетными предложениями.",
    actions: [
      { id: "marketplace-contractor-estimate", label: "Запросить смету", modalId: "marketplace-contractor-estimate" },
      { id: "marketplace-contractor-compare", label: "Сравнить", variant: "secondary", modalId: "marketplace-contractor-compare" },
      { id: "marketplace-contractor-order", label: "Оформить заказ", variant: "outline", modalId: "marketplace-contractor-order" }
    ],
    sections: [
      { title: "Карточка подрядчика", items: ["Стек", "Команда", "Отзывы", "Проекты"] }
    ],
    modals: [
      { id: "marketplace-contractor-estimate", label: "Запросить смету" },
      { id: "marketplace-contractor-compare", label: "Сравнить" },
      { id: "marketplace-contractor-order", label: "Оформить заказ" }
    ],
    states: defaultStates
  },
  "marketplace/templates": {
    title: "Шаблоны",
    description: "Каталог шаблонов проектов и документов.",
    actions: [
      { id: "marketplace-template-clone", label: "Клонировать", modalId: "marketplace-template-clone" },
      { id: "marketplace-template-demo", label: "Открыть демо", variant: "secondary", modalId: "marketplace-template-demo" }
    ],
    sections: [
      { title: "Карточка шаблона", items: ["Обзор", "Требования", "Скриншоты", "Автор"] }
    ],
    modals: [
      { id: "marketplace-template-clone", label: "Preflight Clone" },
      { id: "marketplace-template-report", label: "Пожаловаться" }
    ],
    states: defaultStates
  },
  "marketplace/project-sales": {
    title: "Проекты на продажу",
    description: "Листинги готовых проектов с NDA и чек-листом передачи.",
    actions: [
      { id: "marketplace-sale-create-offer", label: "Сделать оффер", modalId: "marketplace-sale-offer" },
      { id: "marketplace-sale-buy", label: "Купить сейчас", variant: "primary", modalId: "marketplace-sale-buy" },
      { id: "marketplace-sale-nda", label: "Подписать NDA", variant: "secondary", modalId: "marketplace-sale-nda" }
    ],
    sections: [
      { title: "Карточка листинга", items: ["Teaser", "Gate-бейдж", "Цена", "NDA", "Due diligence"] }
    ],
    modals: [
      { id: "marketplace-sale-offer", label: "Сделать оффер" },
      { id: "marketplace-sale-buy", label: "Купить сейчас" },
      { id: "marketplace-sale-nda", label: "Подписать NDA" },
      { id: "marketplace-sale-question", label: "Задать вопрос" }
    ],
    states: defaultStates
  },
  "marketplace/launch-packages": {
    title: "Пакеты запуска",
    description: "Фиксированные пакеты услуг (Brand-Start, Landing-72h, SMM-30d, Ecommerce Prebuilt).",
    sections: [
      { title: "Карточки пакетов", items: ["Описание", "Цена", "Срок", "CTA"] }
    ],
    modals: [
      { id: "marketplace-package-purchase", label: "Купить пакет" }
    ],
    states: defaultStates
  },
  projects: {
    title: "Проекты",
    description: "Каталог внутренних проектов workspace.",
    actions: [
      { id: "project-create", label: "Открыть проект", modalId: "create-project" }
    ],
    sections: [
      { title: "Фильтры", items: ["Статус", "Куратор", "AI готовность"] }
    ],
    states: defaultStates
  },
  "projects/portfolio": {
    title: "Портфель",
    description: "Витрина завершённых проектов, доступная для продажи или демонстрации.",
    actions: [
      { id: "project-sell", label: "Продать проект", modalId: "project-sell" }
    ],
    sections: [
      { title: "Карточки портфеля", items: ["Избранное", "AI-рекомендации", "Теги"] }
    ],
    states: defaultStates
  },
  "projects/templates": {
    title: "Проектные шаблоны",
    description: "Частные шаблоны для быстрого создания проектов.",
    actions: [
      { id: "project-template-clone", label: "Клонировать", modalId: "project-clone-template" }
    ],
    sections: [
      { title: "Библиотека", items: ["Категории", "Шаги", "AI-рекомендации"] }
    ],
    states: defaultStates
  },
  "projects/project": {
    title: "Project Alpha",
    description: "Общий хаб проекта с быстрыми действиями.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-invite", label: "Пригласить", modalId: "project-invite" },
      { id: "project-open-vacancy", label: "Открыть вакансию", modalId: "project-create-vacancy" },
      { id: "project-open-escrow", label: "Открыть эскроу", modalId: "project-open-escrow" },
      { id: "project-sell", label: "Продать", variant: "outline", modalId: "project-sell" }
    ],
    sections: [
      { title: "Навигация вкладок", items: ["Обзор", "Бриф", "Команда", "Вакансии", "Отклики", "Задачи", "Дизайн", "Разработка", "Маркетинг", "Подрядчики", "AI", "Финансы", "Документы", "Таймлайн", "Аналитика", "Настройки"] }
    ],
    notes: ["Вкладки отображаются в PageHeader как третий уровень."],
    states: defaultStates
  },
  "projects/project/overview": {
    title: "Обзор",
    description: "Сводка статусов проекта, KPI и блокеры.",
    breadcrumbs: projectBreadcrumbs,
    sections: [
      { title: "Прогресс", items: ["Этапы", "График", "Риски"] },
      { title: "Последние изменения", items: ["Комментарии", "AI-решения", "Финансы"] }
    ],
    notes: ["Карточки KPI + хронология."],
    states: defaultStates
  },
  "projects/project/brief": {
    title: "Бриф",
    description: "Редактор, версии и AI-подсказки.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-brief-ai", label: "AI-подсказка", modalId: "ai-start-session" },
      { id: "project-brief-request-review", label: "Запросить ревью", variant: "secondary", modalId: "project-request-review" }
    ],
    sections: [
      { title: "Редактор", items: ["Rich text", "Версии", "Diff"] },
      { title: "AI подсказки", items: ["Suggest", "Improve", "Summarize"] }
    ],
    modals: [
      { id: "project-request-review", label: "Запросить ревью" },
      { id: "project-upload-version", label: "Загрузить версию" }
    ],
    states: defaultStates
  },
  "projects/project/team": {
    title: "Команда & Роли",
    description: "Список участников и матрица RACI.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-team-invite", label: "Пригласить", modalId: "project-invite" },
      { id: "project-team-change-role", label: "Изменить роль", variant: "secondary", modalId: "workspace-change-role" }
    ],
    tables: [
      { name: "Участники", columns: ["Имя", "Роль", "Доступ", "Нагрузка", "Действия"] }
    ],
    sections: [
      { title: "Матрица RACI", items: ["Ответственный", "Согласует", "Консультант", "Информируется"] }
    ],
    states: defaultStates
  },
  "projects/project/vacancies": {
    title: "Вакансии",
    description: "Список открытых позиций проекта.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-vacancy-create", label: "Создать вакансию", modalId: "project-create-vacancy" }
    ],
    tables: [
      { name: "Вакансии", columns: ["Роль", "Тип", "Статус", "Отклики", "Действия"] }
    ],
    modals: [
      { id: "project-create-vacancy", label: "Создать вакансию" }
    ],
    states: defaultStates
  },
  "projects/project/applications": {
    title: "Отклики",
    description: "Конвейер кандидатов: submitted → shortlisted → interviewing → offered.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-application-offer", label: "Сделать оффер", modalId: "project-make-offer" }
    ],
    sections: [
      { title: "Конвейер", items: ["Submitted", "Shortlisted", "Interviewing", "Offered"] }
    ],
    modals: [
      { id: "project-make-offer", label: "Сделать оффер" },
      { id: "project-schedule-interview", label: "Назначить интервью" }
    ],
    states: defaultStates
  },
  "projects/project/tasks": {
    title: "Задачи",
    description: "Канбан, спринты и Гант.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-task-create", label: "Создать задачу", modalId: "project-create-task" },
      { id: "project-task-unlock", label: "Разблокировать этап", variant: "secondary", modalId: "project-unlock-stage" }
    ],
    sections: [
      { title: "Канбан", items: ["Backlog", "In progress", "Review", "Done"] },
      { title: "Спринты", items: ["План", "Velocity", "AI-подсказки"] },
      { title: "Гант", items: ["Даты", "Зависимости", "Риски"] }
    ],
    modals: [
      { id: "project-create-task", label: "Создать задачу" },
      { id: "project-request-review", label: "Запросить ревью" },
      { id: "project-unlock-stage", label: "Разблокировать этап" }
    ],
    states: defaultStates
  },
  "projects/project/design": {
    title: "Дизайн",
    description: "Бренд-система, Figma preview, препресс.",
    breadcrumbs: projectBreadcrumbs,
    sections: [
      { title: "Брендинг", items: ["Логотип", "Палитра", "Типографика"] },
      { title: "Превью макетов", items: ["Figma", "AI генерации", "Версии"] }
    ],
    modals: [
      { id: "project-upload-version", label: "Загрузить версию" },
      { id: "project-lock-version", label: "Заблокировать версию" }
    ],
    states: defaultStates
  },
  "projects/project/development": {
    title: "Сайт/Разработка",
    description: "Страницы, модули, репозиторий, баг-трек.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-dev-open-bug", label: "Создать баг", modalId: "project-create-task" }
    ],
    sections: [
      { title: "Модули", items: ["Pages", "Deploy", "AI Code Review"] },
      { title: "Интеграции", items: ["Git", "CI", "Ошибки"] }
    ],
    states: defaultStates
  },
  "projects/project/marketing": {
    title: "Маркетинг",
    description: "Персоны, кампании, контент-календарь.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-marketing-new-campaign", label: "Новая кампания", modalId: "project-create-task" }
    ],
    sections: [
      { title: "Персоны", items: ["JTBD", "Pain", "Value"] },
      { title: "Контент-календарь", items: ["Спринты", "Каналы", "AI Draft"] }
    ],
    states: defaultStates
  },
  "projects/project/contractors": {
    title: "Подрядчики",
    description: "Запросы смет, сравнение и заказы.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-contractor-request", label: "Запросить смету", modalId: "marketplace-contractor-estimate" },
      { id: "project-contractor-order", label: "Открыть эскроу", variant: "secondary", modalId: "project-open-escrow" }
    ],
    sections: [
      { title: "Запросы", items: ["Сметы", "Сравнение", "Этапы"] }
    ],
    states: defaultStates
  },
  "projects/project/ai": {
    title: "AI проекта",
    description: "Лента AI-сессий и генераций.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-ai-start", label: "Запустить сессию", modalId: "ai-start-session" },
      { id: "project-ai-send-review", label: "Отправить на ревью", variant: "secondary", modalId: "ai-send-review" }
    ],
    sections: [
      { title: "Сессии", items: ["Промпты", "Ответы", "Версии"] }
    ],
    modals: [
      { id: "ai-start-session", label: "Запуск сессии" },
      { id: "ai-regenerate", label: "Перегенерация" },
      { id: "ai-accept-project", label: "Принять в проект" },
      { id: "ai-send-review", label: "Отправить на ревью" }
    ],
    states: defaultStates
  },
  "projects/project/finance": {
    title: "Финансы проекта",
    description: "Бюджет, этапы, эскроу, документы.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-finance-open-escrow", label: "Открыть эскроу", modalId: "project-open-escrow" },
      { id: "project-finance-release", label: "Разблокировать", variant: "secondary", modalId: "project-unlock-stage" }
    ],
    sections: [
      { title: "Бюджет", items: ["Статьи", "Этапы", "AI прогноз"] },
      { title: "Эскроу", items: ["Контракты", "Состояние", "Действия"] }
    ],
    modals: [
      { id: "project-open-escrow", label: "Открыть эскроу" },
      { id: "project-unlock-stage", label: "Разблокировать этап" },
      { id: "project-open-dispute", label: "Открыть спор" }
    ],
    states: defaultStates
  },
  "projects/project/documents": {
    title: "Документы",
    description: "Файлы, версии, e-sign mock.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-doc-upload", label: "Загрузить", modalId: "project-upload-version" },
      { id: "project-doc-sign", label: "Подписать NDA", variant: "secondary", modalId: "project-sign-nda" }
    ],
    sections: [
      { title: "Версии", items: ["Файлы", "Замки", "Комментарии"] }
    ],
    modals: [
      { id: "project-upload-version", label: "Загрузить/обновить" },
      { id: "project-lock-version", label: "Заблокировать версию" },
      { id: "project-sign-nda", label: "Подписать NDA" }
    ],
    states: defaultStates
  },
  "projects/project/timeline": {
    title: "Таймлайн",
    description: "Хронология событий проекта.",
    breadcrumbs: projectBreadcrumbs,
    sections: [
      { title: "События", items: ["Задачи", "Финансы", "AI", "Документы"] }
    ],
    states: ["timeline", ...defaultStates]
  },
  "projects/project/analytics": {
    title: "Аналитика",
    description: "Графики по задачам, найму, качеству.",
    breadcrumbs: projectBreadcrumbs,
    sections: [
      { title: "Графики", items: ["Velocity", "Найм", "AI impact"] },
      { title: "Инсайты", items: ["Риски", "Предложения AI"] }
    ],
    states: defaultStates
  },
  "projects/project/settings": {
    title: "Настройки",
    description: "Видимость, роли, уведомления, интеграции.",
    breadcrumbs: projectBreadcrumbs,
    actions: [
      { id: "project-settings-clone", label: "Клонировать", modalId: "project-clone-template" }
    ],
    sections: [
      { title: "Видимость", items: ["Публичность", "Команда", "Разрешения"] },
      { title: "Интеграции", items: ["Slack", "Git", "Calendars"] }
    ],
    states: defaultStates
  },
  "ai/logo": {
    title: "AI · Логотип",
    description: "Генерация логотипов с промптом и вариантами.",
    actions: [
      { id: "ai-logo-start", label: "Запустить генерацию", modalId: "ai-start-session" }
    ],
    sections: [
      { title: "Форма промпта", items: ["Описание", "Стиль", "Цвет"] },
      { title: "Варианты", items: ["Сравнение", "Пометки", "Статусы"] }
    ],
    modals: [
      { id: "ai-start-session", label: "Запуск" },
      { id: "ai-regenerate", label: "Перегенерация" },
      { id: "ai-accept-project", label: "Принять в проект" }
    ],
    states: defaultStates
  },
  "ai/brandbook": {
    title: "AI · Брендбук",
    description: "Генерация брендбука и стайлгайдов.",
    actions: [
      { id: "ai-brandbook-start", label: "Создать брендбук", modalId: "ai-start-session" }
    ],
    sections: [
      { title: "Структура", items: ["Логотип", "Палитры", "Типографика", "Примеры"] }
    ],
    states: defaultStates
  },
  "ai/landing": {
    title: "AI · Лендинг",
    description: "AI-конструктор лендингов.",
    actions: [
      { id: "ai-landing-start", label: "Сгенерировать", modalId: "ai-start-session" }
    ],
    sections: [
      { title: "Промпт", items: ["Цель", "ЦА", "Тональность"] },
      { title: "Секции", items: ["Hero", "Фичи", "CTA", "Отзывы"] }
    ],
    states: defaultStates
  },
  "ai/marketing": {
    title: "AI · Маркетинг-стратегия",
    description: "Генерация маркетинговых стратегий.",
    actions: [
      { id: "ai-marketing-start", label: "Новая стратегия", modalId: "ai-start-session" }
    ],
    sections: [
      { title: "Выход", items: ["JTBD", "Каналы", "Контент", "Месседжи"] }
    ],
    states: defaultStates
  },
  "ai/competitors": {
    title: "AI · Анализ конкурентов",
    description: "Отчёты и сравнительные таблицы.",
    actions: [
      { id: "ai-competitors-start", label: "Запустить анализ", modalId: "ai-start-session" }
    ],
    sections: [
      { title: "Вывод", items: ["SWOT", "Позиционирование", "Price"] }
    ],
    states: defaultStates
  },
  "ai/content": {
    title: "AI · Контент-план",
    description: "Генерация контента и расписания.",
    actions: [
      { id: "ai-content-start", label: "Создать контент", modalId: "ai-start-session" }
    ],
    sections: [
      { title: "Календарь", items: ["Темы", "Каналы", "AI статус"] }
    ],
    states: defaultStates
  },
  "ai/history": {
    title: "AI · История",
    description: "Список всех AI-сессий и сравнение вариантов.",
    sections: [
      { title: "История", items: ["Сессии", "Статусы", "Принято"], tags: ["Draft", "Accepted"] }
    ],
    states: defaultStates
  },
  "finance/wallet": {
    title: "Кошелёк",
    description: "Кредиты, пополнение и вывод.",
    actions: [
      { id: "finance-deposit", label: "Пополнить", modalId: "finance-deposit" },
      { id: "finance-withdraw", label: "Вывести", variant: "secondary", modalId: "finance-withdraw" }
    ],
    sections: [
      { title: "Баланс", items: ["Доступно", "Зарезервировано", "AI-кредиты"] }
    ],
    modals: [
      { id: "finance-deposit", label: "Пополнить" },
      { id: "finance-withdraw", label: "Вывести" }
    ],
    states: defaultStates
  },
  "finance/escrow": {
    title: "Эскроу",
    description: "Список контрактов и статусы выплат.",
    actions: [
      { id: "finance-open-escrow", label: "Открыть эскроу", modalId: "finance-open-escrow" },
      { id: "finance-release", label: "Разблокировать", variant: "secondary", modalId: "finance-release" }
    ],
    tables: [
      { name: "Контракты", columns: ["Проект", "Стороны", "Сумма", "Этап", "Статус"] }
    ],
    modals: [
      { id: "finance-open-escrow", label: "Открыть эскроу" },
      { id: "finance-release", label: "Разблокировать" },
      { id: "finance-open-dispute", label: "Открыть спор" }
    ],
    states: defaultStates
  },
  "finance/subscriptions": {
    title: "Подписки/Тарифы",
    description: "Управление подписками и автоматическими продлениями.",
    actions: [
      { id: "finance-subscribe", label: "Оформить подписку", modalId: "finance-subscribe" }
    ],
    sections: [
      { title: "Тарифы", items: ["Starter", "Growth", "Enterprise"] }
    ],
    states: defaultStates
  },
  "finance/workspace-plans": {
    title: "Планы Workspace & Seats",
    description: "Тарифы и лимиты для workspaces.",
    actions: [
      { id: "finance-plan-buy-seats", label: "Купить места", modalId: "finance-buy-seats" },
      { id: "finance-plan-remove-seats", label: "Удалить места", variant: "secondary", modalId: "finance-remove-seats" }
    ],
    sections: [
      { title: "Сводка", items: ["План", "Использование", "Платежи"] }
    ],
    states: defaultStates
  },
  "finance/billing": {
    title: "Счета/Акты",
    description: "История счетов, актов и документов.",
    sections: [
      { title: "Документы", items: ["Инвойсы", "Акты", "Платежи"] }
    ],
    tables: [
      { name: "Счета", columns: ["Номер", "Период", "Сумма", "Статус"] }
    ],
    states: defaultStates
  },
  "finance/disputes": {
    title: "Споры/Арбитраж",
    description: "Открытые и закрытые споры, арбитраж.",
    actions: [
      { id: "finance-open-dispute", label: "Открыть спор", modalId: "finance-open-dispute" }
    ],
    sections: [
      { title: "Статусы", items: ["На рассмотрении", "Запрошены данные", "Решено"] }
    ],
    states: defaultStates
  },
  "community/pitches": {
    title: "Питчи",
    description: "Комнаты для презентаций проектов и обратной связи.",
    actions: [
      { id: "community-create-pitch", label: "Создать питч", modalId: "project-sell" }
    ],
    sections: [
      { title: "Ленты", items: ["Live", "Upcoming", "AI рекомендации"] }
    ],
    states: defaultStates
  },
  "community/rooms": {
    title: "Комнаты",
    description: "Комнаты сотрудничества и воркшопы.",
    sections: [
      { title: "Комнаты", items: ["Темы", "Участники", "Расписание"] }
    ],
    states: defaultStates
  },
  "community/events": {
    title: "События",
    description: "Митапы, вебинары, AMA.",
    sections: [
      { title: "Календарь", items: ["Онлайн", "Офлайн", "AI подбор"] }
    ],
    states: defaultStates
  },
  documents: {
    title: "Документы",
    description: "Центр документов и шаблонов.",
    sections: [
      { title: "Каталог", items: ["Фильтры", "Папки", "Теги"] }
    ],
    states: defaultStates
  },
  "documents/e-sign": {
    title: "E-sign",
    description: "Мок электронного подписания.",
    actions: [
      { id: "documents-send-sign", label: "Отправить на подпись", modalId: "project-sign-nda" }
    ],
    sections: [
      { title: "Подписи", items: ["Статус", "История", "Напоминания"] }
    ],
    states: defaultStates
  },
  "documents/templates": {
    title: "Документы · Шаблоны",
    description: "Библиотека документов.",
    actions: [
      { id: "documents-template-clone", label: "Клонировать", modalId: "marketplace-template-clone" }
    ],
    states: defaultStates
  },
  messaging: {
    title: "Сообщения",
    description: "Диалоги и каналы.",
    sections: [
      { title: "Диалоги", items: ["Список", "Поиск", "AI-подсказки"] }
    ],
    modals: [
      { id: "messages-start-call", label: "Видео-колл", description: "Заглушка" }
    ],
    states: defaultStates
  },
  "messaging/groups": {
    title: "Группы",
    description: "Групповые чаты.",
    sections: [
      { title: "Группы", items: ["Список", "Права", "AI-пересказ"] }
    ],
    states: defaultStates
  },
  "messaging/video": {
    title: "Видео-колл",
    description: "Заглушка видеозвонка.",
    notes: ["Placeholder для видеостриминга."],
    states: defaultStates
  },
  notifications: {
    title: "Уведомления",
    description: "Центр уведомлений с фильтрами.",
    actions: [
      { id: "notifications-mark", label: "Отметить прочитанным", modalId: "notifications-bulk" }
    ],
    sections: [
      { title: "Фильтры", items: ["Тип", "Проект", "Приоритет"] }
    ],
    states: defaultStates
  },
  "notifications/settings": {
    title: "Настройки уведомлений",
    description: "Настройка каналов и приоритетов.",
    sections: [
      { title: "Каналы", items: ["Email", "In-app", "Slack"] }
    ],
    states: defaultStates
  },
  support: {
    title: "Поддержка",
    description: "Центр помощи с поиском.",
    sections: [
      { title: "База знаний", items: ["Категории", "FAQ", "AI помощник"] }
    ],
    states: defaultStates
  },
  "support/tickets": {
    title: "Тикеты",
    description: "Список обращений и SLA.",
    actions: [
      { id: "support-ticket-create", label: "Создать тикет", modalId: "support-create-ticket" }
    ],
    tables: [
      { name: "Тикеты", columns: ["ID", "Тема", "Статус", "SLA", "Ответственный"] }
    ],
    states: defaultStates
  },
  profile: {
    title: "Профиль",
    description: "Просмотр профиля, достижения.",
    actions: [
      { id: "profile-edit", label: "Редактировать", modalId: "user-menu" }
    ],
    sections: [
      { title: "Обзор", items: ["Роль", "Рейтинг", "Бейджи"] }
    ],
    states: defaultStates
  },
  "profile/portfolio": {
    title: "Портфолио",
    description: "Проекты и кейсы.",
    sections: [
      { title: "Кейсы", items: ["Галерея", "Отзывы", "AI-подбор"] }
    ],
    states: defaultStates
  },
  "profile/badges": {
    title: "Бейджи",
    description: "Достижения и рейтинги.",
    sections: [
      { title: "Бейджи", items: ["AI", "Команда", "Эксперт"] }
    ],
    states: defaultStates
  },
  "profile/settings": {
    title: "Настройки профиля",
    description: "Контакты, уведомления, безопасность.",
    sections: [
      { title: "Контакты", items: ["Email", "Телефон", "Соцсети"] },
      { title: "Безопасность", items: ["2FA", "Пароль", "Устройства"] }
    ],
    states: defaultStates
  },
  "settings/appearance": {
    title: "Настройки темы",
    description: "Переключение светлой/тёмной темы и выбор фоновых пресетов.",
    actions: [
      { id: "settings-apply", label: "Сохранить", modalId: "settings-apply" }
    ],
    sections: [
      { title: "Темы", items: ["Light", "Dark"] },
      { title: "Фоны", items: ["Mesh", "Grid", "Halo"] }
    ],
    states: defaultStates
  },
  "settings/shortcuts": {
    title: "Горячие клавиши",
    description: "Список доступных шорткатов.",
    sections: [
      { title: "Комбинации", items: ["⌘K", "⌘B", "⌘Shift+N"] }
    ],
    states: defaultStates
  },
  "settings/notifications": {
    title: "Настройки уведомлений",
    description: "Тонкая настройка каналов.",
    sections: [
      { title: "Каналы", items: ["Email", "Push", "Slack"] }
    ],
    states: defaultStates
  },
  "growth/share-to-earn": {
    title: "Share-to-Earn",
    description: "Программа вознаграждений за продвижение.",
    actions: [
      { id: "growth-share-ticket", label: "Создать тикет", modalId: "growth-share-ticket" },
      { id: "growth-share-request", label: "Запросить начисление", variant: "secondary", modalId: "growth-share-request" }
    ],
    sections: [
      { title: "Правила", items: ["Линки", "Соцсети", "Проверка"] },
      { title: "Статусы", items: ["На проверке", "Зачислено", "Отклонено"] }
    ],
    states: defaultStates
  },
  "growth/referrals": {
    title: "Рефералы",
    description: "Реферальная программа и метрики.",
    sections: [
      { title: "Сводка", items: ["Ссылка", "Код", "Материалы"] },
      { title: "Метрики", items: ["Клики", "Регистрации", "Оплаты"] }
    ],
    states: defaultStates
  },
  "admin/moderation/profiles": {
    title: "Модерация профилей",
    description: "Очередь на проверку профилей.",
    actions: [
      { id: "admin-approve-profile", label: "Approve", modalId: "admin-approve" },
      { id: "admin-reject-profile", label: "Reject", variant: "secondary", modalId: "admin-reject" }
    ],
    tables: [
      { name: "Профили", columns: ["Имя", "Роль", "Тип", "Статус", "Действия"] }
    ],
    states: defaultStates
  },
  "admin/moderation/jobs": {
    title: "Модерация вакансий",
    description: "Очередь вакансий.",
    actions: [
      { id: "admin-approve-job", label: "Approve", modalId: "admin-approve" },
      { id: "admin-request-job", label: "Request changes", variant: "secondary", modalId: "admin-request-changes" }
    ],
    states: defaultStates
  },
  "admin/moderation/templates": {
    title: "Модерация шаблонов",
    description: "Очередь шаблонов с Quality Score.",
    actions: [
      { id: "admin-approve-template", label: "Approve", modalId: "admin-approve" }
    ],
    sections: [
      { title: "Показатели", items: ["Quality Score", "Категория", "Автор"] }
    ],
    states: defaultStates
  },
  "admin/moderation/listings": {
    title: "Модерация листингов",
    description: "Продажа проектов.",
    actions: [
      { id: "admin-approve-listing", label: "Approve", modalId: "admin-approve" }
    ],
    states: defaultStates
  },
  "admin/moderation/complaints": {
    title: "Жалобы",
    description: "Проверка жалоб.",
    actions: [
      { id: "admin-view-complaint", label: "Просмотр", modalId: "admin-view-complaint" }
    ],
    states: defaultStates
  },
  "admin/cms": {
    title: "CMS",
    description: "Управление статичными страницами.",
    sections: [
      { title: "Страницы", items: ["Terms", "Privacy", "Landing"] }
    ],
    states: defaultStates
  },
  "admin/commissions": {
    title: "Комиссии",
    description: "Настройка комиссий и лимитов.",
    actions: [
      { id: "admin-edit-commission", label: "Редактировать", modalId: "admin-edit-commission" }
    ],
    states: defaultStates
  },
  "admin/reports": {
    title: "Отчёты",
    description: "Операционные отчёты и логирование.",
    sections: [
      { title: "Дашборды", items: ["Revenue", "Disputes", "Moderation"] }
    ],
    states: defaultStates
  },
  "admin/config": {
    title: "Конфигурации",
    description: "Параметры системы, веса Quality Score.",
    actions: [
      { id: "admin-edit-config", label: "Редактировать", modalId: "admin-edit-commission" }
    ],
    states: defaultStates
  },
  "admin/logs": {
    title: "Логи",
    description: "Системные логи и аудит.",
    sections: [
      { title: "Журналы", items: ["API", "Аутентификация", "Платежи"] }
    ],
    states: ["timeline", ...defaultStates]
  },
  "legal/terms": {
    title: "Terms of Service",
    description: "Правила использования платформы.",
    sections: [
      { title: "Разделы", items: ["Определения", "Обязательства", "Ответственность"] }
    ],
    states: ["content", ...defaultStates]
  },
  "legal/privacy": {
    title: "Privacy Policy",
    description: "Политика конфиденциальности.",
    sections: [
      { title: "Разделы", items: ["Сбор данных", "Использование", "Хранение"] }
    ],
    states: ["content", ...defaultStates]
  }
};
