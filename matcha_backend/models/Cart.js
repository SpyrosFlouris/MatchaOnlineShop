module.exports = (sequelize, DataTypes) => {
	const Cart = sequelize.define("Cart", {
		 name: {
			  type: DataTypes.STRING,
			  allowNull: false,
		 },
		 product: {
			  type: DataTypes.TEXT,
			  allowNull: false,
		 },
		 price: {
			  type: DataTypes.DECIMAL(10, 2),
			  allowNull: false,
		 },
		 imageUrl: {
			  type: DataTypes.BLOB('LONG'),
			  allowNull: true,
		 },
		 category: {
			  type: DataTypes.STRING,
			  allowNull: false,
		 },
	})

	return Cart
}