import React from "react";

import { cn } from "../lib/utils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  title: string;
  placeholder: string;
  type?: "text" | "number";
  maskFn?: (value: string) => string;
}

const FormInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      error = "",
      title,
      placeholder,
      type = "text",
      maskFn,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={className}>
        <h4 className="mb-[14px] text-[15px] text-[#1D1D1D]">{title}</h4>
        <div
          className={cn(
            "flex items-center gap-2 rounded-[6px] border-[1px] border-black/20 p-[16px] text-[14px]",
            error && "border-[#BE1F2A]",
          )}
        >
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...props}
            onInput={(e: React.FormEvent<HTMLInputElement>) =>
              maskFn
                ? (e.currentTarget.value = maskFn(e.currentTarget.value))
                : {}
            }
            className="flex-1 appearance-none text-[#1D1D1D] placeholder:text-[#1D1D1D]/40 focus-visible:outline-none"
          />
          {error && <span className="text-[#BE1F2A]">{error}</span>}
        </div>
      </div>
    );
  },
);
FormInput.displayName = "FormInput";

export { FormInput };
