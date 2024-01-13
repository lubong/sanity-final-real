import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "prjl2ddp",
    dataset: "production",

})