import { SiteClient } from 'datocms-client'; // intalar o pacote datocms-client

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '9ae961054baf937cc2243ccd2426a6'; // Token pego no Full-access API token
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "836335", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}