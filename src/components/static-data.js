/**
 * Created by Brandon on 7/6/2017.
 */

//This is a helper class using data I pulled from postman. This is snapshot data so when the page loads before it has a chance to read the server it has something to display.
export default class API {

        static sortBy=[
            "Entry Date",
            "Travel Date"
        ];

        static partyType=[
            "All",
            "FAMILY",
            "FRIENDS",
            "OTHER",
            "COUPLE",
            "SINGLE"
        ];

        static ratingsByTraveledWith={

        };

        static ratings={
            "aspects": {
                "location": "7.9",
                "service": "0.000",
                "priceQuality": "7.8",
                "food": "0.000",
                "room": "0.000",
                "childFriendly": "7.7",
                "interior": "0.000",
                "size": "0.000",
                "activities": "0.000",
                "restaurants": "5.6",
                "sanitaryState": "3.1",
                "accessibility": "0.000",
                "nightlife": "0.000",
                "culture": "0.000",
                "surrounding": "0.000",
                "atmosphere": "0.000",
                "noviceSkiArea": "0.000",
                "advancedSkiArea": "0.000",
                "apresSki": "0.000",
                "beach": "0.000",
                "entertainment": "0.000",
                "environmental": "0.000",
                "pool": "1.2",
                "terrace": "0.000"
            },
            "general": {
                "general": 8.5
            }
        };

        static reviews=[
            {
                "parents": [
                    {
                        "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                    }
                ],
                "id": "c9fa6d7b-a773-402e-b9cc-a800634484cf",
                "traveledWith": "FAMILY",
                "entryDate": 1252359116000,
                "travelDate": 1252359116000,
                "ratings": {
                    "general": {
                        "general": 8
                    },
                    "aspects": {
                        "location": 9,
                        "service": 0,
                        "priceQuality": 9,
                        "food": 0,
                        "room": 0,
                        "childFriendly": 9,
                        "interior": 0,
                        "size": 0,
                        "activities": 0,
                        "restaurants": 0,
                        "sanitaryState": 0,
                        "accessibility": 0,
                        "nightlife": 0,
                        "culture": 0,
                        "surrounding": 0,
                        "atmosphere": 0,
                        "noviceSkiArea": 0,
                        "advancedSkiArea": 0,
                        "apresSki": 0,
                        "beach": 0,
                        "entertainment": 0,
                        "environmental": 0,
                        "pool": 0,
                        "terrace": 0
                    }
                },
                "titles": {
                    "nl": "perfecte vakantieplek"
                },
                "texts": {
                    "nl": "14 dagen bungalowtent gehuurd, perfecte vakantie, weinig last van muggen, voor de kids (3,12,en 16) een paradijsje, nadeel bij de tenten van de touroperator is dat er geen luifel of partytent voorstaat, de plekken hebben weinig tot geen schaduw, dus zelf meenemen. Zeeeer schone toilet en doucheruimtes, zelfs voor de kleintjes een aparte ruimte."
                },
                "user": "M van Dam",
                "locale": "nl"
            },
            {
                "parents": [
                    {
                        "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                    }
                    ],
                "id": "b73f3160-1fd2-410c-92b3-6c2df2f50bfc",
                "traveledWith": "FAMILY",
                "entryDate": 1266252490713,
                "travelDate": 1262304000000,
                "ratings": {
                    "general": {
                        "general": 7
                    },
                    "aspects": {
                        "location": 7,
                        "service": 0,
                        "priceQuality": 0,
                        "food": 0,
                        "room": 0,
                        "childFriendly": 0,
                        "interior": 0,
                        "size": 0,
                        "activities": 0,
                        "restaurants": 6,
                        "sanitaryState": 0,
                        "accessibility": 0,
                        "nightlife": 0,
                        "culture": 0,
                        "surrounding": 0,
                        "atmosphere": 0,
                        "noviceSkiArea": 0,
                        "advancedSkiArea": 0,
                        "apresSki": 0,
                        "beach": 0,
                        "entertainment": 0,
                        "environmental": 0,
                        "pool": 0,
                        "terrace": 0
                    }
                },
                "titles": {
                    "nl": "Massale camping"
                },
                "texts": {
                    "nl": "Hele grote camping, met grote zwembaden. Het eten was prima, niet echt super. Voor de jongeren is er 's avonds wel een disco, maar voor de wat ouderen is er niets te doen. Die zijn 's avonds verplicht om lek gestoken te worden door muggen. Muggen zijn echt een plaag daar, en dan wordt er af en toen gespoten en dan houd het weer even op. Een leuke plaats om te gaan winkelen en wat te drinken is Jesolo. En voor een dagje cultuur natuurlijk naar Venetie, zorg dat je niet op een té warme dag gaat!\nOnze bungalo was wel top met een boven en beneden verdieping en een ruim plaatsje. Eens in de zoveel tijd is er markt op de camping. Het strand is smal, en er lopen veel mensen die je wat willen verkopen of je willen masseren. Niet voor herhaling vatbaar, maar heb het wel naar me zin gehad."
                },
                "user": "shirleyvk",
                "locale": "nl"
            },
            {
                "parents": [
                {
                    "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                }
            ],
                "id": "04edc8b4-fb64-475a-ab94-f660e6a49711",
                "traveledWith": "FAMILY",
                "entryDate": 1249170631853,
                "travelDate": 1246406400000,
                "ratings": {
                "general": {
                    "general": 9
                },
                "aspects": {
                    "location": 9,
                        "service": 0,
                        "priceQuality": 9,
                        "food": 0,
                        "room": 0,
                        "childFriendly": 10,
                        "interior": 0,
                        "size": 0,
                        "activities": 0,
                        "restaurants": 9,
                        "sanitaryState": 0,
                        "accessibility": 0,
                        "nightlife": 0,
                        "culture": 0,
                        "surrounding": 0,
                        "atmosphere": 0,
                        "noviceSkiArea": 0,
                        "advancedSkiArea": 0,
                        "apresSki": 0,
                        "beach": 0,
                        "entertainment": 0,
                        "environmental": 0,
                        "pool": 0,
                        "terrace": 0
                }
            },
                "titles": {
                "nl": "Prachtige vakantie gehad"
            },
                "texts": {
                "nl": "Dit inmens grote vakantie park is voor ouders met kinderen tot ongeveer 12 jaar prachtig!\nHeel mooi en verzorgd park. Veel te beleven op het park zelf. Omgeving is vrij kaal en net Friesland.... Coarle daarin tegen is wel heel erg leuk en gezellig.\nZwemparadijs voor jonge kinderen, het water is namelijk max 1 meter diep!!\nOnze kinderen en wij hebben ons drie weken lang perfect vermaakt hier!\nRegels,badmeesters en security zijn streng maar absoluut rechtvaardig. Geen gedonder anders gewoon wegwezen!. Aanrader voor gezinnen met jonge kinderen!\nHeel vriendelijk en netjes. Uit eten op het park zelf prima te betalen.\nWinkels op het park de hele avond open, leuke speeltuin ( wel betalen).\ntip: zorg wel dat je een ligbed kunt bemachtigen! in de zomer heel druk, maar op het gras zitten wil je echt niet!"
            },
                "user": "Fam Overeinder",
                "locale": "nl"
            },
            {
                "parents": [
                {
                    "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                }
            ],
                "id": "3018a21b-7e03-46a0-b206-cb900ba68059",
                "traveledWith": "FAMILY",
                "entryDate": 1250986704193,
                "travelDate": 1249084800000,
                "ratings": {
                "general": {
                    "general": 10
                },
                "aspects": {
                    "location": 9,
                        "service": 0,
                        "priceQuality": 10,
                        "food": 0,
                        "room": 0,
                        "childFriendly": 10,
                        "interior": 0,
                        "size": 0,
                        "activities": 0,
                        "restaurants": 10,
                        "sanitaryState": 0,
                        "accessibility": 0,
                        "nightlife": 0,
                        "culture": 0,
                        "surrounding": 0,
                        "atmosphere": 0,
                        "noviceSkiArea": 0,
                        "advancedSkiArea": 0,
                        "apresSki": 0,
                        "beach": 0,
                        "entertainment": 0,
                        "environmental": 0,
                        "pool": 0,
                        "terrace": 0
                }
            },
                "titles": {
                "nl": "Zijn hier geweest van 12-08-2009 tot 22-08-2009"
            },
                "texts": {
                "nl": "Het is een geweldig vakantiepark waar van alles is te doen.\nJe hoeft het park niet af om je te te vermaken.\nWeinig tot geen last gehad van muggen.\nEven 2 citroenkaarsjes op en onder de tafel en goed insmeren dan komt alles goed.\nRij voor een overheerlijke pizza even naar Brian(paar kilometer buiten de camping).\nHet stadje Caorle is ook een aanrader maar ga wel met het treintje van de camping want parkeren daar is een drama."
            },
                "user": "Fam. Meijer te Groningen",
                "locale": "nl"
            }
        ];
}