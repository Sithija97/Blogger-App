import { ROOT } from "../routes/router";
import { RedirectLink } from "../attoms";

export const Header = () => {
  return (
    <div className="my-4 flex items-center justify-center flex-col">
      <div className="text-4xl flex flex-col  w-full items-start">
        <h1 className="font-semibold">Hey I am Lorem ipsum !</h1>
        <h2>Discover new blogs of technology and trends.</h2>
      </div>

      <div className="my-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="./blog.webp"
            alt=""
            className="rounded w-full h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl front-bold">Lorem Ipsum</h1>
          <p className="mt-2 mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            in omnis minus nesciunt! Totam et eos vitae doloribus odit
            consectetur obcaecati voluptatum corporis iure illum sapiente, ab
            corrupti asperiores doloremque.
          </p>
          <RedirectLink link={ROOT} title="Read More" customStyles="mt-2" />
        </div>
      </div>
    </div>
  );
};
