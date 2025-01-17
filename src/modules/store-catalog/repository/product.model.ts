import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { all } from "superheroes";

@Table({
  tableName: "products",
  timestamps: false,
})
export default class ProductModel extends Model {
  @PrimaryKey
  @Column({allowNull: false})
  id: string;

  @Column({allowNull: false})
  name: string;

  @Column({allowNull: false})
  description: string;

  @Column({allowNull: false})
  salesPrice: number;
}
