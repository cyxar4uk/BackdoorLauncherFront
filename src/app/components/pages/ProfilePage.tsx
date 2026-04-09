import { useState } from 'react';
import {
  Trophy, Clock, Swords, BarChart2, Star, Shield,
  MapPin, Calendar, ExternalLink, ChevronRight
} from 'lucide-react';
import bgImg from 'figma:asset/55f8aca9bb4bdf137da58c91b2ff2a6859c2608a.png';
import avatarImg from 'figma:asset/4cc69df6585a140004c6f81bd13e5e66ebd79122.png';
import badgeImg from 'figma:asset/b187b1ed250c9b61ac3dbb87aa82cf2677089d43.png';
import achievementImg from 'figma:asset/6d02d2f2d0f178f8d86e4ef5ad01961ad0f4432f.png';
import clanImg from 'figma:asset/b1cac1ad1c4efbbe2f08beb815e32b04f483346f.png';

type Tab = 'achievements' | 'badges' | 'clans' | 'history';

const STATS = [
  { icon: Clock, label: 'Часов сыграно', value: '2 847', sub: '~3.8 ч/день', color: '#7855ff' },
  { icon: Swords, label: 'PvP победы', value: '1 204', sub: 'K/D: 3.2', color: '#f97316' },
  { icon: Trophy, label: 'Достижений', value: '47 / 120', sub: 'Топ 8%', color: '#fbbf24' },
  { icon: BarChart2, label: 'Рейтинг', value: '#142', sub: 'на сервере', color: '#4ade80' },
];

const ACHIEVEMENTS = [
  { id: 1, name: 'Рыбалка', desc: 'Собрать 3 стака рыбы фугу менее чем за 3 часа', img: achievementImg, rarity: 'legendary', done: true },
  { id: 2, name: 'Шахтёр', desc: 'Добыть 1000 блоков камня за один сеанс', img: achievementImg, rarity: 'epic', done: true },
  { id: 3, name: 'Первопроходец', desc: 'Исследовать 10 различных биомов за одну сессию', img: achievementImg, rarity: 'rare', done: true },
  { id: 4, name: 'Торговец', desc: 'Совершить 50 торговых сделок с жителями деревни', img: achievementImg, rarity: 'rare', done: true },
  { id: 5, name: 'Зельевар', desc: 'Сварить 20 различных зелий в течение недели', img: achievementImg, rarity: 'epic', done: false },
  { id: 6, name: 'Строитель', desc: 'Построить здание высотой более 50 блоков', img: achievementImg, rarity: 'common', done: true },
  { id: 7, name: 'Охотник', desc: 'Убить 100 мобов за одну ночь', img: achievementImg, rarity: 'rare', done: false },
  { id: 8, name: 'Крафтер', desc: 'Скрафтить по 1 предмету каждого типа', img: achievementImg, rarity: 'epic', done: true },
];

const BADGES = [
  { name: 'VIP', icon: '👑', color: '#7855ff', desc: 'Статус VIP-игрока', active: true },
  { name: 'Ветеран', icon: '🎖️', color: '#fbbf24', desc: 'Играет более 3 лет', active: true },
  { name: 'Рыбак', icon: '🎣', color: '#0ea5e9', desc: 'Мастер рыбалки', active: true },
  { name: 'ПвПшник', icon: '⚔️', color: '#f97316', desc: 'Победил 100+ игроков', active: false },
  { name: 'Строитель', icon: '🏗️', color: '#4ade80', desc: 'Лучшая постройка месяца', active: false },
  { name: 'Меценат', icon: '💜', color: '#9b7dff', desc: 'Поддержал проект донатом', active: true },
];

const CLANS = [
  { name: '☝🏻 АУФ 👆🏻', role: 'Лидер', members: 42, rank: '#1', img: clanImg, color: '#7855ff' },
  { name: '🐺 ЭлитаСерых', role: 'Участник', members: 38, rank: '#4', img: clanImg, color: '#a0a0b8' },
];

const HISTORY = [
  { server: 'BackDoor', time: '09:34 — 13:47', date: 'Сегодня', duration: '4ч 13мин', color: '#7855ff' },
  { server: 'SkyForge', time: '21:10 — 23:30', date: 'Вчера', duration: '2ч 20мин', color: '#0ea5e9' },
  { server: 'BackDoor', time: '17:05 — 20:58', date: '7 апреля', duration: '3ч 53мин', color: '#7855ff' },
  { server: 'DarkPrison', time: '15:20 — 16:00', date: '6 апреля', duration: '40мин', color: '#f97316' },
];

const RARITY_COLORS: Record<string, string> = {
  legendary: '#fbbf24',
  epic: '#9b7dff',
  rare: '#0ea5e9',
  common: '#8888a8',
};
const RARITY_LABELS: Record<string, string> = {
  legendary: 'Легендарное',
  epic: 'Эпическое',
  rare: 'Редкое',
  common: 'Обычное',
};

const TABS: { key: Tab; label: string }[] = [
  { key: 'achievements', label: 'Достижения' },
  { key: 'badges', label: 'Значки' },
  { key: 'clans', label: 'Кланы' },
  { key: 'history', label: 'История входов' },
];

// Circular progress SVG
function ProgressRing({ pct }: { pct: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" className="-rotate-90">
      <circle cx="65" cy="65" r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
      <circle cx="65" cy="65" r={54} stroke="rgba(222,206,255,0.15)" strokeWidth="10" />
      <circle
        cx="65" cy="65" r={r}
        stroke="url(#ringGrad)"
        strokeWidth="10"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9b7dff" />
          <stop offset="100%" stopColor="#7855ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ProfilePage() {
  const [tab, setTab] = useState<Tab>('achievements');

  return (
    <div className="flex h-full min-h-0" style={{ background: '#0d0d11' }}>
      {/* ── LEFT: Profile info panel ── */}
      <div
        className="h-full flex flex-col overflow-y-auto shrink-0"
        style={{
          width: 280,
          background: '#0d0d11',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Banner + avatar */}
        <div className="relative h-24 shrink-0 overflow-hidden">
          <img src={bgImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" style={{ filter: 'blur(4px) saturate(1.5)', transform: 'scale(1.1)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, #0d0d11)' }} />
        </div>

        <div className="px-5 -mt-8 pb-5">
          {/* Avatar */}
          <div
            className="w-16 h-16 rounded-2xl overflow-hidden mb-3 relative"
            style={{ border: '3px solid #0d0d11', background: '#1a1a22' }}
          >
            <img src={avatarImg} alt="Player" className="w-full h-full object-cover" />
            <div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-[#4ade80]" style={{ border: '2px solid #0d0d11' }} />
          </div>

          {/* Name + badge */}
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <h2 style={{ fontFamily: 'Ubuntu, sans-serif', color: '#e8e8f5', fontSize: 20, fontWeight: 700 }}>
              MaqaBlaze
            </h2>
            <img src={badgeImg} alt="" className="h-5 w-auto opacity-90" />
          </div>
          <div className="text-xs mb-3" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
            @cyxar4uk
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {['VIP', 'Ветеран', 'Рыбак', 'Меценат'].map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                style={{ background: 'rgba(120,85,255,0.15)', color: '#9b7dff' }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 16 }} />

          {/* Stats */}
          <div className="space-y-3">
            {STATS.map(({ icon: Icon, label, value, sub, color }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: color + '18' }}
                >
                  <Icon size={14} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>{label}</div>
                  <div className="text-sm font-semibold" style={{ color: '#d0d0e8', fontFamily: 'Ubuntu, sans-serif' }}>{value}</div>
                </div>
                <div className="text-[10px]" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '16px 0' }} />

          {/* Meta */}
          <div className="space-y-2">
            {[
              { icon: Calendar, label: 'На сервере с', value: '12 марта 2013' },
              { icon: MapPin, label: 'Основной сервер', value: 'BackDoor' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon size={13} style={{ color: '#5a5a72', flexShrink: 0 }} />
                <div className="min-w-0">
                  <div className="text-[10px]" style={{ color: '#4a4a62' }}>{label}</div>
                  <div className="text-xs font-medium" style={{ color: '#9090a8' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '16px 0' }} />

          {/* Progress ring */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative flex items-center justify-center">
              <ProgressRing pct={50} />
              <div className="absolute text-center">
                <div style={{ fontFamily: 'Ubuntu, sans-serif', color: '#e8e8f5', fontSize: 22, fontWeight: 700, lineHeight: 1 }}>50%</div>
                <div style={{ fontFamily: 'Inter, sans-serif', color: '#5a5a72', fontSize: 10, lineHeight: 1.3, marginTop: 2 }}>
                  прогресс<br />сюжета
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Main content ── */}
      <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden">
        {/* Page header */}
        <div
          className="px-7 pt-6 pb-4 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h1 style={{ fontFamily: 'Ubuntu, sans-serif', color: '#e8e8f5', fontSize: 22, fontWeight: 700, marginBottom: 14 }}>
            Профиль игрока
          </h1>
          {/* Tabs */}
          <div className="flex gap-1">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: tab === key ? 'rgba(120,85,255,0.15)' : 'transparent',
                  color: tab === key ? '#9b7dff' : '#5a5a72',
                  border: tab === key ? '1px solid rgba(120,85,255,0.25)' : '1px solid transparent',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto p-7">
          {/* Achievements */}
          {tab === 'achievements' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
                  Получено <span style={{ color: '#9b7dff' }}>{ACHIEVEMENTS.filter((a) => a.done).length}</span> из {ACHIEVEMENTS.length}
                </div>
                {/* Progress */}
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(ACHIEVEMENTS.filter((a) => a.done).length / ACHIEVEMENTS.length) * 100}%`, background: '#7855ff' }}
                    />
                  </div>
                  <span className="text-xs" style={{ color: '#7855ff', fontFamily: 'Inter, sans-serif' }}>
                    {Math.round((ACHIEVEMENTS.filter((a) => a.done).length / ACHIEVEMENTS.length) * 100)}%
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                {ACHIEVEMENTS.map((ach) => (
                  <div
                    key={ach.id}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl transition-all hover:bg-white/[0.02]"
                    style={{
                      background: 'rgba(22,22,30,0.8)',
                      border: `1px solid ${ach.done ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)'}`,
                      opacity: ach.done ? 1 : 0.45,
                    }}
                  >
                    <div className="relative shrink-0">
                      <img src={ach.img} alt={ach.name} className="w-12 h-12 object-contain" style={{ filter: ach.done ? 'none' : 'grayscale(100%)' }} />
                      {ach.done && (
                        <div
                          className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[8px]"
                          style={{ background: '#4ade80', color: '#0d0d11' }}
                        >
                          ✓
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-semibold truncate" style={{ color: '#d0d0e8', fontFamily: 'Inter, sans-serif' }}>
                          {ach.name}
                        </span>
                        <span
                          className="text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0"
                          style={{ background: RARITY_COLORS[ach.rarity] + '20', color: RARITY_COLORS[ach.rarity] }}
                        >
                          {RARITY_LABELS[ach.rarity].toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs leading-snug" style={{ color: '#6a6a88', fontFamily: 'Inter, sans-serif' }}>{ach.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Badges */}
          {tab === 'badges' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {BADGES.map((badge) => (
                <div
                  key={badge.name}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl transition-all hover:scale-[1.02]"
                  style={{
                    background: 'rgba(22,22,30,0.8)',
                    border: `1px solid ${badge.active ? badge.color + '30' : 'rgba(255,255,255,0.05)'}`,
                    opacity: badge.active ? 1 : 0.35,
                    boxShadow: badge.active ? `0 0 20px ${badge.color}15` : 'none',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: badge.color + '18' }}
                  >
                    {badge.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-0.5" style={{ color: '#d0d0e8', fontFamily: 'Inter, sans-serif' }}>{badge.name}</div>
                    <div className="text-[10px]" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>{badge.desc}</div>
                  </div>
                  {badge.active && (
                    <div className="flex items-center gap-1 text-[10px] font-medium" style={{ color: badge.color }}>
                      <Star size={10} fill="currentColor" />
                      Получен
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Clans */}
          {tab === 'clans' && (
            <div className="space-y-3 max-w-2xl">
              <div className="flex gap-2 mb-5">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                  style={{ background: 'rgba(120,85,255,0.12)', border: '1px solid rgba(120,85,255,0.25)', color: '#9b7dff', fontFamily: 'Inter, sans-serif' }}
                >
                  <Shield size={14} /> Создать клан
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#6a6a88', fontFamily: 'Inter, sans-serif' }}
                >
                  Найти клан
                </button>
              </div>
              {CLANS.map((clan) => (
                <div
                  key={clan.name}
                  className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all hover:bg-white/[0.02]"
                  style={{ background: 'rgba(22,22,30,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <img src={clan.img} alt="" className="w-14 h-14 object-contain shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold" style={{ color: clan.color, fontFamily: 'Ubuntu, sans-serif' }}>{clan.name}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded"
                        style={{ background: clan.color + '20', color: clan.color }}
                      >
                        {clan.role}
                      </span>
                      <span className="text-xs" style={{ color: '#5a5a72' }}>{clan.members} участников · {clan.rank} место</span>
                    </div>
                  </div>
                  <ExternalLink size={14} style={{ color: '#5a5a72', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          )}

          {/* History */}
          {tab === 'history' && (
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs mb-4" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
                История последних 30 сессий
              </p>
              {HISTORY.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(22,22,30,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: h.color }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium" style={{ color: '#c0c0d8', fontFamily: 'Inter, sans-serif' }}>{h.server}</div>
                    <div className="text-xs" style={{ color: '#5a5a72' }}>{h.time}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-medium" style={{ color: '#8888a8' }}>{h.duration}</div>
                    <div className="text-[10px]" style={{ color: '#4a4a62' }}>{h.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
