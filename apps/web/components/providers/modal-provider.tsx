"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { commandPaletteActions } from "@/lib/navigation";

const modalRegistry = {
  "quick-create": {
    title: "Быстрые действия",
    description: "Выберите быстрое действие: проект, workspace, задача.",
    checklist: ["Показать список быстрых действий", "Ведёт к соответствующим мастерам"]
  },
  notifications: {
    title: "Уведомления",
    description: "Центр уведомлений с фильтрами и группировкой.",
    checklist: ["Фильтры по типу", "Метки прочитанного", "Переходы"]
  },
  messages: {
    title: "Сообщения",
    description: "Просмотр последних диалогов и быстрый ответ.",
    checklist: ["Предпросмотр", "Быстрый ответ", "Переход в чат"]
  },
  wallet: {
    title: "Кошелёк",
    description: "Баланс, кредиты AI и быстрые операции пополнения/вывода.",
    checklist: ["Баланс", "История", "CTA пополнения"]
  },
  "workspace-switcher": {
    title: "Выбор Workspace",
    description: "Список доступных workspace и возможность создать новый.",
    checklist: ["Поиск", "Недавние", "CTA создать"]
  },
  "user-menu": {
    title: "Профиль",
    description: "Меню пользователя: профиль, настройки, выход.",
    checklist: ["Просмотр роли", "Ссылки на профиль", "Выход"]
  },
  "command-palette": {
    title: "Command Palette",
    description: "Переключение по страницам и действиям с помощью клавиатуры."
  },
  generic: {
    title: "Действие",
    description: "Временная заглушка для действий, не попавших в реестр."
  },
  "create-workspace": {
    title: "Создать workspace",
    description: "Форма создания организации (название, slug, страна, валюта, план).",
    checklist: ["Валидация slug", "Выбор страны", "Переключение плана"]
  },
  "workspace-invite": {
    title: "Пригласить участников",
    description: "Bulk-инвайт через email/ссылку и назначение ролей.",
    checklist: ["Bulk paste", "Назначение ролей", "Отправка приглашения"]
  },
  "workspace-change-role": {
    title: "Сменить роль",
    description: "Изменение роли участника с подтверждением прав.",
    checklist: ["Выбор роли", "Подтверждение", "Уведомление участника"]
  },
  "workspace-buy-seats": {
    title: "Купить места",
    description: "Пополнение количества мест в workspace.",
    checklist: ["Выбор количества", "Стоимость", "Подтверждение"]
  },
  "workspace-remove-seats": {
    title: "Удалить места",
    description: "Освобождение неиспользуемых seats.",
    checklist: ["Количество", "Предупреждение", "Подтверждение"]
  },
  "workspace-change-plan": {
    title: "Сменить план",
    description: "Сравнение планов и апгрейд/даунгрейд.",
    checklist: ["Сравнение", "Прорейтинг", "Подтверждение"]
  },
  "workspace-pay-invoice": {
    title: "Оплатить счёт",
    description: "Оплата инвойса из кошелька или картой (фиктивно).",
    checklist: ["Реквизиты", "Метод оплаты", "Квитанция"]
  },
  "workspace-delete": {
    title: "Удаление workspace",
    description: "Подтверждение удаления workspace со всеми проектами.",
    checklist: ["Ввести название", "Понять последствия", "Запрос подтверждения"]
  },
  "marketplace-project-apply": {
    title: "Откликнуться",
    description: "Заполнить сопроводительное письмо и ставки.",
    checklist: ["Письмо", "Файлы", "Согласие с NDA"]
  },
  "marketplace-project-question": {
    title: "Задать вопрос",
    description: "Форма вопросов заказчику перед откликом.",
    checklist: ["Текст вопроса", "Контакт", "Отправка"]
  },
  "marketplace-project-nda": {
    title: "Подписать NDA",
    description: "Превью NDA и подтверждение подписи (mock).",
    checklist: ["Просмотр", "Согласие", "Скачать PDF"]
  },
  "marketplace-project-report": {
    title: "Пожаловаться",
    description: "Отправка жалобы на листинг.",
    checklist: ["Категория", "Описание", "Приложения"]
  },
  "marketplace-specialist-invite": {
    title: "Пригласить специалиста",
    description: "Приглашение специалиста в проект.",
    checklist: ["Проект", "Роль", "Сообщение"]
  },
  "marketplace-specialist-interview": {
    title: "Запросить интервью",
    description: "Назначение слота интервью (mock календарь).",
    checklist: ["Временные слоты", "Формат", "Подтверждение"]
  },
  "marketplace-contractor-estimate": {
    title: "Запросить смету",
    description: "Форма запроса сметы у подрядчика.",
    checklist: ["Бюджет", "Сроки", "Описание"]
  },
  "marketplace-contractor-compare": {
    title: "Сравнить подрядчиков",
    description: "Drawer с сравнением предложений (заглушка).",
    checklist: ["Выбранные подрядчики", "Метрики", "CTA создать заказ"]
  },
  "marketplace-contractor-order": {
    title: "Оформить заказ",
    description: "Мастер оформления заказа и открытие эскроу.",
    checklist: ["Пакет", "Оплата", "Этапы"]
  },
  "marketplace-template-clone": {
    title: "Preflight Clone",
    description: "Проверка требований перед клонированием шаблона.",
    checklist: ["Домен", "Git", "Figma", "Шрифты", "GA"]
  },
  "marketplace-template-demo": {
    title: "Открыть демо",
    description: "Подтверждение перехода к внешнему демо шаблона."
  },
  "messages-start-call": {
    title: "Видео-колл",
    description: "Демонстрация окна видеозвонка с участниками и контролами."
  },
  "marketplace-template-report": {
    title: "Пожаловаться на шаблон",
    description: "Сообщить о нарушениях или проблемах с шаблоном." 
  },
  "marketplace-sale-offer": {
    title: "Сделать оффер",
    description: "Отправка оффера по листингу проекта.",
    checklist: ["Сумма", "Условия", "Комментарий"]
  },
  "marketplace-sale-buy": {
    title: "Купить сейчас",
    description: "Подтверждение мгновенной покупки листинга.",
    checklist: ["Цена", "Эскроу", "Чек-лист передачи"]
  },
  "marketplace-sale-nda": {
    title: "Подписать NDA",
    description: "Доступ к gated материалам после подписи NDA.",
    checklist: ["Превью", "Подтверждение", "Разблокировать материалы"]
  },
  "marketplace-sale-question": {
    title: "Задать вопрос продавцу",
    description: "Уточняющие вопросы по проекту на продажу."
  },
  "marketplace-package-purchase": {
    title: "Купить пакет",
    description: "Оформление фиксированного пакета запуска проекта."
  },
  "project-create-task": {
    title: "Создать задачу",
    description: "Форма задачи с полями статуса, исполнителя и срока.",
    checklist: ["Название", "Описание", "Связи", "AI ассистент"]
  },
  "project-request-review": {
    title: "Запросить ревью",
    description: "Отправка артефакта на ревью лидеру/клиенту.",
    checklist: ["Получатель", "Комментарий", "Срок"]
  },
  "project-invite": {
    title: "Пригласить в проект",
    description: "Приглашение участника и назначение роли.",
    checklist: ["Email", "Роль", "Сообщение"]
  },
  "project-create-vacancy": {
    title: "Создать вакансию",
    description: "Опубликовать вакансию внутри проекта.",
    checklist: ["Роль", "Описание", "Бюджет", "Тип"]
  },
  "project-make-offer": {
    title: "Сделать оффер",
    description: "Предложение кандидату с компенсацией и условиями.",
    checklist: ["Компенсация", "Старт", "Комментарий"]
  },
  "project-schedule-interview": {
    title: "Назначить интервью",
    description: "Планирование интервью с кандидатами.",
    checklist: ["Слоты", "Участники", "Формат"]
  },
  "project-open-escrow": {
    title: "Открыть эскроу",
    description: "Настройка этапов оплаты и ответственных.",
    checklist: ["Сумма", "Этапы", "Стороны"]
  },
  "project-unlock-stage": {
    title: "Разблокировать этап",
    description: "Подтверждение разблокировки/выплаты этапа.",
    checklist: ["Статус", "Комментарий", "Уведомление"]
  },
  "project-open-dispute": {
    title: "Открыть спор",
    description: "Инициировать спор по этапу или поставке.",
    checklist: ["Причина", "Документы", "Уведомление сторон"]
  },
  "project-upload-version": {
    title: "Загрузить версию",
    description: "Загрузка файлов/версий с описанием изменений.",
    checklist: ["Файл", "Описание", "Доступ"]
  },
  "project-lock-version": {
    title: "Заблокировать версию",
    description: "Перевод версии в статус frozen/approved."
  },
  "project-sign-nda": {
    title: "Подписать NDA",
    description: "Электронная подпись NDA внутри проекта."
  },
  "project-clone-template": {
    title: "Клонировать из шаблона",
    description: "Подбор шаблона и настройка карты задач."
  },
  "project-sell": {
    title: "Продать проект",
    description: "Мастер подготовки листинга проекта на продажу.",
    checklist: ["Категория", "Gate чек-лист", "Медиа", "Цена"]
  },
  "ai-start-session": {
    title: "AI сессия",
    description: "Старт генерации с промптом и параметрами.",
    checklist: ["Промпт", "Тональность", "Контекст"]
  },
  "ai-regenerate": {
    title: "Перегенерация",
    description: "Запрос новой версии результата AI.",
    checklist: ["Причина", "Новый промпт", "История"]
  },
  "ai-accept-project": {
    title: "Принять в проект",
    description: "Добавить результат AI в артефакты проекта." 
  },
  "ai-send-review": {
    title: "Отправить на ревью",
    description: "Передать результат на ручную проверку." 
  },
  "finance-deposit": {
    title: "Пополнить баланс",
    description: "Пополнение кошелька через карту/банковский платёж.",
    checklist: ["Сумма", "Метод", "Подтверждение"]
  },
  "finance-withdraw": {
    title: "Вывести средства",
    description: "Вывод средств на карту/реквизиты.",
    checklist: ["Сумма", "Реквизиты", "Сроки"]
  },
  "finance-open-escrow": {
    title: "Открыть эскроу",
    description: "Создать новый эскроу контракт для сделки.",
    checklist: ["Стороны", "Сумма", "Этапы"]
  },
  "finance-release": {
    title: "Разблокировать средства",
    description: "Подтверждение выплаты из эскроу."
  },
  "finance-open-dispute": {
    title: "Открыть спор",
    description: "Инициировать арбитраж по оплате."
  },
  "finance-subscribe": {
    title: "Оформить подписку",
    description: "Выбор тарифа и способа оплаты подписки."
  },
  "finance-buy-seats": {
    title: "Купить seats",
    description: "Пополнение мест для workspace (финансовый контекст)."
  },
  "finance-remove-seats": {
    title: "Удалить seats",
    description: "Сокращение количества мест и перерасчёт платежа."
  },
  "generic-report-builder": {
    title: "Конструктор отчётов",
    description: "Создание кастомного отчёта с фильтрами и визуализациями."
  },
  "notifications-bulk": {
    title: "Массовые действия",
    description: "Отметить уведомления прочитанными, закрепить или очистить." 
  },
  "support-create-ticket": {
    title: "Создать тикет",
    description: "Отправка обращения в поддержку.",
    checklist: ["Категория", "Описание", "Приоритет"]
  },
  "growth-share-ticket": {
    title: "Share-to-Earn тикет",
    description: "Передача материалов для проверки Share-to-Earn.",
    checklist: ["Ссылки", "Описание активности", "Приложения"]
  },
  "growth-share-request": {
    title: "Запросить начисление",
    description: "Запрос начисления вознаграждения после проверки."
  },
  "admin-approve": {
    title: "Approve",
    description: "Подтверждение публикации объекта."
  },
  "admin-reject": {
    title: "Reject",
    description: "Отклонение с указанием причины."
  },
  "admin-request-changes": {
    title: "Request changes",
    description: "Запросить исправления у автора."
  },
  "admin-edit-commission": {
    title: "Редактировать комиссию/лимиты",
    description: "Настройка комиссий, лимитов и весов.",
    checklist: ["Тип", "Процент", "Дата вступления"]
  },
  "admin-view-complaint": {
    title: "Жалоба",
    description: "Просмотр деталей жалобы и история решений."
  },
  "settings-apply": {
    title: "Сохранить тему",
    description: "Подтверждение выбора темы и фонового пресета."
  },
  "create-project": {
    title: "Создать проект",
    description: "Мастер создания проекта из шаблона или scratch.",
    checklist: ["Название", "Workspace", "Шаблон", "AI ассистенты"]
  }
} as const;

export type ModalId = keyof typeof modalRegistry;

type ModalContextValue = {
  openModal: (id: ModalId, payload?: Record<string, unknown>) => void;
  closeModal: () => void;
};

type ModalState = {
  id: ModalId;
  payload?: Record<string, unknown>;
} | null;

const ModalContext = React.createContext<ModalContextValue | undefined>(undefined);

export function useModal() {
  const ctx = React.useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used inside ModalProvider");
  }
  return ctx;
}

function ModalHost({ state, onClose }: { state: ModalState; onClose: () => void }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!state || !mounted) return null;

  const config = modalRegistry[state.id] ?? modalRegistry.generic;

  const renderContent = () => {
    if (state.id === "command-palette") {
      return <CommandPalette onClose={onClose} />;
    }

    return (
      <div className="space-y-4 text-sm leading-6 text-muted">
        <p>{config.description}</p>
        {config.checklist ? (
          <ul className="space-y-2 rounded-2xl border border-dashed border-border/60 bg-background/60 p-4">
            {config.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-border text-[10px] font-semibold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {state.payload ? (
          <pre className="rounded-2xl bg-muted/10 p-3 text-xs text-muted">
            {JSON.stringify(state.payload, null, 2)}
          </pre>
        ) : null}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:bg-primary/90"
            onClick={onClose}
          >
            Подтвердить
          </button>
          <button
            type="button"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/10"
            onClick={onClose}
          >
            Отмена
          </button>
        </div>
      </div>
    );
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-xl rounded-2xl bg-surface p-6 shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">{config.title}</h2>
            <p className="text-sm text-muted">Демо-модалка: визуализирует действие «{state.id}».</p>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {renderContent()}
      </div>
    </div>,
    document.body
  );
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ModalState>(null);

  const openModal = React.useCallback<ModalContextValue["openModal"]>((id, payload) => {
    setState({ id, payload });
  }, []);

  const closeModal = React.useCallback(() => setState(null), []);

  const value = React.useMemo(() => ({ openModal, closeModal }), [openModal, closeModal]);

  React.useEffect(() => {
    const handler = (event: Event) => {
      if (event instanceof CustomEvent) {
        const detail = event.detail as { id: ModalId };
        openModal(detail.id);
      }
    };

    window.addEventListener("cv:action", handler as EventListener);
    return () => window.removeEventListener("cv:action", handler as EventListener);
  }, [openModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ModalHost state={state} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

function CommandPalette({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = React.useState("");
  const actions = React.useMemo(() => {
    if (!query) return commandPaletteActions;
    return commandPaletteActions.filter((action) =>
      action.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="space-y-4">
      <input
        autoFocus
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Поиск команд..."
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <ul className="max-h-72 space-y-2 overflow-auto pr-1">
        {actions.map((action) => (
          <li key={action.id}>
            <Link
              href={action.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-sm transition hover:border-border hover:bg-muted/10"
            >
              <span>{action.label}</span>
              <kbd className="rounded border border-border bg-muted/20 px-2 py-1 text-xs text-muted">
                ↵
              </kbd>
            </Link>
          </li>
        ))}
        {actions.length === 0 && (
          <li className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-sm text-muted">
            Команд не найдено
          </li>
        )}
      </ul>
    </div>
  );
}
