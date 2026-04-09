import { useState } from 'react';
import { ShoppingCart, Zap, Crown, Star, Package, X, Check } from 'lucide-react';

type Category = 'vip' | 'boosts' | 'cosmetics' | 'currency';

const CATEGORIES: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: 'vip', label: 'VIP-статусы', icon: Crown },
  { key: 'boosts', label: 'Бустеры', icon: Zap },
  { key: 'cosmetics', label: 'Косметика', icon: Star },
  { key: 'currency', label: 'Валюта', icon: Package },
];

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  desc: string;
  icon: string;
  accent: string;
  popular?: boolean;
  sale?: boolean;
  badge?: string;
  features: string[];
}

const PRODUCTS: Record<Category, Product[]> = {
  vip: [
    {
      id: 1, name: 'VIP', price: 149, icon: '🥉', accent: '#9b7dff',
      desc: 'Базовый VIP-статус на 30 дней',
      features: ['Команда /fly', 'Команда /heal', 'Доступ к VIP-чату', 'Приоритет при входе'],
      popular: false,
    },
    {
      id: 2, name: 'VIP+', price: 249, oldPrice: 349, icon: '🥈', accent: '#7855ff',
      desc: 'Расширенный VIP на 30 дней',
      features: ['Всё из VIP', 'Кастомный ник', 'Частный чат', 'Увеличенный эндерсундук', '5 точек /home'],
      popular: true, sale: true, badge: 'ХИТ',
    },
    {
      id: 3, name: 'Premium', price: 499, icon: '🥇', accent: '#fbbf24',
      desc: 'Премиум навсегда',
      features: ['Всё из VIP+', 'Навсегда', 'Уникальный префикс', 'Доступ к бета-тестам', 'Личный Discord'],
      popular: false, badge: 'НАВСЕГДА',
    },
    {
      id: 4, name: 'Elite', price: 999, icon: '💎', accent: '#f97316',
      desc: 'Элитный статус навсегда',
      features: ['Всё из Premium', 'VIP-лобби', 'Персональные события', 'Участие в совете', 'Уникальные эффекты'],
      popular: false, badge: 'EXCLUSIVE',
    },
  ],
  boosts: [
    {
      id: 5, name: 'Опыт ×2', price: 69, icon: '⚡', accent: '#fbbf24',
      desc: 'Двойной опыт на 24 часа на всех серверах',
      features: ['Действует 24 часа', 'Все типы опыта', 'Все серверы'],
      popular: true,
    },
    {
      id: 6, name: 'Монеты ×3', price: 89, icon: '💰', accent: '#4ade80',
      desc: 'Тройное получение монет на 12 часов',
      features: ['Действует 12 часов', 'Все источники монет', 'Стекается с VIP-бонусами'],
    },
    {
      id: 7, name: '/fly навсегда', price: 89, icon: '🦋', accent: '#0ea5e9',
      desc: 'Постоянная команда /fly без VIP',
      features: ['Бессрочно', 'Все серверы', 'Режим Survival'],
    },
    {
      id: 8, name: 'Телепортация', price: 39, icon: '🌀', accent: '#9b7dff',
      desc: 'Мгновенная /tp без задержки на 30 дней',
      features: ['30 дней', 'Без задержки', 'Межсерверная тп'],
      popular: true,
    },
  ],
  cosmetics: [
    {
      id: 9, name: 'Хвост дракона', price: 79, icon: '🐉', accent: '#7855ff',
      desc: 'Анимированные частицы дракона за персонажем',
      features: ['Все серверы', 'Выглядит ✦ Шикарно'],
    },
    {
      id: 10, name: 'Ореол ангела', price: 59, icon: '😇', accent: '#fbbf24',
      desc: 'Светящийся ореол над головой', badge: 'ПОПУЛЯРНОЕ',
      features: ['Все серверы', 'Особый эффект при смерти'],
      popular: true,
    },
    {
      id: 11, name: 'Анимированный плащ', price: 99, icon: '🧥', accent: '#f97316',
      desc: 'Уникальный анимированный плащ AnywayMC',
      features: ['Виден всем игрокам', 'Обновляется с сезонами'],
    },
    {
      id: 12, name: 'Питомец-волк', price: 149, icon: '🐺', accent: '#a0a0b8',
      desc: 'Персональный питомец везде следует за вами',
      features: ['Анимирован', 'Получает уровни', 'Кастомное имя'],
    },
  ],
  currency: [
    {
      id: 13, name: '1 000 монет', price: 19, icon: '🪙', accent: '#fbbf24',
      desc: 'Игровая валюта для торговли',
      features: ['Зачисление мгновенно', 'Все серверы'],
    },
    {
      id: 14, name: '5 000 монет', price: 79, oldPrice: 95, icon: '💰', accent: '#fbbf24',
      desc: '5 000 монет — экономия 17%', sale: true,
      features: ['Зачисление мгновенно', 'Все серверы'],
    },
    {
      id: 15, name: '15 000 монет', price: 199, oldPrice: 285, icon: '💎', accent: '#fbbf24',
      desc: '15 000 монет — экономия 30%', sale: true, popular: true, badge: 'ВЫГОДНО',
      features: ['Зачисление мгновенно', 'Все серверы', 'Бонус +500 монет'],
    },
    {
      id: 16, name: 'Ключ ящика', price: 29, icon: '🔑', accent: '#0ea5e9',
      desc: 'Ключ для открытия премиум-ящика',
      features: ['Случайный редкий предмет', 'Гарантия эпик+'],
    },
  ],
};

export function ShopPage() {
  const [category, setCategory] = useState<Category>('vip');
  const [cart, setCart] = useState<number[]>([]);
  const [purchased, setPurchased] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);
  const balance = 1250;

  const products = PRODUCTS[category];
  const cartProducts = Object.values(PRODUCTS).flat().filter((p) => cart.includes(p.id));
  const total = cartProducts.reduce((sum, p) => sum + p.price, 0);

  const addToCart = (id: number) => {
    if (!cart.includes(id) && !purchased.includes(id)) setCart((prev) => [...prev, id]);
  };
  const removeFromCart = (id: number) => setCart((prev) => prev.filter((i) => i !== id));
  const buyNow = (id: number) => {
    setPurchased((prev) => [...prev, id]);
    setCart((prev) => prev.filter((i) => i !== id));
  };
  const buyCart = () => {
    setPurchased((prev) => [...prev, ...cart]);
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="flex h-full" style={{ background: '#0d0d11' }}>
      {/* ── MAIN content ── */}
      <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden">
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-6 py-4 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-6">
            <h1 style={{ fontFamily: 'Ubuntu, sans-serif', color: '#e8e8f5', fontSize: 20, fontWeight: 700 }}>
              Магазин
            </h1>
            {/* Category tabs */}
            <div className="flex gap-1">
              {CATEGORIES.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setCategory(key)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: category === key ? 'rgba(120,85,255,0.12)' : 'transparent',
                    color: category === key ? '#9b7dff' : '#6a6a88',
                    border: category === key ? '1px solid rgba(120,85,255,0.2)' : '1px solid transparent',
                  }}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Balance */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
              style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}
            >
              <span className="text-base">🪙</span>
              <span className="text-sm font-semibold" style={{ color: '#fbbf24', fontFamily: 'Inter, sans-serif' }}>
                {balance.toLocaleString()} монет
              </span>
            </div>
            {/* Cart button */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all hover:bg-white/[0.05]"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                color: cart.length > 0 ? '#9b7dff' : '#6a6a88',
                background: cart.length > 0 ? 'rgba(120,85,255,0.08)' : 'transparent',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <ShoppingCart size={15} />
              Корзина
              {cart.length > 0 && (
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: '#7855ff', color: 'white' }}
                >
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl">
            {products.map((product) => {
              const inCart = cart.includes(product.id);
              const isPurchased = purchased.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="flex flex-col rounded-2xl overflow-hidden transition-all hover:translate-y-[-2px] group"
                  style={{
                    background: 'rgba(18,18,24,0.95)',
                    border: product.popular
                      ? `1px solid ${product.accent}40`
                      : '1px solid rgba(255,255,255,0.07)',
                    boxShadow: product.popular ? `0 0 30px ${product.accent}15` : 'none',
                  }}
                >
                  {/* Top accent + icon */}
                  <div
                    className="relative flex items-center justify-center py-6"
                    style={{ background: `linear-gradient(135deg, ${product.accent}18, transparent)` }}
                  >
                    <span className="text-4xl">{product.icon}</span>
                    <div className="absolute top-2.5 left-3 flex gap-1.5">
                      {product.badge && (
                        <span
                          className="text-[9px] font-black px-2 py-0.5 rounded-md tracking-wide"
                          style={{ background: product.accent + '25', color: product.accent }}
                        >
                          {product.badge}
                        </span>
                      )}
                      {product.sale && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded-md" style={{ background: '#ef444420', color: '#f87171' }}>
                          СКИДКА
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-sm font-bold mb-1" style={{ color: '#e0e0f0', fontFamily: 'Ubuntu, sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="text-xs mb-3 flex-1" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
                      {product.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-1 mb-4">
                      {product.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-[11px]" style={{ color: '#7070a0', fontFamily: 'Inter, sans-serif' }}>
                          <Check size={10} style={{ color: product.accent, flexShrink: 0 }} />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-end justify-between mb-3">
                      <div>
                        {product.oldPrice && (
                          <div className="text-[10px] line-through mb-0.5" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                            {product.oldPrice} ₽
                          </div>
                        )}
                        <div className="text-lg font-bold" style={{ color: product.accent, fontFamily: 'Ubuntu, sans-serif' }}>
                          {product.price} ₽
                        </div>
                      </div>
                      {product.oldPrice && (
                        <div className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: '#ef444420', color: '#f87171' }}>
                          −{Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    {isPurchased ? (
                      <div
                        className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium"
                        style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', color: '#4ade80', fontFamily: 'Inter, sans-serif' }}
                      >
                        <Check size={14} /> Куплено
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => addToCart(product.id)}
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all hover:bg-white/[0.05]"
                          style={{
                            border: inCart ? `1px solid ${product.accent}50` : '1px solid rgba(255,255,255,0.1)',
                            background: inCart ? product.accent + '18' : 'transparent',
                            color: inCart ? product.accent : '#6a6a88',
                          }}
                        >
                          <ShoppingCart size={13} />
                        </button>
                        <button
                          onClick={() => buyNow(product.id)}
                          className="flex-1 py-2 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                          style={{
                            background: `linear-gradient(135deg, ${product.accent}, ${product.accent}cc)`,
                            fontFamily: 'Inter, sans-serif',
                            boxShadow: `0 2px 12px ${product.accent}30`,
                          }}
                        >
                          Купить
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Cart panel ── */}
      {showCart && (
        <div
          className="h-full flex flex-col shrink-0 overflow-hidden"
          style={{
            width: 280,
            borderLeft: '1px solid rgba(255,255,255,0.07)',
            background: '#111116',
          }}
        >
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 className="font-semibold text-sm" style={{ color: '#e0e0f0', fontFamily: 'Ubuntu, sans-serif' }}>
              Корзина ({cart.length})
            </h3>
            <button onClick={() => setShowCart(false)} className="opacity-40 hover:opacity-70 transition-opacity">
              <X size={16} style={{ color: '#e0e0f0' }} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-sm" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                <ShoppingCart size={32} className="mx-auto mb-3 opacity-20" />
                Корзина пуста
              </div>
            ) : (
              cartProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(22,22,30,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="text-xl shrink-0">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate" style={{ color: '#c0c0d8', fontFamily: 'Inter, sans-serif' }}>{p.name}</div>
                    <div className="text-xs font-bold" style={{ color: p.accent }}>{p.price} ₽</div>
                  </div>
                  <button
                    onClick={() => removeFromCart(p.id)}
                    className="opacity-30 hover:opacity-60 transition-opacity"
                  >
                    <X size={13} style={{ color: '#e0e0f0' }} />
                  </button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: '#6a6a88', fontFamily: 'Inter, sans-serif' }}>Итого</span>
                <span className="text-base font-bold" style={{ color: '#e0e0f0', fontFamily: 'Ubuntu, sans-serif' }}>
                  {total} ₽
                </span>
              </div>
              <button
                onClick={buyCart}
                className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #7855ff, #5b3de8)', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 16px rgba(120,85,255,0.3)' }}
              >
                Оплатить {total} ₽
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}