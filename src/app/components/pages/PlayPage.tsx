import { useState, useEffect } from 'react';
import {
  Users, Wifi, WifiOff, Play, Plus, Search, ChevronRight,
  Activity, Clock, Globe, AlertCircle
} from 'lucide-react';

// Background arts for each server — use figma:asset backgrounds
import bg1 from 'figma:asset/d5c2397f5f12e8c4d4f5891e2d33e029213c29e1.png';
import bg2 from 'figma:asset/55f8aca9bb4bdf137da58c91b2ff2a6859c2608a.png';
import bg3 from 'figma:asset/c6e0e4e8a63130f041ea7dbce974f59cd9aec32c.png';
import bg4 from 'figma:asset/b0d709b5677f542be57bc154f97d541b8d88ded0.png';

const SERVERS = [
  {
    id: 1,
    name: 'BackDoor',
    tag: 'Основной',
    mode: 'Выживание',
    version: '1.20.4',
    players: 247,
    maxPlayers: 500,
    ping: 24,
    online: true,
    bg: bg1,
    accent: '#7855ff',
    desc: 'Ванильное выживание вместе с общительными игроками. Тут вы сможете почувствовать настоящее удовольствие от игры без лишних плагинов и сборок.',
    news: 'Обновление 2.4.1 — новые биомы и оптимизация',
    tagColor: '#7855ff',
    uptime: '99.8%',
    lastJoined: '2 часа назад',
  },
  {
    id: 2,
    name: 'SkyForge',
    tag: 'Новый',
    mode: 'SkyBlock',
    version: '1.20.4',
    players: 183,
    maxPlayers: 300,
    ping: 31,
    online: true,
    bg: bg2,
    accent: '#0ea5e9',
    desc: 'Захватывающий SkyBlock с уникальными механиками прогрессии. Начни с маленького острова и завоюй всё небо. Новые острова и события каждую неделю.',
    news: 'Весенний ивент — до 30 апреля',
    tagColor: '#0ea5e9',
    uptime: '99.2%',
    lastJoined: '5 часов назад',
  },
  {
    id: 3,
    name: 'DarkPrison',
    tag: null,
    mode: 'Prison',
    version: '1.20.1',
    players: 92,
    maxPlayers: 200,
    ping: 45,
    online: true,
    bg: bg3,
    accent: '#f97316',
    desc: 'Тюремный сервер с глубокой системой прокачки, рангами и живым аукционом. Выбейся из тюрьмы в свободный мир и стань легендой.',
    news: 'Двойной опыт в выходные!',
    tagColor: '#f97316',
    uptime: '98.5%',
    lastJoined: '1 день назад',
  },
  {
    id: 4,
    name: 'CreativeHub',
    tag: null,
    mode: 'Creative',
    version: '1.20.4',
    players: 0,
    maxPlayers: 100,
    ping: 0,
    online: false,
    bg: bg4,
    accent: '#4ade80',
    desc: 'Строй без ограничений! Огромные участки для воплощения любых идей. Еженедельные конкурсы строителей с реальными призами.',
    news: 'Сервер на техническом обслуживании',
    tagColor: '#4ade80',
    uptime: '94.1%',
    lastJoined: '3 дня назад',
  },
];

const NEWS_TICKER = [
  '🟢 BackDoor: Обновление 2.4.1 — новые биомы, оптимизация, фиксы',
  '🎉 Весенний ивент на всех серверах: 10–30 апреля',
  '🔧 CreativeHub: плановые работы 12 апреля с 03:00 до 06:00 МСК',
  '🏆 Турнир по PvP — призовой фонд 10 000 монет!',
];

function PingDot({ ping }: { ping: number }) {
  if (ping === 0) return <span className="w-2 h-2 rounded-full" style={{ background: '#f87171' }} />;
  if (ping < 50) return <span className="w-2 h-2 rounded-full" style={{ background: '#4ade80' }} />;
  if (ping < 100) return <span className="w-2 h-2 rounded-full" style={{ background: '#fbbf24' }} />;
  return <span className="w-2 h-2 rounded-full" style={{ background: '#f87171' }} />;
}

export function PlayPage() {
  const [selected, setSelected] = useState(SERVERS[0]);
  const [launching, setLaunching] = useState(false);
  const [launchProgress, setLaunchProgress] = useState(0);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const t = setInterval(() => setTickerIdx((i) => (i + 1) % NEWS_TICKER.length), 4000);
    return () => clearInterval(t);
  }, []);

  const handleLaunch = () => {
    if (!selected.online || launching) return;
    setLaunching(true);
    setLaunchProgress(0);
    const interval = setInterval(() => {
      setLaunchProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLaunching(false);
            setLaunchProgress(0);
          }, 600);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 200);
  };

  const filtered = SERVERS.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.mode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-full" style={{ background: '#0d0d11' }}>
      {/* ── LEFT: Server list panel ── */}
      <div
        className="flex flex-col h-full shrink-0"
        style={{
          width: 260,
          background: '#0d0d11',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Header */}
        <div className="px-4 pt-5 pb-3">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
            Серверы
          </div>
          {/* Search */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Search size={13} style={{ color: '#5a5a72', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Поиск серверов..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-xs outline-none w-full"
              style={{ color: '#c0c0d8', fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* Server list */}
        <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">
          {filtered.map((server) => {
            const isActive = selected.id === server.id;
            return (
              <button
                key={server.id}
                onClick={() => setSelected(server)}
                className="w-full text-left rounded-xl px-3 py-3 transition-all duration-150 group"
                style={{
                  background: isActive ? 'rgba(120, 85, 255, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(120,85,255,0.25)' : '1px solid transparent',
                }}
              >
                <div className="flex items-center gap-2.5">
                  {/* Status dot */}
                  <div className="shrink-0">
                    {server.online ? (
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: server.accent + '20' }}>
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#4ade80' }} />
                      </span>
                    ) : (
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: 'rgba(248,113,113,0.12)' }}>
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f87171' }} />
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-sm font-medium leading-tight truncate"
                        style={{ color: isActive ? '#e2e2f0' : '#a0a0be', fontFamily: 'Ubuntu, sans-serif' }}
                      >
                        {server.name}
                      </span>
                      {server.tag && (
                        <span
                          className="text-[9px] font-semibold px-1.5 py-0.5 rounded-md shrink-0"
                          style={{ background: server.tagColor + '22', color: server.tagColor }}
                        >
                          {server.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[11px]" style={{ color: '#5a5a72' }}>{server.mode}</span>
                      <span className="text-[11px]" style={{ color: '#3a3a52' }}>•</span>
                      {server.online ? (
                        <span className="text-[11px]" style={{ color: '#5a5a72' }}>
                          {server.players.toLocaleString()} онлайн
                        </span>
                      ) : (
                        <span className="text-[11px]" style={{ color: '#f87171' }}>Офлайн</span>
                      )}
                    </div>
                  </div>
                  {server.online && (
                    <div className="flex items-center gap-1 shrink-0">
                      <PingDot ping={server.ping} />
                      <span className="text-[10px]" style={{ color: '#5a5a72' }}>{server.ping}ms</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}

          {/* Add server */}
          <button
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:bg-white/[0.03] mt-2"
            style={{ border: '1px dashed rgba(255,255,255,0.08)', color: '#5a5a72' }}
          >
            <Plus size={14} />
            <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Добавить сервер</span>
          </button>
        </div>
      </div>

      {/* ── MAIN: Server hero area ── */}
      <div className="flex-1 flex flex-col h-full min-w-0 relative overflow-hidden">
        {/* Background art */}
        <div className="absolute inset-0 z-0">
          <img
            key={selected.id}
            src={selected.bg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: 0.45, filter: 'saturate(1.2)' }}
          />
          {/* Gradient overlays */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(13,13,17,0.3) 0%, rgba(13,13,17,0.05) 40%, rgba(13,13,17,0.85) 75%, rgba(13,13,17,0.98) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(13,13,17,0.0) 0%, rgba(13,13,17,0.0) 60%, rgba(13,13,17,0.6) 100%)',
            }}
          />
        </div>

        {/* Top bar: breadcrumb + status */}
        <div className="relative z-10 flex items-center justify-between px-7 pt-6 pb-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
              Серверы
            </span>
            <ChevronRight size={12} style={{ color: '#3a3a52' }} />
            <span className="text-xs font-medium" style={{ color: '#9090a8', fontFamily: 'Inter, sans-serif' }}>
              {selected.name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {selected.online ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-xs font-medium" style={{ color: '#4ade80', fontFamily: 'Inter, sans-serif' }}>Онлайн</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)' }}>
                <WifiOff size={12} style={{ color: '#f87171' }} />
                <span className="text-xs font-medium" style={{ color: '#f87171', fontFamily: 'Inter, sans-serif' }}>Офлайн</span>
              </div>
            )}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom content overlay */}
        <div className="relative z-10 px-7 pb-6">
          {/* Server tags */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-lg"
              style={{ background: selected.accent + '22', color: selected.accent }}
            >
              {selected.mode}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.07)', color: '#8888a8' }}>
              Java {selected.version}
            </span>
            {selected.tag && (
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: selected.tagColor + '22', color: selected.tagColor }}
              >
                {selected.tag}
              </span>
            )}
          </div>

          {/* Server name */}
          <h1
            className="mb-2"
            style={{
              fontFamily: 'Ubuntu, sans-serif',
              fontSize: 42,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            {selected.name}
          </h1>

          {/* Description */}
          <p
            className="mb-5 max-w-xl"
            style={{ color: '#9090a8', fontSize: 14, lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}
          >
            {selected.desc}
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {[
              { icon: Users, label: 'Игроков', value: selected.online ? `${selected.players.toLocaleString()} / ${selected.maxPlayers}` : '—' },
              { icon: Activity, label: 'Пинг', value: selected.online ? `${selected.ping} мс` : '—' },
              { icon: Globe, label: 'Uptime', value: selected.uptime },
              { icon: Clock, label: 'Последний вход', value: selected.lastJoined },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl"
                style={{ background: 'rgba(13,13,17,0.7)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
              >
                <Icon size={13} style={{ color: '#5a5a72', flexShrink: 0 }} />
                <div>
                  <div className="text-[10px]" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>{label}</div>
                  <div className="text-sm font-medium" style={{ color: '#d0d0e8', fontFamily: 'Inter, sans-serif' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Player bar */}
          {selected.online && (
            <div className="mb-5 max-w-xs">
              <div className="flex justify-between text-[11px] mb-1.5" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
                <span>Заполненность сервера</span>
                <span>{Math.round((selected.players / selected.maxPlayers) * 100)}%</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${(selected.players / selected.maxPlayers) * 100}%`,
                    background: `linear-gradient(to right, ${selected.accent}, ${selected.accent}bb)`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Launch button row */}
          <div className="flex items-center gap-3">
            {!selected.online ? (
              <div
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl"
                style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}
              >
                <AlertCircle size={16} style={{ color: '#f87171' }} />
                <span className="text-sm font-medium" style={{ color: '#f87171', fontFamily: 'Inter, sans-serif' }}>
                  Сервер недоступен
                </span>
              </div>
            ) : (
              <button
                onClick={handleLaunch}
                disabled={launching}
                className="relative overflow-hidden flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed"
                style={{
                  background: launching
                    ? 'rgba(120,85,255,0.3)'
                    : `linear-gradient(135deg, #7855ff, #5b3de8)`,
                  border: '1px solid rgba(120,85,255,0.4)',
                  fontFamily: 'Ubuntu, sans-serif',
                  minWidth: 160,
                  boxShadow: launching ? 'none' : '0 4px 24px rgba(120,85,255,0.3)',
                }}
              >
                {/* Progress fill */}
                {launching && (
                  <div
                    className="absolute inset-0 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #7855ff, #5b3de8)',
                      width: `${launchProgress}%`,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2.5">
                  {launching ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {launchProgress < 100 ? `Загрузка ${Math.round(launchProgress)}%` : 'Запуск...'}
                    </>
                  ) : (
                    <>
                      <Play size={16} fill="white" />
                      Играть
                    </>
                  )}
                </span>
              </button>
            )}
            <button
              className="px-4 py-3.5 rounded-xl text-sm font-medium transition-all hover:bg-white/[0.06]"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#8888a8', fontFamily: 'Inter, sans-serif' }}
            >
              Подробнее
            </button>
          </div>
        </div>

        {/* ── NEWS TICKER at very bottom ── */}
        <div
          className="relative z-10 flex items-center gap-4 px-5 py-2.5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(10,10,14,0.95)' }}
        >
          <span
            className="shrink-0 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
            style={{ background: 'rgba(120,85,255,0.2)', color: '#9b7dff', fontFamily: 'Inter, sans-serif' }}
          >
            Новости
          </span>
          <div className="flex-1 overflow-hidden">
            <div
              key={tickerIdx}
              className="text-xs truncate"
              style={{ color: '#7070a0', fontFamily: 'Inter, sans-serif' }}
            >
              {NEWS_TICKER[tickerIdx]}
            </div>
          </div>
          <button className="shrink-0 flex items-center gap-1 text-[11px] hover:opacity-80 transition-opacity" style={{ color: '#7855ff', fontFamily: 'Inter, sans-serif' }}>
            Все новости <ChevronRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}
