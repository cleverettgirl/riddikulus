const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234', isGuest: false, isAdmin: true, status: 'active'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', isGuest: false, status: 'active'},
  {name: 'Beyonce', email: 'bey@test.com', password: '1234', isGuest: false, status: 'active'},
  {name: 'Albert', email: 'al@test.com', password: '1234', isGuest: true}
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  { name: 'Thunderbird',
    description: 'Flying beast that can sense danger, and create storms as it flies. Its tail feathers were used by Shikoba Wolfe to create powerful wands, particularly good for Transfiguration.',
    colors: ['gray', 'white', 'black', 'red'],
    size: 'L',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/6F2Hrc4vgASui8mcQMYKC2/88edf4f0d933a7cea6e36b9b0b66613d/Thunderbird_Fantastic_Beasts_CC_Trailer_WM.JPG?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 20,
    magicalAbilities: ['weather manipulation', 'fear sensing', 'flying'],
    lifespan: 60,
    price: 2000,
    breed_id:1
  },
  { name: 'Bowtruckle',
    description: 'A small twig-like creature that guards wand-wood trees.',
    colors: ['green', 'brown'],
    size: 'XS',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/CHqGFAIkwK2y2meEMgQAY/9562ab7cb3f75af827bd4c3ffa1c2eea/FTB203_FANTASTIC_BEASTS_AND_WHERE_TO_FIND_THEM_A_NEW_HERO_FEATURETTE_2255.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 100,
    magicalAbilities: ['natural camouflage'],
    lifespan: 5,
    price: 100,
    breed_id: 3
  },
  { name: 'Hippogriff',
    description: 'Half horse, half eagle creatures, immensely proud and extremely dangerous.',
    colors: ['brown', 'white', 'black', 'silver'],
    size: 'L',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/4QbMOZOaww8YAMWaoOuAys/d3368834aa24b460d375f10774c55fea/Buckbeak_WB_F3_ConceptOfHarryRidingFlyingBuckbeak_Illust_100615_Land.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 50,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 500,
    breed_id: 4
  },
  { name: 'Niffler',
    description: 'Long-snouted, burrowing creatures native to Britain with a penchant for anything shiny.',
    colors: ['brown', 'white', 'black'],
    size: 'S',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/3x8xkyxFqU0w6WaMAuUmsK/69b6776507fba83b3f90a4c59475440c/FB-TRL2-niffler_alt.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 100,
    magicalAbilities: ['flying'],
    lifespan: 10,
    price: 150,
    breed_id: 5
  },
  { name: 'Nundu',
    description: 'Giant mammal native to East Africa, most known for its toxic breath. Considered by some to be th emost dangerous creature alive.',
    colors: ['brown', 'white', 'black'],
    size: 'L',
    pictureURL: 'https://cdnb.artstation.com/p/assets/images/images/004/163/293/large/sam-rowan-boswell-nundu-tail-v001-006-sr.jpg?1480959526',
    inventory: 10,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 10000,
    breed_id: 5
  },
  { name: 'Romanian Longhorn',
    description: 'Dragon native to Romania. The Longhorn prefers to gore its prey with its horns before roasting it. The horns of the Longhorn, when powdered, are highly prized as a potion ingredient, and is a Class B Tradeable Material.',
    colors: ['brown', 'green', 'black'],
    size: 'M',
    pictureURL: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-08/14/12/enhanced/webdr04/enhanced-30629-1408032158-13.png',
    inventory: 5,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 4000,
    breed_id: 2
  },
  { name: 'Norwegian Ridgeback',
    description: 'The Norwegian Ridgeback is a dragon native to Norway, and its typical habitat is the Northern mountains.It resembles the Hungarian Horntail, except for the black ridges on its back, the browner texture in its scales, and its less hostile attitude. It has venomous fangs, and its food of choice is large mammals, including water mammals, which is unusual for a dragon. Its eggs are black, and young Ridgebacks develop the ability to shoot flame earlier than any other breeds (around one to three months). Female Ridgebacks are generally more ferocious than the males.',
    colors: ['brown', 'green', 'black'],
    size: 'L',
    pictureURL: 'https://farm6.staticflickr.com/5531/12015408204_9432c65c0a_b.jpg',
    inventory: 1,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 70,
    price: 6000,
    breed_id: 2
  },
  { name: 'Hungarian Horntail',
    description: "It has black scales, and is lizard-like in appearance. It also has yellow eyes, with vertical pupils like a cat's, bronze horns and similarly coloured spikes that protrude from its long tail which it will gladly deploy in combat. The dragon's roar is a yowling, screeching scream, and its flame can reach to about fifty feet. While having a very far reaching flame the Horntail's breath can reach extremely high temperatures as it made a stone turn red hot in seconds. Its eggs are cement-coloured and particularly hard-shelled. The Horntail's foods of choice include cattle, sheep, goats, and whenever possible, humans.",
    colors: ['brown', 'green', 'black'],
    size: 'XL',
    pictureURL: 'http://vignette1.wikia.nocookie.net/harrypotter/images/0/08/Dragon_WB_F4_HungarianHorntail_Illust_100615_Land.jpg/revision/latest?cb=20161124005253',
    inventory: 1,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 70,
    price: 6000,
    breed_id: 2
  },
   { name: 'Erumpent',
    description: "Rhinoceros-like in appearance, the Erumpent is a dangerous beast whose horn has explosive properties.",
    colors: ['brown', 'green', 'black'],
    size: 'XL',
    pictureURL: 'http://cdn2.thr.com/sites/default/files/2016/11/fb-vfx-fs-01404-h_2016.jpg',
    inventory: 1,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 70,
    price: 6000,
    breed_id: 6
  },
   { name: 'Graphorn',
    description: "A horned beast with a humped back, sometimes ridden by Mountain trolls, much to the Graphorns' displeasure",
    colors: ['brown', 'green', 'black'],
    size: 'XL',
    pictureURL: 'http://www.oh-so-famous.de/sites/default/files/phantastic-beasts-tierwesen-graphorn-warner.jpg',
    inventory: 1,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 70,
    price: 6000,
    breed_id: 6
  },
  { name: 'Acromantula',
    description: "An Acromantula is a species of giant spider, native to the rainforests of Southeast Asia, particularly Borneo where it inhabits dense jungles. Acromantulas are believed to be a wizard-bred species, designed to guard dwellings or treasure hoards, and were first created before the Ban on Experimental Breeding in 1965. These giant spiders with a taste for human flesh were first spotted in 1794. The fangs contain highly toxic venom, valued at 100 Galleons a pint in 1996 .",
    colors: ['brown', 'green', 'black'],
    size: 'L',
    pictureURL: 'http://vignette2.wikia.nocookie.net/harrypotter/images/d/d2/Ara.jpg/revision/latest?cb=20100611145604',
    inventory: 13,
    magicalAbilities: [],
    lifespan: 10,
    price: 5000,
    breed_id: 7
  },
  { name: 'Basilisk',
    description: "http://vignette3.wikia.nocookie.net/villains/images/1/19/TheBasilisk.jpeg/revision/latest?cb=20150104113035",
    colors: ['green'],
    size: 'XL',
    pictureURL: 'http://vignette3.wikia.nocookie.net/villains/images/1/19/TheBasilisk.jpeg/revision/latest?cb=20150104113035',
    inventory: 12,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 900,
    price: 5000,
    breed_id: 8
  },
  { name: 'Three-headed Dog',
    description: "A horned beast with a humped back, sometimes ridden by Mountain trolls, much to the Graphorns' displeasure",
    colors: ['brown', 'green', 'black'],
    size: 'M',
    pictureURL: 'http://vignette4.wikia.nocookie.net/harrypotter/images/a/a0/Fluffy_Still_PS.png/revision/latest?cb=20161205010946',
    inventory: 1,
    magicalAbilities: [],
    lifespan: 50,
    price: 6000,
    breed_id: 6
  },
  { name: 'Toad',
    description: "Toads are ordinary, non-magical creatures popularly known among Muggles as well as wizards and witches. Toads are one of the three animals students at Hogwarts are allowed to have at the school along with owls and cats.[1] The toad has been by far the least popular choice of pet, and Rubeus Hagrid said they went out of style years before 1991. Although they do not have magical abilities they are useful to perform spells on or test potions on, such as when Professor Flitwick made Neville Longbottom's toad, Trevor, fly around his classroom to demonstrate levitation spells",
    colors: ['brown', 'green', 'black', 'red', 'multicolored'],
    size: 'S',
    pictureURL: 'http://vignette3.wikia.nocookie.net/harrypotter/images/7/7a/Toad.JPG/revision/latest?cb=20070912191403',
    inventory: 1,
    magicalAbilities: [],
    lifespan:12,
    price: 200,
    breed_id: 9
  },
  { name: 'Threstral',
    description: "A Thestral is a breed of winged horses with a skeletal body, face with reptilian features, and wide, leathery wings that resemble a bat's. They are very rare, and are considered dangerous by the Ministry of Magic.  Breeding as well as owning these beasts may be discouraged or even illegal without Ministry consent; in fact, wizards that live in areas not protected against Muggles are forced by law to perform Disillusionment Charms on their Thestrals regularly. They appear to be loyal creatures, able to discern a friend from an enemy and offering help to humans in need of transportation. Thestrals would forcefully attack anyone or anything they see as a threat and, in the unusual case of domesticated Thestrals, any enemy of its owners.",
    colors: ['brown', 'black'],
    size: 'S',
    pictureURL: 'http://www.bestiary.us/files/images/robbliss-4aa5600cfec751.preview.jpg',
    inventory: 1,
    magicalAbilities: ['fly', 'invisibility'],
    lifespan: 1000,
    price: 10000,
    breed_id: 4
  },
  { name: 'Cornish Pixies',
    description: "A Pixie is a small, bright blue mischief-maker, and loves tricks and practical jokes. It is able to fly, and enjoys lifting people up by their ears and depositing them on the tops of trees and buildings, showing incredible strength for creatures of their size. Pixies can only communicate with other pixies; their voices are described as 'so shrill it was like listening to a lot of arguing budgies'.",
    colors: ['blue'],
    size: 'XS',
    pictureURL: 'http://vignette3.wikia.nocookie.net/harrypotter/images/b/b7/WB_CornishPixies_LockhartsClassPixiePandemonium_HP2-Film-37.jpg/revision/latest?cb=20161123183250',
    inventory: 1,
    magicalAbilities: ['fly'],
    lifespan: 1000,
    price: 1000,
    breed_id: 10
  },
  { name: 'Ashwinder',
    description: "The Ashwinder is a serpent that is created from the remains of any magical fire that is allowed to burn unchecked. As it is a serpentine creature, the Ashwinder may very well be susceptible to Parseltongue magic.",
    colors: ['gray'],
    size: 'S',
    pictureURL: 'http://betweenthepagesblog.typepad.com/.a/6a0120a5924ef0970b01b8d20c0025970c-pi',
    inventory: 1,
    magicalAbilities: ['Parseltongue'],
    lifespan: 30,
    price: 1000,
    breed_id: 8
  },
  { name: 'Mountain Troll',
    description: "The mountain troll (Troglodytarum alpinum) is a breed of troll. They are the largest, weighing over a tonne, and the most vicious kind of their species. They are often depicted as bald and pale-grey. They sometimes use Graphorns as mounts, which results in scars due to the Graphorns not liking it.",
    colors: ['gray'],
    size: 'XL',
    pictureURL: 'http://vignette3.wikia.nocookie.net/harrypotter/images/f/f0/Wikia_HP_-_Mountain_Troll.png/revision/latest?cb=20130826132602',
    inventory: 5,
    magicalAbilities: [],
    lifespan: 300,
    price: 12000,
    breed_id: 11
  },
  { name: 'Forest Troll',
    description: "The Forest Troll (Troglodytarum sylvaticum) is a breed of Troll. It has pale-green skin, and some specimens have thin straggly hair that is either green or brown. This breed of troll is native to forests or woodlands. In 1992, Forest Trolls were seen in the Forbidden Forest, yelling and grunting at any intruder that crossed their paths.",
    colors: ['gray', 'green'],
    size: 'XL',
    pictureURL: 'http://vignette3.wikia.nocookie.net/harrypotter/images/4/4f/Forest_troll.png/revision/latest?cb=20161129174458',
    inventory: 5,
    magicalAbilities: [],
    lifespan: 300,
    price: 12000,
    breed_id: 11
  },
  { name: 'River Troll',
    description: "The River Troll is a breed of Troll. It has short horns, purple skin, and is hairy. They are often found lurking beneath bridges or in the middle of rivers. The largest known river troll was defeated by Almerick Sawbridge and was believed to weigh a ton.",
    colors: ['gray', 'green', 'blue'],
    size: 'XL',
    pictureURL: 'http://vignette3.wikia.nocookie.net/harrypotter/images/3/35/RiverTroll.png/revision/latest?cb=20141011180908',
    inventory: 5,
    magicalAbilities: [],
    lifespan: 300,
    price: 12000,
    breed_id: 11
  },
  { name: 'Augurey',
    description: "The Augurey, also known as the Irish Phoenix, is a thin and mournful looking bird, somewhat like a small underfed vulture in appearance, with greenish black feathers and a sharp beak. Its diet consists of insects, fairies and flies, which it hunts for in the heavy rain. Intensely shy, the Augurey lives in a tear-shaped nest in thorn and brambles. Augurey feathers repel ink, making them useless as Quill feathers. When it was learned that Augureys could foretell the coming of rain, they were used as weather forecasters. However, the continual moaning from them during the winter months was difficult to bear.",
    colors: ['gray', 'green', 'black'],
    size: 'M',
    pictureURL: 'https://www.hp-lexicon.org/wp-content/uploads/2016/07/augurey_by_verreaux.jpg',
    inventory: 5,
    magicalAbilities: [],
    lifespan: 200,
    price: 6000,
    breed_id: 1
  }

], product => db.model('products').create(product))

const seedBreeds = () => db.Promise.map([
  {name: 'bird'},
  {name: 'Dragon'},
  {name: 'plant'},
  {name: 'bird-horse'},
  {name: 'mammal'},
  {name: 'mole'},
  {name: 'spider'},
  {name: 'serpent'},
  {name: 'amphibean'},
  {name: 'miscellaneous'},
  {name: 'troll'}
], breed => db.model('breeds').create(breed))

const seedAddresses = () => db.Promise.map([
  { address1: '5 Hanover Square',
    city: 'New York',
    state: 'NY',
    zip: 10004
  },
  { address1: '1234 116th St',
    city: 'New York',
    state: 'NY',
    zip: 10027
  },
], address => db.model('addresses').create(address))

const seedOrders = () => db.Promise.map([
  {status: 'pending'},
  {status: 'processing', shippingCost: 100, tax: 80, subtotal:250, totalCost: 430, user_id: 1, address_id: 1},
  {status: 'shipped', shippingCost: 150, tax: 100, subtotal:300, totalCost: 550, user_id: 2, address_id: 2},
  {status: 'pending', shippingCost: 150, tax: 100, subtotal:300, totalCost: 550, user_id: 1, address_id: 1},
  {status: 'pending', shippingCost: 150, tax: 100, subtotal:300, totalCost: 550, user_id: 2, address_id: 2},
], order => db.model('orders').create(order))

const seedOrderlines = () => db.Promise.map([
  {
    color: 'green',
    quantity: 1,
    size: 'S',
    unitPrice: 500,
    order_id: 1,
    product_id: 1
  },
  {
    color: 'brown',
    quantity: 1,
    size: 'M',
    unitPrice: 100,
    order_id: 2,
    product_id: 4
  },
  {
    color: 'black',
    quantity: 1,
    size: 'L',
    unitPrice: 150,
    order_id: 2,
    product_id: 3
  },
  {
    color: 'green',
    quantity: 2,
    size: 'S',
    unitPrice: 150,
    order_id: 3,
    product_id: 1
  },
  {
    color: 'gray',
    quantity: 2,
    size: 'L',
    unitPrice: 2000,
    order_id: 4,
    product_id: 1
  },
  {
    color: 'brown',
    quantity: 1,
    size: 'L',
    unitPrice: 500,
    order_id: 4,
    product_id: 3
  },
  {
    color: 'green',
    quantity: 4,
    size: 'XS',
    unitPrice: 100,
    order_id: 5,
    product_id: 2
  },
], orderline => db.model('orderlines').create(orderline))

const seedReviews = () => db.Promise.map([
  {rating: 5 , body: 'Such a great product, I love it!', user_id: 1, product_id: 1},
  {rating: 5 , body: 'Loved my new creature!', user_id: 2, product_id: 1},
  {rating: 3 , body: 'Ate all my shoes', user_id: 1, product_id: 2},
  {rating: 2 , body: 'A little too much to handle', user_id: 2, product_id: 2},
  {rating: 4 , body: 'New best friend <3, just wish he smelled better.', user_id: 1, product_id: 3},
  {rating: 1 , body: 'Came in the wrong color...and the wrong creature completely', user_id: 3, product_id: 3},
], review => db.model('reviews').create(review))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then((users) => console.log(`Seeded ${users.length} users OK`))
  .then(seedBreeds)
  .then((breeds) => console.log(`Seeded ${breeds.length} breeds OK`))
  .then(seedProducts)
  .then((products) => console.log(`Seeded ${products.length} products OK`))
  .then(seedAddresses)
  .then((addresses) => console.log(`Seeded ${addresses.length} addresses OK`))
  .then(seedOrders)
  .then((orders) => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedOrderlines)
  .then((orderlines) => console.log(`Seeded ${orderlines.length} orderlines OK`))
  .then(seedReviews)
  .then((reviews) => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
