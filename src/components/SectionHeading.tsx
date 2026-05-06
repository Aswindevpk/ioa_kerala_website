import React from 'react';

interface SectionHeadingProps {
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  highlightedTitle,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      
      <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight ">
        {title} {highlightedTitle && <span className="text-primary">{highlightedTitle}</span>}
      </h2>
      
      {subtitle && (
        <p className="text-sm text-secondary/60 font-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
