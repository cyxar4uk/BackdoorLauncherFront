import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div
      className="flex h-screen w-screen overflow-hidden"
      style={{ background: '#0d0d11', fontFamily: 'Inter, sans-serif' }}
    >
      <Sidebar />
      <main className="flex-1 min-w-0 h-full overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
}
