module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
        id:{
            primaryKey: true,
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.BLOB('LONG'),
            allowNull: true,
        },
        mainCategory: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timesPurchased: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Products
}