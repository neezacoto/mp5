"use server"
import getCollection, { POSTS_COLLECTION } from "../db";

export default async function getLink(alias: string) {
    const postsCollection = await getCollection(POSTS_COLLECTION);
    const link = await postsCollection.findOne({ alias });

    if (!link) {
        return null;
    }

    return link.url;
}