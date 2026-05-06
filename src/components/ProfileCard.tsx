import React from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  qualification?: string;
  image: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const ProfileCard = ({
  name,
  role,
  qualification,
  image,
  variant = 'primary',
  className = ""
}: ProfileCardProps) => {
  return (
    <div className={`relative flex flex-col items-center text-center mx-auto max-w-[320px] group pt-16 ${className}`}>
      {/* Pop-up Container */}
      <div className="relative mb-4 w-48 h-48">
        {/* Background Circle */}
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full ${variant === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} border border-slate-100`} />

        {/* Dedicated Clipping Mask Div */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-44 z-10"
          style={{ clipPath: 'inset(-100% 0% 0% 0% round 100rem)' }}
        >
          {/* Popping up Image (Transparent PNG) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-[120%] flex items-end justify-center">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        </div>

      </div>

      {/* Composed Content */}
      <div className="space-y-2">
        <div className="space-y-1.5">
          <h4 className="text-xl font-semibold text-secondary uppercase tracking-tighter leading-tight">
            {name}
          </h4>
          <p className="text-[10px] font-light text-primary uppercase tracking-[0.25em]">
            {role}
          </p>
        </div>
      </div>

    </div>
  );
};
