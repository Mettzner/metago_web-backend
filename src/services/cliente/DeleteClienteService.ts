import prismaClient from "../../prisma";

interface ClienteRequest{
    ID_CLIENTE: string;
    
}

class DeleteClienteService{
    async execute({ ID_CLIENTE }: ClienteRequest) {
        
        const cliente = await prismaClient.cliente.delete({
            where:{
                ID_CLIENTE: ID_CLIENTE
            }
        })

        return cliente;

    }
}

export { DeleteClienteService }