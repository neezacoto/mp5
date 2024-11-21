"use server"
import getCollection, { POSTS_COLLECTION } from "../db";

export default async function createLink(
    alias: string,
    url: string,
){
    const link = {
        alias: alias,
        url: url,
    };

    const postsCollection = await getCollection(POSTS_COLLECTION);
    const res = await postsCollection.insertOne(link);

    if(!res.acknowledged) {
        return null;
    }
    return { alias, url, id: res.insertedId.toHexString() };
}