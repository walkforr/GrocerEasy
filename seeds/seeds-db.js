const db = require("../models");
const productSeeds = require("./seed-products.json");

db.sequelize.sync({ force: true }).then(function () {
  db.Market.bulkCreate([
    {
      name: "Cotton Mill Farmers Market",
      address: "401 Rome St.",
      city: "Carrollton",
      state: "GA",
      zip: "30117",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://www.cottonmillfarmersmarket.org/",
      operationHours:"Saturdays, 8:00am to 12:00pm, April - September & 9:00am to 11:00am, October-March"
    },
    {
      name: "Kennesaw Farmers Market",
      address: "2820 Cherokee Street, Depot Park",
      city: "Kennesaw",
      state: "GA",
      zip: "30144",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://www.kennesaw-ga.gov/farmers-market/",
      operationHours:"Mondays, 3:30pm to 7:30pm, May - October"
    },
    {
      name: "Marietta Farmers Market",
      address: "65 Church St.",
      city: "Marietta",
      state: "GA",
      zip: "30060",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "http://www.mariettasquarefarmersmarket.com/",
      operationHours:"Sundays, 9:00am to 12:00pm, Year Roung & Saturdays, 12:00pm to 3:00pm, May - October"
    },
    {
      name: "Select Farmers Market",
      address: "8639 Tara Blvd.",
      city: "Jonesboro",
      state: "GA",
      zip: "30236",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://www.facebook.com/Select-International-Farmers-Market-772557606172965/",
      operationHours:"Sundays, 10:00am to 6:00pm & Monday - Saturday, from 9:00am to 8:30pm"
    },
    {
      name: "Woodstock Farmers Market",
      address: "8588 Main Street",
      city: "Woodstock",
      state: "GA",
      zip: "30188",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "http://visitwoodstockga.com/event-group/farm-fresh-market/",
      operationHours:"Saturdays, 9:30am to 1:00pm, April - December"
    },
    {
      name: "Smyrna Farmers Market",
      address: "1275 Church St.",
      city: "Smyrna",
      state: "GA",
      zip: "30080",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://www.smyrnaga.gov/Home/Components/Calendar/Event/8700/15",
      operationHours:"Saturdays, 8:00am to 12:00pm, May - September"
    },
    {
      name: "Coweta County Farmers Market",
      address: "197 Temple Avenue ",
      city: "Newnan",
      state: "GA",
      zip: "30263",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website:"https://www.facebook.com/events/620912704752991",
      operationHours:"Wednesdays & Saturdays, 9:00am to 1:00pm"
    },
    {
      name: "Brookhaven Farmers Market",
      address: "1375 Fernwoord Circle NE",
      city: "Brookhaven",
      state: "GA",
      zip: "30319",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "http://www.brookhavenfarmersmarket.com/",
      operationHours:"Saturdays, 9:00am to 12:00pm"
    },
    {
      name: "Chamblee Tucker Farmers Market",
      address: "4046 Chamblee-Tucker Rd.",
      city: "Atlanta",
      state: "GA",
      zip: "30340",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://www.facebook.com/events/chamblee-tucker-farmers-market/287751491357321/",
      operationHours:"Saturdays, 9:00am to 12:00pm, April - December"
    },
    {
      name: "Clarkston Farmers Market",
      address: "N. Indian Creek Drive",
      city: "Clarkston",
      state: "GA",
      zip: "30021",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "http://clarkstonfarmersmarket.com/",
      operationHours:"Sundays, 10:00am to 2:00pm, April - October"
    },
    {
      name: "Decatur Farmers Market",
      address: "308 Clairemont Ave",
      city: "Decatur",
      state: "GA",
      zip: "30030",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://cfmatl.org/decatur/",
      operationHours:"Wednesdays, 4:00pm to 7:00pm & Saturdays, 9:00am to 1:00pm, April - December"
    },
    {
      name: "Dunwoody Green Market",
      address: "5500 Chamblee Rd.",
      city: "Dunwoody",
      state: "GA",
      zip: "30338",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "http://dunwoodygreenmarket.com/word/",
      operationHours:"Wednesdays, 8:00am to 12:00pm, April - November"
    },
    {
      name: "East Atlanta Village Farmers Market",
      address: "561 Flat Shoals Ave.",
      city: "Atlanta",
      state: "GA",
      zip: "30316",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://cfmatl.org/eav/",
      operationHours:"Thursdays, 4:00pm to 8:00pm, April - November"
    },
    {
      name: "Tucker Farmers Market",
      address: "2333 Main St.",
      city: "Tucker",
      state: "GA",
      zip: "30084",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://tuckerfarmersmarket.com/",
      operationHours:"Thursdays, 4:00am to 12:00pm, April - December"
    },
    {
      name: "Peachtree City Farmers Market",
      address: "Aberdeen Villiage Shopping Center, 215 Northlake Dr.",
      city: "Peachtree City",
      state: "GA",
      zip: "30269",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://visitpeachtreecity.com/attraction-city/the-local-farmers-market/",
      operationHours:"Wednesdays & Saturdays, 9:00am to 1:00pm, April - November "
    },
    {
      name: "Alpharetta Farmers Market",
      address: "1 South Main,",
      city: "Alpharetta",
      state: "GA",
      zip: "30009",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://alpharettafarmersmarket.com/",
      operationHours:"Saturdays, 8:30am to 1:00pm, April - October "
    },
    {
      name: "Cumming Farmers Market",
      address: "235 Castleberry Rd.",
      city: "Cumming",
      state: "GA",
      zip: "30040",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: "https://www.facebook.com/Cummingfarmersmarket/",
      operationHours:"Wednesdays & Saturdays, 6:30am to 11:00Am"
    },
    {
      name: "East Point Farmers Market",
      address: "2757 East Point St.",
      city: "East Point",
      state: "GA",
      zip: "30344",
      image: "http://i66.tinypic.com/2e1en7p.png",
      website: 'http://www.downtowneastpoint.com/eastpointfarmersmarket//?fbclid=IwAR1IAKbVQnmBzKL-X52tieBRgYIxHtGVh4fCBHwTUuFv69ZJsZWQ4YqanB0',
      operationHours: 'Wednesdays, 4PM-7PM (SUMMER 4PM-7:30PM)',
    },
    {
      name: "Grant Park Farmers Market",
      address: "600 Cherokee Ave. SE",
      city: "Atlanta",
      state: "GA",
      zip: "30308",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://cfmatl.org/grantpark/',
      operationHours: 'Sunday, 9AM-1PM',

    },
    {
      name: "Henry County Farmers Market",
      address: "97 Lake Dow Rd.",
      city: "McDonough",
      state: "GA",
      zip: "30252",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.facebook.com/HenryCountyFarmersMarket?fref=ts',
      operationHours: 'Thursday, 10AM-2PM',
    },
    {
      name: "Green Market at Piedmont Park",
      address: "Piedmont Park, 12th St. gate",
      city: "Atlanta",
      state: "GA",
      zip: "30306",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.piedmontpark.org/green-market/',
      operationHours: 'Saturday, 9AM-1PM',
    },
    {
      name: "Morningside Farmers Market",
      address: "1393 N.Highland Rd.",
      city: "Atlanta",
      state: "GA",
      zip: "30306",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.morningsidemarket.com/',
      operationHours: 'Saturday, 8AM-11:30AM',
    },
    {
      name: "Peachtree Road Farmers Market",
      address: "2744 Peachtree Rd. NW",
      city: "Atlant",
      state: "GA",
      zip: "30305",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://peachtreeroadfarmersmarket.com/',
      operationHours: 'Saturday, 9AM-12PM, April 7th-December 15th',
    },
    {
      name: "Sandy Springs Farmers Market",
      address: "235 Sandy Springs Circle NW",
      city: "Sandy Springs",
      state: "GA",
      zip: "30328",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://heritagesandysprings.org/3485-2/community-events/hss-farmers-market/',
      operationHours: 'Saturday, 8:30AM-12PM',
    },
    {
      name: "SWOOM-Southwest Outdoor Organic Market",
      address: "Atwood Community Gardens, 779 Atwood St.",
      city: "Atlanta",
      state: "GA",
      zip: "30310",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://herbnfarmatl.locallygrown.net/',
      operationHours: 'Thursday, 4PM-8PM',
    },
    {
      name: "Lawrenceville Farmers Market",
      address: "20 S. Clayton St.",
      city: "Lawrenceville",
      state: "GA",
      zip: "30046",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.soilmate.com/markets/lawrenceville-farmers-market#listing-tabs=hours',
      operationHours: 'Saturday: 12:30PM-4PM',
    },
    {
      name: "Truly Living Well The Market @ Collegetown Farm",
      address: "324 Lawton St. SW",
      city: "Atlanta",
      state: "GA",
      zip: "30310",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.trulylivingwell.com/ctown-market',
      operationHours: 'Friday: 3PM-7:30PM',
    },
    {
      name: "Lilburn Farmers Market",
      address: "1400 Killian Hill Rd SW",
      city: "Lilburn",
      state: "GA",
      zip: "30047",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'http://www.lilburnfarmersmarket.org/',
      operationHours: 'June, July, August: Friday 4PM-8PM',
    },
    {
      name: "Snellville Farmers Market",
      address: "2342 Oak Rd SW",
      city: "Snellville",
      state: "GA",
      zip: "30078",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.snellvillefarmersmarket.com/',
      operationHours: 'October-May: Saturday, 9AM-12PM',
    },
    {
      name: "Suwanee Farmers Market",
      address: "370 Buford Highway",
      city: "Suwanne",
      state: "GA",
      zip: "30024",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'http://www.suwanee.com/explore-suwanee/events/farmers-market',
      operationHours: 'May 12 – October 6, 2018: Saturdays, 8 am-noon, November 2018 – April 2019: Second Saturday of the month, 9-11 am',
    },
    {
      name: "Whistle Stop Farmers Market",
      address: "93 Park Dr.",
      city: "Norcross",
      state: "GA",
      zip: "30071",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.piedmontpark.org/green-market/',
      operationHours: 'Saturday, 9AM-1PM June 2, 9, 16, 23, 30 - July 7, 14, 21, 28 - August 4, 11, 18, 25',
    },
    {
      name: "Paulding County Farm Bureau Farmers Market",
      address: "2515 Marietta Hwy",
      city: "Dallas",
      state: "GA",
      zip: "30157",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.georgiagrown.com/members/profile/paulding-county-farm-bureau-farmers-market',
      operationHours: 'Monday-Friday: 8:30AM-5PM',
    },
    {
      name: "Your Dekalb Farmers Market",
      address: "3000 E. Ponce De Leon Ave.",
      city: "Decatur",
      state: "GA",
      zip: "30030",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'http://www.dekalbfarmersmarket.com/',
      operationHours: 'Daily: 9AM-9PM',
    },
    {
      name: "Buford Highway Farmers Market",
      address: "5600 Buford Hwy NE",
      city: "Doraville",
      state: "GA",
      zip: "30340",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.facebook.com/BufordHighwayFarmersMarket/',
      operationHours: 'Monday-Sunday: 8AM-10PM',
    },
    {
      name: "Municipal Market",
      address: "209 Edgewood Ave SE",
      city: "Atlanta",
      state: "GA",
      zip: "30303",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://municipalmarketatl.com/',
      operationHours: 'Monday-Saturday: 8AM-6PM, Sunday: Noon-5PM',
    },
    {
      name: "Ponce City Farmers Market",
      address: "675 Ponce De Leon Ave NE",
      city: "Atlanta",
      state: "GA",
      zip: "30306",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://cfmatl.org/poncecity/',
      operationHours: 'Tuesday: 4-8PM',
    },
    {
      name: "Westside Provisions District Farmers Market",
      address: "1207 Howell Mill Rd NW",
      city: "Atlanta",
      state: "GA",
      zip: "30318",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.facebook.com/cfmwestside/',
      operationHours: 'Monday-Sunday: 9AM-11PM',
    },
    {
      name: "CT Farmers Market",
      address: "3317 Buford Hwy NE",
      city: "Atlanta",
      state: "GA",
      zip: "30339",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.yelp.com/biz/ct-farmers-market-atlanta',
      operationHours: 'Monday-Sunday:9AM-10PM',
    },
    {
      name: "Nam Dae Mun Farmers Market",
      address: "2350 Spring Rd SE",
      city: "Smyrna",
      state: "GA",
      zip: "30080",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.ndmmarket.com/',
      operationHours: 'Monday-Saturday:9AM-10PM, Sunday: 9:00AM-9:00PM',
    },
    {
      name: "Atlanta State Farmers Market",
      address: "16 Forest Pkwy",
      city: "Forest Park",
      state: "GA",
      zip: "30297",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'http://agr.georgia.gov/atlanta-farmers-market.aspx',
      operationHours: 'Open 24 hours a day, 7 days a week.',
    },
    {
      name: "Lake City International Farmers Market",
      address: "5226 Jonesboro Rd",
      city: "Morrow",
      state: "GA",
      zip: "30260",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.facebook.com/LakeCityMarket/',
      operationHours: 'Monday-Saturday:8:30AM-10PM, Sunday: 8:30AM-9:00PM',
    },
    {
      name: "Midtown Market @ 999 Peachtree",
      address: "999 Peachtree St NE",
      city: "Atlanta",
      state: "GA",
      zip: "30309",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.facebook.com/MidtownMarket',
      operationHours: 'Wednesday, 4PM-7PM',
    },
    {
      name: "The Produce Patch",
      address: "4363 Thompson Mill Rd",
      city: "Buford",
      state: "GA",
      zip: "30519",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.facebook.com/theproducepatch/',
      operationHours: 'Monday-Friday:10AM-6PM, Saturday: 10AM-5PM',
    },
    {
      name: "Nell's Produce Market",
      address: "29850 Nesbit Ferry Rd",
      city: "Alpharetta",
      state: "GA",
      zip: "30022",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.yelp.com/biz/nells-produce-market-alpharetta',
      operationHours: 'Monday-Friday:10AM-6PM, Saturday: 10AM-5PM',
    },
    {
      name: "Canton Street Farmers Market",
      address: "1207 Canton St.",
      city: "Roswell",
      state: "GA",
      zip: "30075",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.facebook.com/CantonStreetFarmersMarket/',
      operationHours: 'Tuesday-Friday:10AM-6PM, Saturday: 9AM-3PM',
    },
    {
      name: "Savannah State Farmers Market",
      address: "701 US Hwy. 80",
      city: "Savannah",
      state: "GA",
      zip: "31408",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.piedmontpark.org/green-market/',
      operationHours: 'Monday-Friday: 9AM-6PM, Saturday: 9AM-5PM, Sunday: Closed',
    },
    {
      name: "Forsyth Farmers Market",
      address: "21 E Park Ave",
      city: "Savannah",
      state: "GA",
      zip: "301401",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://forsythfarmersmarket.com/',
      operationHours: 'Saturday, 9AM-1PM',
    },
    {
      name: "Tifton Farmers Market",
      address: "120 Tift Avenue S",
      city: "Tifton",
      state: "GA",
      zip: "31794",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.georgiagrown.com/members/profile/downtown-tifton-farmers-market',
      operationHours: 'Saturday, 9AM-12:30PM',
    },
    {
      name: "Macon State Farmers Market",
      address: "2055 Eisenhower Parkway",
      city: "Macon",
      state: "GA",
      zip: "31206",
      image: '"http://i66.tinypic.com/2e1en7p.png"',
      website: 'https://www.georgiagrown.com/members/profile/macon-state-farmers-market',
      operationHours: 'Daily, 6AM-10PM'
    },
  ]).then(function (dbMarkets) {
    //COTTON MILL FARMERS MARKET STOCK 
    dbMarkets[0].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.peaches).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.shrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.giantFreshwaterPrawn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.gulfShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.rockShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.tigerPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.spotPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.oysters).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.mussels).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.octopus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.monkfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.seaScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.bayScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.squid).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.escargot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.crayfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.rockLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.lobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.redLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.spinyLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.crab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.dungenessCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.sandCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.kingCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.snowCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.crabLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.caviar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.ikura).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.clams).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.spanishMackerel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.atlanticSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.alaskanSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.catfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.sole).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.tuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.wildAtlanticCod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.alaskanPollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.pollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.haddockFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.cod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.grouper).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.yellowtailTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.tilapia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.swordfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.shark).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.tilefish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.anchovies).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.bass).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.hake).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.halibut).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.herring).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.mahiMahi).then(function () {
      db.sequelize.close();
    });

    dbMarkets[0].createProduct(productSeeds.seaBass).then(function () {
      db.sequelize.close();
    });

    dbMarkets[0].createProduct(productSeeds.redSnapper).then(function () {
      db.sequelize.close();
    });

    dbMarkets[0].createProduct(productSeeds.sturgeon).then(function () {
      db.sequelize.close();
    });

    dbMarkets[0].createProduct(productSeeds.rainbowTrout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[0].createProduct(productSeeds.trout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[0].createProduct(productSeeds.bluefinTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.turbot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.whiting).then(function () {
      db.sequelize.close();
    });


    //KENNESAW FARMERS MARKET STOCK 

    dbMarkets[1].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.shrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.giantFreshwaterPrawn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.gulfShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.rockShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.tigerPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.spotPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.oysters).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.mussels).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.octopus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.monkfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.seaScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.bayScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.squid).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.escargot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.crayfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.rockLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.lobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.redLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.spinyLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.crab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.dungenessCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.sandCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.kingCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.snowCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.crabLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.caviar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.ikura).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.clams).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.spanishMackerel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.atlanticSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.alaskanSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.catfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.sole).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.tuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.wildAtlanticCod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.alaskanPollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.pollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.haddockFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.cod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.grouper).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.yellowtailTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.tilapia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.swordfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.shark).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.tilefish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.anchovies).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.bass).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.hake).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.halibut).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.herring).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.mahiMahi).then(function () {
      db.sequelize.close();
    });

    dbMarkets[1].createProduct(productSeeds.seaBass).then(function () {
      db.sequelize.close();
    });

    dbMarkets[1].createProduct(productSeeds.redSnapper).then(function () {
      db.sequelize.close();
    });

    dbMarkets[1].createProduct(productSeeds.sturgeon).then(function () {
      db.sequelize.close();
    });

    dbMarkets[1].createProduct(productSeeds.rainbowTrout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[1].createProduct(productSeeds.trout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[1].createProduct(productSeeds.bluefinTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.turbot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[1].createProduct(productSeeds.whiting).then(function () {
      db.sequelize.close();
    });
   

    dbMarkets[2].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
   
    dbMarkets[2].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[2].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[2].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[2].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[2].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   
    //SELECT FARMERS MARKET STOCK 

    dbMarkets[3].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[3].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[3].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[3].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[3].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   
    


    //WOODSTOCK FARMERS MARKET STOCK 

    dbMarkets[4].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });

    dbMarkets[4].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[4].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[4].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[4].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[4].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   


    //SMYRNA FARMERS MARKET STOCK 

    dbMarkets[5].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });
  


    //COWETA COUNTY FARMERS MARKET STOCK 

    dbMarkets[6].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    


    //BROOKHAVEN FARMERS MARKET STOCK 

    dbMarkets[7].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[7].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });


    //CHAMBLEE TUCKER FARMERS MARKET STOCK 

    dbMarkets[8].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[8].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });


    //CLARKSTON FARMERS MARKET STOCK 

    dbMarkets[9].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[9].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    

    //DECATUR FARMERS MARKET STOCK 

    dbMarkets[10].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkBelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chumbChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkshoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkFillet).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkCheeks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.bacon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.ribChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.porkRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chickenWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chickenDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.bonelessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.skinlessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chickenLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.bonelessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.skinlessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chickenNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[10].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[10].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[10].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[10].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   



    //DUNWOODY GREEN MARKET STOCK 

    dbMarkets[11].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.shrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.giantFreshwaterPrawn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.gulfShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.rockShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.tigerPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.spotPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.oysters).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.mussels).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.octopus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.monkfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.seaScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.bayScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.squid).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.escargot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.crayfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.rockLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.lobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.redLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.spinyLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.crab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.dungenessCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.sandCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.kingCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.snowCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.crabLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.caviar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.ikura).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.clams).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.spanishMackerel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.atlanticSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.alaskanSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.catfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.sole).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.tuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.wildAtlanticCod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.alaskanPollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.pollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.haddockFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.cod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.grouper).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.yellowtailTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.tilapia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.swordfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.shark).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.tilefish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.anchovies).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.bass).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.hake).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.halibut).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.herring).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.mahiMahi).then(function () {
      db.sequelize.close();
    });

    dbMarkets[11].createProduct(productSeeds.seaBass).then(function () {
      db.sequelize.close();
    });

    dbMarkets[11].createProduct(productSeeds.redSnapper).then(function () {
      db.sequelize.close();
    });

    dbMarkets[11].createProduct(productSeeds.sturgeon).then(function () {
      db.sequelize.close();
    });

    dbMarkets[11].createProduct(productSeeds.rainbowTrout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[11].createProduct(productSeeds.trout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[11].createProduct(productSeeds.bluefinTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.turbot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[11].createProduct(productSeeds.whiting).then(function () {
      db.sequelize.close();
    });

    //EAST ATLANTA VILLAGE FARMERS MARKET STOCK 

    dbMarkets[12].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[12].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[12].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[12].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[12].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   

    //TUCKER FARMERS MARKET STOCK 

    dbMarkets[13].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });

    dbMarkets[13].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[13].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    


    //Peachtree City FARMERS MARKET STOCK 

    dbMarkets[14].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[14].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[14].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[14].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[14].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[14].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
     


    //Alpharetta FARMERS MARKET STOCK 

    dbMarkets[15].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[15].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[15].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[15].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[15].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[15].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
  


    //CUMMING FARMERS MARKET STOCK 

    dbMarkets[16].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkBelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chumbChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkshoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkFillet).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkCheeks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.bacon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.ribChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.porkRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chickenWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chickenDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.bonelessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.skinlessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chickenLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.bonelessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.skinlessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chickenNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[16].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });

    //EAST LAKE FARMERS MARKET STOCK 

    dbMarkets[17].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[17].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });

    //EAST POINT FARMERS MARKET STOCK 

    dbMarkets[18].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });

    dbMarkets[18].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[18].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    


    //GRANT PARK FARMERS MARKET STOCK 

    dbMarkets[19].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[19].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[19].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[19].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[19].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[19].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
   


    //HENRY COUNTY FARMERS MARKET STOCK 

    dbMarkets[20].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkBelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chumbChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkshoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkFillet).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkCheeks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.bacon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.ribChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.porkRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chickenWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chickenDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.bonelessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.skinlessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chickenLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.bonelessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.skinlessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chickenNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[20].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });

    //GREEN MARKET AT PIEDMONT PARK STOCK 

    dbMarkets[21].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.shrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.giantFreshwaterPrawn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.gulfShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.rockShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.tigerPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.spotPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.oysters).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.mussels).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.octopus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.monkfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.seaScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.bayScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.squid).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.escargot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.crayfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.rockLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.lobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.redLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.spinyLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.crab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.dungenessCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.sandCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.kingCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.snowCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.crabLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.caviar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.ikura).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.clams).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.spanishMackerel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.atlanticSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.alaskanSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.catfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.sole).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.tuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.wildAtlanticCod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.alaskanPollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.pollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.haddockFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.cod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.grouper).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.yellowtailTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.tilapia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.swordfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.shark).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.tilefish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.anchovies).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.bass).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.hake).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.halibut).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.herring).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.mahiMahi).then(function () {
      db.sequelize.close();
    });

    dbMarkets[21].createProduct(productSeeds.seaBass).then(function () {
      db.sequelize.close();
    });

    dbMarkets[21].createProduct(productSeeds.redSnapper).then(function () {
      db.sequelize.close();
    });

    dbMarkets[21].createProduct(productSeeds.sturgeon).then(function () {
      db.sequelize.close();
    });

    dbMarkets[21].createProduct(productSeeds.rainbowTrout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[21].createProduct(productSeeds.trout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[21].createProduct(productSeeds.bluefinTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.turbot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[21].createProduct(productSeeds.whiting).then(function () {
      db.sequelize.close();
    });

    //MORNINGSIDE FARMERS MARKET STOCK 

    dbMarkets[22].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[22].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[22].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[2].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[22].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   
    


    //PEACHTREE ROAD FARMERS MARKET STOCK 

    dbMarkets[23].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[23].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });

    //SANDY SPRINGS FARMERS MARKET STOCK 

    dbMarkets[24].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[24].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });


    //SWOOM-Southwest Outdoor Organic Market STOCK 

    dbMarkets[25].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });

    dbMarkets[25].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[6].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[25].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    


    //LAWRENCEVILLE FARMERS MARKET STOCK 

    dbMarkets[26].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkBelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chumbChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkshoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkFillet).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkCheeks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.bacon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.ribChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.porkRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chickenWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chickenDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.bonelessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.skinlessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chickenLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.bonelessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.skinlessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chickenNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[26].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });


    //TRULY LIVING WELL FARMERS MARKET STOCK 

    dbMarkets[27].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[27].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[27].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[27].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[27].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   


    //LILBURN FARMERS MARKET STOCK 

    dbMarkets[28].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[28].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[28].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[28].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[28].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[28].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
   



    //SNELLVILLE MARKET STOCK 

    dbMarkets[29].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.shrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.giantFreshwaterPrawn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.gulfShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.rockShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.tigerPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.spotPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.oysters).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.mussels).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.octopus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.monkfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.seaScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.bayScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.squid).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.escargot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.crayfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.rockLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.lobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.redLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.spinyLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.crab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.dungenessCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.sandCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.kingCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.snowCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.crabLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.caviar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.ikura).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.clams).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.spanishMackerel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.atlanticSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[0].createProduct(productSeeds.alaskanSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.catfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.sole).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.tuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.wildAtlanticCod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.alaskanPollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.pollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.haddockFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.cod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.grouper).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.yellowtailTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.tilapia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.swordfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.shark).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.tilefish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.anchovies).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.bass).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.hake).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.halibut).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.herring).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.mahiMahi).then(function () {
      db.sequelize.close();
    });

    dbMarkets[29].createProduct(productSeeds.seaBass).then(function () {
      db.sequelize.close();
    });

    dbMarkets[29].createProduct(productSeeds.redSnapper).then(function () {
      db.sequelize.close();
    });

    dbMarkets[29].createProduct(productSeeds.sturgeon).then(function () {
      db.sequelize.close();
    });

    dbMarkets[29].createProduct(productSeeds.rainbowTrout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[29].createProduct(productSeeds.trout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[29].createProduct(productSeeds.bluefinTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.turbot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[29].createProduct(productSeeds.whiting).then(function () {
      db.sequelize.close();
    });

    //SUWANEE FARMERS MARKET STOCK 

    dbMarkets[30].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[30].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });

    //WHISTLE STOP FARMERS MARKET STOCK 

    dbMarkets[31].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkBelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chumbChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkshoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkFillet).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkCheeks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.bacon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.ribChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.porkRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chickenWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chickenDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.bonelessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.skinlessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chickenLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.bonelessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.skinlessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chickenNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[31].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });

    //PAULDING COUNTY FARM BUREAU FARMERS MARKET STOCK 

    dbMarkets[32].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });

    dbMarkets[32].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[32].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[32].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[32].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[32].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[32].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
   


    //YOUR DEKALB FARMERS MARKET STOCK 

    dbMarkets[33].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[33].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });


    //BUFORD HIGHWAY FARMERS MARKET STOCK 

    dbMarkets[34].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[34].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    

    //MUNICIPAL FARMERS MARKET STOCK 

    dbMarkets[35].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[35].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });


    //PONCE CITY FARMERS MARKET STOCK 

    dbMarkets[36].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[36].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[36].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[36].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[36].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[36].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[36].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[36].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[36].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   



    //WESTSIDE PROVISIONS DISTRICT FARMERS MARKET STOCK 

    dbMarkets[37].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.shrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.giantFreshwaterPrawn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.gulfShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.rockShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.tigerPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.spotPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.oysters).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.mussels).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.octopus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.monkfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.seaScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.bayScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.squid).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.escargot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.crayfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.rockLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.redLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.spinyLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.crab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.dungenessCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.sandCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.kingCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.snowCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.crabLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.caviar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.ikura).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.clams).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.spanishMackerel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.atlanticSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.alaskanSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.catfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.sole).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.tuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.wildAtlanticCod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.alaskanPollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.pollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.haddockFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.cod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.grouper).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.yellowtailTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.tilapia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.swordfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.shark).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.tilefish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.anchovies).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.bass).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.hake).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.halibut).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.herring).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.mahiMahi).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.seaBass).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.redSnapper).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.sturgeon).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.rainbowTrout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.trout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.bluefinTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turbot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.whiting).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[37].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[37].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
   


    //CT FARMERS MARKET STOCK 

    dbMarkets[38].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[38].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[5].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });


    //NAM DAE MUN FARMERS MARKET STOCK 

    dbMarkets[39].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[39].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    

    //ATLANTA STATE FARMERS MARKET STOCK 

    dbMarkets[40].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[40].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });


    //LAKE CITY INTERNATIONAL FARMERS MARKET STOCK 

    dbMarkets[41].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });

    dbMarkets[41].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkBelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chumbChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkshoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkFillet).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkCheeks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.bacon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.ribChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.porkRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chickenWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chickenDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.bonelessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.skinlessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chickenLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.bonelessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.skinlessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chickenNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[41].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });


    //MIDTOWN MARKET @ 999 PEACHTREE FARMERS MARKET STOCK 

    dbMarkets[42].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.shrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.giantFreshwaterPrawn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.gulfShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.rockShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.tigerPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.spotPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.oysters).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.mussels).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.octopus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.monkfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.seaScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.bayScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.squid).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.escargot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.crayfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.rockLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.redLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.spinyLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.crab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.dungenessCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.sandCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.kingCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.snowCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.crabLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.caviar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.ikura).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.clams).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.spanishMackerel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.atlanticSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.alaskanSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.catfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.sole).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.tuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.wildAtlanticCod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.alaskanPollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.pollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.haddockFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.cod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.grouper).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.yellowtailTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.tilapia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.swordfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.shark).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.tilefish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.anchovies).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.bass).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.hake).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.halibut).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.herring).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.mahiMahi).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.seaBass).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.redSnapper).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.sturgeon).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.rainbowTrout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.trout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.bluefinTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turbot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.whiting).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[42].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[42].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
   


    //THE PRODUCT PATCH STOCK 

    dbMarkets[43].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.ribRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.ribSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.ribeyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.ribeyeSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.ribs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.brisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.skirtSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.flankSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.chuckEyeRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.shortRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.tinderRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.steakMedallions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.tboneSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.porterhouseSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.tenderloinRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.filletMignon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.topSirloinSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.bottomRoundSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.topRoast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[43].createProduct(productSeeds.groundBeef).then(function () {
      db.sequelize.close();
    });
    
    


    //NELL'S PRODUCT MARKET STOCK 

    dbMarkets[44].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });

    dbMarkets[44].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[44].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[44].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[44].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[44].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[44].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
   

    //CANTON STREET FARMERS MARKET STOCK 

    dbMarkets[45].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkBelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chumbChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkshoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkFillet).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkCheeks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.bacon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.ribChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.porkRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chickenWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chickenDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.bonelessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.skinlessChickenBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chickenLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.bonelessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.skinlessChickenThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chickenNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[45].createProduct(productSeeds.chickenDrumsticks).then(function () {
      db.sequelize.close();
    });

    //SAVANNAH STATE FARMERS MARKET STOCK 

    dbMarkets[46].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.aishMerahrah).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.anpan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.bagel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.bagelCinnamonRaisin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.bagelBlueberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.baguette).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.brioche).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.naan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.rye).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.sourdough).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.ciabatta).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.croissant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.focaccia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.tortillaCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.tortillaFlour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.potatoBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.tandoor).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.wholeWheat).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.pumpernickel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.fldenBread).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.challa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.laffa).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.babka).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.lavash).then(function () {
      db.sequelize.close();

    dbMarkets[46].createProduct(productSeeds.injera).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.panDulce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.bolillos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.conchas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.bauernbrot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.blackberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.strawberryPreserves).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.orangeMarmalade).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.grapeJellyConcord).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.blueberryJam).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.appleJelly).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.appleButter).then(function () {
      db.sequelize.close();
    });

    dbMarkets[46].createProduct(productSeeds.honey).then(function () {
      db.sequelize.close();
    });

    dbMarkets[46].createProduct(productSeeds.veganCreamCheese).then(function () {
      db.sequelize.close();
    });

    dbMarkets[46].createProduct(productSeeds.veganParmesan).then(function () {
      db.sequelize.close();
    });
    dbMarkets[46].createProduct(productSeeds.veganRicotta).then(function () {
      db.sequelize.close();
    });
   


    //FORSYTH FARMERS MARKET STOCK 

    dbMarkets[47].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.shrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.giantFreshwaterPrawn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.gulfShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.rockShrimp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.tigerPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.spotPrawns).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.oysters).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.mussels).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.octopus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.monkfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.seaScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.bayScallop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.squid).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.escargot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.crayfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.rockLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.lobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.redLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.spinyLobster).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.crab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.dungenessCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.sandCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.kingCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.snowCrab).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.crabLegs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.caviar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.ikura).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.clams).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.spanishMackerel).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.atlanticSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.alaskanSalmon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.catfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.sole).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.tuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.wildAtlanticCod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.alaskanPollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.pollock).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.flounder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.haddockFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.cod).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.grouper).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.yellowtailTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.tilapia).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.swordfish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.shark).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.tilefish).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.anchovies).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.bass).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.hake).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.halibut).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.herring).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.mahiMahi).then(function () {
      db.sequelize.close();
    });

    dbMarkets[47].createProduct(productSeeds.seaBass).then(function () {
      db.sequelize.close();
    });

    dbMarkets[47].createProduct(productSeeds.redSnapper).then(function () {
      db.sequelize.close();
    });

    dbMarkets[47].createProduct(productSeeds.sturgeon).then(function () {
      db.sequelize.close();
    });

    dbMarkets[47].createProduct(productSeeds.rainbowTrout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[47].createProduct(productSeeds.trout).then(function () {
      db.sequelize.close();
    });

    dbMarkets[47].createProduct(productSeeds.bluefinTuna).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.turbot).then(function () {
      db.sequelize.close();
    });
    dbMarkets[47].createProduct(productSeeds.whiting).then(function () {
      db.sequelize.close();
    });


    //TIFTON FARMERS MARKET STOCK 

    dbMarkets[48].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.stilton).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.roquefort).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.maytag).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.pointReyes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.brie).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.cheddarmild).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.cheddarSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.cheddarExtraSharp).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.gruyere).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.havarti).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.gouda).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.mozzarella).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.mozzarellaBuffaloMilk).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.parmegianoReggiano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.havartiJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.swiss).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.swissBaby).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.pecorinoRomano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.granapadano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.provolone).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.goatCheeseHard).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.goatCheeseSoft).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.asiago).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.castigliano).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.montereyJack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.quesoBlanco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.quesoFresco).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.quesoJalapeno).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.oaxaca).then(function () {
      db.sequelize.close();
    });
    dbMarkets[48].createProduct(productSeeds.canastra).then(function () {
      db.sequelize.close();
    });


    //MACON STATE FARMERS MARKET STOCK 

    dbMarkets[49].createProduct(productSeeds.broccoli).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.tomatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.potatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.onions).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.eggplant).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.Cucumber).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.sweetPotatoes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.artichokes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.iceburgLettuce).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.greenPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.asparagus).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.bellPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.brusselSprouts).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.heartOfPalm).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.jalapenoPeppers).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.blackEyedPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.englishPeas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.greenBeans).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.yellowCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.whiteCorn).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.redApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.goldenDeliciousApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.grannySmithApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.galaApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.fujiApples).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.Bananas).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.strawberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.grapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.navelOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.tangelos).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.hamlinOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.valenciaOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.bloodOranges).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lemons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.limes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.mandarinOranges).then(function () {
      db.sequelize.close();
    });

    dbMarkets[49].createProduct(productSeeds.cantaloupe).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.pear).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.pineapple).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.plum).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.watermelon).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.raisins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.apricots).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.prunes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.grapefruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.honeyDewMelons).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.pomegranate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.kiwi).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.starFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.mango).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.papaya).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.avocado).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.passionFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.guava).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.pumpkin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.durian).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.dragonFruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.cherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.blackCherry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.blueberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.raspberries).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.whiteGrapes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.fig).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.plantains).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.jackfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.date).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.cranberriesFresh).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.cranberriesDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.cherrySour).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.clementine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.nectarine).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.plumDried).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.plumSugar).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.breadfruit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.blackberry).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonTenderloins).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonFrontShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonBrisket).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonRibs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonRearShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonRump).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonForeleg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonFlank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.venisonSirloinTop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkeyNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkeyTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkeyBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkeyDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkeyTip).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkeyThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkeyDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.chickenLiver).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.chickenHeart).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkeyWings).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.chickenGiblets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.turkey).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.wholeChicken).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.foieGras).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckConfit).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckWingettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckPate).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckNeck).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckDrumsticks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckDrumettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckTenderloin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckBreast).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.duckThighs).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.vealShank).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.vealLeg).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.vealLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.vealShortLoin).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.vealShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.vealRack).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.mincedLamb).then(function () {
      db.sequelize.close();
    });

    dbMarkets[49].createProduct(productSeeds.lambShank).then(function () {
      db.sequelize.close();
    });

    dbMarkets[49].createProduct(productSeeds.lambChop).then(function () {
      db.sequelize.close();
    });

    dbMarkets[49].createProduct(productSeeds.lambCutlets).then(function () {
      db.sequelize.close();
    });

    dbMarkets[49].createProduct(productSeeds.lambShoulderSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.rackOfLamb).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lambFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.bonelessRolledLambShoulder).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lambRumpSteak).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lambNoisettes).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lambLegSteaks).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lambNeckFillets).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lambBamsleyChop).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lambDice).then(function () {
      db.sequelize.close();
    });
    dbMarkets[49].createProduct(productSeeds.lambKnuckles).then(function () {
      db.sequelize.close();
    });
  });
});
});
  
