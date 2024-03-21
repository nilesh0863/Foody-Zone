"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
const PORT = process.env.PORT || 9000
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
          {
            name: "Baingan Bharta",
            image: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
            idMeal: "52807",
            type: "Dinner",
            text: "Baingan Bharta is a North Indian dish made from roasted eggplants cooked with onions, tomatoes, and spices.",
            price: 10 // Assuming Baingan Bharta costs $10
          },
          {
            name: "Bread Omelette",
            image: "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
            idMeal: "53076",
            type: "Breakfast",
            text: "Bread Omelette is a popular Indian street food made by stuffing omelette between slices of bread.",
            price: 5 // Assuming Bread Omelette costs $5
          },
          {
            name: "Chicken Handi",
            image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
            idMeal: "52795",
            type: "Dinner",
            text: "Chicken Handi is a flavorful chicken curry cooked in a thick gravy with onions, tomatoes, and spices.",
            price: 15 // Assuming Chicken Handi costs $15
          },
          {
            name: "Dal Fry",
            image: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
            idMeal: "52785",
            type: "Lunch",
            text: "Dal Fry is a popular Indian lentil dish made from cooked lentils tempered with spices and herbs.",
            price: 8 // Assuming Dal Fry costs $8
          },
          {
            name: "Kidney Bean Curry",
            image: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
            idMeal: "52868",
            type: "Dinner",
            text: "Kidney Bean Curry is a spicy and flavorful Indian curry made from kidney beans cooked with onions, tomatoes, and spices.",
            price: 12 // Assuming Kidney Bean Curry costs $12
          },
          {
            name: "Lamb Biryani",
            image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
            idMeal: "52805",
            type: "Lunch",
            text: "Lamb Biryani is a classic Indian rice dish made with basmati rice, tender lamb, and aromatic spices.",
            price: 18 // Assuming Lamb Biryani costs $18
          },
          {
            name: "Lamb Rogan Josh",
            image: "https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg",
            idMeal: "52808",
            type: "Dinner",
            text: "Lamb Rogan Josh is a rich and aromatic Kashmiri curry made with tender pieces of lamb cooked in a tomato-based gravy with yogurt and spices.",
            price: 20 // Assuming Lamb Rogan Josh costs $20
          },
          {
            name: "Matar Paneer",
            image: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
            idMeal: "52865",
            type: "Dinner",
            text: "Matar Paneer is a popular North Indian dish made from paneer (Indian cottage cheese) and green peas cooked in a rich and creamy tomato-based gravy.",
            price: 14 // Assuming Matar Paneer costs $14
          },
          {
            name: "Nutty Chicken Curry",
            image: "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg",
            idMeal: "52851",
            type: "Lunch",
            text: "Nutty Chicken Curry is a delicious Indian curry made with tender chicken pieces cooked in a creamy and nutty gravy flavored with spices.",
            price: 16 // Assuming Nutty Chicken Curry costs $16
          },
          {
            name: "Recheado Masala Fish",
            image: "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
            idMeal: "52809",
            type: "Dinner",
            text: "Recheado Masala Fish is a Goan delicacy made with fish fillets marinated in a spicy and tangy Recheado masala paste and then pan-fried until crispy and golden.",
            price: 22 // Assuming Recheado Masala Fish costs $22
          },
          {
            name: "Smoked Haddock Kedgeree",
            image: "https://www.themealdb.com/images/media/meals/1550441275.jpg",
            idMeal: "52964",
            type: "Breakfast",
            text: "Smoked Haddock Kedgeree is a British-Indian dish made with smoked haddock, rice, eggs, and spices, cooked together to create a flavorful and comforting breakfast.",
            price: 9 // Assuming Smoked Haddock Kedgeree costs $9
          },
          {
            name: "Tandoori Chicken",
            image: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
            idMeal: "52806",
            type: "Dinner",
            text: "Tandoori Chicken is a classic Indian dish made by marinating chicken in a mixture of yogurt and spices and then grilling or baking until tender and charred.",
            price: 14 // Assuming Tandoori Chicken costs $14
          },//kjlkjlkjlk
            {
              name: "Cheeseburger",
              image: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
              idMeal: "52837",
              type: "Lunch",
              text: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty, but the burger can include variations in structure, ingredients, and composition.",
              price: 10 // Assuming Cheeseburger costs $10
            },
            {
              name: "Pizza Margherita",
              image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
              idMeal: "52934",
              type: "Dinner",
              text: "Pizza Margherita is a classic Italian pizza topped with tomato sauce, mozzarella cheese, fresh basil leaves, and a drizzle of olive oil.",
              price: 12 // Assuming Pizza Margherita costs $12
            },
            {
              name: "Lasagna Sandwiches",
              image: "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
              idMeal: "52823",
              type: "Lunch",
              text: "A Lasagna sandwich is a type of sandwich made with cooked chicken or turkey, bacon, lettuce, tomato, and mayonnaise, layered between three slices of toasted bread.",
              price: 10 // Assuming Club Sandwich costs $10
            },
            {
                name: "Chick-Fil-A Sandwich",
                image: "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
                idMeal: "52823",
                type: "Lunch",
                text: "A Chick-Fil-A Sandwich is a type of sandwich made with cooked chicken or turkey, bacon, lettuce, tomato, and mayonnaise, layered between three slices of toasted bread.",
                price: 12 // Assuming Club Sandwich costs $10
              },
              {
                name: "Grilled Mac and Cheese Sandwich",
                image: "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
                idMeal: "52823",
                type: "Lunch",
                text: "A club sandwich is a type of sandwich made with cooked chicken or turkey, bacon, lettuce, tomato, and mayonnaise, layered between three slices of toasted bread.",
                price: 15 // Assuming Club Sandwich costs $10
              }
          
          
    ];
    res.json(foodData);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map