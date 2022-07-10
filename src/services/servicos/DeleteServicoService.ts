import prismaClient from "../../prisma";

interface ServicoRequest {
    ID_SERVICO: string;

}

class DeleteServicoService {
    async execute({ ID_SERVICO }: ServicoRequest) {

        const servicos = await prismaClient.servicos.delete({
            where: {
                ID_SERVICO: ID_SERVICO
            }
        })

        return servicos;

    }
}

export { DeleteServicoService }