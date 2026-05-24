import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { HomePage } from '../pages/HomePage';
import { FeaturesPage } from '../pages/FeaturesPage';
import { ClassesPage } from '../pages/ClassesPage';
import { ClassDetailPage } from '../pages/ClassDetailPage';
import { InstallPage } from '../pages/InstallPage';
import { DownloadPage } from '../pages/DownloadPage';
import { SupportPage } from '../pages/SupportPage';
import { DonatePage } from '../pages/DonatePage';
import { StoryPage } from '../pages/StoryPage';
import { CommunityBoardPage } from '../pages/community/CommunityBoardPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/classes/:classId" element={<ClassDetailPage />} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/community/free" element={<CommunityBoardPage boardId="free" />} />
        <Route path="/community/free/:postId" element={<CommunityBoardPage boardId="free" />} />
        <Route path="/community/qna" element={<CommunityBoardPage boardId="qna" />} />
        <Route path="/community/qna/:postId" element={<CommunityBoardPage boardId="qna" />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Route>
    </Routes>
  );
}
