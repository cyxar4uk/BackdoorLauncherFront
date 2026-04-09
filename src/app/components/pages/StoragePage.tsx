import { useState } from 'react';
import { Crown, Star, Shirt, Sparkles, Package, Search, Info } from 'lucide-react';
import badgeImg from 'figma:asset/b187b1ed250c9b61ac3dbb87aa82cf2677089d43.png';
import achievementImg from 'figma:asset/6d02d2f2d0f178f8d86e4ef5ad01961ad0f4432f.png';

type Category = 'all' | 'vip' | 'badges' | 'cosmetics' | 'consumables';

const CATEGORIES: { key: Category; label: string; icon: React.ElementType; count: number }[] = [
  { key: 'all', label: 'Всё', icon: Package, count: 18 },
  { key: 'vip', label: 'VIP', icon: Crown, count: 3 },
  { key: 'badges', label: 'Значки', icon: Star, count: 6 },
  { key: 'cosmetics', label: 'Косметика', icon: Shirt, count: 5 },
  { key: 'consumables', label: 'Расходники', icon: Sparkles, count: 4 },
];

type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

const RARITY_CONFIG: Record<Rarity, { label: string; color: string; glow: string }> = {
  legendary: { label: 'Легендарный', color: '#fbbf24', glow: 'rgba(251,191,36,0.2)' },
  epic: { label: 'Эпический', color: '#9b7dff', glow: 'rgba(155,125,255,0.2)' },
  rare: { label: 'Редкий', color: '#0ea5e9', glow: 'rgba(14,165,233,0.2)' },
  common: { label: 'Обычный', color: '#6a6a88', glow: 'rgba(106,106,136,0.1)' },
};

interface Item {
  id: number;
  name: string;
  desc: string;
  icon: string;
  category: Exclude<Category, 'all'>;
  rarity: Rarity;
  equipped: boolean;
  img?: string;
  duration?: string;
  server?: string;
}

const ITEMS: Item[] = [
  { id: 1, name: 'VIP+', desc: 'Расширенный VIP-статус. Все привилегии VIP плюс кастомный ник, частный чат и увеличенный инвентарь.', icon: '💎', category: 'vip', rarity: 'epic', equipped: true, duration: '14 дней', server: 'Все серверы' },
  { id: 2, name: 'VIP', desc: 'Базовый VIP-статус. Доступ к /fly, /heal, приватным каналам и VIP-лобби.', icon: '👑', category: 'vip', rarity: 'rare', equipped: false, duration: 'Истёк', server: 'Все серверы' },
  { id: 3, name: 'Свинка', desc: 'Уникальный VIP-статус для настоящих уважаемых людей. Выдаётся вручную администрацией.', icon: '🐷', category: 'vip', rarity: 'legendary', equipped: false, server: 'Все серверы' },
  { id: 4, name: 'Ветеран', desc: 'Знак игрока, который провёл на сервере более 3 лет. Уважение гарантировано.', icon: '🎖️', category: 'badges', rarity: 'rare', equipped: true, img: badgeImg },
  { id: 5, name: 'Рыбак', desc: 'Мастер рыбалки. Поймал более 1000 рыб на серверах AnywayMC.', icon: '🎣', category: 'badges', rarity: 'common', equipped: true, img: badgeImg },
  { id: 6, name: 'Меценат', desc: 'Поддержал развитие проекта донатом. Особый знак благодарности от команды.', icon: '💜', category: 'badges', rarity: 'epic', equipped: true, img: badgeImg },
  { id: 7, name: 'Кланлидер', desc: 'Создал и успешно возглавляет клан с более чем 30 участниками.', icon: '⚜️', category: 'badges', rarity: 'legendary', equipped: false, img: badgeImg },
  { id: 8, name: 'ПвПшник', desc: 'Победил 100 игроков в честном PvP сражении без читов и баггов.', icon: '⚔️', category: 'badges', rarity: 'epic', equipped: false, img: badgeImg },
  { id: 9, name: 'Строитель', desc: 'Построил лучшее здание месяца по оценке сообщества и администрации.', icon: '🏗️', category: 'badges', rarity: 'rare', equipped: false, img: badgeImg },
  { id: 10, name: 'Хвост дракона', desc: 'Анимированные частицы дракона, следующие за вашим персонажем. Видны всем игрокам.', icon: '🐉', category: 'cosmetics', rarity: 'legendary', equipped: true },
  { id: 11, name: 'Ореол ангела', desc: 'Светящийся ореол над головой. При смерти рассыпается золотыми частицами.', icon: '😇', category: 'cosmetics', rarity: 'epic', equipped: false },
  { id: 12, name: 'Плащ AnywayMC', desc: 'Анимированный плащ с логотипом сервера. Обновляется с каждым сезоном.', icon: '🧥', category: 'cosmetics', rarity: 'rare', equipped: false },
  { id: 13, name: 'Питомец-волк', desc: 'Персональный питомец-волк везде следует за вами. Получает опыт и уровни.', icon: '🐺', category: 'cosmetics', rarity: 'legendary', equipped: false },
  { id: 14, name: 'Огненный след', desc: 'Следы из огня при ходьбе. Подходит для мрачной атмосферы.', icon: '🔥', category: 'cosmetics', rarity: 'epic', equipped: false },
  { id: 15, name: 'Опыт ×2 (24ч)', desc: 'Удваивает получение опыта на всех серверах в течение 24 часов.', icon: '⚡', category: 'consumables', rarity: 'rare', equipped: false, duration: 'Не активирован' },
  { id: 16, name: 'Ключ ящика', desc: 'Ключ для открытия премиум-ящика. Гарантированно выпадет предмет эпик или выше.', icon: '🔑', category: 'consumables', rarity: 'rare', equipped: false },
  { id: 17, name: 'Стартовый набор', desc: 'Набор для быстрого старта: 32 алмаза, 64 еды, полный набор алмазных инструментов.', icon: '🎁', category: 'consumables', rarity: 'epic', equipped: false },
  { id: 18, name: 'Монеты ×2 (12ч)', desc: 'Удваивает получение монет на 12 часов. Стекается с VIP-бонусами.', icon: '🪙', category: 'consumables', rarity: 'common', equipped: false, duration: 'Не активирован' },
];

export function StoragePage() {
  const [category, setCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Item | null>(ITEMS[0]);
  const [equipped, setEquipped] = useState<Set<number>>(new Set(ITEMS.filter((i) => i.equipped).map((i) => i.id)));

  const filtered = ITEMS.filter((item) => {
    const matchCat = category === 'all' || item.category === category;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const equippedCount = equipped.size;

  return (
    <div className="flex h-full" style={{ background: '#0d0d11' }}>
      {/* ── MAIN: Grid ── */}
      <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div
          className="flex items-center gap-4 px-6 py-4 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Category tabs */}
          <div className="flex gap-1 flex-1 overflow-x-auto">
            {CATEGORIES.map(({ key, label, icon: Icon, count }) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: category === key ? 'rgba(120,85,255,0.12)' : 'transparent',
                  color: category === key ? '#9b7dff' : '#6a6a88',
                  border: category === key ? '1px solid rgba(120,85,255,0.2)' : '1px solid transparent',
                }}
              >
                <Icon size={12} />
                {label}
                <span
                  className="text-[9px] font-bold px-1 rounded"
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
          {/* Search */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl shrink-0"
            style={{ background: 'rgba(22,22,30,0.9)', border: '1px solid rgba(255,255,255,0.07)', minWidth: 180 }}
          >
            <Search size={12} style={{ color: '#4a4a62', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Поиск..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-xs outline-none w-full"
              style={{ color: '#c0c0d8', fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="flex items-center gap-5 px-6 py-2 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(10,10,14,0.5)' }}
        >
          <span className="text-xs" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
            Предметов: <span style={{ color: '#6a6a88' }}>{ITEMS.length}</span>
          </span>
          <span className="text-xs" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
            Надето: <span style={{ color: '#9b7dff' }}>{equippedCount}</span>
          </span>
          <span className="text-xs" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
            Показано: <span style={{ color: '#6a6a88' }}>{filtered.length}</span>
          </span>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-5">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-sm" style={{ color: '#3a3a52', fontFamily: 'Inter, sans-serif' }}>
              <Package size={36} className="mx-auto mb-3 opacity-20" />
              Ничего не найдено
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">
              {filtered.map((item) => {
                const rarity = RARITY_CONFIG[item.rarity];
                const isEquipped = equipped.has(item.id);
                const isSelected = selected?.id === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelected(isSelected ? null : item)}
                    className="relative flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all hover:scale-[1.04] group"
                    style={{
                      background: isSelected ? 'rgba(20,20,30,0.95)' : 'rgba(16,16,22,0.9)',
                      border: isSelected
                        ? `1px solid ${rarity.color}50`
                        : `1px solid ${isEquipped ? rarity.color + '25' : 'rgba(255,255,255,0.07)'}`,
                      boxShadow: isSelected ? `0 0 20px ${rarity.glow}` : isEquipped ? `0 0 10px ${rarity.glow}` : 'none',
                      aspectRatio: '1',
                    }}
                  >
                    {/* Equipped dot */}
                    {isEquipped && (
                      <div
                        className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                        style={{ background: rarity.color }}
                      />
                    )}
                    {/* Icon or image */}
                    <div className="flex items-center justify-center flex-1 w-full">
                      {item.img ? (
                        <img src={item.img} alt={item.name} className="w-8 h-8 object-contain" />
                      ) : (
                        <span className="text-2xl leading-none">{item.icon}</span>
                      )}
                    </div>
                    {/* Rarity dot */}
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: rarity.color, opacity: 0.7 }} />
                  </button>
                );
              })}
              {/* Empty slots */}
              {Array.from({ length: Math.max(0, Math.ceil(filtered.length / 7) * 7 - filtered.length) }).map((_, i) => (
                <div
                  key={`e-${i}`}
                  className="rounded-2xl"
                  style={{ aspectRatio: '1', border: '1px dashed rgba(255,255,255,0.04)', background: 'rgba(13,13,17,0.5)' }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── RIGHT: Detail panel ── */}
      <div
        className="h-full flex flex-col shrink-0"
        style={{ width: 280, borderLeft: '1px solid rgba(255,255,255,0.06)', background: '#111116' }}
      >
        {selected ? (
          <>
            {/* Preview area */}
            <div
              className="relative flex items-center justify-center shrink-0"
              style={{
                height: 200,
                background: `radial-gradient(ellipse at center, ${RARITY_CONFIG[selected.rarity].glow} 0%, transparent 70%)`,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Rarity glow ring */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(ellipse at center, ${RARITY_CONFIG[selected.rarity].color}30 0%, transparent 60%)`,
                }}
              />
              {selected.img ? (
                <img src={selected.img} alt={selected.name} className="h-24 w-auto object-contain relative z-10" />
              ) : (
                <span className="text-6xl relative z-10">{selected.icon}</span>
              )}
              {/* Equipped badge */}
              {equipped.has(selected.id) && (
                <div
                  className="absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-md"
                  style={{
                    background: RARITY_CONFIG[selected.rarity].color + '25',
                    color: RARITY_CONFIG[selected.rarity].color,
                    border: `1px solid ${RARITY_CONFIG[selected.rarity].color}40`,
                  }}
                >
                  НАДЕТ
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 overflow-y-auto p-5">
              {/* Name + rarity */}
              <h3 className="text-base font-bold mb-1" style={{ color: '#e0e0f0', fontFamily: 'Ubuntu, sans-serif' }}>
                {selected.name}
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                  style={{
                    background: RARITY_CONFIG[selected.rarity].color + '20',
                    color: RARITY_CONFIG[selected.rarity].color,
                  }}
                >
                  {RARITY_CONFIG[selected.rarity].label.toUpperCase()}
                </span>
                <span className="text-[10px]" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                  {CATEGORIES.find((c) => c.key === selected.category)?.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs mb-4 leading-relaxed" style={{ color: '#6a6a88', fontFamily: 'Inter, sans-serif' }}>
                {selected.desc}
              </p>

              {/* Meta */}
              <div className="space-y-2 mb-5">
                {selected.duration && (
                  <div className="flex items-center justify-between text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: '#4a4a62' }}>Срок</span>
                    <span style={{ color: selected.duration === 'Истёк' ? '#f87171' : '#8888a8' }}>{selected.duration}</span>
                  </div>
                )}
                {selected.server && (
                  <div className="flex items-center justify-between text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: '#4a4a62' }}>Серверы</span>
                    <span style={{ color: '#8888a8' }}>{selected.server}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              {selected.category !== 'consumables' ? (
                <button
                  onClick={() => {
                    const next = new Set(equipped);
                    if (next.has(selected.id)) next.delete(selected.id);
                    else next.add(selected.id);
                    setEquipped(next);
                  }}
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={
                    equipped.has(selected.id)
                      ? { background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)', color: '#f87171', fontFamily: 'Inter, sans-serif' }
                      : {
                          background: `linear-gradient(135deg, ${RARITY_CONFIG[selected.rarity].color}, ${RARITY_CONFIG[selected.rarity].color}cc)`,
                          color: '#0d0d11',
                          fontFamily: 'Inter, sans-serif',
                          boxShadow: `0 4px 16px ${RARITY_CONFIG[selected.rarity].glow}`,
                        }
                  }
                >
                  {equipped.has(selected.id) ? 'Снять' : 'Надеть'}
                </button>
              ) : (
                <button
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, #7855ff, #5b3de8)',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 4px 16px rgba(120,85,255,0.25)',
                  }}
                >
                  Активировать
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-3 p-6">
            <Info size={32} style={{ color: '#2a2a3a' }} />
            <p className="text-xs text-center" style={{ color: '#3a3a52', fontFamily: 'Inter, sans-serif' }}>
              Выберите предмет из коллекции для просмотра деталей
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
