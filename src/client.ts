import { createClient } from "@sanity/client";
import imageURLBuilder from "@sanity/image-url"; 
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
    projectId: "prjl2ddp",
    dataset: "production",

})

const builder = imageURLBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);