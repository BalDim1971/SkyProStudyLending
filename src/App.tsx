import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Zap,
  Clock,
  MessageSquare,
  Mail,
  Send,
  Coffee,
  User,
  Layers,
  Code2,
  Rocket,
  CheckCircle2,
  Star,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const PROCESS_STEPS = [
  {
    icon: MessageSquare,
    label: 'Бриф',
    desc: '15-минутный звонок или голосовое в Telegram. Без ТЗ на 50 страниц — только суть задачи.',
  },
  {
    icon: Layers,
    label: 'Вайб-прототип',
    desc: 'Собираю структуру и визуал в Figma или Lovable. Согласуем до старта разработки.',
  },
  {
    icon: Code2,
    label: 'Код + анимация',
    desc: 'React, Tailwind, плавные переходы. Верстаю pixel-perfect, адаптив с 320px.',
  },
  {
    icon: Rocket,
    label: 'Запуск',
    desc: 'Деплой на Vercel или Netlify, подключение домена, финальное тестирование.',
  },
];

const CASES = [
  {
    tag: 'Кофейня',
    title: 'Лендинг для кофейни «Точка»',
    goal: 'Сбор предзаказов на новые позиции меню',
    duration: '2 дня',
    stack: ['Анимированный hero', 'Форма предзаказа', 'Адаптив'],
    color: 'from-amber-500/10 to-orange-500/5',
    borderColor: 'rgba(251,191,36,0.15)',
    iconBg: 'rgba(251,191,36,0.1)',
    iconColor: '#f59e0b',
  },
  {
    tag: 'Эксперт',
    title: 'Сайт нутрициолога Марины',
    goal: 'Запись на консультации и продажа мини-курса',
    duration: '3 дня',
    stack: ['Блок услуг', 'Форма записи', 'Отзывы'],
    color: 'from-mint/10 to-mint-light/5',
    borderColor: 'rgba(72,209,204,0.15)',
    iconBg: 'rgba(72,209,204,0.1)',
    iconColor: '#48d1cc',
  },
  {
    tag: 'Стартап',
    title: 'Визитка SaaS-сервиса «Robo-HR»',
    goal: 'Сбор емейлов в вейтлист до запуска продукта',
    duration: '4 дня',
    stack: ['Анимации', 'Интеграция Airtable', 'SEO-мета'],
    color: 'from-blue-500/10 to-cyan-500/5',
    borderColor: 'rgba(99,179,237,0.15)',
    iconBg: 'rgba(99,179,237,0.1)',
    iconColor: '#63b3ed',
  },
];

const BENEFITS = [
  {
    icon: Zap,
    title: 'Гиперответственность',
    desc: 'Дедлайн — это обещание, а не ориентир. Сдаю в срок или предупреждаю заранее.',
  },
  {
    icon: MessageSquare,
    title: 'Прямая связь',
    desc: 'Никаких менеджеров и эстафеты сообщений. Вы пишете мне — я отвечаю лично.',
  },
  {
    icon: CheckCircle2,
    title: 'Гибкие правки',
    desc: 'До запуска — правки включены. Не буду тянуть деньги за каждый пиксель.',
  },
];

const REVIEWS = [
  {
    name: 'Иван Коренев',
    role: 'Основатель сервиса доставки «Быстро»',
    text: 'Обращался с нуля — сайт нужен был к открытию за 3 дня. Не только уложился в срок, но и сам предложил структуру лучше, чем я придумал. На связи был в любое время. Рекомендую.',
    rating: 5,
  },
  {
    name: 'Ольга Шевченко',
    role: 'Бизнес-коуч, 8 лет практики',
    text: 'Искала кого-то, кто не будет тянуть два месяца с "дизайн-концепцией". Получила лендинг за 4 дня, все правки принял без споров. Записи на консультации пошли уже в первую неделю.',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-mint text-mint" />
      ))}
    </div>
  );
}

function CaseCard({ c, index }: { c: (typeof CASES)[0]; index: number }) {
  return (
    <div
      className="glass glass-hover animate-on-scroll rounded-2xl p-6 flex flex-col gap-4"
      style={{
        animationDelay: `${index * 0.1}s`,
        borderColor: c.borderColor,
        background: `linear-gradient(135deg, ${c.color.split(' ')[0].replace('from-', '')} 0%, transparent 100%), rgba(255,255,255,0.03)`,
      }}
    >
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div
          className="section-tag"
          style={{
            background: c.iconBg,
            borderColor: `${c.iconColor}33`,
            color: c.iconColor,
          }}
        >
          {c.tag}
        </div>
        <span className="flex items-center gap-1.5 text-text-muted text-xs font-medium">
          <Clock size={12} />
          {c.duration}
        </span>
      </div>

      <div>
        <h3 className="font-extrabold text-lg text-text-primary leading-tight">{c.title}</h3>
        <p className="text-text-muted text-sm mt-1.5 leading-relaxed">
          <span className="text-text-primary/70 font-medium">Цель:</span> {c.goal}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {c.stack.map((s) => (
          <span
            key={s}
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: `${c.iconColor}14`,
              color: c.iconColor,
              border: `1px solid ${c.iconColor}25`,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <button className="btn-ghost mt-auto w-full sm:w-auto text-sm" style={{ color: c.iconColor, borderColor: `${c.iconColor}40` }}>
        <ExternalLink size={14} />
        Посмотреть структуру прототипа
      </button>
    </div>
  );
}

function ContactForm() {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <div className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(72,209,204,0.15)' }}>
          <CheckCircle2 size={24} className="text-mint" />
        </div>
        <p className="font-bold text-lg text-text-primary">Заявка принята!</p>
        <p className="text-text-muted text-sm">Отвечу в течение часа. Проверьте Telegram или почту.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Telegram @username или email@mail.ru"
        className="flex-1 glass rounded-xl px-4 py-3.5 text-text-primary placeholder-text-muted text-sm font-medium outline-none focus:border-mint/50 transition-colors min-h-[48px]"
        style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-primary text-sm px-6 gap-2 shrink-0"
        style={{ minWidth: 48 }}
      >
        {loading ? (
          <span className="animate-pulse-slow">...</span>
        ) : (
          <>
            <Send size={16} />
            Отправить
          </>
        )}
      </button>
    </form>
  );
}

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  useScrollAnimation();

  return (
    <div className="relative min-h-screen bg-bg text-text-primary font-sans overflow-x-hidden">
      <div className="noise-overlay" />

      {/* Hero radial glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(72,209,204,0.1) 0%, transparent 65%)',
        }}
      />

      {/* NAV */}
      <nav className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm"
            style={{ background: 'linear-gradient(135deg,#48d1cc,#69e7c1)', color: '#0b0b0f' }}
          >
            V
          </div>
          <span className="font-extrabold text-base tracking-tight">VibeCoder</span>
        </div>
        <a href="#contact" className="btn-primary text-sm px-5 py-2.5 hidden sm:inline-flex" style={{ minHeight: 40 }}>
          Обсудить проект
        </a>
        <a href="#contact" className="btn-ghost text-xs px-4 py-2 sm:hidden" style={{ minHeight: 40 }}>
          Связаться
        </a>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-16 sm:pb-28 max-w-6xl mx-auto text-center"
      >
        <div className="section-tag mx-auto mb-6 animate-on-scroll visible" style={{ animationDelay: '0ms' }}>
          <Zap size={10} />
          Доступно прямо сейчас
        </div>

        <h1
          className="font-extrabold leading-[1.05] tracking-tight mx-auto animate-on-scroll visible"
          style={{
            fontSize: 'clamp(32px, 7vw, 80px)',
            animationDelay: '60ms',
            maxWidth: 820,
          }}
        >
          Запущу сайт{' '}
          <span className="mint-text">за выходные</span>
        </h1>

        <p
          className="text-text-muted mt-5 mx-auto animate-on-scroll visible leading-relaxed"
          style={{
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            maxWidth: 560,
            animationDelay: '120ms',
          }}
        >
          Лендинги и сайты-визитки под ключ за 3–5 дней. Без ТЗ на 50 страниц — только суть и результат.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center animate-on-scroll visible" style={{ animationDelay: '180ms' }}>
          <button onClick={() => scrollTo('contact')} className="btn-primary text-base px-8 py-4 mint-glow-shadow w-full sm:w-auto">
            Рассчитать стоимость
            <ArrowRight size={18} />
          </button>
          <button onClick={() => scrollTo('cases')} className="btn-ghost text-base px-8 py-4 w-full sm:w-auto">
            Смотреть кейсы
          </button>
        </div>

        {/* Trust stats */}
        <div
          className="mt-14 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto animate-on-scroll"
          style={{ animationDelay: '240ms' }}
        >
          {[
            { value: '3–5', label: 'дней на сайт' },
            { value: '∞', label: 'правок до запуска' },
            { value: '1ч', label: 'ответ на заявку' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-extrabold mint-text" style={{ fontSize: 'clamp(22px, 4vw, 36px)' }}>
                {value}
              </span>
              <span className="text-text-muted text-xs sm:text-sm text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="section-tag mx-auto mb-4">
            <ChevronRight size={10} />
            Процесс
          </div>
          <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>
            Как я работаю
          </h2>
          <p className="text-text-muted mt-3 text-base sm:text-lg max-w-md mx-auto">
            Четыре шага от задачи до живого сайта
          </p>
        </div>

        {/* Steps desktop: horizontal */}
        <div className="hidden md:flex items-start gap-0">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-start flex-1">
                <div className="flex flex-col items-center flex-1 text-center px-4 animate-on-scroll" style={{ animationDelay: `${i * 80}ms` }}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shrink-0"
                    style={{ background: 'rgba(72,209,204,0.1)', border: '1px solid rgba(72,209,204,0.2)' }}
                  >
                    <Icon size={24} className="text-mint" />
                  </div>
                  <span className="text-xs font-bold text-mint uppercase tracking-widest mb-2">Шаг {i + 1}</span>
                  <h3 className="font-extrabold text-base mb-2">{step.label}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="flex items-center mt-7 shrink-0" style={{ width: 32 }}>
                    <div className="w-full h-px" style={{ background: 'linear-gradient(to right, rgba(72,209,204,0.3), rgba(72,209,204,0.1))' }} />
                    <ChevronRight size={14} className="text-mint/40 shrink-0 -ml-1" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Steps mobile: vertical */}
        <div className="md:hidden flex flex-col gap-4">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="glass glass-hover animate-on-scroll rounded-2xl p-5 flex gap-4" style={{ animationDelay: `${i * 80}ms` }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(72,209,204,0.1)', border: '1px solid rgba(72,209,204,0.2)' }}
                >
                  <Icon size={20} className="text-mint" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-mint uppercase tracking-wider">Шаг {i + 1}</span>
                    <span className="font-extrabold text-sm">{step.label}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="section-tag mx-auto mb-4">
            <Layers size={10} />
            Кейсы
          </div>
          <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>
            Как я решаю задачи
          </h2>
          <p className="text-text-muted mt-3 text-base sm:text-lg max-w-md mx-auto">
            Три симуляции реальных проектов с разными целями и сроками
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <CaseCard key={c.title} c={c} index={i} />
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="section-tag mx-auto mb-4">
            <Star size={10} />
            Преимущества
          </div>
          <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>
            Почему я, а не агентство
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="glass glass-hover animate-on-scroll rounded-2xl p-6 flex flex-col gap-4 text-center items-center"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(72,209,204,0.1)', border: '1px solid rgba(72,209,204,0.2)' }}
                >
                  <Icon size={22} className="text-mint" />
                </div>
                <h3 className="font-extrabold text-base">{b.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="section-tag mx-auto mb-4">
            <User size={10} />
            Отзывы
          </div>
          <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>
            Говорят клиенты
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className="glass glass-hover animate-on-scroll rounded-2xl p-6 flex flex-col gap-4"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <StarRating count={r.rating} />
              <p className="text-text-primary/85 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0"
                  style={{ background: 'rgba(72,209,204,0.15)', color: '#48d1cc' }}
                >
                  {r.name[0]}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm text-text-primary truncate">{r.name}</p>
                  <p className="text-text-muted text-xs truncate">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section
        id="contact"
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-24 max-w-3xl mx-auto text-center"
      >
        <div
          className="glass rounded-3xl p-8 sm:p-12 animate-on-scroll"
          style={{
            background: 'linear-gradient(135deg, rgba(72,209,204,0.06) 0%, rgba(105,231,193,0.03) 100%), rgba(255,255,255,0.03)',
            border: '1px solid rgba(72,209,204,0.15)',
          }}
        >
          <div className="section-tag mx-auto mb-6">
            <Send size={10} />
            Заявка
          </div>
          <h2
            className="font-extrabold tracking-tight mb-4"
            style={{ fontSize: 'clamp(22px, 4vw, 42px)' }}
          >
            Напишите задачу —{' '}
            <span className="mint-text">отвечу за час</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Оставьте Telegram или почту. Обсудим проект, я скажу сроки и стоимость без воды.
          </p>
          <ContactForm />
          <p className="text-text-muted text-xs mt-4">
            Или напишите напрямую:{' '}
            <a href="https://t.me/vibecoder" className="text-mint hover:underline transition-all" target="_blank" rel="noopener noreferrer">
              @vibecoder
            </a>
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-24 max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/vibecoder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto mint-glow-shadow"
          >
            <Send size={18} />
            Написать в Telegram
          </a>
          <a
            href="mailto:hello@vibecoder.ru"
            className="btn-ghost text-base px-8 py-4 w-full sm:w-auto"
          >
            <Mail size={18} />
            Написать на Email
          </a>
        </div>
        <p className="text-text-muted text-xs mt-8">© 2025 VibeCoder</p>
      </section>
    </div>
  );
}
