import prismaClient from "../../prisma";

interface UserRequest {
    ID_USUARIO: string;

}

class DeleteUserService {
    async execute({ ID_USUARIO }: UserRequest) {

        const usuario = await prismaClient.usuarios.delete({
            where: {
                ID_USUARIO: ID_USUARIO
            }
        })

        return usuario;

    }
}

export { DeleteUserService }