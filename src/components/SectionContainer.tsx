import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const SectionContainer = ({ 
  children, 
  className, 
  fullWidth = false 
}: SectionContainerProps) => {
  return (
    <div className={cn(
      "w-full px-6 sm:px-10 lg:px-16",
      !fullWidth && "max-w-7xl mx-auto",
      className
    )}>
      {children}
    </div>
  );
};

export default SectionContainer;
