import { MongoClient, ServerApiVersion } from "mongodb";
import env from "~/configs/environment";

let foodDeliveryDBInstance = null;

const mongoClientIntance = new MongoClient(env.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }

})

export const CONNECT_DB = async () => {
  // Call to connect to the database
  await mongoClientIntance.connect();
  foodDeliveryDBInstance = mongoClientIntance.db("food-delivery");
}

export const GET_DB = () => {
  if (!foodDeliveryDBInstance) {
    throw new Error("Must connect to the database first!");
  }

  return foodDeliveryDBInstance;
}

export const CLOSE_DB = async () => {
  await mongoClientIntance.close();
}