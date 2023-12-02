import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.users.createMany({
    data: [
      {
        name: "leanhkhoa",
        email: "leanhkhoa92.1819@gmail.com",
        pass: "$2y$10$vqpTobzqqULeJXRio.3iGuVZh5JZ8RpVBixnzlacfMYRcbH2aC.Qm",
        role: "ADMIN",
      },
      {
        name: "phanthimyha",
        email: "myhaclassb1@gmail.com",
        pass: "$2y$10$cWOGL3LItrzO8GzKaAaDAe/momQw3Tu/oLJ8.2JqVaikTgu7zxDdu",
        role: "ADMIN",
      },
      {
        name: "khoaanhle",
        email: "leanhkhoa170804@gmail.com",
        pass: "$2y$10$aQef6aDvKMwtTBDDTY.OBOnCb1w1ZUrrzpDK2jbG9bMrsOsnTYA/G",
        role: "USER",
      },
    ],
  });
  const jen = await prisma.categories.createMany({
    data: [{ name: "Sweet Cake" }, { name: "Cheese Cake" }, { name: "Drink" }],
  });
  const bob = await prisma.bakeryProducts.createMany({
    data: [
      {
        name: "Strawberry Cake Roll",
        imageUrl:
          "https://i.pinimg.com/564x/81/e6/00/81e600ba0546ef74f42d4448c567d4a4.jpg",
        description:
          "A Japanese-inspired strawberry patterned roll cake perfect for spring, filled with a fluffy strawberry whipped cream.",
        quantity: 26,
        price: 7.99,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Strawberry Sandwich",
        imageUrl:
          "https://i.pinimg.com/564x/dd/72/b1/dd72b11bf9dbc506b68c76495bdb4a64.jpg",
        description:
          "Hello my foodies, New recipe that I like very much and that I would like to reproduce on Sunday is the strawberry or fruit sandwich. I already wanted to share it as an Instagram story, it has provoked a lot of positive reactions. It is a dessert that you can find a lot on Instagram accounts of Korean pastry with different variations, strawberry, with different fruits or more recently a sandwich with flowers fats with fruits, very original. The sandwich is made of white sandwich loaf filled with whipped cream and fruit. A quick, easy to make and very original recipe. I have to admit the Koreans and the Japanese are incredibly creative and I love it. Today, I'm going to share with you the Minosuke9 Strawberry Sandwich recipe, but I'm going to suggest other variations of the recipe on video. STRAWBERRY SANDWICH RECIPE English French Video Recipe Inspiration nao2748 nao2748 hoshitae_ sa3na7an3as hoshitae_ sa3na7an3as yuni_sweets hoshitae_ I hope you like it. Now it's up to you. Find minosuke9 on Instagram Tag us on instagram amourducake if you made this recipe.",
        quantity: 52,
        price: 12.49,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Super Cute Mini Cakes",
        imageUrl:
          "https://i.pinimg.com/564x/67/64/a2/6764a23712648c4db8370b1c0f18ebee.jpg",
        description:
          "Ideal for you and your sweet Valentine (if you're willing to share, that is).",
        quantity: 40,
        price: 4.49,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Swedish Princess Cake",
        imageUrl:
          "https://i.pinimg.com/564x/ce/46/95/ce469565c9f7efe43031dc39e8295a0c.jpg",
        description:
          "This recipe is an amalgam of research from Daring Bakers, Semi Swede, Martha Stewart, with my own pastry elements. It makes one large 9-inch cake. This is an intermediate baking project, which means you need to know the basics of making a successful sponge cake that has no chemical leavens. This recipe has been edited 2/19/23 for easier assembly. I believe it is now approachable for most home bakers. I've also added a video to the blog post for action assembly of this cake. I think it will be a helpful tool for beginners attempting this confection.",
        quantity: 33,
        price: 14.99,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Pink Velvet Roulade",
        imageUrl:
          "https://i.pinimg.com/564x/c1/e9/80/c1e980fd404970d50027d872419903d6.jpg",
        description: "Lovely Cake Roll!!! Easy to make Video Instructions",
        quantity: 3,
        price: 20.99,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Neapolitan Ice Cream Cupcakes",
        imageUrl:
          "https://i.pinimg.com/564x/a4/3b/d8/a43bd8140c7bda2c489a64824805ff5b.jpg",
        description:
          "Vanilla, strawberry and chocolate flavoured frosting on a vanilla, strawberry and chocolate flavoured cupcake.",
        quantity: 45,
        price: 13.49,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Blueberry Lemon Cake",
        imageUrl:
          "https://i.pinimg.com/564x/27/e1/cc/27e1ccf6afc7a6cf34e63daaf9ec960f.jpg",
        description:
          "Our Blueberry Lemon Lavender Cake is what dessert dreams are made of! But what's the key ingredient? Butter that is 85% butterfat",
        quantity: 10,
        price: 17.09,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Purple Ombre Layer Cake",
        imageUrl:
          "https://i.pinimg.com/564x/7e/38/83/7e3883d23dfd0842e43f8e5a56e76d15.jpg",
        description:
          "Thumbing through my Mother's Recipe Box I discovered this recipe clipped from Southern Living, 1975. Cooking time include time to chill.",
        quantity: 32,
        price: 21.79,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Blueberry Cream Cheese Chocolate Cake",
        imageUrl:
          "https://i.pinimg.com/564x/bf/03/4c/bf034c6227c7359bba1e8c6dba4c332b.jpg",
        description:
          "Soft and delicious blueberry cream cheese chocolate cake with chocolate cake layers and fresh blueberry cream cheese filling!",
        quantity: 65,
        price: 11.59,
        type: "SWEET_CAKE",
        categoryId: 1,
      },
      {
        name: "Blueberry Curd Cake",
        imageUrl:
          "https://i.pinimg.com/564x/5f/c1/49/5fc149ab3f98f1449b26a2fa06647b0d.jpg",
        description:
          "ImageFind images and videos about flowers, party and pink cakes on We Heart It - the app to get lost in what you love.",
        quantity: 20,
        price: 13.39,
        type: "SWEET_CAKE",
        categoryId: 1,
      },

      {
        name: "Homemade Blueberry Sauce",
        imageUrl:
          "https://i.pinimg.com/564x/80/35/60/803560020f0f772bb12862e1eb2f50c0.jpg",
        description:
          "A quick and delicious homemade blueberry sauce that's perfect for topping cheesecakes, pancakes, ice cream and so much more.",
        quantity: 50,
        price: 69.99,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "Stracciatella Maqui Cheesecake",
        imageUrl:
          "https://i.pinimg.com/564x/c3/f3/10/c3f3108c8bc7b420e9cf3467b131e6ae.jpg",
        description:
          "Rich and creamy stracciatella maqui white chocolate cheesecake. Gluten-free, vegan, and requires no baking. A perfect cake for any occasion.",
        quantity: 37,
        price: 84.99,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "Mikado Tart Deluxe",
        imageUrl:
          "https://i.pinimg.com/564x/54/0b/b9/540bb90c2b8b692226dad81dce176ce4.jpg",
        description:
          "I'll get back to you with this super-delicious Mikado tart. After wedding, relocation & Co. It is finally sugar",
        quantity: 74,
        price: 41.99,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "Strawberry Jelly Cheesecake",
        imageUrl:
          "https://i.pinimg.com/564x/1b/1e/3a/1b1e3aba610bc62464d94ca8f1d1b03e.jpg",
        description:
          "Strawberry jelly cheesecake made with a graham cracker crust, no-bake cheesecake, and strawberry slices suspended in cranberry jelly",
        quantity: 20,
        price: 88.49,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "Witte Chocolade Cheesecake",
        imageUrl:
          "https://i.pinimg.com/564x/44/8a/17/448a179b6d41ee5393187430c7ae611d.jpg",
        description:
          "Deze witte chocolade cheesecake met bastogne bodem en frambozen is al jaren een topper hier in huis.",
        quantity: 9,
        price: 54.99,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "No Bake Cheesecake",
        imageUrl:
          "https://i.pinimg.com/564x/19/74/e8/1974e845d1fdcf680c39d32ea5e008db.jpg",
        description:
          "The BEST No Bake Cheesecake recipe! Fluffy, creamy, rich and perfectly melt-in-your-mouth smooth. A must try dessert that's sure to be a crowd pleaser!",
        quantity: 23,
        price: 19.99,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "Blaubeer-Cheesecake",
        imageUrl:
          "https://i.pinimg.com/564x/30/e4/7a/30e47a75f9f6ca3e5d4a280816997130.jpg",
        description:
          "Blaubeer-Cheesecake Rezept ohne Backen | Ein schneller und gelingsicherer Kuchen | no bake blueberry cheesecake cake recipe | © monsieurmuffin.de",
        quantity: 41,
        price: 70.19,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "No-Bake Rainbow Cheesecake",
        imageUrl:
          "https://i.pinimg.com/564x/f1/3f/8a/f13f8a49c88e161f3eabc3839a1c1271.jpg",
        description:
          "No-bake rainbow cheesecake with whipped cream and sprinkles!",
        quantity: 5,
        price: 100.99,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "Torta Oreo: Cheesecake Oreo",
        imageUrl:
          "https://i.pinimg.com/564x/79/87/67/798767b21bc28472643976142f52fddb.jpg",
        description:
          "La Torta Oreo è la golosa Cheesecake oreo americana, fredda e senza cottura, con formaggio fresco, panna e biscotti oreo, con cui è fatta",
        quantity: 29,
        price: 55.09,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },
      {
        name: "Gluten-Free New York Cheesecake",
        imageUrl:
          "https://i.pinimg.com/564x/34/44/76/3444768e817c5133e383f3d82b02cd4c.jpg",
        description:
          "This Gluten-Free, low-fodmap New York Cheesecake is a super creamy, perfectly sweet dessert recipe idea for entertaining at your next dinner party for any season. #cheesecake #dessertrecipe",
        quantity: 87,
        price: 10.09,
        type: "CHEESE_CAKE",
        categoryId: 2,
      },

      {
        name: "Pink Lemonade Cocktail",
        imageUrl:
          "https://i.pinimg.com/564x/05/62/28/056228c1d8549301bdd3ec21d629509e.jpg",
        description:
          "A simple, refreshing, and pretty Pink Lemonade Cocktail. Made with cranberry juice, Malibu, and some fizz to give you a go-to cocktail.",
        quantity: 103,
        price: 3.09,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Sakura Latte",
        imageUrl:
          "https://i.pinimg.com/564x/13/28/8e/13288e1c1dfda9b9434872049470e3b4.jpg",
        description:
          "Sakura latte is a sweet and creamy warm drink that blends milk with cherry blossom powder. The drink recipe is sweetened with honey and topped with fluffy whipped cream. The dreamy pink latte is a romantic spring beverage and will delight your taste buds!",
        quantity: 128,
        price: 5.39,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Lemonade Slushie with Frozen Watermelon",
        imageUrl:
          "https://i.pinimg.com/564x/5f/08/00/5f08006f46ecef33095d028f84cc5e65.jpg",
        description: "Watermeloen-limonade",
        quantity: 97,
        price: 18.99,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Blue Lagoon Mocktail",
        imageUrl:
          "https://i.pinimg.com/236x/84/87/8d/84878da36d27e4c0603ecd48bee6c548.jpg",
        description:
          "This refreshing non alcoholic drink is easy to make for kids and adults to enjoy. Savor this blue lagoon mocktail on hot summer days. You can even make it into a fun slushy!",
        quantity: 54,
        price: 2.99,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Cantaloupe Agua Fresca",
        imageUrl:
          "https://i.pinimg.com/564x/a6/83/47/a68347315e1e13399234c1957982237f.jpg",
        description:
          "30 Splendid Non-Alcoholic Summer Drink Recipes | Chief Health",
        quantity: 157,
        price: 0.99,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Pomegranate Gin and Tonic",
        imageUrl:
          "https://i.pinimg.com/564x/bf/3d/48/bf3d48d029553e4edee2d30588717787.jpg",
        description:
          "This sweet, tart Pomegranate Gin and Tonic is a festive twist on a classic cocktail. Made with gin, tonic water, and pomegranate juice, this simple pomegranate cocktail comes together in just minutes. Perfect for holiday celebrations!",
        quantity: 77,
        price: 4.99,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Kiss Me Quick Cocktail",
        imageUrl:
          "https://i.pinimg.com/564x/8d/a8/c0/8da8c069be47932b73e0d212e7cfb823.jpg",
        description:
          "Delicious and fruity cocktail to enjoy with your Valentine, filled with a fresh raspberry syrup.",
        quantity: 140,
        price: 7.99,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Blue Raspberry Slushie",
        imageUrl:
          "https://i.pinimg.com/564x/71/e9/d5/71e9d582e826b8ab3a2df2e00a396352.jpg",
        description:
          "This blue raspberry slushie drink is a fun blue non alcoholic drink that's perfect for summer!",
        quantity: 100,
        price: 10.09,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Heavenly Lemonade",
        imageUrl:
          "https://i.pinimg.com/564x/3c/91/3d/3c913dda643ec71f080022c38ba40ca5.jpg",
        description:
          "Spruce up your brunch cocktail by swapping out your orange juice with pink lemonade.",
        quantity: 109,
        price: 14.49,
        type: "DRINK",
        categoryId: 3,
      },
      {
        name: "Virgin Strawberry Daiquiri",
        imageUrl:
          "https://i.pinimg.com/564x/31/e6/e6/31e6e62befb47cbdfa286382503bd19a.jpg",
        description:
          "Looking for the best virgin strawberry daiquiri? Here's the answer! This non alcoholic strawberry drink is the ultimate frozen treat to enjoy this summer. It’s easy to make in your blender, and it’s sure to be a favorite treat for kids and teens.",
        quantity: 149,
        price: 6.69,
        type: "DRINK",
        categoryId: 3,
      },
    ],
  });
  console.log({ alice, jen, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
