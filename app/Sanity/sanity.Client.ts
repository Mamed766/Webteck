import { createClient } from "@sanity/client";

console.log("Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export default client;
