import React from "react";

import { cn } from "../lib/utils";

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: string;
  title: string;
  placeholder: string;
}

const FormTextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, error = "", title, placeholder, ...props }, ref) => {
    return (
      <div className={className}>
        <h4 className="mb-[14px] text-[15px] text-[#1D1D1D]">{title}</h4>
        <div
          className={cn(
            "flex items-center gap-2 rounded-[6px] border-[1px] border-black/20 p-[16px] text-[14px]",
            error && "border-[#BE1F2A]",
          )}
        >
          <textarea
            ref={ref}
            className="min-h-[100px] flex-1 resize-none text-[#1D1D1D] focus-visible:outline-none"
            placeholder={placeholder}
            {...props}
          />
          {error && <span className="text-[#BE1F2A]">{error}</span>}
        </div>
      </div>
    );
  },
);
FormTextArea.displayName = "FormTextArea";

export { FormTextArea };
