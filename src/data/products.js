import velvetSkinFoundationImage from '../assets/products/velvetskinfoundation.png';
import dewGlowSerumImage from '../assets/products/dewglowserum.png';
import cloudKissLipTintImage from '../assets/products/cloudkissliptint.png';
import silkTouchBlushImage from '../assets/products/silktouchblush.png';
import radianceVitaminCSerumImage from '../assets/products/radiancevitaminCserum.png';
import glowRitualBodyOilImage from '../assets/products/glowritualbodyoil.png';
import luminousPrimerImage from '../assets/products/luminous primer.png';
import rosewaterTonerImage from '../assets/products/rosewatertoner.png';
import hydratingBodyWashImage from '../assets/products/hydratingbodywash.png';
import luxeMattePaletteImage from '../assets/products/luxemattepalette.png';
import peptideEyeButterImage from '../assets/products/peptideeyebutter.png';
import berrystainLipBalmImage from '../assets/products/berrystainlipbalm.png';
import precisionLiquidLinerImage from '../assets/products/precisionliquidliner.png';
import clarifyingBhaLiquidImage from '../assets/products/clarifyingbhaliquid.png';
import sheaButterBodyLotionImage from '../assets/products/sheabutterbodylotion.png';
import overnightLipMaskImage from '../assets/products/overnightlipmask.png';
import silkRepairHairOilImage from '../assets/products/silkrepairhairoil.png';
import cloudSoftShampooImage from '../assets/products/cloudsoftshampoo.png';
import skinScentEauDePerfumeImage from '../assets/products/skinscenteaudeperfume.png';
import neroliVeilHairMistImage from '../assets/products/neroliveilhairmist.png';

const uploadedProductImages = {
    1: velvetSkinFoundationImage,
    2: dewGlowSerumImage,
    3: cloudKissLipTintImage,
    4: silkTouchBlushImage,
    5: radianceVitaminCSerumImage,
    8: glowRitualBodyOilImage,
    9: luminousPrimerImage,
    10: rosewaterTonerImage,
    11: hydratingBodyWashImage,
    13: luxeMattePaletteImage,
    14: peptideEyeButterImage,
    16: berrystainLipBalmImage,
    17: precisionLiquidLinerImage,
    18: clarifyingBhaLiquidImage,
    19: sheaButterBodyLotionImage,
    20: overnightLipMaskImage,
    21: silkRepairHairOilImage,
    22: cloudSoftShampooImage,
    23: skinScentEauDePerfumeImage,
    24: neroliVeilHairMistImage
};

const catalog = [
    {
        id: 1,
        name: "Velvet Skin Foundation",
        category: "Makeup",
        price: 48,
        originalPrice: null,
        rating: 4.8,
        reviews: 124,
        description: "A lightweight, buildable foundation that blurs imperfections and leaves a natural, radiant finish. Infused with hyaluronic acid for all-day hydration.",
        images: [
            "https://www.beautyandesign.it/wp-content/uploads/2025/11/skin-velvet-110-fair-vip-make-up.jpg",
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop"
        ],
        colors: ["Porcelain", "Ivory", "Beige", "Almond", "Honey", "Mocha"],
        bestseller: true,
        newArrival: false
    },
    {
        id: 2,
        name: "Dew Glow Serum",
        category: "Skincare",
        price: 65,
        originalPrice: 75,
        rating: 4.9,
        reviews: 312,
        description: "Our award-winning daily serum packed with antioxidants and vitamin C to brighten, firm, and protect the skin.",
        images: [
            "https://images.unsplash.com/photo-1608248593847-5e60803c0048?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: true,
        newArrival: false
    },
    {
        id: 3,
        name: "Cloud Kiss Lip Tint",
        category: "Lip Care",
        price: 24,
        originalPrice: null,
        rating: 4.7,
        reviews: 89,
        description: "A soft, sheer lip tint that hydrates like a balm and delivers a perfect wash of color. Non-sticky and long-lasting.",
        images: [
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop"
        ],
        colors: ["Rose", "Coral", "Berry", "Plum"],
        bestseller: false,
        newArrival: true
    },
    {
        id: 4,
        name: "Silk Touch Blush",
        category: "Makeup",
        price: 32,
        originalPrice: null,
        rating: 4.6,
        reviews: 145,
        description: "A finely milled powder blush that melts into the skin for a seamless, natural flush.",
        images: [
            "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop"
        ],
        colors: ["Peach", "Dusty Rose"],
        bestseller: true,
        newArrival: false
    },
    {
        id: 5,
        name: "Radiance Vitamin C Serum",
        category: "Skincare",
        price: 78,
        originalPrice: null,
        rating: 4.9,
        reviews: 420,
        description: "A potent 15% Vitamin C serum that dramatically brightens skin and evens out tone.",
        images: [
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1608248593847-5e60803c0048?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: true
    },
    {
        id: 6,
        name: "Soft Matte Lipstick",
        category: "Makeup",
        price: 36,
        originalPrice: 42,
        rating: 4.5,
        reviews: 215,
        description: "A highly pigmented matte formula that stays comfortable all day without drying your lips.",
        images: [
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop"
        ],
        colors: ["Classic Red", "Nude Pink", "Deep Mauve"],
        bestseller: false,
        newArrival: false
    },
    {
        id: 7,
        name: "Botanical Face Cream",
        category: "Skincare",
        price: 54,
        originalPrice: null,
        rating: 4.7,
        reviews: 180,
        description: "Rich, deeply nourishing moisturizer powered by active botanical extracts. Restores the skin barrier.",
        images: [
            "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1608248593847-5e60803c0048?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: false
    },
    {
        id: 8,
        name: "Glow Ritual Body Oil",
        category: "Body Care",
        price: 45,
        originalPrice: null,
        rating: 4.8,
        reviews: 350,
        description: "A luxurious body oil that leaves an elegant shimmer and deeply moisturizes skin. Scented with vanilla and sandalwood.",
        images: [
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: true,
        newArrival: true
    },
    {
        id: 9,
        name: "Luminous Primer",
        category: "Makeup",
        price: 42,
        originalPrice: null,
        rating: 4.6,
        reviews: 210,
        description: "A hydrating, illuminating primer that grips makeup for all-day wear while imparting a subtle, lit-from-within glow.",
        images: [
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: true
    },
    {
        id: 10,
        name: "Rosewater Toner",
        category: "Skincare",
        price: 28,
        originalPrice: 35,
        rating: 4.9,
        reviews: 415,
        description: "A refreshing and balancing facial mist made with pure distilled rose petals to soothe and prep the skin.",
        images: [
            "https://images.unsplash.com/photo-1608248593847-5e60803c0048?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: true,
        newArrival: false
    },
    {
        id: 11,
        name: "Hydrating Body Wash",
        category: "Body Care",
        price: 34,
        originalPrice: null,
        rating: 4.7,
        reviews: 92,
        description: "Gentle, non-stripping body wash formulated with ceramides and oat extract for smooth, soft skin.",
        images: [
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: true
    },
    {
        id: 12,
        name: "High Shine Gloss",
        category: "Lip Care",
        price: 22,
        originalPrice: null,
        rating: 4.5,
        reviews: 134,
        description: "A non-tacky, ultra-glossy finish infused with jojoba oil and vitamin E for plump, hydrated lips.",
        images: [
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop"
        ],
        colors: ["Crystal Clear", "Soft Peach", "Cherry Tint"],
        bestseller: false,
        newArrival: false
    },
    {
        id: 13,
        name: "Luxe Matte Palette",
        category: "Makeup",
        price: 68,
        originalPrice: null,
        rating: 4.8,
        reviews: 350,
        description: "An everyday eyeshadow palette featuring 12 highly pigmented, buttery matte shades ranging from soft creams to deep espresso.",
        images: [
            "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512411986427-466c4c379a29?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: true,
        newArrival: true
    },
    {
        id: 14,
        name: "Peptide Eye Butter",
        category: "Skincare",
        price: 52,
        originalPrice: 60,
        rating: 4.7,
        reviews: 284,
        description: "A deeply rich eye cream packed with peptides and squalane to reduce the appearance of fine lines and lock in moisture.",
        images: [
            "https://images.unsplash.com/photo-1590156546946-cb5afcf1b782?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: true
    },
    {
        id: 15,
        name: "Renewing Body Polish",
        category: "Body Care",
        price: 36,
        originalPrice: null,
        rating: 4.9,
        reviews: 122,
        description: "A gentle exfoliating body scrub infused with brown sugar and sweet almond oil for incredibly smooth and glowing skin.",
        images: [
            "https://images.unsplash.com/photo-1615397323719-2184e9b72a6b?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615396899839-c99c14188f60?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: false
    },
    {
        id: 16,
        name: "Berry Stain Lip Balm",
        category: "Lip Care",
        price: 18,
        originalPrice: null,
        rating: 4.6,
        reviews: 410,
        description: "A solid lip balm that melts upon contact, delivering profound hydration and a beautiful bitten-lip berry stain.",
        images: [
            "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587771745749-d757dc5babb3?q=80&w=600&auto=format&fit=crop"
        ],
        colors: ["Plum", "Raspberry"],
        bestseller: true,
        newArrival: false
    },
    {
        id: 17,
        name: "Precision Liquid Liner",
        category: "Makeup",
        price: 26,
        originalPrice: null,
        rating: 4.5,
        reviews: 512,
        description: "Waterproof, smudge-proof liquid eyeliner with an ultra-fine brush tip for creating everything from sharp wings to subtle definition.",
        images: [
            "https://images.unsplash.com/photo-1580870058864-10659ee7f5a9?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop"
        ],
        colors: ["Raven Black", "Rich Brown"],
        bestseller: true,
        newArrival: false
    },
    {
        id: 18,
        name: "Clarifying BHA Liquid",
        category: "Skincare",
        price: 32,
        originalPrice: null,
        rating: 4.8,
        reviews: 745,
        description: "A gentle leave-on exfoliant containing 2% BHA (salicylic acid) to unclog pores, smooth wrinkles, and brighten skin tone.",
        images: [
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: true,
        newArrival: false
    },
    {
        id: 19,
        name: "Shea Butter Body Lotion",
        category: "Body Care",
        price: 42,
        originalPrice: 48,
        rating: 4.9,
        reviews: 215,
        description: "An intensive daily moisturizer formulated with 15% shea butter to nourish, repair, and protect your skin all day.",
        images: [
            "https://images.unsplash.com/photo-1629198725625-16fb14d3f3f0?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615397323719-2184e9b72a6b?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: true
    },
    {
        id: 20,
        name: "Overnight Lip Mask",
        category: "Lip Care",
        price: 26,
        originalPrice: null,
        rating: 4.9,
        reviews: 890,
        description: "A deeply plumping and soothing mask applied before bed to lock in active moisture, waking up to perfectly supple lips.",
        images: [
            "https://images.unsplash.com/photo-1587771745749-d757dc5babb3?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: true,
        newArrival: true
    },
    {
        id: 21,
        name: "Silk Repair Hair Oil",
        category: "Haircare",
        price: 38,
        originalPrice: null,
        rating: 4.8,
        reviews: 168,
        description: "A weightless blend of argan and camellia oils that smooths flyaways, softens ends, and leaves hair luminous without buildup.",
        images: [
            "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: true,
        newArrival: true
    },
    {
        id: 22,
        name: "Cloud Soft Shampoo",
        category: "Haircare",
        price: 39,
        originalPrice: null,
        rating: 4.7,
        reviews: 104,
        description: "A gentle, sulfate-free shampoo with oat extract and silk proteins for clean, soft, touchable hair.",
        images: [
            "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: true
    },
    {
        id: 23,
        name: "Skin Scent Eau de Parfum",
        category: "Fragrance",
        price: 72,
        originalPrice: null,
        rating: 4.9,
        reviews: 238,
        description: "A close-to-the-skin veil of soft musk, warm vanilla, and sheer woods designed to become uniquely yours.",
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: true,
        newArrival: false
    },
    {
        id: 24,
        name: "Neroli Veil Hair Mist",
        category: "Fragrance",
        price: 44,
        originalPrice: null,
        rating: 4.6,
        reviews: 87,
        description: "A light fragrance mist for hair with bright neroli, pear blossom, and creamy sandalwood.",
        images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=600&auto=format&fit=crop"
        ],
        colors: [],
        bestseller: false,
        newArrival: true
    }
];

export const products = catalog.map(product => ({
    ...product,
    images: uploadedProductImages[product.id] ? [uploadedProductImages[product.id]] : [product.images[0]],
    price: Math.round(product.price * 10),
    originalPrice: product.originalPrice ? Math.round(product.originalPrice * 10) : null
}));
