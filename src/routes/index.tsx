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
import { CommunityListPage } from '../pages/community/CommunityListPage';
import { CommunityPostDetailPage } from '../pages/community/CommunityPostDetailPage';
import { CommunityPostFormPage } from '../pages/community/CommunityPostFormPage';

function communityRoutes(boardId: 'free' | 'qna', base: string) {
  return (
    <>
      <Route path={base} element={<CommunityListPage boardId={boardId} />} />
      <Route path={`${base}/new`} element={<CommunityPostFormPage boardId={boardId} mode="new" />} />
      <Route
        path={`${base}/:postId/edit`}
        element={<CommunityPostFormPage boardId={boardId} mode="edit" />}
      />
      <Route path={`${base}/:postId`} element={<CommunityPostDetailPage boardId={boardId} />} />
    </>
  );
}

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
        {communityRoutes('free', '/community/free')}
        {communityRoutes('qna', '/community/qna')}
        <Route path="/support" element={<SupportPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Route>
    </Routes>
  );
}
