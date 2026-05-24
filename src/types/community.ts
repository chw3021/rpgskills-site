export type BoardId = 'free' | 'qna';

export type CommunityPost = {
  id: string;
  title: string;
  body: string;
  authorUid: string;
  authorDisplayName: string;
  authorPhotoURL: string | null;
  createdAt: number;
  updatedAt: number;
  solved?: boolean;
};

export type CommunityComment = {
  id: string;
  body: string;
  authorUid: string;
  authorDisplayName: string;
  authorPhotoURL: string | null;
  createdAt: number;
};

export type NewPostInput = {
  title: string;
  body: string;
};

export type NewCommentInput = {
  body: string;
};
