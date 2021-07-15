import {
    SiteClient
} from "datocms-client";

export default async function comnunidadesAPI (request, response) {
    if (request.method === "POST") {
        const TOKEN = "1304d42fd9586cdb13bb4bceca579b";
        const client = new SiteClient(TOKEN);
    
        const register = await client.items.create({
            itemType: "967059",
            ...request.body
        });
    
        response.json({
            data: {
                register: register
            }
        });

        return;

    }

    response.status(404).json({
        message: "Cannot access GET"
    });

}