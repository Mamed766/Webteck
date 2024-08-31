import client from "../Sanity/sanity.Client";

export async function fetchPosts() {
  const query = `*[_type == "post"]{
    title,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    category
  }`;

  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
