import { ICategory } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { setSelectedCategory } from "../store/category.slice";

type IProps = {
  index: number;
  topic: ICategory;
};

export const Category = ({ index, topic }: IProps) => {
  const dispatch = useAppDispatch();
  const { selectedCategory } = useAppSelector(
    (state: RootState) => state.categories
  );
  return (
    <div
      key={index}
      onClick={() => dispatch(setSelectedCategory(topic))}
      className={`px-4 py-2 ${
        selectedCategory?._id === topic._id ? "border border-black" : ""
      } bg-gray-100 hover:bg-gray-200 text-sm rounded-full whitespace-nowrap cursor-pointer`}
    >
      {topic.name}
    </div>
  );
};
