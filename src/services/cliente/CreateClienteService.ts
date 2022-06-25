import prismaClient from "../../prisma";

interface ClienteRequest{
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
}

class CreateClienteService{
    async execute({ NOME, CNPJ, EMAIL, TELEFONE, ENDERECO, CIDADE, BAIRRO, NUMERO, 
                    UF, PAIS, COMPLEMENTO, CEP }: ClienteRequest){
        
        if(NOME === ''){
            throw new Error('Nome inválido')
        }

        const cliente = await prismaClient.cliente.create({
            data: {
            NOME: NOME,
            CNPJ: CNPJ,
            EMAIL: EMAIL,
            TELEFONE:TELEFONE,
            ENDERECO:ENDERECO,
            CIDADE:CIDADE,
            BAIRRO: BAIRRO,
            NUMERO: NUMERO,
            UF: UF,
            PAIS: PAIS,
            COMPLEMENTO: COMPLEMENTO,
            CEP: CEP,        
                    },
            select:{
                CODCLI: true,
                NOME:true,
            }
        })

        return cliente

    }
}

export { CreateClienteService }