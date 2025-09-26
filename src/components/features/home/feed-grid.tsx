import { Post } from "@/types/feed-types";
import { FeedItem } from "./feed-item";

interface FeedListProps {
  posts: Post[];
}

export const FeedGrid = ({ posts }: FeedListProps) =>{
  if (posts.length === 0) {
    return <p className="text-muted-foreground">No hay publicaciones todavía.</p>;
  }

  return (
    <div
      className="
        grid gap-6 my-12
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
      "
    >
      {posts.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
    </div>
  );
}
