interface DocsHeaderProps {
  title: string;
  description: string;
}

export function DocsHeader({ title, description }: DocsHeaderProps) {
  return (
    <>
      <div
        id="pageHeader"
        className="top-0 w-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg rounded-xl"
      >
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <h1
            id="pageTitle"
            className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl"
          >
            {title}
          </h1>
          <p
            id="pageDescription"
            className="mt-4 text-lg text-white/90 sm:text-xl"
          >
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
