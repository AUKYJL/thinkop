import React, { useState } from "react";

import { cn } from "../lib/utils";

interface Props {
  className?: string;
  title: string;
  placeholder: string;
  options?: IOption[];
  selected?: IOption;
  error?: string;
  onBlur?: () => void;
}
interface IOption {
  value: string;
  label: string;
}

export const FormSelect = React.forwardRef<HTMLSelectElement, Props>(
  (
    {
      className,
      title,
      placeholder,
      options,
      error,
      selected,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    return (
      <div className={className}>
        <h4 className="mb-[14px] text-[15px] text-[#1D1D1D]">{title}</h4>
        <div
          className={cn(
            "flex items-center gap-2 rounded-[6px] border-[1px] border-black/20 p-[16px] text-[14px]",
            error && "border-[#BE1F2A]",
          )}
        >
          <select
            className={cn(
              "flex-1 text-[#1D1D1D]/40 focus-visible:outline-none",
              (!showPlaceholder || selected) && "text-[#1D1D1D]",
            )}
            ref={ref}
            {...props}
            onFocus={() => setShowPlaceholder(false)}
            onBlur={() => {
              if (onBlur) onBlur();
            }}
          >
            {showPlaceholder && !selected && (
              <option className="" value="">
                {placeholder}
              </option>
            )}
            {selected && (
              <option value={selected.value}>{selected.label}</option>
            )}
            {options?.map((option, i) => (
              <option
                key={option.value + i}
                value={option.value}
                className="appearance-none"
              >
                {option.label}
              </option>
            ))}
          </select>

          {error && <span className="text-[#BE1F2A]">{error}</span>}
        </div>
      </div>
    );
  },
);
FormSelect.displayName = "FormSelect";

export default FormSelect;
