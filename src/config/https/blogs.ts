import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// Fetching data from Strapi API
export async function fetchBlogsServer(params: string) {
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs${params}`,
      option
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

// export async function fetchBlog(id: number) {
//   const option = {
//     headers: {
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
//     },
//   };

//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs/${id}?populate=*`,
//       option
//     );
//     const response = await res.json();
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

export const fetchBlogs = async (params: string) => {
  const option = {
    headers: {
      Authorization: `Bearer ${API_URL}`,
    },
  };

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs${params}`,
      option
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Internal Server Error");
  }
};
