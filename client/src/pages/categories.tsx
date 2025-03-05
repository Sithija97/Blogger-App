import { useLocation } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";

export const Categories = () => {
  const location = useLocation();

  const handleAddTopics = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic here
    console.log("submiteed");
  };

  return (
    <div className="h-full">
      <div className="bg-slate-100 w-full h-32">category slider</div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold py-1">Explore Topics</h1>
        <div className="relative w-full max-w-md my-6">
          <form action="" onSubmit={handleAddTopics}>
            <input
              type="text"
              placeholder="Add topics"
              className="w-full p-3 pl-4 pr-10 rounded-full focus:outline-none bg-slate-50 text-gray-700"
            />
            <RiAddLine className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </form>
        </div>
      </div>
    </div>
  );
};
