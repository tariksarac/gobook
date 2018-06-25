export const firstHeading = 'BEST OF BOSNIA & HERZEGOVINA';
export const firstSubHeading = 'Experience the incredible Bosnia and Herzegovina';

export const heading = 'Take a break and relax';
export const about =
    'Visit the heart-shaped country, the place where the East meets the West, ' +
    'the country with exceptionally rich gastronomy, magical natural beauty and warm-hearted people. ' +
    'Enjoy the Bosnian coffee drinking ritual.';

export const plivaText =
    'In a very short period Bosnia and Herzegovina has become ' +
    'a tourist fairy-tale. Thanks to the beauty of our country the tourist season every year ' +
    'becomes richer in different trips on offer to our guests. We are ready to provide all the ' +
    'necessary information about trips and transfers as well as to recommend the best service based on demands of our guests. ';
export const offer =
    'In our offer we highlight the trips which represent the best and must-see destinations in Bosnia and Herzegovina';

export const lastHeading = 'Experience the incredible Bosnia and Herzegovina';
export const lastSubHeading =
    'Our agency’s goal is to help you see and experience the beauty' +
    ' of Bosnia and Herzegovina in the best way possible. ' +
    'We thank everyone who decides to put their trust in us!';

export const temporaryImg = require('../images/sebilj.jpg');
export const pliva = require('../images/pliva.jpg');
export const sarajevo =
    'https://drscdn.500px.org/photo/72791701/q%3D80_m%3D2000/v2?webp=true&sig=ab909fa759b56af27e3840eb1bac889f6c17a9644b62a90e95a511f7a370a13b';
export const jajce =
    'https://drscdn.500px.org/photo/199890883/q%3D80_m%3D1500/v2?webp=true&sig=554a08724fe8f124cb1ca07b1bd696d0bde5d6de1d886bfeae7d27d02ce5c303';
export const mostar =
    'https://drscdn.500px.org/photo/100843871/q%3D80_m%3D2000/v2?webp=true&sig=acd845aa07fdca3789e7a1af7f4e70a78e07fc7ae9042cea206970105cbf958f';
export const jezero =
    'https://drscdn.500px.org/photo/150980049/q%3D80_m%3D2000/v2?webp=true&sig=4577267c9a336325e79d9364e54d5143b4fc3050b442bb8cbf7587a53a35f465';

export const products = [
    {
        name: 'Sarajevo-Jajce-Mostar',
        images: [sarajevo, mostar],
        description: '6 noćenja, 7 dana',
        price: '100$',
    },
    {
        name: 'Sarajevo-Jajce',
        images: [sarajevo, jajce],
        description: '4 noćenja, 5 dana',
        price: '100$',
    },
    {
        name: 'Sarajevo-Mostar',
        images: [sarajevo, mostar],
        description: '4 noćenja, 5 dana',
        price: '100$',
    },
];

export const tours = [
    {
        name: 'Sarajevo-Jajce-Mostar',
        title: 'BOSNIA & HERZEGOVINA INTRO TOUR',
        placeByDay: [
            {
                name: 'Day 1',
                place: 'Sarajevo',
                introDescription:
                    ' We welcome you at the Sarajevo Airport, the railway or the ' +
                    'bus station and organize the transfer to the hotel. You settle at the hotel. Free activities.',
            },
            {
                name: 'Day 2',
                place: 'Sarajevo',
                introDescription:
                    'Tour of: Baščaršija, bridges on the river Miljacka, National Theater, City Hall, the' +
                    ' House of Spite, Sebilj Square,  Coppersmith Street – here you can find antiques, handcrafted copper ' +
                    'plates, dishes, cups with oriental decorations and ornaments; Baščaršijska Mosque from 16th century, ' +
                    'old Orthodox church, Jewish temple and synagogue, and the Eternal Flame',
                descriptionDetails: [
                    {
                        emphasize: 'Sebilj – the heart of Baščaršija –',
                        text:
                            ' is a famous square and one of the most important city fountains; it is always ' +
                            'surrounded by pigeons. This is an excellent spot for a short break and your first coffee. ' +
                            'All the coffeehouses around the square serve Turkish coffee with Turkish delight (rahat lokum). ',
                    },
                    {
                        emphasize: 'Latin Bridge',
                        text:
                            'also known as the Princip Bridge, as this is the place where Gavrilo Princip in 1914 ' +
                            'notoriously assassinated Archduke Franz Ferdinand and his wife Sophie, causing the start of the World Word I.',
                    },
                    {
                        emphasize: 'Ćevapi-',
                        text:
                            'not-to-be-missed when visiting Sarajevo. The saying goes “If you have not eaten ćevapi' +
                            ' in Sarajevo, it as if you did not visit Sarajevo at all”. ',
                    },
                    {
                        emphasize: 'Trebević Cable Car-',
                        text: 'experience a beautiful view of the Bosnia and Herzegovina’s capital city.',
                    },
                ],
            },
            {
                name: 'Day 3',
                place: 'Sarajevo- Mostar',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Vrelo Bosne-',
                        text:
                            'In the vicinity of Ilidža, you can find a natural monument which is reached via ' +
                            'three and a half kilometers long avenue of hundred year old plane and chestnut trees. It is ' +
                            'a natural park crisscrossed with numerous water springs, brooks and little lakes. The main ' +
                            'source of drinkable water of the city of Sarajevo – Bačevo - is also located in the Vrelo' +
                            ' Bosne area. It is assumed that the name “Bosna” itself originates from the word “bosana”, ' +
                            'an ancient Indo-European word meaning – water. Another symbolic feature of Vrelo Bosne are ' +
                            'the famous fiacres, which have been carrying guests through the Grand Avenue from Ilidža to ' +
                            'Vrelo Bosne for over one hundred years. It is believed that the first fiacre arrived the ' +
                            'Archduke Franz Ferdinand in 1895.',
                    },
                    {
                        emphasize: 'Sarajevo War Tunnel',
                        text:
                            'There is also the option to visit the Sarajevo War Tunnel which has been converted into ' +
                            'the Sarajevo Tunnel of Hope and Rescue Museum. Supply of Sarajevo with good, electrical energy,' +
                            ' medical supplies, fuel and weapons was made possible because of the 800 meter long tunnel.',
                    },
                ],
            },
            {
                name: 'Day 4',
                place: 'Mostar',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Old Bridge',
                        text:
                            'Tour of the romantic Old Bridge – the symbol of love and bonding, sung in many songs. ' +
                            'The Old Bridge gracefully spans the emerald river Neretva. There you will find the traditional ' +
                            'divers, who jump off the bridge. Touring and enjoying the Mostar’s Old Town and traditional ' +
                            'souvenir shops in the Coppersmith Street - Kujundžiluk. Mostar boast of numerous cafés where ' +
                            'you can find some shade after a walk under hot Herzegovina sun. Spending the night at the ' +
                            'hotel in Mostar.',
                    },
                ],
            },
            {
                name: 'Day 5',
                place: 'Mostar -Buna- Jablanica- Sarajevo',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Blagaj-',
                        text:
                            'Departure for Blagaj- the Buna river spring- the largest karstic water spring in Europe ' +
                            'where you can also find the famous Sufi Tekke..',
                    },
                    {
                        emphasize: 'Roast lamb',
                        text: 'try some “to lick your fingers” roast lamb in a beautiful eating environment',
                    },
                    {
                        emphasize: null,
                        text: 'Return to Sarajevo',
                    },
                    {
                        emphasize: null,
                        text: 'Free activities.',
                    },
                    {
                        emphasize: null,
                        text: 'Transfer to the Sarajevo Airport, railway or bus station.',
                    },
                ],
            },
        ],
        gallery: [
            {
                original: sarajevo,
                thumbnail: sarajevo,
                originalClass: 'originalClass'
            },
            {
                original: jajce,
                thumbnail: jajce,
                originalClass: 'originalClass'
            },
            {
                original: mostar,
                thumbnail: mostar,
                originalClass: 'originalClass'
            },
        ],
        includes: [
            {
                include: true,
                includeText:
                    'Transportation, transfer, accommodation in a four star hotel with breakfast included, ' +
                    'and visiting the above mentioned sights and landmarks. \n',
            },
            {
                include: true,
                includeText: 'Accommodation in Sarajevo - 2 nights',
            },
            {
                include: true,
                includeText: 'Accommodation in Mostar - 2 nights',
            },
            {
                include: false,
                includeText: 'meals – except from the breakfast at the hotel',
            },
            {
                include: false,
                includeText: 'tips',
            },
            {
                include: false,
                includeText: 'insurance costs',
            },
            {
                include: false,
                includeText: 'Trebević Cable Care ticket EUR 10',
            },
        ],
    },
    {
        name: 'Sarajevo-Jajce',
        title: 'THE BEST OF BOSNIA & HERZEGOVINA TOUR',
        placeByDay: [
            {
                name: 'Day 1',
                place: 'Sarajevo',
                introDescription:
                    'We welcome you at the Sarajevo Airport, the railway or the bus station and organize the transfer to the hotel. You settle at the hotel. Free activities.',
            },
            {
                name: 'Day 2',
                place: 'Sarajevo',
                introDescription:
                    'Tour of: Baščaršija, bridges on the river Miljacka, National Theater, City Hall, the' +
                    ' House of Spite, Sebilj Square,  Coppersmith Street – here you can find antiques, handcrafted copper ' +
                    'plates, dishes, cups with oriental decorations and ornaments; Baščaršijska Mosque from 16th century, ' +
                    'old Orthodox church, Jewish temple and synagogue, and the Eternal Flame',
                descriptionDetails: [
                    {
                        emphasize: 'Sebilj – the heart of Baščaršija –',
                        text:
                            ' is a famous square and one of the most important city fountains; it is always ' +
                            'surrounded by pigeons. This is an excellent spot for a short break and your first coffee. ' +
                            'All the coffeehouses around the square serve Turkish coffee with Turkish delight (rahat lokum). ',
                    },
                    {
                        emphasize: 'Latin Bridge',
                        text:
                            'also known as the Princip Bridge, as this is the place where Gavrilo Princip in 1914 ' +
                            'notoriously assassinated Archduke Franz Ferdinand and his wife Sophie, causing the start of the World Word I.',
                    },
                    {
                        emphasize: 'Ćevapi-',
                        text:
                            'not-to-be-missed when visiting Sarajevo. The saying goes “If you have not eaten ćevapi' +
                            ' in Sarajevo, it as if you did not visit Sarajevo at all”. ',
                    },
                    {
                        emphasize: 'Trebević Cable Car-',
                        text: 'experience a beautiful view of the Bosnia and Herzegovina’s capital city.',
                    },
                ],
            },
            {
                name: 'Day 3',
                place: 'Sarajevo- Travnik - Jajce',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Vrelo Bosne-',
                        text:
                            'In the vicinity of Ilidža, you can find a natural monument which is reached via ' +
                            'three and a half kilometers long avenue of hundred year old plane and chestnut trees. It is ' +
                            'a natural park crisscrossed with numerous water springs, brooks and little lakes. The main ' +
                            'source of drinkable water of the city of Sarajevo – Bačevo - is also located in the Vrelo' +
                            ' Bosne area. It is assumed that the name “Bosna” itself originates from the word “bosana”, ' +
                            'an ancient Indo-European word meaning – water. Another symbolic feature of Vrelo Bosne are ' +
                            'the famous fiacres, which have been carrying guests through the Grand Avenue from Ilidža to ' +
                            'Vrelo Bosne for over one hundred years. It is believed that the first fiacre arrived the ' +
                            'Archduke Franz Ferdinand in 1895.',
                    },
                    {
                        emphasize: 'Sarajevo War Tunnel',
                        text:
                            'There is also the option to visit the Sarajevo War Tunnel which has been converted into ' +
                            'the Sarajevo Tunnel of Hope and Rescue Museum. Supply of Sarajevo with good, electrical energy,' +
                            ' medical supplies, fuel and weapons was made possible because of the 800 meter long tunnel.',
                    },
                    {
                        emphasize: null,
                        text: 'Journey to Travnik.',
                    },
                    {
                        emphasize: 'Plava voda-.',
                        text:
                            'We visit the main sights of Travnik - Plava voda- where the water emerges from a rock and produces' +
                            ' relaxing sounds creating the most beautiful picnic area in Travnik, along with the Lašva river and ' +
                            'the Hender stream which flows into the Lašva – which together form the neighborhood called Šumeće (roaring water).\n',
                    },
                    {
                        emphasize: 'house of Ivo Andrić',
                        text:
                            'We enjoy a cup of coffee and go to visit the birth house of Ivo Andrić – a winner of the Nobel Prize for Literature.\n',
                    },
                    {
                        emphasize: 'Arrival at Jajce ',
                        text:
                            'After Travnik we head for Jajce. Arrival at Jajce in the afternoon. We settle at the hotel in Jajce.\n',
                    },
                ],
            },
            {
                name: 'Day 4',
                place: 'Jajce - Mostar',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Royal Town of Jajce',
                        text:
                            'In the Royal Town of Jajce one can find many monuments bearing testimony to the history of ' +
                            'Bosnia and Herzegovina, however, the pride of Jajce is definitely the natural pearl ' +
                            'located in the center of the town - a 21 meter tall waterfall. It magnificently plummets into ' +
                            'the river Vrbas and, not surprisingly, it is considered to be among the 12 most beautiful waterfalls ' +
                            'in the world. We tour the medieval fortress, catacombs, and then we visit the monastery which houses ' +
                            'the remains of the last Bosnian king, the Temple of Mithras, and the AVNOJ Museum. \n',
                    },
                    {
                        emphasize: 'Plivsko Lake',
                        text:
                            'After visiting the cultural and historic sights, we visit the natural gift of this region where ' +
                            'you can relax your soul - Plivsko Lake with dainty watermills on the river Pliva built between Great' +
                            ' and Small lake. Dating back to the Middle Ages, there used to be 33 of them, the watermills on the ' +
                            'Pliva were proclaimed a national monument of Bosnia and Herzegovina in 2009. The lake offers many ' +
                            'forms of recreation: fishing, kayaking, canoeing, paddle boats, diving and swimming, volleyball, bicycle riding and hiking.\n',
                    },
                    {
                        emphasize: 'Mostar',
                        text:
                            'Afternoon journey through Bosnia and Herzegovina – to Mostar. Getting settled at the hotel in Mostar.\n',
                    },
                ],
            },
            {
                name: 'Day 5',
                place: 'Buna and Mostar',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Old Bridge',
                        text:
                            'Tour of the romantic Old Bridge – the symbol of love and bonding, sung in many songs. ' +
                            'The Old Bridge gracefully spans the emerald river Neretva. There you will find the traditional ' +
                            'divers, who jump off the bridge. Touring and enjoying the Mostar’s Old Town and traditional souvenir ' +
                            'shops in the Coppersmith Street - Kujundžiluk. Mostar boast of numerous cafés where you can find some ' +
                            'shade after a walk under hot Herzegovina sun.\n',
                    },
                    {
                        emphasize: 'Blagaj-',
                        text:
                            'Departure for Blagaj- the Buna river spring- the largest karstic water spring in Europe ' +
                            'where you can also find the famous Sufi Tekke.\n',
                    },
                    {
                        emphasize: 'Mostar',
                        text: 'Return to Mostar. Spending the night at the hotel in Mostar.\n',
                    },
                ],
            },
        ],
        gallery: [
            {
                original: sarajevo,
                thumbnail: sarajevo,
                originalClass: 'originalClass'
            },
            {
                original: jajce,
                thumbnail: jajce,
                originalClass: 'originalClass'
            },
        ],
        includes: [
            {
                include: true,
                includeText:
                    'Transportation, transfer, accommodation in a four star hotel with breakfast included, ' +
                    'and visiting the above mentioned sights and landmarks. \n',
            },
            {
                include: true,
                includeText: 'Accommodation in Sarajevo - 2 nights',
            },
            {
                include: true,
                includeText: 'Accommodation in Mostar - 2 nights',
            },
            {
                include: false,
                includeText: 'meals – except from the breakfast at the hotel',
            },
            {
                include: false,
                includeText: 'tips',
            },
            {
                include: false,
                includeText: 'insurance costs',
            },
            {
                include: false,
                includeText: 'Trebević Cable Care ticket EUR 10',
            },
        ],
    },
    {
        name: 'Sarajevo-Mostar',
        title: 'THE BEST OF BOSNIA & HERZEGOVINA TOUR',
        placeByDay: [
            {
                name: 'Day 1',
                place: 'Sarajevo',
                introDescription:
                    'We welcome you at the Sarajevo Airport, the railway or the bus station and organize the transfer to the hotel. You settle at the hotel. Free activities.',
            },
            {
                name: 'Day 2',
                place: 'Sarajevo',
                introDescription:
                    'Tour of: Baščaršija, bridges on the river Miljacka, National Theater, City Hall, the' +
                    ' House of Spite, Sebilj Square,  Coppersmith Street – here you can find antiques, handcrafted copper ' +
                    'plates, dishes, cups with oriental decorations and ornaments; Baščaršijska Mosque from 16th century, ' +
                    'old Orthodox church, Jewish temple and synagogue, and the Eternal Flame',
                descriptionDetails: [
                    {
                        emphasize: 'Sebilj – the heart of Baščaršija –',
                        text:
                            ' is a famous square and one of the most important city fountains; it is always ' +
                            'surrounded by pigeons. This is an excellent spot for a short break and your first coffee. ' +
                            'All the coffeehouses around the square serve Turkish coffee with Turkish delight (rahat lokum). ',
                    },
                    {
                        emphasize: 'Latin Bridge',
                        text:
                            'also known as the Princip Bridge, as this is the place where Gavrilo Princip in 1914 ' +
                            'notoriously assassinated Archduke Franz Ferdinand and his wife Sophie, causing the start of the World Word I.',
                    },
                    {
                        emphasize: 'Ćevapi-',
                        text:
                            'not-to-be-missed when visiting Sarajevo. The saying goes “If you have not eaten ćevapi' +
                            ' in Sarajevo, it as if you did not visit Sarajevo at all”. ',
                    },
                    {
                        emphasize: 'Trebević Cable Car-',
                        text: 'experience a beautiful view of the Bosnia and Herzegovina’s capital city.',
                    },
                ],
            },
            {
                name: 'Day 3',
                place: 'Sarajevo- Travnik - Jajce',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Vrelo Bosne-',
                        text:
                            'In the vicinity of Ilidža, you can find a natural monument which is reached via ' +
                            'three and a half kilometers long avenue of hundred year old plane and chestnut trees. It is ' +
                            'a natural park crisscrossed with numerous water springs, brooks and little lakes. The main ' +
                            'source of drinkable water of the city of Sarajevo – Bačevo - is also located in the Vrelo' +
                            ' Bosne area. It is assumed that the name “Bosna” itself originates from the word “bosana”, ' +
                            'an ancient Indo-European word meaning – water. Another symbolic feature of Vrelo Bosne are ' +
                            'the famous fiacres, which have been carrying guests through the Grand Avenue from Ilidža to ' +
                            'Vrelo Bosne for over one hundred years. It is believed that the first fiacre arrived the ' +
                            'Archduke Franz Ferdinand in 1895.',
                    },
                    {
                        emphasize: 'Sarajevo War Tunnel',
                        text:
                            'There is also the option to visit the Sarajevo War Tunnel which has been converted into ' +
                            'the Sarajevo Tunnel of Hope and Rescue Museum. Supply of Sarajevo with good, electrical energy,' +
                            ' medical supplies, fuel and weapons was made possible because of the 800 meter long tunnel.',
                    },
                    {
                        emphasize: null,
                        text: 'Journey to Travnik.',
                    },
                    {
                        emphasize: 'Plava voda-.',
                        text:
                            'We visit the main sights of Travnik - Plava voda- where the water emerges from a rock and produces' +
                            ' relaxing sounds creating the most beautiful picnic area in Travnik, along with the Lašva river and ' +
                            'the Hender stream which flows into the Lašva – which together form the neighborhood called Šumeće (roaring water).\n',
                    },
                    {
                        emphasize: 'house of Ivo Andrić',
                        text:
                            'We enjoy a cup of coffee and go to visit the birth house of Ivo Andrić – a winner of the Nobel Prize for Literature.\n',
                    },
                    {
                        emphasize: 'Arrival at Jajce ',
                        text:
                            'After Travnik we head for Jajce. Arrival at Jajce in the afternoon. We settle at the hotel in Jajce.\n',
                    },
                ],
            },
            {
                name: 'Day 4',
                place: 'Jajce - Mostar',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Royal Town of Jajce',
                        text:
                            'In the Royal Town of Jajce one can find many monuments bearing testimony to the history of ' +
                            'Bosnia and Herzegovina, however, the pride of Jajce is definitely the natural pearl ' +
                            'located in the center of the town - a 21 meter tall waterfall. It magnificently plummets into ' +
                            'the river Vrbas and, not surprisingly, it is considered to be among the 12 most beautiful waterfalls ' +
                            'in the world. We tour the medieval fortress, catacombs, and then we visit the monastery which houses ' +
                            'the remains of the last Bosnian king, the Temple of Mithras, and the AVNOJ Museum. \n',
                    },
                    {
                        emphasize: 'Plivsko Lake',
                        text:
                            'After visiting the cultural and historic sights, we visit the natural gift of this region where ' +
                            'you can relax your soul - Plivsko Lake with dainty watermills on the river Pliva built between Great' +
                            ' and Small lake. Dating back to the Middle Ages, there used to be 33 of them, the watermills on the ' +
                            'Pliva were proclaimed a national monument of Bosnia and Herzegovina in 2009. The lake offers many ' +
                            'forms of recreation: fishing, kayaking, canoeing, paddle boats, diving and swimming, volleyball, bicycle riding and hiking.\n',
                    },
                    {
                        emphasize: 'Mostar',
                        text:
                            'Afternoon journey through Bosnia and Herzegovina – to Mostar. Getting settled at the hotel in Mostar.\n',
                    },
                ],
            },
            {
                name: 'Day 5',
                place: 'Buna and Mostar',
                introDescription: null,
                descriptionDetails: [
                    {
                        emphasize: 'Old Bridge',
                        text:
                            'Tour of the romantic Old Bridge – the symbol of love and bonding, sung in many songs. ' +
                            'The Old Bridge gracefully spans the emerald river Neretva. There you will find the traditional ' +
                            'divers, who jump off the bridge. Touring and enjoying the Mostar’s Old Town and traditional souvenir ' +
                            'shops in the Coppersmith Street - Kujundžiluk. Mostar boast of numerous cafés where you can find some ' +
                            'shade after a walk under hot Herzegovina sun.\n',
                    },
                    {
                        emphasize: 'Blagaj-',
                        text:
                            'Departure for Blagaj- the Buna river spring- the largest karstic water spring in Europe ' +
                            'where you can also find the famous Sufi Tekke.\n',
                    },
                    {
                        emphasize: 'Mostar',
                        text: 'Return to Mostar. Spending the night at the hotel in Mostar.\n',
                    },
                ],
            },
        ],
        gallery: [
            {
                original: sarajevo,
                thumbnail: sarajevo,
                originalClass: 'originalClass'
            },
            {
                original: mostar,
                thumbnail: mostar,
                originalClass: 'originalClass'
            },
        ],
        includes: [
            {
                include: true,
                includeText:
                    'Transportation, transfer, accommodation in a four star hotel with breakfast included, ' +
                    'and visiting the above mentioned sights and landmarks. \n',
            },
            {
                include: true,
                includeText: 'Accommodation in Sarajevo - 2 nights',
            },
            {
                include: true,
                includeText: 'Accommodation in Mostar - 2 nights',
            },
            {
                include: false,
                includeText: 'meals – except from the breakfast at the hotel',
            },
            {
                include: false,
                includeText: 'tips',
            },
            {
                include: false,
                includeText: 'insurance costs',
            },
            {
                include: false,
                includeText: 'Trebević Cable Care ticket EUR 10',
            },
        ],
    },
];
