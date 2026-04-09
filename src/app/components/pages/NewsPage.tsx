import { useState } from 'react';
import { Calendar, ChevronRight, Flame, Tag } from 'lucide-react';
import newsImg from 'figma:asset/95b5a95ec1ec5bea39094b0bd4cf03946a8c39c5.png';
import bg1 from 'figma:asset/d5c2397f5f12e8c4d4f5891e2d33e029213c29e1.png';
import bg2 from 'figma:asset/55f8aca9bb4bdf137da58c91b2ff2a6859c2608a.png';
import bg3 from 'figma:asset/c6e0e4e8a63130f041ea7dbce974f59cd9aec32c.png';

type Category = 'all' | 'updates' | 'events' | 'community';

const CATEGORIES: { key: Category; label: string; count: number }[] = [
  { key: 'all', label: 'Все', count: 7 },
  { key: 'updates', label: 'Обновления', count: 3 },
  { key: 'events', label: 'События', count: 2 },
  { key: 'community', label: 'Сообщество', count: 2 },
];

const FEATURED = {
  title: 'Обновление 2.4.1 — Новые биомы и оптимизация',
  desc: 'Мы рады представить самое крупное обновление этого года. Добавлены 3 новых биома, переработана система генерации мира, улучшена оптимизация — FPS вырос на 30–60% на большинстве конфигураций.',
  date: '8 апреля 2026',
  type: 'update',
  isHot: true,
  bg: bg1,
};

const ARTICLES = [
  {
    id: 1, category: 'events' as Category,
    title: 'Весенний ивент 2026',
    desc: 'С 10 по 30 апреля на всех серверах — весенний ивент! Собирайте цветы, стройте сады, получайте уникальные предметы.',
    date: '7 апреля 2026', isNew: false, type: 'event', color: '#4ade80', bg: bg2,
  },
  {
    id: 2, category: 'updates' as Category,
    title: 'Патч 2.3.8 — Фиксы и улучшения',
    desc: 'Исправлены критические баги с дюпом, улучшена стабильность серверов BackDoor и SkyForge.',
    date: '5 апреля 2026', isNew: false, type: 'update', color: '#7855ff', bg: bg3,
  },
  {
    id: 3, category: 'community' as Category,
    title: 'Интервью с админом проекта',
    desc: 'Узнали у администратора сервера всё самое интересное о будущих планах и развитии проекта в 2026 году.',
    date: '3 апреля 2026', isNew: false, type: 'community', color: '#fbbf24', bg: bg1,
  },
  {
    id: 4, category: 'events' as Category,
    title: 'Турнир по PvP — Апрель 2026',
    desc: 'Приглашаем принять участие в ежеквартальном турнире по PvP. Призовой фонд — 10 000 монет!',
    date: '2 апреля 2026', isNew: false, type: 'event', color: '#f97316', bg: bg2,
  },
  {
    id: 5, category: 'updates' as Category,
    title: 'Новая система кланов',
    desc: 'Полностью переработанная система кланов с новыми механиками войны, союзов и захвата территорий.',
    date: '1 апреля 2026', isNew: false, type: 'update', color: '#0ea5e9', bg: bg3,
  },
  {
    id: 6, category: 'community' as Category,
    title: 'Топ строители марта',
    desc: 'Представляем лучшие постройки марта на серверах AnywayMC. Голосуйте за победителя!',
    date: '31 марта 2026', isNew: false, type: 'community', color: '#4ade80', bg: bg1,
  },
];

const TYPE_LABELS: Record<string, string> = {
  update: 'Обновление',
  event: 'Событие',
  community: 'Сообщество',
};

const TYPE_COLORS: Record<string, string> = {
  update: '#7855ff',
  event: '#4ade80',
  community: '#fbbf24',
};

export function NewsPage() {
  const [category, setCategory] = useState<Category>('all');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = category === 'all' ? ARTICLES : ARTICLES.filter((a) => a.category === category);

  return (
    <div className="flex h-full" style={{ background: '#0d0d11' }}>
      {/* ── LEFT: Filter sidebar ── */}
      <div
        className="hidden md:flex flex-col h-full shrink-0 py-6 px-4"
        style={{
          width: 200,
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="text-[10px] font-bold uppercase tracking-widest mb-4 px-2" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
          Категории
        </div>
        <div className="space-y-0.5">
          {CATEGORIES.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all"
              style={{
                background: category === key ? 'rgba(120,85,255,0.12)' : 'transparent',
                color: category === key ? '#9b7dff' : '#6a6a88',
                border: category === key ? '1px solid rgba(120,85,255,0.2)' : '1px solid transparent',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <span className="font-medium">{label}</span>
              <span
                className="text-[10px] font-bold w-5 h-5 rounded-md flex items-center justify-center"
                style={{
                  background: category === key ? 'rgba(120,85,255,0.2)' : 'rgba(255,255,255,0.06)',
                  color: category === key ? '#9b7dff' : '#4a4a62',
                }}
              >
                {count}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 16 }} />
          <div className="text-[10px] font-bold uppercase tracking-widest mb-3 px-2" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
            Теги
          </div>
          {['#BackDoor', '#SkyForge', '#PvP', '#Ивент', '#Строительство'].map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-2 px-3 py-2 text-xs cursor-pointer hover:opacity-80"
              style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}
            >
              <Tag size={10} />
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN: News content ── */}
      <div className="flex-1 min-w-0 h-full overflow-y-auto">
        <div className="p-6 lg:p-8 max-w-4xl">
          {/* Mobile category tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1 md:hidden">
            {CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className="shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium transition-all"
                style={{
                  background: category === key ? 'rgba(120,85,255,0.15)' : 'rgba(255,255,255,0.04)',
                  color: category === key ? '#9b7dff' : '#6a6a88',
                  border: category === key ? '1px solid rgba(120,85,255,0.25)' : '1px solid rgba(255,255,255,0.06)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {(category === 'all' || category === 'updates') && (
            <div
              className="relative rounded-2xl overflow-hidden mb-6 cursor-pointer group"
              style={{ border: '1px solid rgba(255,255,255,0.08)', minHeight: 220 }}
            >
              <img
                src={FEATURED.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                style={{ opacity: 0.35, filter: 'saturate(1.3)' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(13,13,17,0.97) 30%, rgba(13,13,17,0.5) 70%, rgba(13,13,17,0.2) 100%)' }}
              />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: 220 }}>
                <div className="flex items-center gap-2 mb-3">
                  {FEATURED.isHot && (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg" style={{ background: 'rgba(249,115,22,0.2)', color: '#f97316' }}>
                      <Flame size={10} /> HOT
                    </span>
                  )}
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-lg" style={{ background: 'rgba(120,85,255,0.2)', color: '#9b7dff' }}>
                    {TYPE_LABELS[FEATURED.type]}
                  </span>
                  <span className="flex items-center gap-1 text-[10px]" style={{ color: '#5a5a72' }}>
                    <Calendar size={10} />
                    {FEATURED.date}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'Ubuntu, sans-serif', color: '#e8e8f5', fontSize: 22, fontWeight: 700, marginBottom: 8, lineHeight: 1.2 }}>
                  {FEATURED.title}
                </h2>
                <p className="text-sm mb-4" style={{ color: '#7070a0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: 560 }}>
                  {FEATURED.desc}
                </p>
                <button className="self-start flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80" style={{ color: '#9b7dff', fontFamily: 'Inter, sans-serif' }}>
                  Читать полностью <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Section header */}
          <div className="flex items-center justify-between mb-4">
            <h3 style={{ fontFamily: 'Ubuntu, sans-serif', color: '#9090a8', fontSize: 13, fontWeight: 600 }}>
              {category === 'all' ? 'Последние новости' : CATEGORIES.find((c) => c.key === category)?.label}
            </h3>
            <span className="text-xs" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
              {filtered.length} публикаций
            </span>
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.map((article) => (
              <div
                key={article.id}
                onClick={() => setExpanded(expanded === article.id ? null : article.id)}
                className="rounded-2xl overflow-hidden cursor-pointer transition-all hover:bg-white/[0.02] group"
                style={{ background: 'rgba(18,18,24,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Thumbnail */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={article.bg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ opacity: 0.5, filter: 'saturate(1.2)' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent 30%, rgba(18,18,24,0.95))` }}
                  />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span
                      className="text-[9px] font-bold px-2 py-1 rounded-md"
                      style={{ background: TYPE_COLORS[article.type] + '25', color: TYPE_COLORS[article.type] }}
                    >
                      {TYPE_LABELS[article.type].toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-semibold leading-snug" style={{ color: '#c8c8e0', fontFamily: 'Inter, sans-serif' }}>
                      {article.title}
                    </h4>
                  </div>
                  <p
                    className="text-xs leading-relaxed mb-3"
                    style={{
                      color: '#5a5a72',
                      fontFamily: 'Inter, sans-serif',
                      display: '-webkit-box',
                      WebkitLineClamp: expanded === article.id ? 'unset' : 2,
                      WebkitBoxOrient: 'vertical' as any,
                      overflow: 'hidden',
                    }}
                  >
                    {article.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px]" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                      <Calendar size={10} />
                      {article.date}
                    </div>
                    <button
                      className="text-[11px] font-medium flex items-center gap-1 hover:opacity-80"
                      style={{ color: article.color, fontFamily: 'Inter, sans-serif' }}
                    >
                      {expanded === article.id ? 'Свернуть' : 'Читать'} <ChevronRight size={10} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
