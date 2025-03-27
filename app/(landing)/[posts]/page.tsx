import { DocsHeader } from "@/app/(landing)/[posts]/_components/docsHeader";
import { postSeriesData } from "@/app/(landing)/[posts]/_data/postsData";
import PostsContainer from "@/app/(landing)/[posts]/_components/postsContainer";
import { PostSeries } from "@/app/(landing)/[posts]/_components/postSeries";

export default async function Page() {
  // Precompute introduction strings on the server
  const seriesWithIntro = postSeriesData.map((series) => ({
    ...series,
    introduction: series.introduction ? series.introduction() : undefined,
  }));

  return (
    <>
      <DocsHeader
        title="Posts"
        description="Explore a series of dev articles"
      />
      <PostsContainer>
        {seriesWithIntro.map((series) => (
          <PostSeries key={series.title} {...series} />
        ))}
      </PostsContainer>
    </>
  );
}
