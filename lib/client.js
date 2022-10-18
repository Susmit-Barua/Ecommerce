import sanityclient from "@sanity/client";
import imageurlbuilder from "@sanity/image-url";

export const client = sanityclient({
  projectId: "211ye2cw",
  dataset: "production",
  apiVersion: "2022-10-17",
  useCdn: "true",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageurlbuilder(client);
export const urlFor = (source) => builder.image(source);
