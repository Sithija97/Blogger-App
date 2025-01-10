import axios from "axios";
import { Header, Post } from "../molecules";
import { BASE_URL } from "../constants";
import { useEffect, useState } from "react";
import { Categories } from "./categories";
import { RecentBlogs } from "./recent";

type IAuthor = {
  _id: string;
  username: string;
};

export type IPost = {
  _id: string;
  title: string;
  summary: string;
  content: string;
  cover: string;
  author: IAuthor;
  createdAt: string;
  updatedAt: string;
};

export const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <RecentBlogs />
    </>
  );
};
