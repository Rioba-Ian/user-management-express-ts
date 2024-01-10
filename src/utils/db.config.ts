import {Sequelize} from "sequelize";
import {zodEnv} from "./envSchema";

console.log(process.env.DATABASE_URL as string);

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
 dialect: "postgres",
});

const dbConnection = async () => {
 try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
 } catch (error) {
  console.error("Unable to connect to the database:", error);
 }
};

export default dbConnection;
