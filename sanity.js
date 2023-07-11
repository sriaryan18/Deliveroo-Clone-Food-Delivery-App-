import  { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const client=createClient({
    projectId:"1rcok0wz",

    dataset:"production",
    useCdn:true,
    apiVersion:"2023-07-09"
});
const builder=imageUrlBuilder(client);
export const urlFor=(source)=>{
    return builder.image(source)
}
export default client;