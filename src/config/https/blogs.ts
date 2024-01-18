import axios from "axios";

// Fetching data from Strapi API
export async function fetchBlogs(page = 1, pageSize = 4) {
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`,
      option
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchBlog(id: number) {
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs/${id}?populate=*`,
      option
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

// export const getBlog = async (page = 1, pageSize = 4) => {
//   const option = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };

//   try {
//     const response = await axios.get(
//       `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`,
//       option
//     );

//     return response.data; // Assuming you want to return only the data from the response
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     throw new Error("Internal Server Error");
//   }
// };
