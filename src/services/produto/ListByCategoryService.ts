// import prismaClient from "../../prisma";

// interface ProductRequest{
//     category_id: string;
// }

// class ListByCategoryService{
//     async execute({ category_id }: ProductRequest){
//         //id-bebidas
//         const findByCategory = await prismaClient.produto.findMany({
//             where:{
//                 category_id: category_id
//             }
//         })

//         return findByCategory;

//     }
// }

// export { ListByCategoryService }