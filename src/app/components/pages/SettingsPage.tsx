import { useState } from 'react';
import {
  User, Lock, Link, MessageSquare, Sliders, Bell,
  Monitor, Save, ChevronRight, Eye, EyeOff, AlertTriangle, Check
} from 'lucide-react';

type Section = 'account' | 'launcher' | 'general' | 'notifications';

const SECTIONS: { key: Section; label: string; icon: React.ElementType; desc: string }[] = [
  { key: 'account', label: 'Аккаунт', icon: User, desc: 'Данные профиля и безопасность' },
  { key: 'launcher', label: 'Лаунчер', icon: Sliders, desc: 'Производительность и Java' },
  { key: 'general', label: 'Оформление', icon: Monitor, desc: 'Тема, язык, интерфейс' },
  { key: 'notifications', label: 'Уведомления', icon: Bell, desc: 'Настройки оповещений' },
];

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="relative shrink-0 transition-all duration-200"
      style={{ width: 40, height: 22 }}
    >
      <div
        className="absolute inset-0 rounded-full transition-all duration-200"
        style={{ background: value ? '#7855ff' : 'rgba(255,255,255,0.12)' }}
      />
      <div
        className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200 shadow-sm"
        style={{ left: value ? 18 : 2 }}
      />
    </button>
  );
}

function FormRow({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium mb-0.5" style={{ color: '#c0c0d8', fontFamily: 'Inter, sans-serif' }}>{label}</div>
        {desc && <div className="text-xs leading-snug" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>{desc}</div>}
      </div>
      <div className="shrink-0 flex items-center">{children}</div>
    </div>
  );
}

function TextInput({ value, onChange, prefix, placeholder }: { value: string; onChange: (v: string) => void; prefix?: string; placeholder?: string }) {
  return (
    <div
      className="flex items-center overflow-hidden"
      style={{ background: 'rgba(13,13,17,0.8)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10, minWidth: 220 }}
    >
      {prefix && (
        <span className="px-3 py-2 text-xs border-r" style={{ color: '#4a4a62', borderColor: 'rgba(255,255,255,0.07)', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
          {prefix}
        </span>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-3 py-2 bg-transparent text-sm outline-none w-full"
        style={{ color: '#c0c0d8', fontFamily: 'Inter, sans-serif' }}
      />
    </div>
  );
}

export function SettingsPage() {
  const [section, setSection] = useState<Section>('account');
  const [saved, setSaved] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // Account state
  const email = 'anyway-minecraft@aw-m.ru';
  const [vk, setVk] = useState('cyxar4uk');
  const [discord, setDiscord] = useState('cyxar4uk');
  const [discordTag, setDiscordTag] = useState('0');

  // Launcher state
  const [ram, setRam] = useState(4);
  const [maxRam, setMaxRam] = useState(6);
  const [jvmArgs, setJvmArgs] = useState('-XX:+UseG1GC -XX:+ParallelRefProcEnabled');
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [closeOnLaunch, setCloseOnLaunch] = useState(false);
  const [keepLogs, setKeepLogs] = useState(true);

  // General state
  const [theme, setTheme] = useState<'dark' | 'light' | 'auto'>('dark');
  const [language, setLanguage] = useState('ru');
  const [startMin, setStartMin] = useState(false);
  const [showFps, setShowFps] = useState(false);
  const [animateBg, setAnimateBg] = useState(true);

  // Notifications state
  const [notifyNews, setNotifyNews] = useState(true);
  const [notifyEvents, setNotifyEvents] = useState(true);
  const [notifyMaint, setNotifyMaint] = useState(true);
  const [notifyFriends, setNotifyFriends] = useState(false);
  const [notifyClan, setNotifyClan] = useState(true);
  const [notifySound, setNotifySound] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="flex h-full" style={{ background: '#0d0d11' }}>
      {/* ── LEFT: Section nav ── */}
      <div
        className="h-full flex flex-col shrink-0 py-6 px-3"
        style={{ width: 220, borderRight: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="text-[10px] font-bold uppercase tracking-widest mb-4 px-3" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
          Настройки
        </div>
        <div className="space-y-0.5">
          {SECTIONS.map(({ key, label, icon: Icon, desc }) => (
            <button
              key={key}
              onClick={() => setSection(key)}
              className="w-full flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all text-left"
              style={{
                background: section === key ? 'rgba(120,85,255,0.12)' : 'transparent',
                border: section === key ? '1px solid rgba(120,85,255,0.2)' : '1px solid transparent',
              }}
            >
              <Icon
                size={15}
                className="mt-0.5 shrink-0"
                style={{ color: section === key ? '#9b7dff' : '#5a5a72' }}
              />
              <div className="min-w-0">
                <div className="text-sm font-medium" style={{ color: section === key ? '#c8c8e8' : '#7a7a96', fontFamily: 'Inter, sans-serif' }}>
                  {label}
                </div>
                <div className="text-[10px] truncate" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                  {desc}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Version info */}
        <div className="mt-auto px-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto' }}>
          <div className="text-[10px]" style={{ color: '#3a3a52', fontFamily: 'Inter, sans-serif' }}>
            AnywayMC Launcher
          </div>
          <div className="text-[10px]" style={{ color: '#3a3a52', fontFamily: 'Inter, sans-serif' }}>
            Версия 3.1.0
          </div>
          <button className="flex items-center gap-1 mt-1 text-[10px] hover:opacity-80 transition-opacity" style={{ color: '#5a5a72', fontFamily: 'Inter, sans-serif' }}>
            Проверить обновления <ChevronRight size={9} />
          </button>
        </div>
      </div>

      {/* ── RIGHT: Content ── */}
      <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden">
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-7 py-4 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div>
            <h2 style={{ fontFamily: 'Ubuntu, sans-serif', color: '#e8e8f5', fontSize: 18, fontWeight: 700, marginBottom: 1 }}>
              {SECTIONS.find((s) => s.key === section)?.label}
            </h2>
            <p className="text-xs" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
              {SECTIONS.find((s) => s.key === section)?.desc}
            </p>
          </div>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: saved ? 'rgba(74,222,128,0.12)' : 'rgba(120,85,255,0.15)',
              border: saved ? '1px solid rgba(74,222,128,0.3)' : '1px solid rgba(120,85,255,0.3)',
              color: saved ? '#4ade80' : '#9b7dff',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {saved ? <Check size={14} /> : <Save size={14} />}
            {saved ? 'Сохранено!' : 'Сохранить'}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-7 py-4">
          <div className="max-w-2xl">

            {/* ── ACCOUNT ── */}
            {section === 'account' && (
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(16,16,22,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                    Данные аккаунта
                  </div>
                </div>
                <div className="px-5">
                  <FormRow label="Электронная почта" desc="Почта, на которую зарегистрирован аккаунт">
                    <div className="text-sm" style={{ color: '#6a6a88', fontFamily: 'Inter, sans-serif' }}>{email}</div>
                  </FormRow>
                  <FormRow label="Пароль" desc="Для смены пароля откроется страница подтверждения">
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-2 rounded-lg text-xs font-medium transition-all hover:bg-white/[0.04]"
                        style={{ border: '1px solid rgba(255,255,255,0.09)', color: '#7a7a96', fontFamily: 'Inter, sans-serif' }}
                      >
                        История входов
                      </button>
                      <button
                        className="px-3 py-2 rounded-lg text-xs font-medium transition-all hover:bg-white/[0.04]"
                        style={{ border: '1px solid rgba(255,255,255,0.09)', color: '#7a7a96', fontFamily: 'Inter, sans-serif' }}
                      >
                        Сменить пароль
                      </button>
                    </div>
                  </FormRow>
                  <FormRow label="ВКонтакте" desc="Отображается в вашем публичном профиле">
                    <TextInput value={vk} onChange={setVk} prefix="vk.com/" placeholder="username" />
                  </FormRow>
                  <FormRow label="Discord" desc="Ник и тег вашего Discord аккаунта">
                    <div className="flex items-center gap-2">
                      <TextInput value={discord} onChange={setDiscord} placeholder="username" />
                      <span style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>#</span>
                      <div
                        className="w-16"
                        style={{ background: 'rgba(13,13,17,0.8)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10 }}
                      >
                        <input
                          type="text"
                          value={discordTag}
                          onChange={(e) => setDiscordTag(e.target.value)}
                          className="w-full px-3 py-2 bg-transparent text-sm outline-none"
                          style={{ color: '#c0c0d8', fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                  </FormRow>
                </div>
                <div className="px-5 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-2 text-xs" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                    <AlertTriangle size={11} style={{ color: '#fbbf24' }} />
                    Дата создания аккаунта: <span style={{ color: '#5a5a72' }}>31 февраля 2230, 25:59</span>
                  </div>
                </div>
              </div>
            )}

            {/* ── LAUNCHER ── */}
            {section === 'launcher' && (
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(16,16,22,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                      Производительность
                    </div>
                  </div>
                  <div className="px-5">
                    <FormRow label="Минимальная RAM" desc={`Минимальное выделение памяти для JVM`}>
                      <div className="flex items-center gap-3" style={{ minWidth: 200 }}>
                        <input type="range" min={1} max={8} value={ram} onChange={(e) => setRam(+e.target.value)} className="flex-1" style={{ accentColor: '#7855ff' }} />
                        <span className="text-sm font-bold w-14 text-right" style={{ color: '#c0c0d8', fontFamily: 'Ubuntu, sans-serif' }}>{ram} GB</span>
                      </div>
                    </FormRow>
                    <FormRow label="Максимальная RAM" desc="Максимальное выделение памяти для игры">
                      <div className="flex items-center gap-3" style={{ minWidth: 200 }}>
                        <input type="range" min={2} max={16} value={maxRam} onChange={(e) => setMaxRam(+e.target.value)} className="flex-1" style={{ accentColor: '#7855ff' }} />
                        <span className="text-sm font-bold w-14 text-right" style={{ color: '#c0c0d8', fontFamily: 'Ubuntu, sans-serif' }}>{maxRam} GB</span>
                      </div>
                    </FormRow>
                    <FormRow label="JVM аргументы" desc="Дополнительные аргументы виртуальной машины Java">
                      <textarea
                        value={jvmArgs}
                        onChange={(e) => setJvmArgs(e.target.value)}
                        rows={2}
                        className="text-xs outline-none resize-none px-3 py-2 rounded-lg"
                        style={{
                          background: 'rgba(13,13,17,0.8)',
                          border: '1px solid rgba(255,255,255,0.09)',
                          color: '#c0c0d8',
                          fontFamily: 'monospace',
                          minWidth: 300,
                        }}
                      />
                    </FormRow>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(16,16,22,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                      Поведение
                    </div>
                  </div>
                  <div className="px-5">
                    <FormRow label="Автообновление лаунчера" desc="Автоматически обновлять при наличии новых версий">
                      <Toggle value={autoUpdate} onChange={setAutoUpdate} />
                    </FormRow>
                    <FormRow label="Свернуть при запуске" desc="Минимизировать лаунчер при запуске игры">
                      <Toggle value={closeOnLaunch} onChange={setCloseOnLaunch} />
                    </FormRow>
                    <FormRow label="Хранить логи" desc="Сохранять журналы запусков для диагностики">
                      <Toggle value={keepLogs} onChange={setKeepLogs} />
                    </FormRow>
                  </div>
                </div>
              </div>
            )}

            {/* ── GENERAL ── */}
            {section === 'general' && (
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(16,16,22,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                      Внешний вид
                    </div>
                  </div>
                  <div className="px-5">
                    <FormRow label="Тема оформления" desc="Визуальная тема интерфейса лаунчера">
                      <div className="flex gap-2">
                        {(['dark', 'light', 'auto'] as const).map((t) => (
                          <button
                            key={t}
                            onClick={() => setTheme(t)}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                            style={{
                              background: theme === t ? 'rgba(120,85,255,0.15)' : 'rgba(255,255,255,0.04)',
                              border: theme === t ? '1px solid rgba(120,85,255,0.3)' : '1px solid rgba(255,255,255,0.07)',
                              color: theme === t ? '#9b7dff' : '#6a6a88',
                              fontFamily: 'Inter, sans-serif',
                            }}
                          >
                            {t === 'dark' ? 'Тёмная' : t === 'light' ? 'Светлая' : 'Авто'}
                          </button>
                        ))}
                      </div>
                    </FormRow>
                    <FormRow label="Язык интерфейса" desc="Язык отображения текста в лаунчере">
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="px-3 py-2 rounded-lg text-sm outline-none"
                        style={{
                          background: 'rgba(13,13,17,0.8)',
                          border: '1px solid rgba(255,255,255,0.09)',
                          color: '#c0c0d8',
                          fontFamily: 'Inter, sans-serif',
                          minWidth: 160,
                        }}
                      >
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                        <option value="uk">Українська</option>
                        <option value="de">Deutsch</option>
                      </select>
                    </FormRow>
                    <FormRow label="Анимированный фон" desc="Плавные анимации на фоне интерфейса">
                      <Toggle value={animateBg} onChange={setAnimateBg} />
                    </FormRow>
                    <FormRow label="Показывать FPS" desc="Счётчик FPS поверх игры">
                      <Toggle value={showFps} onChange={setShowFps} />
                    </FormRow>
                    <FormRow label="Запуск в свёрнутом виде" desc="Лаунчер запускается сразу в трей">
                      <Toggle value={startMin} onChange={setStartMin} />
                    </FormRow>
                  </div>
                </div>
              </div>
            )}

            {/* ── NOTIFICATIONS ── */}
            {section === 'notifications' && (
              <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(16,16,22,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4a4a62', fontFamily: 'Inter, sans-serif' }}>
                    Типы уведомлений
                  </div>
                </div>
                <div className="px-5">
                  <FormRow label="Новости сервера" desc="Обновления, патчи, изменения на серверах">
                    <Toggle value={notifyNews} onChange={setNotifyNews} />
                  </FormRow>
                  <FormRow label="События и ивенты" desc="Анонсы сезонных и специальных событий">
                    <Toggle value={notifyEvents} onChange={setNotifyEvents} />
                  </FormRow>
                  <FormRow label="Технические работы" desc="Предупреждения о плановых работах">
                    <Toggle value={notifyMaint} onChange={setNotifyMaint} />
                  </FormRow>
                  <FormRow label="Активность кланов" desc="Сообщения от участников вашего клана">
                    <Toggle value={notifyClan} onChange={setNotifyClan} />
                  </FormRow>
                  <FormRow label="Друзья онлайн" desc="Уведомлять, когда друзья заходят на сервер">
                    <Toggle value={notifyFriends} onChange={setNotifyFriends} />
                  </FormRow>
                  <FormRow label="Звук уведомлений" desc="Воспроизводить звук при получении уведомления">
                    <Toggle value={notifySound} onChange={setNotifySound} />
                  </FormRow>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
