export interface CaseStudy {
  num: string;
  tag: string;
  title: string;
  type: string;
  area: string;
  timeline: string;
  brief: string;
  cadTitle: string;
  cadImage: string;
  cadNotes: string[];
  renderTitle: string;
  renderImage1: string;
  renderImage2: string;
  materials: string[];
  quote: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    num: "01",
    tag: "RESIDENTIAL ARCHITECTURE",
    title: "The Sarthak Residence",
    type: "3 BHK Apartment · Bengaluru",
    area: "1,850 sq.ft.",
    timeline: "4.5 Months",
    brief:
      "A serene 3 BHK sanctuary for Sarthak and his wife, balancing classical Roman arch mouldings, bespoke fluted-glass wardrobes, and an illuminated mandir with hanging brass temple bells.",
    cadTitle: "AutoCAD 2D: Architectural Plan & Living TV Wall Elevation",
    cadImage: "/images/projects/sarthak-residence/floor-plan-3bhk.jpg",
    cadNotes: [
      "Full 1,850 sq.ft. architectural zoning with >=900mm clear circulation spine",
      "Bas-relief slate plaster panel with 2700K perimeter cove halo wash",
      "System 32 modular wardrobes with 30mm scribing fillers for plumb walls",
    ],
    renderTitle: "Photorealistic 3D: Master Suite & Living-Dining Panorama",
    renderImage1: "/images/projects/sarthak-residence/master-bedroom-hero.png",
    renderImage2: "/images/projects/sarthak-residence/living-dining-panorama.png",
    materials: ["Natural Walnut Veneer", "Fluted Reeded Glass", "Backlit Alabaster", "Brushed Brass"],
    quote: "Balancing spiritual sacredness in the mandir with restful neoclassical bedroom retreats.",
  },
  {
    num: "02",
    tag: "CONTEMPORARY INTERIORS",
    title: "Mr. Vivek Residence",
    type: "3 BHK Modernist Flat · Bengaluru",
    area: "1,920 sq.ft.",
    timeline: "4.0 Months",
    brief:
      "A sophisticated contemporary home featuring an arched backlit TV wall with acoustic timber slats, high-efficiency modular kitchen with smoked glass vitrines, and bespoke cane wardrobe joinery.",
    cadTitle: "AutoCAD 2D: Living TV Unit Detail (DWG-01, 1:20)",
    cadImage: "/images/projects/mr-vivek-residence/cad-living-tv-unit.png",
    cadNotes: [
      "Acoustic oak louvres mounted on 12mm sound-dampening acoustic backing",
      "Floating drawer console with 45° miter-cut bevel and concealed wire chases",
      "Modular kitchen with Gola profile hardware and smoked tinted glass vitrines",
    ],
    renderTitle: "Photorealistic 3D: Arched TV Wall & Modular Culinary Core",
    renderImage1: "/images/projects/mr-vivek-residence/hero-living-tv-unit.png",
    renderImage2: "/images/projects/mr-vivek-residence/modular-kitchen-island.png",
    materials: ["Smoked Glass", "Acoustic Oak", "Charcoal Felt", "Gola Profile Quartz"],
    quote: "Every millimeter of joinery serves both acoustic comfort and streamlined visual calm.",
  },
  {
    num: "03",
    tag: "LUXURY RESIDENTIAL",
    title: "Koramangala Villa F",
    type: "4 BHK Luxury Villa · Koramangala, Bengaluru",
    area: "5,400 sq.ft.",
    timeline: "6.0 Months",
    brief:
      "An expansive luxury residence highlighted by a sunken formal drawing salon, a 10-seater Calacatta Gold dining hall, and an integrated chef's kitchen with metallic bronze splash.",
    cadTitle: "AutoCAD 2D: Sunken Drawing Room & 10-Seater Dining (DWG-D01)",
    cadImage: "/images/projects/koramangala-luxury-villa/drawing-details.png",
    cadNotes: [
      "Sunken floor seating perimeter with integrated warm linear LED strip wash",
      "8.1-meter dining gallery layout coordinating 10-seater stone dining table",
      "Chef's kitchen joinery with 320mm chimney duct encasement and appliance tall unit",
    ],
    renderTitle: "Photorealistic 3D: Sunken Drawing Salon & Calacatta Dining",
    renderImage1: "/images/projects/koramangala-luxury-villa/drawing-room.png",
    renderImage2: "/images/projects/koramangala-luxury-villa/dining-area.png",
    materials: ["Calacatta Gold", "Chevron Walnut", "Champagne PU", "Metallic Bronze Tile"],
    quote: "Grand architectural volume tailored with intimate, tactile seating clusters.",
  },
  {
    num: "04",
    tag: "VILLA ARCHITECTURE",
    title: "Terracotta Villa (5 BHK)",
    type: "5 BHK Luxury Villa · Bengaluru",
    area: "4,800 sq.ft.",
    timeline: "5.5 Months",
    brief:
      "A classical-contemporary hybrid villa celebrating warm earthen tones, neoclassical boiserie wall mouldings, and a dedicated architectural study lounge with arched backlit coves.",
    cadTitle: "AutoCAD 2D: Bespoke Study Unit & Master Bed Wall (DWG-04/05)",
    cadImage: "/images/projects/5bhk-villa/study-unit-variations.jpg",
    cadNotes: [
      "Dual-zone culinary architecture: show kitchen island with heavy prep back kitchen",
      "Backlit translucent quartzite slab (2000×1700mm) framed in fluted walnut",
      "Ergonomic cantilevered walnut study desk with arched warm LED display alcoves",
    ],
    renderTitle: "Photorealistic 3D: Fluted Walnut Bed Wall & Study Lounge",
    renderImage1: "/images/projects/5bhk-villa/master-bedroom-quartzite-sconces.jpg",
    renderImage2: "/images/projects/5bhk-villa/luxury-bed-fluted-walnut.jpg",
    materials: ["Terracotta Plaster", "Translucent Quartzite", "Satin Walnut", "Antique Brass"],
    quote: "Warm earthy tones harmonizing classical architectural mouldings with sleek joinery.",
  },
  {
    num: "05",
    tag: "CONTEMPORARY RESIDENCE",
    title: "The Modernist 3BHK",
    type: "3 BHK Residence · Bengaluru",
    area: "2,100 sq.ft.",
    timeline: "4.5 Months",
    brief:
      "Modernist residence centered around bookmatched marble TV joinery with brass T-inlays, a 45° miter-cut pooja credenza, and a custom athletic basketball bedroom suite.",
    cadTitle: "AutoCAD 2D: Marble TV Wall & 45° Miter Pooja Joinery",
    cadImage: "/images/projects/the-modernist-3bhk/living-tv-bar.png",
    cadNotes: [
      "Full-height marble slabs with vertical champagne brass T-profile dividing ribs",
      "45° miter-cut pooja credenza with Corian counter and beveled bronze mirror",
      "Bespoke athletic headboard with recessed LED halo wash and acoustic backing",
    ],
    renderTitle: "Photorealistic 3D: Living TV Feature & Modernist Styling",
    renderImage1: "/images/projects/the-modernist-3bhk/hero.png",
    renderImage2: "/images/projects/the-modernist-3bhk/living-concept.png",
    materials: ["Bookmatched Marble", "Brass T-Profiles", "Corian Solid Surface", "Tinted Mirror"],
    quote: "Crisp geometric geometry softened with warm 2700K lighting and natural textures.",
  },
  {
    num: "06",
    tag: "SCANDINAVIAN MODERN",
    title: "Urban Scandi 3BHK",
    type: "3 BHK Residence · Bengaluru",
    area: "1,650 sq.ft.",
    timeline: "3.5 Months",
    brief:
      "A luminous Scandinavian apartment featuring an L-shaped modular kitchen with ventilated wicker baskets, bay window cushioned daybed with deep toy drawers, and a beveled mirror foyer.",
    cadTitle: "AutoCAD 2D: L-Shaped Kitchen & Bay Daybed Joinery (DWG-K01)",
    cadImage: "/images/projects/urban-scandi-3bhk/kitchen-cad.png",
    cadNotes: [
      "Natural wicker vegetable pull-out baskets integrated into 560mm base carcass",
      "Cushioned window daybed with heavy-duty tandembox toy drawers below",
      "Full-height 5-door System 32 wardrobe with 30mm scribing fillers",
    ],
    renderTitle: "Photorealistic 3D: Light Oak Kitchen & Living Panorama",
    renderImage1: "/images/projects/urban-scandi-3bhk/hero.png",
    renderImage2: "/images/projects/urban-scandi-3bhk/living-foyer.png",
    materials: ["Blonde Ash Oak", "Natural Woven Cane", "Sage Green PU", "Honed Quartz"],
    quote: "Functional Scandinavian minimalism designed for effortless daily family rituals.",
  },
  {
    num: "07",
    tag: "BESPOKE JOINERY",
    title: "The Hitesh & Ria Residence",
    type: "3 BHK Apartment · Bengaluru",
    area: "2,350 sq.ft.",
    timeline: "4.5 Months",
    brief:
      "An upscale apartment highlighted by a fluted foyer shoe console with champagne gold trim, an acoustic charcoal living TV wall, and a custom fluted-glass cocktail bar with stemware racks.",
    cadTitle: "AutoCAD 2D: Foyer Console & Acoustic TV Wall (DWG-01/02)",
    cadImage: "/images/projects/the-hitesh-ria-residence/living-tv-cad.png",
    cadNotes: [
      "Shoe credenza with brushed champagne gold trim and slatted acoustic partition",
      "Acoustic charcoal living wall with concealed wiring conduit and floating console",
      "Bespoke cocktail bar with bronze fluted glass vitrines and warm LED display",
    ],
    renderTitle: "Photorealistic 3D: Acoustic Living Feature & Foyer Console",
    renderImage1: "/images/projects/the-hitesh-ria-residence/living-room.png",
    renderImage2: "/images/projects/the-hitesh-ria-residence/dining-bar-elevation.png",
    materials: ["Charcoal Acoustic Battens", "Champagne Brass", "Smoked Fluted Glass", "Travertine"],
    quote: "Dramatic tonal contrast balanced by warm metallic accents and fluted glass transparency.",
  },
  {
    num: "08",
    tag: "FAMILY RESIDENCE",
    title: "The Akanchha & Harsh Residence",
    type: "3 BHK Apartment · Bengaluru",
    area: "1,980 sq.ft.",
    timeline: "4.0 Months",
    brief:
      "A family home tailored with an L-shaped ultra-matte white PU shaker kitchen, light oak System 32 wardrobes, and a custom dual-tier kids bunk bed with integrated study workstation.",
    cadTitle: "AutoCAD 2D: Shaker Kitchen & System 32 Wardrobes (DWG-K01/W01)",
    cadImage: "/images/projects/akanchha-harsh-residence/kitchen-cad.png",
    cadNotes: [
      "Ultra-matte white PU shaker doors with soft-close tandembox drawer systems",
      "Light oak synchronized laminate sliding wardrobes with silent top-hung tracks",
      "Dual-tier bunk bed with safety handrails and under-bed rolling toy chests",
    ],
    renderTitle: "Photorealistic 3D: PU Shaker Kitchen & Family Spaces",
    renderImage1: "/images/projects/akanchha-harsh-residence/kitchen-3d.png",
    renderImage2: "/images/projects/akanchha-harsh-residence/living-dining.png",
    materials: ["Matte White PU", "Synchronized Oak", "Calacatta Quartz", "Brushed Nickel"],
    quote: "Timeless transitional shaker millwork engineered for durability and tactile elegance.",
  },
];
