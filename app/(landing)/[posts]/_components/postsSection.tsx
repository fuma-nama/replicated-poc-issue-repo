import { FC, ReactNode } from "react";
import { SectionTitle } from "./sectionTitle";
import { HeadingLevel } from "@/lib/types";

interface PostsSectionProps {
  title: string;
  description: string;
  headingLevel?: HeadingLevel;
  children?: ReactNode;
}

export const PostsSection: FC<PostsSectionProps> = ({
  title,
  description,
  headingLevel = "h2",
  children,
}) => {
  return (
    <div className="relative bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-2xl">
      <SectionTitle
        headingLevel={headingLevel}
        title={title}
        subtitle={description}
      />
      {children}
    </div>
  );
};
