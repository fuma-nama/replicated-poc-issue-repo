import { FC, ReactNode } from "react";

interface PostsContainerProps {
  children: ReactNode;
}

const PostsContainer: FC<PostsContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 overflow-y-auto h-full">
      {children}
    </div>
  );
};

export default PostsContainer;
