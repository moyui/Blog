import { get } from '@/service';

export interface PostResponse {
  html_url: string;
  id: number;
  number: number;
  title: string;
  labels: string[];
  created_at: string;
  updated_at: string;
  body: string;
}

export function getPosts(page: number) {
  return get<PostResponse[]>('/api/v1/blog/getList', {
    params: {
      page,
      pageSize: 4
    }
  });
}
