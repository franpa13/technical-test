import { Post } from "@/types/feed-types";
import { FeedImage } from "./feed-image";
import { formatSpanishDate } from '../utils/date-utils';
import Image from "next/image";

interface FeedItemProps {
    post: Post;
}

export function FeedItem({ post }: FeedItemProps) {
    return (
        <article className="w-full lg:w-1/4 rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden
    transform transition-transform duration-300 hover:scale-101 hover:shadow-lg">
            <FeedImage src={post.image} alt={post.title} />
            <div className="p-2 space-y-2">
                <h2 className="text-lg text-login-gradient-to font-semibold transition-colors duration-300 hover:text-primary">
                    {post.title}
                </h2>

                <p className="text-sm text-muted-foreground">{post.content}</p>

                {/* Autor con foto */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Image
                            width={48}
                            height={48}
                            src={post.authorImage}
                            alt={post.author}
                            className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="font-semibold text-login-gradient-from">{post.author}</span>
                    </div>
                    <time dateTime={post.date.toISOString()}>
                        {formatSpanishDate(post.date)}
                    </time>
                </div>

            </div>
        </article>
    );
}
