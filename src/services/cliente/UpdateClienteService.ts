import prismaClient from "../../prisma";

interface ClienteRequest {
    NOME: string,
    CNPJ: string,
    EMAIL: string,
    TELEFONE: string,
    ENDERECO: string,
    CIDADE: string,
    BAIRRO: string,
    NUMERO: string,
    UF: string,
    PAIS: string,
    COMPLEMENTO: string,
    CEP: string,
    ID_CLIENTE: string
}

class UpdateClienteService {
    async execute({ NOME, CNPJ, EMAIL, TELEFONE, ENDERECO, CIDADE, BAIRRO, NUMERO,
        UF, PAIS, COMPLEMENTO, CEP, ID_CLIENTE }: ClienteRequest) {

        const cliente = await prismaClient.cliente.update({
            where: {
                ID_CLIENTE: ID_CLIENTE
            },
            data: {
                NOME: NOME,
                CNPJ: CNPJ,
                TELEFONE: TELEFONE,
                ENDERECO: ENDERECO,
                EMAIL: EMAIL,
                BAIRRO: BAIRRO,
                NUMERO: NUMERO,
                UF: UF,
                PAIS: PAIS,
                COMPLEMENTO: COMPLEMENTO,
                CEP: CEP,
            }
        })

        return cliente;

    }
}

export { UpdateClienteService }