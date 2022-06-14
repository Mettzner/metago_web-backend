import prismaClient from "../../prisma";

interface EntidadeRequest{
    NOME: string,
    CNPJ: string,
    EMAIL: string,
    TELEFONE: string,
    ENDERECO: string,
    CIDADE: string,
    BAIRRO: string,
    NUMERO: string,
    UF: string,
    FUNCAO: string,
    PAIS: string,
    COMPLEMENTO: string,
    CEP: string,
    TIPO: string,
    STATUS: string,
}

class CreateEntidadeService{
    async execute({ NOME, CNPJ, EMAIL, TELEFONE, ENDERECO, CIDADE, BAIRRO, NUMERO, 
                    UF, FUNCAO, PAIS, COMPLEMENTO, CEP, TIPO, STATUS }: EntidadeRequest){
        
        if(NOME === ''){
            throw new Error('Nome inválido')
        }

        const entidade = await prismaClient.entidade.create({
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
            FUNCAO: FUNCAO,
            PAIS: PAIS,
            COMPLEMENTO: COMPLEMENTO,
            CEP: CEP,
            TIPO: TIPO,
            STATUS: STATUS,          
                    },
            select:{
                CODCLI: true,
                NOME:true,
            }
        })

        return entidade

    }
}

export { CreateEntidadeService }