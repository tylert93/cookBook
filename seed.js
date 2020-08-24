
import {Recipe} from './models/recipe';

const data = [
    {
        title:"Spiced carrot & lentil soup",
        image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1074500_11-ee0d41a.jpg?quality=90&webp=true",
        category:"starter",
        description:"A delicious, spicy blend, packed full of iron and low fat to boot. It's ready in under half an hour or can be made in a slow cooker.",
        prepTime:"10 minutes",
        cookTime:"15 minutes",
        serves:4,
        ingredients:"<li>2 tsp cumin seeds</li> <li>pinch chilli flakes</li> <li>2 tbsp olive oil</li> <li>600g carrots, washed and coarsely grated (no need to peel)</li> <li>140g split red lentils</li> <li>1l hot vegetable stock (from a cube is fine)</li> <li>125ml milk</li> <li>plain yogurt and naan bread, to serve</li>",
        method:"<p>Heat a large saucepan and dry-fry 2 tsp cumin seeds and a pinch of chilli flakes for 1 min, or until they start to jump around the pan and release their aromas.</p> <p>Scoop out about half with a spoon and set aside. Add 2 tbsp olive oil, 600g coarsely grated carrots, 140g split red lentils, 1l hot vegetable stock and 125ml milk to the pan and bring to the boil. </p> <p>Simmer for 15 mins until the lentils have swollen and softened.</p> <p>Whizz the soup with a stick blender or in a food processor until smooth (or leave it chunky if you prefer).</p> <p>Season to taste and finish with a dollop of plain yogurt and a sprinkling of the reserved toasted spices. Serve with warmed naan breads.</p>"
    },
    {
        title:"Mini salt beef bagels",
        image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mini-salt-beef-bagels-0a7380d.jpg?quality=90&webp=true",
        category:"starter",
        description:"These tangy, delicate little bites make a great addition to finger sandwiches for a sophisticated afternoon tea",
        prepTime:"10 minutes",
        cookTime:"No cook",
        serves:6,
        ingredients:"<li>4 radishes, thinly sliced</li> <li>2 tbsp white wine vinegar</li> <li>1 tsp golden caster sugar</li> <li>3 mini bagels, split in half</li> <li>100g crème fraîche</li> <li>1 tbsp wholegrain mustard</li> <li>6 slices salt beef, pastrami or roast beef</li> <li>handful watercress</li>",
        method:"<p>Put the radishes, vinegar, sugar and a good pinch of salt in a bowl and leave to pickle for 30 mins, or up to 24 hrs.</p> <p>When you’re ready to serve, toast the bagels while you mix together the crème fraîche and mustard. To serve, spread the bagels with the mustardy crème fraîche, top each half with a ruffled slice of beef, a few pickled radishes and a few watercress sprigs. Finish with a grind of black pepper.</p>"
    },
    {
        title:"Lentil & tomato salad",
        image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1308566_2-b1954cf.jpg?quality=90&webp=true",
        category:"starter",
        description:"Lentils are a substantial and healthy base to this fresh salad with onion, mango chutney, coriander, greens and tomatoes.",
        prepTime:"5 minutes",
        cookTime:"20 minutes",
        serves:4,
        ingredients:"<li>250g dried Puy or green lentil, rinsed</li> <li>juice ½ lime and juice ½ lemon</li> <li>1 tbsp white wine or cider vinegar</li> <li>1 red onion, thinly sliced into rings</li> <li>2 tbsp extra-virgin olive oil</li> <li>1 tsp ground cumin</li> <li>1 small garlic clove, crushed</li> <li>2 tbsp mango chutney</li> <li>handful coriander, roughly chopped</li> <li>250g cherry vine tomato, halved</li> <li>85g baby spinach, washed and thoroughly dried</li>",
        method:"<p>Boil the lentils following pack instructions, drain, rinse well, then drain thoroughly.</p> <p>Meanwhile, mix the citrus juices, vinegar and a pinch of salt in a salad bowl, then toss in the onion rings – after a few mins they will soften and turn pink. Whisk together the oil, cumin, garlic and chutney, then toss into the onions with the cooled lentils, coriander, tomatoes, spinach and plenty of seasoning.</p>"
    },
    {
        title:"Singapore noodles with prawns",
        image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/singapore-noodles-09dd968.jpg?quality=90&webp=true",
        category:"main",
        description:"This low-fat, low-calorie version of your favourite stir-fried takeaway will be ready in 20 minutes and is packed with prawns and plenty of flavour.",
        prepTime:"10 minutes",
        cookTime:"10 minutes",
        serves:2,
        ingredients:"<li>2 nests thin vermicelli rice noodles</li> <li>1 tbsp light soy sauce</li> <li>1 tbsp oyster sauce</li> <li>2 tsp mild curry powder</li> <li>1 tbsp sesame oil</li> <li>1 garlic clove, chopped</li> <li>1 red chilli, thinly sliced (deseeded if you don't like it too hot)</li> <li>thumb-sized piece ginger, grated</li> <li>1 medium onion, sliced</li> <li>1 red pepper or yellow pepper, cut into thin batons</li> <li>4 spring onions, cut in half lengthways then into batons</li> <li>8 raw king prawns</li> <li>1 large egg, beaten</li> <li>coriander leaves, to serve</li>",
        method:"<p>Soak the rice noodles in warm water for 5 mins until softened but still al dente. Drain and set aside.</p> <p>In a small bowl, mix together the soy, oyster sauce and curry powder.</p> <p>In a large wok, add half the oil and fry the garlic, chilli and ginger until golden, about 2 mins. Add the remaining oil, onion, pepper, spring onions, prawns and noodles and stir-fry for a few mins. Push everything to one side, add the egg and scramble. Add the soy sauce mixture, toss again for a few more mins, then remove from the heat. Sprinkle over the coriander leaves before serving.</p>"
    },
    {
        title:"Chicken & bean enchiladas",
        image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chickenbean-enchiladas-1044331.jpg?quality=90&webp=true",
        category:"main",
        description:"A family dinner that delivers four of your 5-a-day - tender chicken, red pepper and black beans, wrapped in tortilla, baked in the oven with passata and cheese.",
        prepTime:"10 minutes",
        cookTime:"55 minutes",
        serves:4,
        ingredients:"<li>1 tbsp rapeseed oil</li> <li>2 red onion, sliced</li> <li>2 red peppers, deseeded and sliced</li> <li>2 garlic cloves, crushed</li> <li>2 tsp chipotle paste (add extra if you prefer more heat)</li> <li>2 skinless chicken breasts, cut into thin strips</li> <li>400g can black beans or kidney beans</li> <li>small bunch coriander, chopped</li> <li>500ml passata</li> <li>1 tsp ketchup or sugar</li> <li>6 medium tortillas</li> <li>50g mature cheddar, grated</li> <li>green salad, to serve</li>",
        method:"<p>Heat oven to 200C/180C fan/gas 6. Heat the oil in a large frying pan and add the onions, peppers and half the garlic. Cook for 15 mins, stirring now and then until the veg has softened. Stir in the chipotle paste, then fry for 1 min more. Add the chicken strips, turning them over in the mixture so they cook through, about 5-10 mins.</p> <p>Stir in the beans, coriander and 150ml of the passata, then take the pan off the heat. Mix the rest of the passata with the remaining crushed garlic and the ketchup.</p> <p>Divide the mixture between the tortillas, then fold the sides in and roll them up. Pour half the passata sauce into a 22cm square baking dish, then place the enchiladas on top, side by side. Dot over the remaining sauce and sprinkle over the grated cheese, then bake for 25-30 mins until golden brown.</p>"
    },
    {
        title:"Creamy mushroom pasta",
        image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/creamy_mushroom_pasta-fc7ab67.jpg?quality=90&webp=true",
        category:"main",
        description:"Make this creamy mushroom pasta dish on days when you need a big bowl of comfort. Cream, parmesan, white wine, lemon zest and parsley make this a rich and flavourful dinner.",
        prepTime:"15 minutes",
        cookTime:"25 minutes",
        serves:4,
        ingredients:"<li>2 tbsp olive oil</li> <li>1 tbsp butter</li> <li>1 onion, finely chopped</li> <li>250g button chestnut mushroom, sliced</li> <li>1 garlic clove, finely grated</li> <li>100ml dry white wine</li> <li>200ml double cream</li> <li>1 lemon, zest only</li> <li>200g parmesan (or vegetarian alternative), grated, plus extra to serve</li> <li>300g tagliatelle or linguini</li> <li>½ small bunch parsley, finely chopped</li>",
        method:"<p>Heat the oil and butter in a medium saucepan. Fry the onion over a low heat for 10 mins or until softened and translucent.</p> <p>Add the mushrooms and cook for 10 mins over a medium heat. Add the garlic and cook for 2 mins. Add the wine and bring to a simmer, reduce the liquid by half.</p> <p>Add the double cream and bring to a simmer, then add the lemon zest and parmesan. Season with salt and plenty of black pepper.</p> <p>Meanwhile, cook the pasta following pack instructions. Reserve 100ml of the pasta water. Toss the pasta in the pan with the creamy sauce and enough of the reserved water to loosen. Stir through the parsley, divide into bowls and top with extra cheese, if you like.</p>"
    }
];

function seedDB(){
    Recipe.deleteMany({}, (err) => {
    //     if(err){
    //         console.log(err);
    //     } else {
    //         Recipe.create(data, (err, createdRecipe) => {
    //             if(err){
    //                 console.log(err);
    //             } else {
    //                 console.log(createdRecipe);
    //             }
    //         });
    //     }
    })
}

module.exports = seedDB;