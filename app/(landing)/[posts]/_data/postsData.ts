import { Boxes, LockKeyhole, Rss } from "lucide-react";
import type { PostData } from "@/app/(landing)/[posts]/_components/postCards";
import { HeadingLevel } from "@/lib/types";

export interface PostSeriesData {
  title: string;
  description: string;
  headingLevel?: HeadingLevel;
  introduction?: () => string;
  posts: PostData[];
}

export const postSeriesData: PostSeriesData[] = [
  {
    title: "Post Series A",
    description: "The description for post series A.",
    headingLevel: "h2",
    introduction: () => `This is text used for abstract.`,
    posts: [
      {
        title: "Part 1",
        description: "Learn more about part 1",
        href: "posts/",
        icon: Boxes,
        image: "/images/landing-page/posts.webp",
      },
      {
        title: "Part 2",
        description: "Learn more about part 2",
        href: "posts/",
        icon: Rss,
        image: "/images/landing-page/posts.webp",
      },
      {
        title: "Part 3",
        description: "Learn more about part 3",
        href: "posts/",
        icon: LockKeyhole,
        image: "/images/landing-page/posts.webp",
      },
    ],
  },
  {
    title: "Posts Series B",
    description: "The description of post series B",
    introduction: () => `This is text used for abstract`,
    posts: [
      {
        title: "Part 1",
        description: "Learn more about part 1",
        href: "posts/",
        icon: Boxes,
        image: "/images/landing-page/posts.webp",
      },
      {
        title: "Part 2",
        description: "Learn more about part 2",
        href: "posts/",
        icon: Boxes,
        image: "/images/landing-page/posts.webp",
      },
    ],
  },
];
