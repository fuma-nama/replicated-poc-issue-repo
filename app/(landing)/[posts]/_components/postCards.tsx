import { FC } from "react";
import { Card, Cards } from "fumadocs-ui/components/card";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

export interface PostData {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  introduction?: string;
  href?: string;
}

interface PostCardsProps {
  posts: PostData[];
}

export const PostCards: FC<PostCardsProps> = ({ posts }) => {
  return (
    <Cards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {posts.map((post, idx) => (
        <Card
          key={idx}
          className="flex flex-col gap-2 p-6 bg-white dark:bg-gray-950 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 min-h-[350px]"
          description={post.description}
          href={post.href}
          icon={<post.icon />}
          title={post.title}
        >
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={200}
            className="border rounded-md shadow-md w-full h-auto"
          />
        </Card>
      ))}
    </Cards>
  );
};
