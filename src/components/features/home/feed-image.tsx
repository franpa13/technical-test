import Image from "next/image";

interface FeedImageProps {
  src: string;
  alt: string;
}

export const FeedImage = ({ src, alt }: FeedImageProps) =>{
  return (
    <div className="relative w-full h-48">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 700px"
        priority={false}
      />
    </div>
  );
}
