import { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Category } from "../attoms";
import { RootState, useAppSelector } from "../store";
import { ICategory } from "../models";

export const TopicSlider = () => {
  const { categories } = useAppSelector((state: RootState) => state.categories);
  const topics = [{ _id: "1", name: "Explore topics" }, ...categories];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" mt-6 mb-11 relative w-full flex items-center">
      <button
        className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md"
        onClick={() => scroll("left")}
      >
        <RiArrowLeftSLine size={20} />
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-3 scrollbar-hide px-8"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
      >
        {topics.map((topic, index) => (
          <Category key={topic._id} index={index} topic={topic as ICategory} />
        ))}
      </div>
      <button
        className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md"
        onClick={() => scroll("right")}
      >
        <RiArrowRightSLine size={20} />
      </button>
    </div>
  );
};
