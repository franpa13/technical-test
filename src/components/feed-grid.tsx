import { Post } from "@/types/feed-types";
import { FeedItem } from "./feed-item";

interface FeedListProps {
  posts: Post[];
}

export function FeedGrid({ posts }: FeedListProps) {
  if (posts.length === 0) {
    return <p className="text-muted-foreground">No hay publicaciones todavía.</p>;
  }

  return (
    <div className="space-y-6 flex my-12 justify-between gap-4 flex-wrap ">
      {posts.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
    </div>
  );
}