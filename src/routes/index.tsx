import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { HomePage } from '../pages/HomePage';
import { FeaturesPage } from '../pages/FeaturesPage';
import { InstallPage } from '../pages/InstallPage';
import { DownloadPage } from '../pages/DownloadPage';
import { SupportPage } from '../pages/SupportPage';
import { DonatePage } from '../pages/DonatePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Route>
    </Routes>
  );
}
