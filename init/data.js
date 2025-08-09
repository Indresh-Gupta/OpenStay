const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:[
     {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1742307385611-f69c371dd9b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558277872-bb3f50054da2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
  ],
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1658046006173-84fb8288ad4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1675494051330-d998125ebf73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558277872-bb3f50054da2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1712935547875-4513c8185798?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxob3RlbCUyMGltYWdlJTIwZnJvbSUyMG91dHNpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657639754502-3c138cb24b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsJTIwYmVkcm9vbWltYWdlJTIwZnJvbSUyMG91dHNpZGV8ZW58MHx8MHx8fDA%3D"
    }

  ],
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:[
       {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1546550519-859494216c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721743162939-808441f8db18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617228154841-0b8a2eb64c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593908521791-b5b4993bf477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:[ 
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1588133017752-9b5d40ecf730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539357281591-de6681e73e78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1643913592251-3f256e90ec0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1663051217428-4d7e24bf1056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1651804279611-a0b8b4bdb4f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1631048835031-a69408a86480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1722764372202-b8ae35e7d424?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676319481570-9a95202f8d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1722606485875-9a32dc688f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/flagged/photo-1582108074095-1730ef6caec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676320514025-c365ab8289b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: [
      {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1223072133/photo/cityscape-of-a-residential-area-with-modern-apartment-buildings-new-green-urban-landscape-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=yBDWGBpw56cPhqh5bMK5QDcIxnmQWlK-x3LL65Dp1w4=",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1675494051330-d998125ebf73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558277872-bb3f50054da2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }

  ],
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1640012324438-c935f971b311?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjBpbWFnZSUyMGZyb20lMjBvdXRzaWRlfGVufDB8fDB8fHww",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1675494051330-d998125ebf73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558277872-bb3f50054da2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1712935547875-4513c8185798?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxob3RlbCUyMGltYWdlJTIwZnJvbSUyMG91dHNpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657639754502-3c138cb24b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsJTIwYmVkcm9vbWltYWdlJTIwZnJvbSUyMG91dHNpZGV8ZW58MHx8MHx8fDA%3D"
    }

  ],
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:[
       {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1615431303449-9ad9207d05de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1546550519-859494216c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721743162939-808441f8db18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617228154841-0b8a2eb64c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593908521791-b5b4993bf477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1635829090608-846e8f114988?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1675494051330-d998125ebf73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558277872-bb3f50054da2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }

  ],
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1588133017752-9b5d40ecf730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539357281591-de6681e73e78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1643913592251-3f256e90ec0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1663051217428-4d7e24bf1056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1546550519-859494216c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721743162939-808441f8db18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617228154841-0b8a2eb64c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593908521791-b5b4993bf477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: [{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1710174801079-2599d16d75fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1588133017752-9b5d40ecf730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539357281591-de6681e73e78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1643913592251-3f256e90ec0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1663051217428-4d7e24bf1056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1651804279611-a0b8b4bdb4f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1631048835031-a69408a86480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1722764372202-b8ae35e7d424?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676319481570-9a95202f8d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: [
      {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1678963248671-29ce42a16899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558277872-bb3f50054da2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
  ],
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: [
      {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1733259783876-393fa0f094d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1546550519-859494216c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721743162939-808441f8db18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617228154841-0b8a2eb64c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593908521791-b5b4993bf477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: [
      {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1588133017752-9b5d40ecf730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539357281591-de6681e73e78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1643913592251-3f256e90ec0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1663051217428-4d7e24bf1056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1628560946700-dde575386781?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1651804279611-a0b8b4bdb4f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1631048835031-a69408a86480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1722764372202-b8ae35e7d424?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676319481570-9a95202f8d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1719002678943-da7fc2632ba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1722606485875-9a32dc688f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/flagged/photo-1582108074095-1730ef6caec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676320514025-c365ab8289b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558277872-bb3f50054da2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
  ],
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: [
      {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1680157072795-e283e74dec79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1546550519-859494216c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721743162939-808441f8db18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617228154841-0b8a2eb64c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593908521791-b5b4993bf477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1722606485875-9a32dc688f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/flagged/photo-1582108074095-1730ef6caec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676320514025-c365ab8289b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1642632015706-2405dd8800d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1588133017752-9b5d40ecf730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539357281591-de6681e73e78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1643913592251-3f256e90ec0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1663051217428-4d7e24bf1056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: [
      {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1730132436753-2cda95e78d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1588133017752-9b5d40ecf730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539357281591-de6681e73e78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1643913592251-3f256e90ec0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1663051217428-4d7e24bf1056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1546550519-859494216c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721743162939-808441f8db18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617228154841-0b8a2eb64c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593908521791-b5b4993bf477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617293672222-9a799fe55473?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGhvdGVsJTIwaW1hZ2UlMjBmcm9tJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1546550519-859494216c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721743162939-808441f8db18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617228154841-0b8a2eb64c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593908521791-b5b4993bf477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: [
      {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676670616705-e81d9470f75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxob3RlbCUyMGltYWdlJTIwZnJvbSUyMG91dHNpZGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1722606485875-9a32dc688f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/flagged/photo-1582108074095-1730ef6caec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676320514025-c365ab8289b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1712628948530-42c6790309f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxob3RlbCUyMGltYWdlJTIwZnJvbSUyMG91dHNpZGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1651804279611-a0b8b4bdb4f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1631048835031-a69408a86480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1722764372202-b8ae35e7d424?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676319481570-9a95202f8d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }

  ],
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: [
      {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1588133017752-9b5d40ecf730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539357281591-de6681e73e78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1643913592251-3f256e90ec0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1663051217428-4d7e24bf1056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2UlMjAlMkNiZWRyb29tJTIwaW1hZ2UlMkMlMjBiYXRocm9vbSUyMGltYWdlJTIwJTJDJTIwYm9sY29ueSUyMGltYWdlJTJDJTIwc3RhaXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };