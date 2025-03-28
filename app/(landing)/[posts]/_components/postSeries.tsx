import type { ComponentType } from "react";
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

const compiler = createCompiler({
  rehypeCodeOptions: false,
});

export async function PostSeries({
  title,
  description,
  headingLevel = "h2",
  introduction,
  posts,
}: PostSeriesProps) {
  let MdxContent: ComponentType | null = null;
  let error: unknown = null;

  if (introduction) {
    try {
      console.log("compile");
      const compiled = await compiler.compile({ source: "**Post Series**" });
      console.log("compile done");
      MdxContent = compiled.body as ComponentType;
    } catch (err) {
      console.error(err);
      error = err;
    }
  }

  return <p>Series Placeholder</p>;
}
