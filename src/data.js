export default [
    {
        id: 1,
        city: "Coquitlam",
        title: "Mundy Park",
        description: "Mundy Park off-leash dog park has a large fenced enclosure, a smaller fenced enclosure for small dogs and off-leash trails. It is located on Mariner Drive between Como Lake Avenue and Austin Avenue. It's on the southern slope and has beautiful views of the Fraser River and the Port Mann Bridge.",
        parking: "There is a small parking lot at Mundy Park. As the park is very popular the parking lot is often busy and full.",
        coverImg: "mundycover.jpg",
        additionalImg: [
            {src: "mundy1.jpg", alt: "dogs at mundy"}, 
            {src: "mundy2.jpg", alt: "dogs at mundy"}, 
            {src: "mundy3.jpg", alt: "dogs at mundy"},
            {src: "mundy4.jpg", alt: "dogs at mundy"}, 
            {src: "mundy5.jpg", alt: "dogs at mundy"}
        ],
        stats: {
            rating: 5.0,
            reviewCount: 18,
            visits: 32
        },
        location: {
            lat: 49.25281175491787,
            lng: -122.81645190370614
        },
        URL: "https://www.google.com/maps/place/Mundy+Park+Off+Leash+Dog+Park/@49.2524476,-122.8163017,15z/data=!4m2!3m1!1s0x0:0x49e991325243b83a?sa=X&ved=2ahUKEwjnvf7Pxu37AhWgHjQIHQPdDk4Q_BJ6BQiCARAI" ,
        features: ["smalldogs", "water", "fence", "hiking"],
        smalldogs: true,
        water: true,
        fence: true,
        offLeashWandering: true,
        isFavourite: true,
    },
      {
          id: 2,
          city: "Coquitlam",
          title: "Glen Pine",
          description: "This off-leash dog park in Coquitlam is located just down the road from Lafarge Lake.  It has a large fenced enclosure and a separate small-dog fenced enclosure.",
          parking: "There is plenty of parking in the parking lot off of Westwood Street as well as street parking on Pipeline Road.",
          price: 0,
          coverImg: "glenpine2.jpg",
          additionalImg: "mundy1.jpg",
          stats: {
              rating: 4.2,
              reviewCount: 30,
              visits: 121,
          },
          location: {
            lat: 49.28170139086465, 
            lng: -122.78734362698307
        },
          URL: "https://www.google.com/maps/place/Glen+Park+Off-Leash+Dog+Area/@49.2816454,-122.787408,15z/data=!4m2!3m1!1s0x0:0xb643703b82181da2?sa=X&ved=2ahUKEwiUn6mxx-37AhWaAjQIHc28B2QQ_BJ6BAhvEAg",
          features: ["smalldogs", "fence"],
          smalldogs: true,
          water: false,
          fence: true,
          offLeashWandering: false,
          isFavourite: false,
      },
      {
          id: 3,
          city: "downtown",
          title: "dog swim vancouver",
          description: "Swimming is a great way for your dog to exercise and have fun. We offer a clean, safe and modern alternative to taking your dog down to the beach. We are open all year round so you can treat your dog to a fun swim session no matter what season it is.",
          parking: "Parking is available at 2213 Granville St.",
          price: 50,
          coverImg: "dogswim.jpg",
          additionalImg: "mundy1.jpg",
          stats: {
              rating: 4.5,
              reviewCount: 87,
              visits: 0
          },
          location: {
            lat: 49.25281175491787,
            lng: -122.81645190370614
        },
          URL: "https://www.google.com/search?q=dog+swim+vancouver&rlz=1C1VIQF_enCA992CA992&biw=2133&bih=1004&tbm=lcl&sxsrf=ALiCzsZ9NMnq5F42cbFwMey8fQ8V3sLkng%3A1670624092503&ei=XLOTY4eyHqmO0PEP16WZ-A0&oq=dog+swim&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMYADIECAAQQzIICAAQgAQQyQMyBQgAEJIDMgUIABCRAjIECAAQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOgcIABDJAxBDOhAIABCABBCHAhCxAxCDARAUOgoIABCABBCHAhAUOggIABDJAxCRAlAAWOQHYJAPaABwAHgAgAGBAYgBhwWSAQM3LjGYAQCgAQHAAQE&sclient=gws-wiz-local",
          features: ["smalldogs", "water", "fence"],
          smalldogs: true,
          water: true,
          fence: true,
          offLeashWandering: false,
          isFavourite: true,
      },
      {
        id: 4,
        city: "furry creek",
        title: "knob deck trail",
        description: "Swimming is a great way for your dog to exercise and have fun. We offer a clean, safe and modern alternative to taking your dog down to the beach. We are open all year round so you can treat your dog to a fun swim session no matter what season it is.",
        price: 0,
        coverImg: "furrycreek.jpg",
        additionalImg: "knobcreek1.jpg",
        stats: {
            rating: 10,
            reviewCount: 1,
            visits: 1
        },
        location: {
            lat: 49.25281175491787,
            lng: -122.81645190370614
        },
        URL: "https://www.alltrails.com/explore/recording/evening-hike-at-furry-creek-knob-deck-trail-798cebc",
        features: ["hiking"],
        smalldogs: false,
        water: false,
        fence: false,
        offLeashWandering: true,
        isFavourite: true,
    },
    {
        id: 5,
        city: "coquitlam",
        title: "lafarge lake",
        description: "The geese poop is frustrating with a puppy.",
        price: 0,
        coverImg: "lafarge.jpg",
        additionalImg: "lafarge1.jpg",
        stats: {
            rating: 3.5,
            reviewCount: 6,
            visits: 6
        },
        location: {
            lat: 49.25281175491787,
            lng: -122.81645190370614
        },
        URL: "https://www.google.com/maps/place/Lafarge+Lake,+Coquitlam,+BC/data=!4m2!3m1!1s0x54867f3ab0bd1c87:0x80dbe5abad867d41?sa=X&ved=2ahUKEwicgIDhzu37AhXKoFsKHXvkBv0Q8gF6BQiDARAB",
        features: ["hiking"]
    },
    {
        id: 6,
        city: "port coquitlam",
        title: "castle offleash area",
        description: "The off-leash dog park at Castle Park is a large, unfenced grass field.",
        price: 0,
        coverImg: "castlepark.jpg",
        additionalImg: "mundy1.jpg",
        stats: {
            rating: 4.1,
            reviewCount: 1,
            visits: 1
        },
        location: {
            lat: 49.25281175491787,
            lng: -122.81645190370614
        },
        URL: "https://www.google.com/maps/place/Castle+Park+Off-leash+Dog+Area/@49.2309884,-122.7814515,15z/data=!4m2!3m1!1s0x0:0xba75c33c25a8cadd?sa=X&ved=2ahUKEwj3opaA6Pn7AhXdHzQIHabtARQQ_BJ6BAhzEAg",
        features: ["water", "smalldogs", "fence"],
        isFavourite: false,
    },
    {
        id: 7,
        city: "burnaby",
        title: "barnet marine park",
        description: "The off-leash dog park at Castle Park is a large, unfenced grass field.",
        price: 0,
        coverImg: "barnetmarine.jpg",
        stats: {
            rating: 4.9,
            reviewCount: 6,
            visits: 25
        },
        location: {
            lat: 49.25281175491787,
            lng: -122.81645190370614
        },
        URL: "https://www.google.com/maps/place/Barnet+Marine+Park/@49.2904319,-122.9237377,15z/data=!4m2!3m1!1s0x0:0x2790e0339c216d11?sa=X&ved=2ahUKEwjS8t6d5f77AhXKIzQIHXsXBYwQ_BJ6BQiDARAI",
        features: ["water", "hiking"],
        smalldogs: false,
        water: true,
        fence: false,
        offLeashWandering: true,
        isFavourite: false,
    },
    {
        id: 8,
        city: "port coquitlam",
        title: "skyline park",
        description: "Located under the power lines, Skyline Dog Park is an unfenced grassy area with a neighbourhood path running through it.",
        price: 0,
        coverImg: "skyline.jpg",
        stats: {
            rating: 0,
            reviewCount: 0,
            visits: 1
        },
        location: {
            lat: 20,
            lng: -10
        },
        URL: "https://www.google.com/maps/place/Skyline+Park+Off-leash+Dog+Area/@49.2387863,-122.7860322,15z/data=!4m5!3m4!1s0x0:0xa2240ca38f6dd814!8m2!3d49.2387863!4d-122.7860322",
        features: ["bananas"],
        isFavourite: "",
    },
    {
        id: 9,
        city: "coquitlam",
        title: "Leigh Park Off-Leash Dog Park",
        description: "Leigh Park Off-Leash Dog Park has a large, fully fenced and gated enclosure with a gravel base. Street parking is available on Soball Street.",
        price: 0,
        coverImg: "leighpark.jpg",
        stats: {
            rating: 3.4,
            reviewCount: 1,
            visits: 1
        },
        location: {
            lat: 20,
            lng: -10
        },
        URL: "https://www.gohttps://www.google.com/maps/place/Leigh+Park+Off-Leash+Dog+Area/@49.2878731,-122.7509211,15z/data=!4m2!3m1!1s0x0:0x8112693070c0d60?sa=X&ved=2ahUKEwjy2dG41oT8AhW1GTQIHSxQDgcQ_BJ6BAhqEAgogle.com/maps/place/Skyline+Park+Off-leash+Dog+Area/@49.2387863,-122.7860322,15z/data=!4m5!3m4!1s0x0:0xa2240ca38f6dd814!8m2!3d49.2387863!4d-122.7860322",
        features: ["smalldogs", "water", "fence"],
        smalldogs: true,
        water: true,
        fence: true,
        offLeashWandering: false,
        isFavourite: false,
    }
]