"use server"

import { client } from "@/sanity/lib/client"

async function uploadImageToSanity(imageUrl: string) {
    try{
    const response = await fetch(imageUrl)
    if(!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`)
    const blob = await response.blob()
    const asset = await client.assets.upload('image', blob)
    return asset;
} catch (error){
    console.error("Error uploading images:", error);
    throw error;
}
    

}

export async function fetchData() {
    try{
    const response = await fetch("https://fakestoreapi.com/products")
    if(!response.ok) throw new Error(`Failed to fetch products: ${response.statusText}`)
    const products = await response.json()


    const uploadPromises = products.map(async (product: any) => {

        const imageAsset = await uploadImageToSanity(product.image)

        const sanityProduct = {
            _id: `product-${product.id}`,
            _type: 'product',
            name: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage || 0,
            tags: product.category ? [product.category] : [],
            image: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAsset._id,
                },
            },
            description: product.description,
            rating: product.rating?.rate || 0,
            ratingCount: product.rating?.count || 0,

        }


        await client.createOrReplace(sanityProduct)
    });
    await Promise.all(uploadPromises);
} catch (error) {
    console.error("Error uploading images:", error);
    throw error;


    }
}