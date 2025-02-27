-- Insert category data
INSERT INTO
    category (id, name)
VALUES
    (1, 'Desserts'),
    (2, 'Main Courses'),
    (3, 'Appetizers'),
    (4, 'Soups'),
    (5, 'Salads'),
    (6, 'Beverages'),
    (7, 'Snacks'),
    (8, 'Side Dishes'),
    (9, 'Breakfast'),
    (10, 'Pasta'),
    (11, 'Grill'),
    (12, 'Seafood'),
    (13, 'Vegetarian'),
    (14, 'Vegan'),
    (15, 'Healthy'),
    (16, 'Low-Carb'),
    (17, 'Comfort Food'),
    (18, 'Holiday Specials');

-- Insert recipe data with difficulty, time, and instructions
INSERT INTO
    recipe (id, title, difficulty, time, instructions)
VALUES
    (
        1,
        'Chocolate Cake',
        'MEDIUM',
        'LONG',
        'Mix the ingredients, bake at 350°F for 30 minutes.'
    ),
    (
        2,
        'Spaghetti',
        'EASY',
        'MEDIUM',
        'Boil pasta, add sauce, and cook for 10 minutes.'
    ),
    (
        3,
        'Caesar Salad',
        'EASY',
        'SHORT',
        'Toss the salad with dressing and croutons.'
    ),
    (
        4,
        'Minestrone Soup',
        'MEDIUM',
        'MEDIUM',
        'Simmer vegetables and broth for 30 minutes.'
    ),
    (
        5,
        'Iced Tea',
        'EASY',
        'SHORT',
        'Brew tea, add ice, and chill for 1 hour.'
    ),
    (
        6,
        'French Fries',
        'EASY',
        'SHORT',
        'Fry the potatoes until golden and crispy.'
    ),
    (
        7,
        'Grilled Chicken',
        'MEDIUM',
        'MEDIUM',
        'Grill chicken for 20 minutes on each side.'
    ),
    (
        8,
        'Tomato Soup',
        'EASY',
        'SHORT',
        'Simmer tomatoes and blend until smooth.'
    ),
    (
        9,
        'Banana Pancakes',
        'MEDIUM',
        'SHORT',
        'Mix ingredients and cook on a hot griddle.'
    ),
    (
        10,
        'Stir-Fry',
        'MEDIUM',
        'MEDIUM',
        'Stir-fry vegetables and protein in a hot pan.'
    ),
    (
        11,
        'BBQ Ribs',
        'HARD',
        'LONG',
        'Cook ribs in the oven, then grill with BBQ sauce.'
    ),
    (
        12,
        'Shrimp Scampi',
        'MEDIUM',
        'LONG',
        'Cook shrimp in garlic butter sauce for 10 minutes.'
    ),
    (
        13,
        'Vegan Brownies',
        'EASY',
        'MEDIUM',
        'Mix ingredients and bake at 350°F for 25 minutes.'
    ),
    (
        14,
        'Spinach Smoothie',
        'EASY',
        'SHORT',
        'Blend spinach, banana, and almond milk.'
    ),
    (
        15,
        'Lemonade',
        'EASY',
        'SHORT',
        'Mix lemon juice, sugar, and water.'
    ),
    (
        16,
        'Lasagna',
        'HARD',
        'LONG',
        'Layer noodles, sauce, and cheese, bake for 1 hour.'
    ),
    (
        17,
        'Tacos',
        'EASY',
        'MEDIUM',
        'Fill taco shells with meat, lettuce, and cheese.'
    ),
    (
        18,
        'Garlic Bread',
        'EASY',
        'SHORT',
        'Toast bread with garlic butter.'
    ),
    (
        19,
        'Pumpkin Pie',
        'MEDIUM',
        'MEDIUM',
        'Bake pumpkin filling in pie crust for 45 minutes.'
    ),
    (
        20,
        'Mango Smoothie',
        'EASY',
        'SHORT',
        'Blend mango, yogurt, and ice.'
    ),
    (
        21,
        'Cheeseburger',
        'EASY',
        'MEDIUM',
        'Grill beef patties and assemble with buns and cheese.'
    ),
    (
        22,
        'Lobster Bisque',
        'HARD',
        'LONG',
        'Simmer lobster and cream for 1 hour.'
    ),
    (
        23,
        'Avocado Toast',
        'EASY',
        'SHORT',
        'Mash avocado on toast and season.'
    ),
    (
        24,
        'Stuffed Peppers',
        'MEDIUM',
        'MEDIUM',
        'Stuff peppers with rice and ground meat, bake for 30 minutes.'
    ),
    (
        25,
        'Chicken Alfredo',
        'MEDIUM',
        'LONG',
        'Cook pasta, add chicken and Alfredo sauce.'
    ),
    (
        26,
        'Vegetarian Chili',
        'MEDIUM',
        'MEDIUM',
        'Simmer beans and vegetables in a pot for 45 minutes.'
    ),
    (
        27,
        'Berry Parfait',
        'EASY',
        'SHORT',
        'Layer berries and yogurt in a glass.'
    ),
    (
        28,
        'Apple Crumble',
        'MEDIUM',
        'MEDIUM',
        'Bake apples with crumble topping for 40 minutes.'
    ),
    (
        29,
        'Roast Turkey',
        'HARD',
        'LONG',
        'Roast turkey in the oven for 3 hours at 350°F.'
    ),
    (
        30,
        'Seafood Paella',
        'HARD',
        'LONG',
        'Cook seafood with rice and spices for 1 hour.'
    ),
    (
        31,
        'Chocolate Cookies',
        'EASY',
        'SHORT',
        'Mix dough and bake at 350°F for 12 minutes.'
    ),
    (
        32,
        'Vegetable Stir-Fry',
        'EASY',
        'MEDIUM',
        'Stir-fry vegetables in oil for 10 minutes.'
    ),
    (
        33,
        'Chicken Salad',
        'MEDIUM',
        'MEDIUM',
        'Mix cooked chicken with veggies and dressing.'
    ),
    (
        34,
        'Beef Tacos',
        'MEDIUM',
        'SHORT',
        'Cook beef, then stuff tacos with it.'
    ),
    (
        35,
        'Eggplant Parmesan',
        'HARD',
        'LONG',
        'Bread and fry eggplant, then layer with sauce and cheese.'
    ),
    (
        36,
        'Green Smoothie',
        'EASY',
        'SHORT',
        'Blend kale, banana, and apple juice.'
    ),
    (
        37,
        'Grilled Salmon',
        'MEDIUM',
        'MEDIUM',
        'Grill salmon for 10 minutes per side.'
    ),
    (
        38,
        'Homemade Pizza',
        'HARD',
        'LONG',
        'Roll dough, add toppings, and bake at 475°F for 15 minutes.'
    ),
    (
        39,
        'Fruit Salad',
        'EASY',
        'SHORT',
        'Chop fruits and mix together.'
    ),
    (
        40,
        'Pork Schnitzel',
        'HARD',
        'LONG',
        'Bread and fry pork cutlets, serve with lemon.'
    ),
    (
        41,
        'Quiche Lorraine',
        'HARD',
        'LONG',
        'Bake a custard mixture with bacon and cheese in pie crust.'
    ),
    (
        42,
        'Chili Con Carne',
        'MEDIUM',
        'MEDIUM',
        'Simmer beef, beans, and spices for 1 hour.'
    ),
    (
        43,
        'Pulled Pork',
        'HARD',
        'LONG',
        'Slow cook pork shoulder for 8 hours and shred.'
    ),
    (
        44,
        'Crispy Tofu',
        'EASY',
        'MEDIUM',
        'Fry tofu cubes until crispy and serve with sauce.'
    ),
    (
        45,
        'Mushroom Risotto',
        'HARD',
        'LONG',
        'Cook rice with broth, mushrooms, and Parmesan for 45 minutes.'
    ),
    (
        46,
        'Frittata',
        'MEDIUM',
        'MEDIUM',
        'Cook eggs with veggies in a pan until set.'
    ),
    (
        47,
        'Omelette',
        'EASY',
        'SHORT',
        'Cook eggs in a pan and fold with fillings.'
    ),
    (
        48,
        'Cheese Sandwich',
        'EASY',
        'SHORT',
        'Grill bread with cheese inside.'
    );

-- Insert recipe_category data
INSERT INTO
    recipe_category (recipe_id, category_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 5),
    (4, 4),
    (5, 6),
    (6, 7),
    (7, 2),
    (8, 4),
    (9, 9),
    (10, 13),
    (11, 11),
    (12, 12),
    (13, 14),
    (14, 6),
    (15, 6),
    (16, 10),
    (17, 2),
    (18, 8),
    (19, 1),
    (20, 6),
    (21, 2),
    (22, 12),
    (23, 9),
    (24, 13),
    (25, 10),
    (26, 13),
    (27, 1),
    (28, 1),
    (29, 2),
    (30, 12),
    (3, 3),
    (18, 3),
    (8, 13),
    (14, 5),
    (10, 14),
    (31, 1),
    (32, 7),
    (33, 5),
    (34, 7),
    (35, 13),
    (36, 6),
    (37, 12),
    (38, 2),
    (39, 5),
    (40, 11),
    (41, 18),
    (42, 13),
    (43, 2),
    (44, 14),
    (45, 10),
    (46, 5),
    (47, 9),
    (48, 8);
