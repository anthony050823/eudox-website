import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  fallbackClassName,
  ...props 
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div 
        className={cn(
          "flex flex-col items-center justify-center bg-muted/50 border border-border/50 rounded-lg",
          fallbackClassName || className
        )}
      >
        <ImageOff className="w-12 h-12 text-muted-foreground/50 mb-2" />
        <p className="text-xs text-muted-foreground">Unable to load</p>
        {alt && <p className="text-xs text-muted-foreground/70 mt-1">{alt}</p>}
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className={cn(
            "animate-pulse bg-muted/30",
            className
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(className, isLoading && "hidden")}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </>
  );
}
