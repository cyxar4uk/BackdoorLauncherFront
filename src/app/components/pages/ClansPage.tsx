import { useState } from 'react';
import { Search, Users, Trophy, Swords, Shield, Crown, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import clanImg from 'figma:asset/b1cac1ad1c4efbbe2f08beb815e32b04f483346f.png';

type SortKey = 'rank' | 'members' | 'points';

const CLANS = [
  {
    id: 1, rank: 1, name: '☝🏻 АУФ 👆🏻', tag: 'АУФ',
    members: 42, maxMembers: 50, points: 148200, level: 24,
    desc: 'Волк не тот кто волк, а волк это ходить... Все мои волки делают АУФ!',
    img: clanImg, accent: '#7855ff', joined: true,
    wins: 47, kills: 2840, server: 'BackDoor',
  },
  {
    id: 2, rank: 2, name: '🐺 ЭлитаСерых', tag: 'ЭСЕ',
    members: 38, maxMembers: 50, points: 127850, level: 21,
    desc: 'Серые волки захватывают мир. Мы — единое целое, непобедимая стая!',
    img: clanImg, accent: '#9090a8', joined: false,
    wins: 39, kills: 2210, server: 'BackDoor',
  },
  {
    id: 3, rank: 3, name: '🔥 ПламяНочи', tag: 'ПНО',
    members: 35, maxMembers: 50, points: 115600, level: 19,
    desc: 'Мы горим ярче всех! Присоединяйся к лучшему клану сервера.',
    img: clanImg, accent: '#f97316', joined: false,
    wins: 33, kills: 1980, server: 'BackDoor',
  },
  {
    id: 4, rank: 4, name: '💎 DiamondCrew', tag: 'DC',
    members: 30, maxMembers: 40, points: 98400, level: 17,
    desc: 'Профессиональные игроки. Только качество, только хардкор.',
    img: clanImg, accent: '#0ea5e9', joined: false,
    wins: 28, kills: 1750, server: 'SkyForge',
  },
  {
    id: 5, rank: 5, name: '🌿 ЛесныеДухи', tag: 'ЛДА',
    members: 22, maxMembers: 30, points: 74200, level: 14,
    desc: 'Клан для спокойной игры и выживания. Берём всех добрых!',
    img: clanImg, accent: '#4ade80', joined: false,
    wins: 18, kills: 890, server: 'BackDoor',
  },
  {
    id: 6, rank: 6, name: '⚡ StormBreakers', tag: 'SBK',
    members: 18, maxMembers: 25, points: 61500, level: 12,
    desc: 'Ломаем штормы и рекорды. Активный PvP-клан.',
    img: clanImg, accent: '#fbbf24', joined: false,
    wins: 21, kills: 1240, server: 'DarkPrison',
  },
];

const PODIUM_COLORS = ['#fbbf24', '#c0c0c0', '#cd7f32'];

function PodiumCard({ clan, position }: { clan: typeof CLANS[0]; position: number }) {
  const heights = [160, 120, 100];
  const sizes = [72, 56, 48];
  return (
    <div className="flex flex-col items-center" style={{ width: position === 1 ? 160 : 130 }}>
      <div className="relative mb-3">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            width: sizes[position - 1],
            height: sizes[position - 1],
            border: `2px solid ${PODIUM_COLORS[position - 1]}50`,
            boxShadow: position === 1 ? `0 0 30px ${clan.accent}30` : 'none',
          }}
        >
          <img src={clan.img} alt="" className="w-full h-full object-contain p-2" style={{ background: clan.accent + '15' }} />
        </div>
        {/* Crown for #1 */}
        {position === 1 && (
          <div className="absolute -top-3 -right-1 text-xl">👑</div>
        )}
        {/* Rank badge */}
        <div
          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black"
          style={{ background: PODIUM_COLORS[position - 1], color: '#0d0d11', border: '2px solid #111116' }}
        >
          {position}
        </div>
      </div>
      <div className="text-xs font-bold text-center mb-1 truncate w-full text-center" style={{ color: '#d0d0e8', fontFamily: 'Ubuntu, sans-serif' }}>
        {clan.name}
      </div>
      <div className="text-[10px] mb-2" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
        {clan.points.toLocaleString()} очков
      </div>
      {/* Podium block */}
      <div
        className="w-full rounded-t-xl flex items-center justify-center"
        style={{
          height: heights[position - 1],
          background: `linear-gradient(to bottom, ${PODIUM_COLORS[position - 1]}20, ${PODIUM_COLORS[position - 1]}08)`,
          border: `1px solid ${PODIUM_COLORS[position - 1]}25`,
          borderBottom: 'none',
        }}
      >
        <span style={{ color: PODIUM_COLORS[position - 1], fontFamily: 'Ubuntu, sans-serif', fontSize: position === 1 ? 28 : 22, fontWeight: 800, opacity: 0.3 }}>
          #{position}
        </span>
      </div>
    </div>
  );
}

export function ClansPage() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortKey>('rank');
  const [expanded, setExpanded] = useState<number | null>(null);

  const myClan = CLANS.find((c) => c.joined);

  const sorted = [...CLANS]
    .filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.tag.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'rank') return a.rank - b.rank;
      if (sort === 'members') return b.members - a.members;
      return b.points - a.points;
    });

  return (
    <div className="h-full overflow-y-auto" style={{ background: '#0d0d11' }}>
      <div className="max-w-5xl mx-auto px-6 py-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 style={{ fontFamily: 'Ubuntu, sans-serif', color: '#e8e8f5', fontSize: 22, fontWeight: 700, marginBottom: 2 }}>
              Кланы
            </h1>
            <p className="text-xs" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
              247 кланов зарегистрировано на серверах AnywayMC
            </p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7855ff, #5b3de8)', color: 'white', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 16px rgba(120,85,255,0.25)' }}
          >
            <Plus size={15} /> Создать клан
          </button>
        </div>

        {/* My clan banner */}
        {myClan && (
          <div
            className="flex items-center gap-4 p-4 rounded-2xl mb-6"
            style={{
              background: 'rgba(120,85,255,0.08)',
              border: '1px solid rgba(120,85,255,0.2)',
            }}
          >
            <img src={myClan.img} alt="" className="w-12 h-12 object-contain shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: 'rgba(120,85,255,0.2)', color: '#9b7dff' }}>
                  МОЙ КЛАН
                </span>
                <span className="text-sm font-bold" style={{ color: '#d0d0e8', fontFamily: 'Ubuntu, sans-serif' }}>{myClan.name}</span>
              </div>
              <div className="flex items-center gap-3 text-xs" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
                <span className="flex items-center gap-1"><Trophy size={10} /> {myClan.rank} место</span>
                <span className="flex items-center gap-1"><Users size={10} /> {myClan.members} участников</span>
                <span className="flex items-center gap-1"><Swords size={10} /> {myClan.wins} побед</span>
              </div>
            </div>
            <button
              className="px-4 py-2 rounded-xl text-xs font-medium"
              style={{ border: '1px solid rgba(120,85,255,0.3)', color: '#9b7dff', fontFamily: 'Inter, sans-serif' }}
            >
              Управление
            </button>
          </div>
        )}

        {/* Podium top-3 */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: 'rgba(16,16,20,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
            Топ-3 кланов
          </h2>
          <div className="flex items-end justify-center gap-4">
            <PodiumCard clan={CLANS[1]} position={2} />
            <PodiumCard clan={CLANS[0]} position={1} />
            <PodiumCard clan={CLANS[2]} position={3} />
          </div>
        </div>

        {/* Search + sort */}
        <div className="flex gap-3 mb-4">
          <div
            className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-xl"
            style={{ background: 'rgba(22,22,30,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Search size={14} style={{ color: '#4a4a62', flexShrink: 0 }} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск по названию или тегу..."
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: '#c0c0d8', fontFamily: 'Inter, sans-serif' }}
            />
          </div>
          <div className="flex gap-1">
            {(['rank', 'members', 'points'] as SortKey[]).map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className="px-3 py-2 rounded-xl text-xs font-medium transition-all"
                style={{
                  background: sort === s ? 'rgba(120,85,255,0.12)' : 'rgba(22,22,30,0.9)',
                  color: sort === s ? '#9b7dff' : '#6a6a88',
                  border: sort === s ? '1px solid rgba(120,85,255,0.2)' : '1px solid rgba(255,255,255,0.07)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {s === 'rank' ? 'Рейтинг' : s === 'members' ? 'Участники' : 'Очки'}
              </button>
            ))}
          </div>
        </div>

        {/* Clan list */}
        <div className="space-y-2">
          {sorted.map((clan) => {
            const isExpanded = expanded === clan.id;
            return (
              <div
                key={clan.id}
                className="rounded-2xl overflow-hidden transition-all"
                style={{
                  background: 'rgba(18,18,24,0.95)',
                  border: clan.joined ? '1px solid rgba(120,85,255,0.25)' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Main row */}
                <button
                  className="w-full flex items-center gap-4 p-4 text-left hover:bg-white/[0.02] transition-all"
                  onClick={() => setExpanded(isExpanded ? null : clan.id)}
                >
                  {/* Rank */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0"
                    style={{
                      background: clan.rank <= 3 ? PODIUM_COLORS[clan.rank - 1] + '20' : 'rgba(255,255,255,0.05)',
                      color: clan.rank <= 3 ? PODIUM_COLORS[clan.rank - 1] : '#4a4a62',
                    }}
                  >
                    {clan.rank}
                  </div>
                  {/* Emblem */}
                  <div
                    className="w-10 h-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
                    style={{ background: clan.accent + '15', border: `1px solid ${clan.accent}25` }}
                  >
                    <img src={clan.img} alt="" className="w-8 h-8 object-contain" />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className="text-sm font-bold" style={{ color: clan.accent, fontFamily: 'Ubuntu, sans-serif' }}>
                        {clan.name}
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: clan.accent + '20', color: clan.accent }}>
                        [{clan.tag}]
                      </span>
                      {clan.joined && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: 'rgba(120,85,255,0.2)', color: '#9b7dff' }}>
                          МОЙ КЛАН
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-[11px]" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
                      <span className="flex items-center gap-1"><Users size={9} /> {clan.members}/{clan.maxMembers}</span>
                      <span className="flex items-center gap-1"><Trophy size={9} /> {clan.points.toLocaleString()} очков</span>
                      <span className="flex items-center gap-1"><Shield size={9} /> Ур. {clan.level}</span>
                    </div>
                  </div>
                  {/* Chevron */}
                  <div className="shrink-0 opacity-30">
                    {isExpanded ? <ChevronUp size={16} style={{ color: '#e0e0f0' }} /> : <ChevronDown size={16} style={{ color: '#e0e0f0' }} />}
                  </div>
                </button>

                {/* Expanded */}
                {isExpanded && (
                  <div className="px-4 pb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="pt-4 flex flex-col sm:flex-row gap-5">
                      <div className="flex-1">
                        <p className="text-sm mb-4" style={{ color: '#7070a0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
                          {clan.desc}
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { label: 'Победы', value: clan.wins, icon: Trophy },
                            { label: 'Убийства', value: clan.kills.toLocaleString(), icon: Swords },
                            { label: 'Сервер', value: clan.server, icon: Crown },
                          ].map(({ label, value, icon: Icon }) => (
                            <div
                              key={label}
                              className="text-center p-2.5 rounded-xl"
                              style={{ background: 'rgba(13,13,17,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                              <Icon size={12} className="mx-auto mb-1" style={{ color: clan.accent }} />
                              <div className="text-xs font-bold" style={{ color: '#c0c0d8', fontFamily: 'Ubuntu, sans-serif' }}>{value}</div>
                              <div className="text-[9px]" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>{label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 justify-end sm:w-36">
                        {/* Membership bar */}
                        <div>
                          <div className="flex justify-between text-[10px] mb-1" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                            <span>Участники</span>
                            <span>{clan.members}/{clan.maxMembers}</span>
                          </div>
                          <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${(clan.members / clan.maxMembers) * 100}%`, background: clan.accent }}
                            />
                          </div>
                        </div>
                        {!clan.joined ? (
                          <button
                            className="w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                            style={{
                              background: `linear-gradient(135deg, ${clan.accent}, ${clan.accent}cc)`,
                              fontFamily: 'Inter, sans-serif',
                            }}
                          >
                            Вступить
                          </button>
                        ) : (
                          <button
                            className="w-full py-2.5 rounded-xl text-sm font-medium"
                            style={{ border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', fontFamily: 'Inter, sans-serif' }}
                          >
                            Выйти
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
