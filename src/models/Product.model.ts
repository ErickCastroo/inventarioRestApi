import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100)  
    })
    declare nombre: string

    @Column({
        type: DataType.DECIMAL(6, 2)
    })
    declare precio: number

    @Column({
        type: DataType.FLOAT
    })
    declare cantidadDisponible: number
}

export default Product
