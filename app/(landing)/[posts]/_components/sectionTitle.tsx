import { HeadingLevel } from "@/lib/types";

interface SectionTitleProps {
  headingLevel?: HeadingLevel;
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  headingLevel: Heading = "h2",
  title,
  subtitle,
}) => {
  return (
    <div className="text-center mb-16">
      <Heading className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight relative inline-block mt-8">
        <span className="relative z-10 block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
          {title}
        </span>
        <span className="absolute inset-0 blur-xl opacity-20 animate-pulse bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg" />
      </Heading>
      {subtitle && (
        <p className="text-lg text-fd-muted-foreground dark:text-gray-300 max-w-2xl mx-auto opacity-90 mt-4">
          {subtitle}
        </p>
      )}
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md mt-8 opacity-80 shadow-lg mx-auto" />
    </div>
  );
};
