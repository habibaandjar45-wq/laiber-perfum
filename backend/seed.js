const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const perfumes = [
    {
        name: "Noir Elegance",
        brand: "Laiber Perfume",
        description: "A deep, mysterious fragrance with notes of oud, leather, and black pepper. Perfect for evening wear and formal occasions.",
        price: 120,
        category: "Eau de Parfum",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
        stock: 15,
        topNotes: ["Black Pepper", "Bergamot"],
        middleNotes: ["Leather", "Rose"],
        baseNotes: ["Oud", "Patchouli", "Amber"],
        rating: 4.8
    },
    {
        name: "Golden Sands",
        brand: "Laiber Perfume",
        description: "A warm, radiant scent capturing the essence of a sunset over the Sahara. Notes of vanilla, amber, and light musk.",
        price: 95,
        category: "Eau de Parfum",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        stock: 20,
        topNotes: ["Saffron", "Mandarin"],
        middleNotes: ["Amber", "Jasmine"],
        baseNotes: ["Vanilla", "Sandalwood", "White Musk"],
        rating: 4.6
    },
    {
        name: "Royal Rose",
        brand: "Laiber Perfume",
        description: "The ultimate floral experience. A blend of three different roses combined with a hint of peony and pink pepper.",
        price: 110,
        category: "Eau de Parfum",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
        stock: 10,
        topNotes: ["Pink Pepper", "Raspberry"],
        middleNotes: ["Damask Rose", "Peony"],
        baseNotes: ["Cedarwood", "Musk"],
        rating: 4.9
    },
    {
        name: "Midnight Azure",
        brand: "Laiber Perfume",
        description: "Fresh, aquatic and bold. A refreshing burst of sea salt and grapefruit leading to a deep woody finish.",
        price: 85,
        category: "Eau de Toilette",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        stock: 25,
        topNotes: ["Sea Salt", "Grapefruit"],
        middleNotes: ["Seaweed", "Sage"],
        baseNotes: ["Driftwood", "Ambrette"],
        rating: 4.5
    },
    {
        name: "Velvet Orchid",
        brand: "Laiber Perfume",
        description: "An ultra-feminine fragrance with a heart of shimmering orchid, spice, and cognac. Sensual and sophisticated.",
        price: 135,
        category: "Eau de Parfum",
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
        stock: 12,
        topNotes: ["Honey", "Rum", "Mandarin"],
        middleNotes: ["Black Orchid", "Jasmine", "Rose"],
        baseNotes: ["Vanilla", "Sandalwood", "Myrrh"],
        rating: 4.9
    },
    {
        name: "Silver Mountain",
        brand: "Laiber Perfume",
        description: "A crisp and invigorating scent that evokes the sparkling high-mountain streams of the Swiss Alps.",
        price: 145,
        category: "Eau de Parfum",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        stock: 8,
        topNotes: ["Bergamot", "Mandarin"],
        middleNotes: ["Green Tea", "Blackcurrant"],
        baseNotes: ["Musk", "Sandalwood", "Galbanum"],
        rating: 4.7
    },
    {
        name: "Amber Wood",
        brand: "Laiber Perfume",
        description: "A masterpiece of wood and amber. Deep, rich, and multifaceted with a powerful sillage.",
        price: 155,
        category: "Extrait de Parfum",
        image: "https://images.unsplash.com/photo-1588405748353-057ca5049d1e?auto=format&fit=crop&q=80&w=800",
        stock: 5,
        topNotes: ["Cardamom", "White Pepper", "Apple"],
        middleNotes: ["Cedarwood", "Lavender", "Orris"],
        baseNotes: ["Amber", "Patchouli", "Vetiver"],
        rating: 5.0
    },
    {
        name: "Crystal Blossom",
        brand: "Laiber Perfume",
        description: "A light, airy floral fragrance with a sparkling clarity. Like a garden in full bloom after a spring rain.",
        price: 75,
        category: "Eau de Toilette",
        image: "https://images.unsplash.com/photo-1616948055599-921c16928bc7?auto=format&fit=crop&q=80&w=800",
        stock: 30,
        topNotes: ["Magnolia", "Pear"],
        middleNotes: ["Lotus", "Freesia"],
        baseNotes: ["Musk", "Amber"],
        rating: 4.4
    }
];

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB for seeding');
        await Product.deleteMany();
        await Product.insertMany(perfumes);
        console.log('Seeding completed successfully');
        process.exit();
    })
    .catch(err => {
        console.error('Seeding error:', err);
        process.exit(1);
    });
