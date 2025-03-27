interface HeroBannerProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export default function HeroBanner({
  imageUrl,
  title,
  subtitle,
}: HeroBannerProps) {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-black px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600">
          {title}
        </h1>
        <p className="text-base md:text-lg mt-3 max-w-2xl text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
