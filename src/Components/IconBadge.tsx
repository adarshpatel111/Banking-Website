import React from "react";

type IconBadgeProps = {
  icon: React.ElementType;
  responsive?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  strokeWidth?: number;
};

const fixedSizes = {
  sm: {
    wrapper: "w-16 h-16",
    inner: "w-10 h-10",
    icon: "w-5 h-5",
  },
  md: {
    wrapper: "w-20 h-20",
    inner: "w-14 h-14",
    icon: "w-7 h-7",
  },
  lg: {
    wrapper: "w-24 h-24",
    inner: "w-16 h-16",
    icon: "w-8 h-8",
  },
};

export default function IconBadge({
  icon: Icon,
  responsive = false,
  size = "md",
  className = "",
  strokeWidth = 1.8,
}: IconBadgeProps) {
  const config = fixedSizes[size];

  const wrapperSize = responsive
    ? "w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20"
    : config.wrapper;

  const innerSize = responsive
    ? "w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12"
    : config.inner;

  const iconSize = responsive
    ? "w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6"
    : config.icon;

  return (
    <div
      className={`relative flex items-center justify-center ${wrapperSize} ${className}`}
    >
      {/* Outer Glow */}
      <div
        className="absolute inset-0 rounded-full blur-md opacity-40"
        style={{
          background:
            "linear-gradient(to bottom right, var(--primary-color), transparent)",
        }}
      />

      {/* Main Gradient Circle */}
      <div
        className={`relative w-full h-full rounded-full flex items-center justify-center border-2 border-(--primary-color)/10`}
        style={{
          background:
            "linear-gradient(to bottom right, rgba(var(--primary-color-rgb),0.25), rgba(var(--primary-color-rgb),0.05))",
        }}
      >
        {/* Inner Circle */}
        <div
          className={`${innerSize} rounded-full bg-(--white)/10 backdrop-blur-sm flex items-center justify-center`}
        >
          <Icon
            className={`${iconSize} text-(--primary-color)`}
            strokeWidth={strokeWidth}
          />
        </div>
      </div>
    </div>
  );
}
