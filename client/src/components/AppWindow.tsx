import { ReactNode } from "react";

interface AppWindowProps {
  breadcrumb?: string;
  children: ReactNode;
  className?: string;
}

export default function AppWindow({ breadcrumb = "Eudox / M&A Research / electric", children, className = "" }: AppWindowProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Window glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 blur-3xl -z-10" />
      
      {/* Window container */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
        {/* macOS-style chrome */}
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
          {/* Traffic light dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {breadcrumb.split(' / ').map((part, index, arr) => (
              <span key={index}>
                {index === arr.length - 1 ? (
                  <strong className="text-gray-900 dark:text-gray-100">{part}</strong>
                ) : (
                  <>
                    {part}
                    <span className="mx-2 text-gray-400">/</span>
                  </>
                )}
              </span>
            ))}
          </div>
        </div>
        
        {/* Window content */}
        <div className="bg-white dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}
