import axios from "axios";

const getCategories = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/category`);
  return response.data;
};

const addCategories = async (payload: { name: string }) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/category`,
    payload
  );
  return response.data;
};

const deleteCategories = async (id: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/category/${id}`
  );
  return response.data;
};

const categoryService = { getCategories, addCategories, deleteCategories };

export default categoryService;
