import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ScrollRevealComponent = ({
  children,
  ...rest
}: ScrollRevealComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });

    observer.observe(domRef?.current as Element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef}>
      {isVisible && (
        <div className={`animatecss animatecss-fadeIn  ${rest.className}`}>
          {children}
        </div>
      )}
    </div>
  );
};
