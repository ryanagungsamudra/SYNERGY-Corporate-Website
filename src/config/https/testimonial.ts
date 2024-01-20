import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export const fetchAdvisers = async (params: string) => {
  const option = {
    headers: {
      Authorization: `Bearer ${API_URL}`,
    },
  };

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/advisers${params}`,
      option
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching advisers:", error);
    throw new Error("Internal Server Error");
  }
};

export const fetchClients = async (params: string) => {
  const option = {
    headers: {
      Authorization: `Bearer ${API_URL}`,
    },
  };

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/clients${params}`,
      option
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw new Error("Internal Server Error");
  }
};
