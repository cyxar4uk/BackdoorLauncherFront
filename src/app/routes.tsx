import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { PlayPage } from './components/pages/PlayPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { NewsPage } from './components/pages/NewsPage';
import { ShopPage } from './components/pages/ShopPage';
import { ClansPage } from './components/pages/ClansPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { StoragePage } from './components/pages/StoragePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, element: <Navigate to="/play" replace /> },
      { path: 'play', Component: PlayPage },
      { path: 'profile', Component: ProfilePage },
      { path: 'news', Component: NewsPage },
      { path: 'shop', Component: ShopPage },
      { path: 'clans', Component: ClansPage },
      { path: 'settings', Component: SettingsPage },
      { path: 'storage', Component: StoragePage },
    ],
  },
]);
