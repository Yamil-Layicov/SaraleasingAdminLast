import api from "../../../api/posts";

export const GetCompanies = async () => {
  const response = await api.get("/companies");
  return response.data;
};

export const AddCompanies = async (formData) => {
  const response = await api.post("/companies", formData);
  return response;
};

export const DeleteCompanies = async (id) => {
  const response = await api.delete(`/companies/${id}`);
  return response;
};
