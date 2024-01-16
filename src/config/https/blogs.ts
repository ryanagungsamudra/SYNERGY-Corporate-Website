// Fetching data from Strapi API
export async function fetchBlogs() {
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=*`,
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
