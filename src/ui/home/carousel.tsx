"use client";

import clsx from "clsx/lite";
import React, { JSX, ReactNode, useEffect, useRef, useState } from "react";

const DRAG_THRESHOLD = 10;

type CarouselContainerProps = {
  children: ReactNode;
  className?: string;
  onLinkClick?: (e: React.MouseEvent) => void;
};

export default function Carousel({
  children,
  className,
  onLinkClick,
}: CarouselContainerProps) {
  const [dragging, setDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
    setDragged(false);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const move = (x - startX) * 2;
    carouselRef.current!.scrollLeft = scrollLeft - move;
    if (Math.abs(x - startX) > DRAG_THRESHOLD) {
      setDragged(true);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setDragging(false);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (dragged) {
      e.preventDefault();
    } else {
      if (onLinkClick) onLinkClick(e);
    }
  };

  return (
    <div
      ref={carouselRef}
      className={clsx(
        "relative mt-9 flex gap-x-4 overflow-x-auto",
        isTouchDevice ? "snap-x snap-mandatory" : "snap-none",
        carouselRef.current &&
          carouselRef.current.scrollWidth > carouselRef.current.clientWidth &&
          (dragging ? "cursor-grabbing" : "cursor-grab"),
        className,
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as JSX.Element, {
            onClick: (e: React.MouseEvent) => handleLinkClick(e),
          });
        }
        return child;
      })}
    </div>
  );
}
