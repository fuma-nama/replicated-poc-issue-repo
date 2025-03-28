import { FC, ComponentType } from "react";
import { PostData } from "./postCards";
import { HeadingLevel } from "@/lib/types";
import { createCompiler } from "@fumadocs/mdx-remote";

const ErrorComponent: ComponentType<{ error: unknown }> = ({ error }) => (
  <p className="text-red-500 font-semibold">
    Error rendering introduction: {String(error)}
  </p>
);
ErrorComponent.displayName = "ErrorComponent";

interface PostSeriesProps {
  title: string;
  description: string;
  headingLevel?: HeadingLevel;
  introduction?: string;
  posts: PostData[];
}

const compiler = createCompiler();

export const PostSeries: FC<PostSeriesProps> = async ({
  title,
  description,
  headingLevel = "h2",
  introduction,
  posts,
}) => {
  let MdxContent: ComponentType | null = null;
  let error: unknown = null;

  if (introduction) {
    try {
      const compiled = await compiler.compile({ source: "**Post Series**" });
      MdxContent = compiled.body as ComponentType;
    } catch (err) {
      error = err;
      console.error(err);
    }
  }

  return <p>Series Placeholder</p>;
};
