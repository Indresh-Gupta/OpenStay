

  const sampleListings = [
    {
        title: "Cozy Beachfront Cottage in Goa",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Goa",
        country: "India",
    },
    {
        title: "Modern Loft in Mumbai",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Mumbai",
        country: "India",
    },
    {
        title: "Mountain Retreat in Shimla",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Shimla",
        country: "India",
    },
    {
        title: "Historic Haveli in Jaipur",
        description:
            "Experience the charm of Rajasthan in this beautifully restored haveli. Explore the vibrant city and its heritage.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Jaipur",
        country: "India",
    },
    {
        title: "Treehouse Getaway in Wayanad",
        description:
            "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Wayanad",
        country: "India",
    },
    {
        title: "Beachfront Paradise in Kerala",
        description:
            "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Kerala",
        country: "India",
    },
    {
        title: "Rustic Cabin by the Lake in Udaipur",
        description:
            "Spend your days fishing and boating on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Udaipur",
        country: "India",
    },
    {
        title: "Luxury Penthouse with City Views in Bengaluru",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Bengaluru",
        country: "India",
    },
    {
      title: "Heritage Home in Varanasi",
      description:
          "Stay in a heritage home in the spiritual capital of India. Enjoy the cultural richness and visit the iconic ghats.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1602928701893-dcc047327c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFyYW5hc2klMjBnaGF0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Varanasi",
      country: "India",
  },
  {
      title: "Desert Camp in Jaisalmer",
      description:
          "Experience the magic of the Thar Desert with a stay in a luxurious desert camp. Enjoy camel rides and cultural performances.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1614850323907-ec4c34852ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphaXNhbG1lciUyMGRlc2VydCUyMGNhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Jaisalmer",
      country: "India",
  },
  {
      title: "Tea Estate Bungalow in Darjeeling",
      description:
          "Stay amidst lush tea gardens in this beautiful bungalow. Wake up to the aroma of fresh tea and breathtaking views.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1613762854618-f45e1cfbda2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyamVlbGluZyUyMHRlYSUyMGdhcmRlblxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Darjeeling",
      country: "India",
  },
  {
      title: "Riverfront Villa in Alleppey",
      description:
          "Relax in this luxurious villa by the backwaters of Kerala. Perfect for a serene and picturesque getaway.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1514899193257-a3a8e4b360d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtlcmFsYSUyMGJhY2t3YXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Alleppey",
      country: "India",
  },
  {
      title: "Hilltop Chalet in Munnar",
      description:
          "Enjoy the panoramic views of Munnar's hills from this cozy hilltop chalet. A perfect spot for a romantic getaway.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1613738150476-1e2424db13dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVubmFyJTIwaGlsbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1400,
      location: "Munnar",
      country: "India",
  },
  {
      title: "Lakeview Cottage in Nainital",
      description:
          "Stay by the serene Naini Lake in this charming cottage. Enjoy boating and exploring the town's beauty.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1566478988194-cf9d5002c32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5haW5pdGFsJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1300,
      location: "Nainital",
      country: "India",
  },
  {
      title: "Seaside Villa in Chennai",
      description:
          "This seaside villa offers stunning views of the Bay of Bengal. Enjoy the sunrise and cool sea breeze.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1598227879704-3b4d0d8fb66e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbm5haSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1700,
      location: "Chennai",
      country: "India",
  },
  {
      title: "Boutique Guesthouse in Pondicherry",
      description:
          "Discover the French-inspired charm of Pondicherry in this boutique guesthouse. Close to the beach and local cafes.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1586882393658-4b6b5f8d6979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9uZGljaGVycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1900,
      location: "Pondicherry",
      country: "India",
  },
  
    {
        title: "Cozy Cottage in Shimla",
        description: "Relax in the serene hills of Shimla with breathtaking views and fresh mountain air.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566478988194-cf9d5002c32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Shimla",
        country: "India",
    },
    {
        title: "Beachfront Bungalow in Goa",
        description: "Enjoy the sandy beaches and vibrant nightlife of Goa in this beautiful bungalow.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1565614218082-531f41b17b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Goa",
        country: "India",
    },
    {
        title: "Heritage Home in Jaipur",
        description: "Stay in a royal palace-inspired home in the Pink City of Jaipur, Rajasthan.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1574168786587-7e1e1a2c9d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyJTIwaGVyaXRhZ2UlMjBmb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Jaipur",
        country: "India",
    },
    {
        title: "Houseboat in Srinagar",
        description: "Experience the beauty of Dal Lake from a traditional Kashmiri houseboat.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1565647050218-dc02ab1e4d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luaGFnYXIlMjBob3VzZWJvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Srinagar",
        country: "India",
    },
    {
        title: "Luxury Apartment in Mumbai",
        description: "Stay in the heart of Mumbai with all modern amenities and a spectacular city view.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1579881749074-4fb63ec48a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpJTIwYXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Mumbai",
        country: "India",
    },
    {
        title: "Forest Retreat in Coorg",
        description: "Stay amidst the lush coffee plantations of Coorg in this serene retreat.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1625130841731-8d3fba5b3913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29vcmclMjBjb2ZmZWUlMjBwbGFudGF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Coorg",
        country: "India",
    },
    {
        title: "Mountain Cabin in Manali",
        description: "Enjoy the snow-clad peaks and peaceful vibes of Manali in this cozy cabin.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1624521479734-1a1e9c42571f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpJTIwbW91bnRhaW4lMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1400,
        location: "Manali",
        country: "India",
    },
    {
        title: "Cultural Haveli in Udaipur",
        description: "Live the royal life in this lakeside haveli in Udaipur with traditional Rajasthani decor.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1588473999609-fb4af3e147c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1ciUyMGhhdmVsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Udaipur",
        country: "India",
    },
    {
        title: "Treehouse in Wayanad",
        description: "Reconnect with nature in this unique treehouse stay in the lush forests of Wayanad.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600080882462-2b2b3a08b153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZWhvdXNlJTIwd2F5YW5hZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1700,
        location: "Wayanad",
        country: "India",
    },
    {
        title: "Desert Camp in Jaisalmer",
        description: "Experience the magic of the Thar Desert with a stay in a luxurious desert camp.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1614850323907-ec4c34852ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphaXNhbG1lciUyMGRlc2VydCUyMGNhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Jaisalmer",
        country: "India",
    },
    {
        title: "Tea Estate Bungalow in Darjeeling",
        description: "Stay amidst lush tea gardens in this beautiful bungalow.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613762854618-f45e1cfbda2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyamVlbGluZyUyMHRlYSUyMGdhcmRlblxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Darjeeling",
        country: "India",
    },
    // Add more listings as needed...
  ];
  
  module.exports = { data: sampleListings };