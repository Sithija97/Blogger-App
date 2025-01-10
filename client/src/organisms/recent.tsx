import { Post } from "../molecules";
import { SectionTemplate } from "../templates";

export const RecentBlogs = () => {
  const data = [
    {
      img: "./blogger.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.",
    },
    {
      img: "./blogger.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.",
    },
    {
      img: "./blogger.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.",
    },
    {
      img: "./blogger.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil, atque quisquam, modi, velit ea maxime deleniti deserunt magni repudiandae eos! Omnis, quas quasi veniam voluptas ipsam in aliquam nostrum.",
    },
  ];
  return (
    <SectionTemplate title="Recent Blogs">
      <div className="flex flex-col gap-8 lg:gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
            <Post {...item} />
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
};
