import {sequelize} from "../utils/db.config";

import {DataTypes, Model} from "sequelize";

class User extends Model {
 public id!: number;
 public name!: string;
 public email!: string;
 public password!: string;
 public role!: "admin" | "user";
 public readonly createdAt!: Date;
 public readonly updatedAt!: Date;
}

User.init(
 {
  id: {
   type: DataTypes.INTEGER.UNSIGNED,
   autoIncrement: true,
   primaryKey: true,
  },
  name: {
   type: new DataTypes.STRING(128),
   allowNull: false,
  },
  email: {
   type: new DataTypes.STRING(128),
   allowNull: false,
  },
  roleId: {
   type: DataTypes.ENUM("admin", "user"),
   allowNull: false,
  },
  password: {
   type: new DataTypes.STRING(128),
   allowNull: false,
  },
 },
 {
  tableName: "users",
  sequelize,
 }
);

export {User};
