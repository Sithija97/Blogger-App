import { Navbar } from "../molecules";

{
  /*
    title, description, image uploader input and submit button   
*/
}

export const AddPosts = () => {
  const publish = () => {
    console.log("publish");
  };

  return (
    <>
      <div className="max-w-[1032px] m-auto px-5">
        <Navbar publishPost={publish} />
        <div className="bg-blue-300">text editor</div>
      </div>
    </>
  );
};
