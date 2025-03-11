import { useLocation } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { addCategories, clearSelectedCategory } from "../store/category.slice";
import { TopicSlider } from "../organisms/";
import { USER_ROLES } from "../enums";

export const Categories = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { loggedInUser } = useAppSelector(
    (state: RootState) => state.authentication
  );
  const { selectedCategory } = useAppSelector(
    (state: RootState) => state.categories
  );
  const [topic, setTopic] = useState("");

  const handleAddTopics = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic here
    dispatch(addCategories({ name: topic }));
    setTopic("");
  };

  useEffect(() => {
    return () => {
      console.log("return from use effect");
      dispatch(clearSelectedCategory());
    };
  }, []);

  return (
    <div className="h-full">
      <div className="w-full h-32">
        <TopicSlider />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold py-1">
          {selectedCategory && selectedCategory?._id === "1"
            ? "Explore Topics"
            : selectedCategory?.name}
        </h1>
        {loggedInUser?.role === USER_ROLES.ADMIN && (
          <div className="relative w-full max-w-md my-6">
            <form action="" onSubmit={handleAddTopics}>
              <input
                type="text"
                placeholder="Add topics"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-3 pl-4 pr-10 rounded-full focus:outline-none bg-slate-50 text-gray-700"
              />
              <RiAddLine className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
