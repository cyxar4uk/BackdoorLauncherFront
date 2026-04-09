import { NavLink } from 'react-router';
import { Gamepad2, Newspaper, ShoppingBag, Shield, Package, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';
import avatarImg from 'figma:asset/81b8cc580c8c3461d24d686f42c46d25a9264ae5.png';
import badgeImg from 'figma:asset/b187b1ed250c9b61ac3dbb87aa82cf2677089d43.png';

const NAV = [
  { icon: Gamepad2, label: 'Играть', path: '/play' },
  { icon: Newspaper, label: 'Новости', path: '/news', badge: '2' },
  { icon: ShoppingBag, label: 'Магазин', path: '/shop' },
  { icon: Shield, label: 'Кланы', path: '/clans' },
  { icon: Package, label: 'Хранилище', path: '/storage' },
];

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-[60] p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[50] bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-[55] h-full flex flex-col
          transition-transform duration-300 ease-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{
          width: 220,
          background: '#111116',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #7855ff, #5533cc)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" fill="white" opacity="0.9" />
              <rect x="9" y="2" width="5" height="5" fill="white" opacity="0.6" />
              <rect x="2" y="9" width="5" height="5" fill="white" opacity="0.6" />
              <rect x="9" y="9" width="5" height="5" fill="white" opacity="0.3" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              AnywayMC
            </div>
            <div className="text-[10px] leading-tight" style={{ color: '#7855ff' }}>
              LAUNCHER
            </div>
          </div>
        </div>

        {/* Nav section */}
        <nav className="flex-1 py-3 px-2 flex flex-col gap-0.5 overflow-y-auto">
          {NAV.map(({ icon: Icon, label, path, badge }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#7a7a96] hover:text-[#b0b0c8] hover:bg-white/[0.04]'
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      background: 'rgba(120, 85, 255, 0.14)',
                      color: '#ffffff',
                    }
                  : {}
              }
            >
              {({ isActive }) => (
                <>
                  {/* Active indicator */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r"
                      style={{ background: '#7855ff' }}
                    />
                  )}
                  <Icon
                    size={18}
                    strokeWidth={isActive ? 2 : 1.7}
                    style={{ color: isActive ? '#9b7dff' : undefined, flexShrink: 0 }}
                  />
                  <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {label}
                  </span>
                  {badge && !isActive && (
                    <span
                      className="ml-auto text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: '#e8383820', color: '#f87171' }}
                    >
                      {badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Settings */}
        <div className="px-2 pb-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pt-2">
            <NavLink
              to="/settings"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#7a7a96] hover:text-[#b0b0c8] hover:bg-white/[0.04]'
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? { background: 'rgba(120, 85, 255, 0.14)' }
                  : {}
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r"
                      style={{ background: '#7855ff' }}
                    />
                  )}
                  <Settings size={18} strokeWidth={isActive ? 2 : 1.7} style={{ color: isActive ? '#9b7dff' : undefined, flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Настройки
                  </span>
                </>
              )}
            </NavLink>
          </div>
        </div>

        {/* User card */}
        <NavLink
          to="/profile"
          onClick={() => setMobileOpen(false)}
          className="mx-2 mb-3 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all hover:bg-white/[0.04] group"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="relative shrink-0">
            <div className="w-9 h-9 rounded-xl overflow-hidden" style={{ border: '1.5px solid rgba(255,255,255,0.15)' }}>
              <img src={avatarImg} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#4ade80] border-2 border-[#111116]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm font-medium leading-tight truncate" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              CyXar4uk
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <img src={badgeImg} alt="" className="h-3 w-auto opacity-80" />
              <span className="text-[10px] font-medium" style={{ color: '#9b7dff' }}>VIP</span>
            </div>
          </div>
          <Settings
            size={14}
            className="opacity-0 group-hover:opacity-40 transition-opacity"
            style={{ color: '#9090a8', flexShrink: 0 }}
          />
        </NavLink>
      </aside>
    </>
  );
}
