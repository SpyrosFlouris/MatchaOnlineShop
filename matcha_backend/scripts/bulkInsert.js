const express = require('express');
const { Sequelize } = require('sequelize');
const { database, username, password, host, dialect } = require('../config/config.json');
const ProductsModel = require('../models/Products');
const fs = require('fs').promises

const sequelize = new Sequelize({
  database: "website",
  username: "root",
  password: "MyConnection123",
  host: "localhost",
  dialect: "mysql",
});

// Create an instance of the Products model
const Products = ProductsModel(sequelize, Sequelize);

const bulkInsert = async () => {
  try {
    await sequelize.sync();

    const productsToAdd = [
      { id: 1, name: 'Japanese Green Tea Bags', description: 'Finest tea from Japan', description2: 'Our green tea bags are 100% organic and caffeine-free. Sourced from carefully selected organic tea gardens in Japan, our green tea bags offer a pure experience. It is worth mentioning that green tea is known to help with weight management, skin inflammation, and type 2 diabetes, our tea bags come at a package of 15 pieces', price: 10.99,imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/greentea1.webp", mainCategory: 'tea', category: 'bags', timesPurchased: 0 },
      { id: 2, name: 'Matcha Deluxe Blend', description: 'High quality and delicious matcha mix', description2: 'Matcha is a great caffeine alternative and energy booster! 100% organic, it is known to be 40% stronger in caffeine than regular green tea and a great weight loss ally plus it is vegan. You can drink it adding milk as a latte or but itself! You can buy ours at a package of 50gr', price: 29.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/matchadeluxe.webp", mainCategory: 'blends', category: 'matcha', timesPurchased: 0 },
      { id: 3, name: ' Matcha Starter Kit', description: 'The perfect kit to get you started!', description2: 'If want to learn how to brew matcha perfectly this kit will make your experience 100 times easier! It includes a bamboo whisk, a strainer, a scoop and a traditional tea cup (matcha powder in the picture not included). Search for articles in our website to help you further with recipes and the perfect brew method', price: 39.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/starterkit1.webp", mainCategory: 'accessory', category: 'tools', timesPurchased: 0 },
      { id: 4, name: 'Blue Matcha Blend', description: 'Seems extraordinary and it tastes amazing', description2: 'Blue matcha takes its beautiful blue color from the butterfly pea flower, in comparison with the regural matcha it is caffeine free! It has a more floral taste and it is known to promote hair and skin health. Drink it adding milk as a latte or by itself! You can buy ours at a package of 40 gr', price: 34.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/bluematcha.webp", mainCategory: 'blends', category: 'matcha', timesPurchased: 0 },
      { id: 5, name: 'Vanilla Matcha Blend', description: 'When matcha and vanilla get together, they create the perfect combination', description2: 'When matcha and vanilla get together, they create the perfect combination! Adding any milk of your choice you can make the perfect drink, no need to add extra sweetener as vanilla is very sweet but itself. You can buy it on a package of 30gr', price: 34.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/vanilla.webp", mainCategory: 'blends', category: 'matcha', timesPurchased: 0 },
      { id: 6, name: 'Chocolate Matcha Blend', description: 'Chocolate and matcha, two perfect things together', description2: 'Chocolate and matcha, two perfect things together. Chocolate Matcha is a pure plant product, 100% Japanese green tea that has notes of cocoa, paired beautifully with the earthy flavor of matcha. Just whisk 1/4 teaspoon of matcha with 2 ounces of hot water, combine with your beverage of choice and enjoy hot or iced! Get ours at a package of 30gr', price: 36.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/chocolate.webp", mainCategory: 'blends', category: 'matcha', timesPurchased: 0 },
      { id: 7, name: 'Yuzu-Orange Matcha Blend', description: 'If you like a more fruity flavor, this is for you', description2: 'If you like a more fruity flavor, this is for you. Never heard of Yuzu before? Yuzu is originated from China and it can be similar to mandarins, so our yuzu blend has citrus taste notes with hints of yuzu, orange and grapefruit. With any milk of your choice or just hot water you can enjoy it hot ot iced! You can buy it at a package of 30gr', price: 36.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/yuzu.webp", mainCategory: 'blends', category: 'matcha', timesPurchased: 0 },
      { id: 8, name: 'Mango Iced Tea', description: 'A cold and delicious flavor of mango iced tea', description2: 'A cold and delicious flavor of mango iced tea. Our mango iced tea bags with a hint of lychee can make the perfect iced tea in minutes just pour a glass of water, add a tea bag and it is ready! 100% organic green tea. You can buy them in a package of 20', price: 12.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/icedteamango.webp", mainCategory: 'tea', category: 'iced', timesPurchased: 0 },
      { id: 9, name: 'Green Iced Tea', description: 'Now your favorite green tea, iced', description2: 'The iced green tea bags  with a flavor of lemon and mint can be done in minutes with just a glass of water, they are also 100% organic! You can buy them in a package of 20', price: 12.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/icedteagreen.webp", mainCategory: 'tea', category: 'iced', timesPurchased: 0 },
      { id: 10, name: 'Black Iced Tea', description: 'Iced black tea will keep you energised and refreshed', description2: 'Iced black tea will keep you energised and refreshed thanks to its high consistency in caffeine. They have a flavor of Peach and Passion Fruit which adds an extra spark! Just pour a glass of water and you are ready to go. You can buy them in a package of 20', price: 12.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/blackicedtea.webp", mainCategory: 'tea', category: 'iced', timesPurchased: 0 },
      { id: 11, name: 'Iced Tea Summer Fruits', description: 'A comdination of all your favorite summer fruits in one drink', description2: 'This iced tea bag flavor contains cherries, strawberries, raspberries and other summer fruits! This combination will bring you closer to summer or it will be your perfect summer companion. An 100% organic and vegan experience! Pour a glass of cold water, add a tea bag and enjoy! You can buy them in a package of 20', price: 12.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/icedteasummer.webp", mainCategory: 'tea', category: 'iced', timesPurchased: 0 },
      { id: 12, name: 'Matcha Iced Tea with Lemon', description: 'Matcha now is bottled and iced!', description2: 'Did you know matcha can be drunk iced? It sure can! Our iced matcha with lemon makes an amazing iced drink full of flavor, made with high quality ingredients it is refreshing experience. You can buy it in a bottle of 750ml', price: 9.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/matchaicetea.webp", mainCategory: 'tea', category: 'iced', timesPurchased: 0 },
      { id: 13, name: 'Matcha Tea Bags', description: 'Our matcha tea bags are high quality and 100% organic', description2: 'Our matcha tea bags are high quality and 100% organic, aside from the classic matcha powder it can be enjoyed as a regular tea as well keeping all its qualities. You can buy them in a package of 10', price: 10.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/matchabags.webp", mainCategory: 'tea', category: 'bags', timesPurchased: 0 },
      { id: 14, name: 'Black Tea Bags', description: 'Our black tea bags are full of energy and will give you a caffeine boost', description2: 'Our black tea bags are full of energy and will give you a caffeine boost, black tea is generally stronger in flavour than other teas. Our black tea bags are sold as a package of 20 and are 100% organic', price: 10.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/blacktea.webp", mainCategory: 'tea', category: 'bags', timesPurchased: 0 },
      { id: 15, name: 'Mountain Tea', description: 'We bring a tasty flavor of the herbs from the Greek mountains', description2: 'We bring a tasty flavor of the herbs from the Greek mountains, mountain tea was used by the ancient Greeks as a healing herbal and medicinal drink. In Greece today, mountain tea is consumed most often in the winter, to combat the common cold and flu. You can buy it in a package of 15 also 100% caffeine free', price: 10.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/mountaintea.webp", mainCategory: 'tea', category: 'bags', timesPurchased: 0 },
      { id: 16, name: 'Strawberry Tea Bags', description: 'A strong and sweet strawberry flavor', description2: 'A fruity, sweet and meltingly delicious our strawberry tea bags deliver the best flavor! With or without a sweetener it tastes completely amazing and are 100% organic, high quality packaged in a package of 25', price: 10.99, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/strawberrytea.webp", mainCategory: 'tea', category: 'bags', timesPurchased: 0 },
      { id: 17, name: 'Tea Ceramic Set', description: 'Exquisite and beautiful appearance, it is a good companion for your afternoon tea', description2: 'Exquisite and beautiful appearance, it is a good companion for your afternoon tea. In a set of 6 cups, a tea pot, sugar and milk containers it makes the best teaware to enjoy tea alone or with company!', price: 49.90, imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/teaset.webp", mainCategory: 'accessory', category: 'ceramic', timesPurchased: 0 },
      { id: 18, name: 'Sugar and Milk Set', description: 'Our set is made from ceramic and is microwave and dishwasher safe', description2: 'Our set is made from ceramic and is microwave and dishwasher safe, some say that tea plus milk equals love. Well, we believe that’s true. Moreover, we believe that milk prepared and served in the handmade creamer will be a beautiful addition to this composition. Comes in a set of 2', price: 17.99,imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/sugarset.webp", mainCategory: 'accessory', category: 'ceramic', timesPurchased: 0 },
      { id: 19, name: 'Tea Infuser', description: 'Brew your tea with ease! A charming addition for all tea lovers', description2: 'Brew your tea with ease! A charming addition for all tea lovers, making it easier for when you are brewing loose tea. Sold per piece', price: 8.99,imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/teainfuser.webp", mainCategory: 'accessory', category: 'tools', timesPurchased: 0 },
      { id: 20, name: 'Sakura Pink Cup', description: 'A cute pink cup to add to your collection', description2: 'Sip in style with our Sakura Pink Cup. This charming cup, painted in lovely pink tones, brings the beauty of cherry blossoms to your tea time, sold per piece', price: 14.9,imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/pinkcup.webp", mainCategory: 'accessory', category: 'ceramic', timesPurchased: 0 },
      { id: 21, name: 'Snow White Cup', description: 'A delicate and aesthetic white cup to enjoy tea', description2: 'Embrace the charm of winter with our Snow Cup. This cup is inspired by the beauty of falling snowflakes, creating a cozy and delightful atmosphere for your tea sessions. Sold per piece', price: 14.99,imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/cup.webp", mainCategory: 'accessory', category: 'ceramic', timesPurchased: 0 },
      { id: 22, name: 'Tea Spoon', description: 'An aesthetic collection of spoons', 
      description2: 'Our teaspoons are the perfect accessory for your favourite loose leaf tea. Made from stainless steel and available in a polished black or copper finish. Sold per piece',
      price: '9.99',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/teaspoon.webp", mainCategory: 'accessory', category: 'tools', timesPurchased: 0 },
    { id: 23, name: 'Ceramic Tea Pot', description: 'Made with care our ceramic tea pot makes serving tea easy', 
      description2: 'Made with care our ceramic tea pot makes serving tea easy, this tea pot is perfect for 2 people. The large strainer is easy to clean and allows tea leaves to open widely inside and release their flavour. Sold per piece',
      price: '25.99',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/teaset.webp", mainCategory: 'accessory', category: 'ceramic', timesPurchased: 0 },
    { id: 24, name: 'Loose leaf Chai', description: 'Perfect for your chai lattes', 
      description2: 'Our loose tea is hand blended with organic black tea and is full of aroma and taste from carefully balanced whole seeds and spices. Delicious as a chai latte which is traditionally drunk sweet, or simply add milk and sugar to taste. Sold per 90gr',
      price: '9.50',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/chai.webp", mainCategory: 'blends', category: 'loose', timesPurchased: 0 },
    { id: 25, name: 'Loose leaf Chamomile', description: 'For relaxation and calmness', 
      description2: 'Sweet, floral & honeyed. This medicinal herb is popular due to its calming, muscle relaxing and sleep inducing properties. It is caffeine free and has an intense floral aroma. Sold per 90gr',
      price: '9.50',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/chamomile.webp", mainCategory: 'blends', category: 'loose', timesPurchased: 0 },
    { id: 27, name: 'Bamboo Matcha Whisk', description: 'Hand made Bamboo whisk from a Japanese studio', 
      description2: 'We recommend this as a great option for those who make matcha 3-5 times a week. Hand made Bamboo whisk from a Japanese studio and bamboo sourced from China. Sold per piece',
      price: '11.99',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/whisk.webp", mainCategory: 'accessory', category: 'tools', timesPurchased: 0 },
    { id: 28, name: 'Loose leaf Earl Grey', description: 'Good for digestion and alleviate symptoms of indigestion', 
      description2: 'Our Blue Earl Grey tea is a full bodied, black tea with an aroma and taste of citrus bergamot, enhanced with blue cornflowers. Delicious on its own, or as a London Fog latte with vanilla and frothed milk. Sold per 90gr',
      price: '9.50',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/earlygrey.webp", mainCategory: 'blends', category: 'loose', timesPurchased: 0 },
    { id: 29, name: 'Loose leaf Chocolate Chai', description: 'On this unique brew chocolate and chai collide', 
      description2: 'Brew up a delicious treat of organic, black tea and Peruvian, cacao, hand blended with aromatic, whole chai spices. Try on its own, with your favourite milk or as a latte with frothed milk. Sold per 90gr',
      price: '9.50',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/chocolatechai.webp", mainCategory: 'blends', category: 'loose', timesPurchased: 0 },
    { id: 30, name: 'Loose leaf Big Apple', description: 'A brew of great immune system boosting properties',
      description2: 'A combination of crisp apple, tart organic hibiscus, sweet cinnamon and star anise. A great immune boosting blend, with a bold aroma and taste. Delicious as a hot brew, sweetened to your preference with agave or brown sugar. Sold per 90gr',
      price: '9.50',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/bigapple.webp", mainCategory: 'blends', category: 'loose', timesPurchased: 0 },
    { id: 31, name: 'Tea Strainer', description: 'This piece is thoughtfully designed to be both elegant and maneuverable', 
      description2: 'This piece is thoughtfully designed to be both elegant and maneuverable something beautifully useful. We find this to be a wonderful tool for making tea in the absence of a traditional tea. Sold per piece',
      price: '19.90',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/strainer.webp", mainCategory: 'accessory', category: 'tools', timesPurchased: 0 },
    { id: 32, name: 'Wooden Tea Storage', description: 'Eco-friendly storage space for your tea bags or loose tea', 
      description2: 'Eco-friendly storage space for your tea bags or loose tea, in this small storage minimal processing of the wood allows for greater expression of the woods natural finish. The lid seals tightly allowing for tea storage that minimizes fragrance and aroma. Sold per piece',
      price: '11.90',imageUrl: "/Users/spyro/Desktop/Files/E-commerseSite/MatchaShop/matcha_frontend/src/images/storage.webp", mainCategory: 'accessory', category: 'tools', timesPurchased: 0 }
    ];

    for (const product of productsToAdd) {
      const existingProduct = await Products.findOne({ where: { name: product.id } })

      if (!existingProduct) {
        const imageData = await fs.readFile(product.imageUrl, 'binary')

        // Product does not exist, insert it
        await Products.create({ ...product, imageUrl: Buffer.from(imageData, 'binary') });
      } else {
        console.log(`Product "${product.name}" already exists, skipping insertion.`);
      }
    }

    console.log('Bulk insertion completed');
  } catch (error) {
    console.log('Error during bulk insertion', error);
    process.exit(1);
  }
};

module.exports = bulkInsert
