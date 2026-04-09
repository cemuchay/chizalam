import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
}

const ProjectImage = ({ src, alt }: ProjectImageProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden group">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-110"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXQM485D16AAAAABJRU5ErkJggg=="
      />
      {/* Subtle overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300" />
    </div>
  );
};

export default ProjectImage;