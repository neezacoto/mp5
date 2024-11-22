import { MongoClient, Db, Collection } from "mongodb";

const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI as string;
if (!MONGO_URI) {
    console.log("No enviroment brother sadge face")
    throw new Error("MONGO_URI environment variable is undefined")
}

const DB_NAME = "Cambel-Soup2";
export const POSTS_COLLECTION = "epic-collection";

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

export default async function getCollection(
    collectionName: string,
): Promise<Collection> {
    if (!db) {
        db = await connect();
    }

    return db.collection(collectionName);
}