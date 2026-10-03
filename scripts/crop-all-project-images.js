const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Precision crop definitions for all project images.
// Source is ALWAYS read from `public/images/projects_original_slides/`
// to ensure repeated executions are completely idempotent and never double-crop.
// Coordinates are in percentages [x, y, width, height] relative to image dimensions:
// x: left offset (0 to 1), y: top offset (0 to 1), w: width (0 to 1), h: height (0 to 1)

const CROPS = [
  // ==========================================
  // WONDERWALL PENTHOUSE
  // ==========================================
  // Crop bottom 22% to eliminate "EXTRA RENDERS" text entirely
  {
    src: 'public/images/projects_original_slides/wonderwall-penthouse/fluted-credenza-3d.png',
    dest: 'public/images/projects/wonderwall-penthouse/fluted-credenza-3d.png',
    crop: [0, 0, 1.0, 0.78]
  },
  {
    src: 'public/images/projects_original_slides/wonderwall-penthouse/living-balcony-3d.png',
    dest: 'public/images/projects/wonderwall-penthouse/living-balcony-3d.png',
    crop: [0, 0, 1.0, 0.78]
  },
  // Extract pure 3D dining render from hero slide (strictly below "PENTHOUSE" and floor plans)
  {
    src: 'public/images/projects_original_slides/wonderwall-penthouse/hero.png',
    dest: 'public/images/projects/wonderwall-penthouse/hero-clean.png',
    crop: [0.05, 0.32, 0.48, 0.65]
  },
  {
    src: 'public/images/projects_original_slides/wonderwall-penthouse/hero.png',
    dest: 'public/images/projects/wonderwall-penthouse/hero.png',
    crop: [0.05, 0.32, 0.48, 0.65]
  },
  // Extract pure 3D dining render from arched-mandir slide
  {
    src: 'public/images/projects_original_slides/wonderwall-penthouse/arched-mandir.png',
    dest: 'public/images/projects/wonderwall-penthouse/arched-mandir-clean.png',
    crop: [0.05, 0.32, 0.48, 0.65]
  },

  // ==========================================
  // THE MODERNIST 3BHK
  // ==========================================
  // Central 3D render of the bookmatched marble TV wall & vitrine
  {
    src: 'public/images/projects_original_slides/the-modernist-3bhk/living-tv-bar.png',
    dest: 'public/images/projects/the-modernist-3bhk/living-tv-bar-clean.png',
    crop: [0.24, 0.22, 0.36, 0.66]
  },
  {
    src: 'public/images/projects_original_slides/the-modernist-3bhk/living-tv-bar.png',
    dest: 'public/images/projects/the-modernist-3bhk/living-tv-bar.png',
    crop: [0.24, 0.22, 0.36, 0.66]
  },
  {
    src: 'public/images/projects_original_slides/the-modernist-3bhk/hero.png',
    dest: 'public/images/projects/the-modernist-3bhk/hero-clean.png',
    crop: [0.24, 0.22, 0.36, 0.66]
  },
  {
    src: 'public/images/projects_original_slides/the-modernist-3bhk/hero.png',
    dest: 'public/images/projects/the-modernist-3bhk/hero.png',
    crop: [0.24, 0.22, 0.36, 0.66]
  },
  // 3D perspective of living room lounge (crops out "Residential 3BHK" & "Design Concept")
  {
    src: 'public/images/projects_original_slides/the-modernist-3bhk/living-concept.png',
    dest: 'public/images/projects/the-modernist-3bhk/living-concept-clean.png',
    crop: [0.02, 0.36, 0.54, 0.58]
  },
  {
    src: 'public/images/projects_original_slides/the-modernist-3bhk/living-concept.png',
    dest: 'public/images/projects/the-modernist-3bhk/living-concept.png',
    crop: [0.02, 0.36, 0.54, 0.58]
  },

  // ==========================================
  // URBAN SCANDI 3BHK
  // ==========================================
  // Central 3D render of foyer diamond mirror console
  {
    src: 'public/images/projects_original_slides/urban-scandi-3bhk/hero.png',
    dest: 'public/images/projects/urban-scandi-3bhk/hero-clean.png',
    crop: [0.24, 0.23, 0.32, 0.68]
  },
  {
    src: 'public/images/projects_original_slides/urban-scandi-3bhk/hero.png',
    dest: 'public/images/projects/urban-scandi-3bhk/hero.png',
    crop: [0.24, 0.23, 0.32, 0.68]
  },
  {
    src: 'public/images/projects_original_slides/urban-scandi-3bhk/living-foyer.png',
    dest: 'public/images/projects/urban-scandi-3bhk/living-foyer-clean.png',
    crop: [0.24, 0.23, 0.32, 0.68]
  },
  {
    src: 'public/images/projects_original_slides/urban-scandi-3bhk/living-foyer.png',
    dest: 'public/images/projects/urban-scandi-3bhk/living-foyer.png',
    crop: [0.24, 0.23, 0.32, 0.68]
  },
  // 3D modular kitchen view (removes "KITCHEN" text at top)
  {
    src: 'public/images/projects_original_slides/urban-scandi-3bhk/kitchen-cad.png',
    dest: 'public/images/projects/urban-scandi-3bhk/kitchen-3d-clean.png',
    crop: [0.12, 0.25, 0.44, 0.67]
  },
  {
    src: 'public/images/projects_original_slides/urban-scandi-3bhk/kitchen-cad.png',
    dest: 'public/images/projects/urban-scandi-3bhk/kitchen-cad-clean.png',
    crop: [0.57, 0.24, 0.39, 0.68]
  },

  // ==========================================
  // THE HITESH & RIA RESIDENCE
  // ==========================================
  // Central 3D charcoal acoustic TV wall (removes red top banner and margin callouts)
  {
    src: 'public/images/projects_original_slides/the-hitesh-ria-residence/hero.png',
    dest: 'public/images/projects/the-hitesh-ria-residence/hero-clean.png',
    crop: [0.14, 0.16, 0.51, 0.68]
  },
  {
    src: 'public/images/projects_original_slides/the-hitesh-ria-residence/hero.png',
    dest: 'public/images/projects/the-hitesh-ria-residence/hero.png',
    crop: [0.14, 0.16, 0.51, 0.68]
  },
  // Central 3D illuminated pooja mandir & crockery vitrine (removes bottom title)
  {
    src: 'public/images/projects_original_slides/the-hitesh-ria-residence/balcony-utility.png',
    dest: 'public/images/projects/the-hitesh-ria-residence/balcony-utility-clean.png',
    crop: [0.12, 0.15, 0.48, 0.66]
  },
  {
    src: 'public/images/projects_original_slides/the-hitesh-ria-residence/balcony-utility.png',
    dest: 'public/images/projects/the-hitesh-ria-residence/balcony-utility.png',
    crop: [0.12, 0.15, 0.48, 0.66]
  },
  // Clean 2D CAD working drawing of crockery & pooja (no cut-off callout on left)
  {
    src: 'public/images/projects_original_slides/the-hitesh-ria-residence/dining-bar-elevation.png',
    dest: 'public/images/projects/the-hitesh-ria-residence/dining-bar-elevation-clean.png',
    crop: [0.12, 0.15, 0.46, 0.68]
  },
  {
    src: 'public/images/projects_original_slides/the-hitesh-ria-residence/dining-bar-elevation.png',
    dest: 'public/images/projects/the-hitesh-ria-residence/dining-bar-elevation.png',
    crop: [0.12, 0.15, 0.46, 0.68]
  },
  // Bar unit 3D render (removes red banner)
  {
    src: 'public/images/projects_original_slides/the-hitesh-ria-residence/bar-unit-cad.png',
    dest: 'public/images/projects/the-hitesh-ria-residence/bar-unit-3d-clean.png',
    crop: [0.10, 0.15, 0.48, 0.68]
  },

  // ==========================================
  // AKANCHHA & HARSH RESIDENCE
  // ==========================================
  // Clean 2D CAD elevation of modular kitchen (removes navy blue banner & Cubedecors logo)
  {
    src: 'public/images/projects_original_slides/akanchha-harsh-residence/hero.png',
    dest: 'public/images/projects/akanchha-harsh-residence/hero-clean.png',
    crop: [0.04, 0.11, 0.92, 0.80]
  },
  {
    src: 'public/images/projects_original_slides/akanchha-harsh-residence/hero.png',
    dest: 'public/images/projects/akanchha-harsh-residence/hero.png',
    crop: [0.04, 0.11, 0.92, 0.80]
  },
  // Clean 3D render of crockery unit & double-door refrigerator
  {
    src: 'public/images/projects_original_slides/akanchha-harsh-residence/puja-niche.png',
    dest: 'public/images/projects/akanchha-harsh-residence/puja-niche-clean.png',
    crop: [0.10, 0.12, 0.60, 0.80]
  },
  {
    src: 'public/images/projects_original_slides/akanchha-harsh-residence/puja-niche.png',
    dest: 'public/images/projects/akanchha-harsh-residence/puja-niche.png',
    crop: [0.10, 0.12, 0.60, 0.80]
  },
  // Clean 3D render of TV & Pooja unit with fluted oak panels (crops out left callout text)
  {
    src: 'public/images/projects_original_slides/akanchha-harsh-residence/wardrobe-cad.png',
    dest: 'public/images/projects/akanchha-harsh-residence/tv-pooja-3d-clean.png',
    crop: [0.20, 0.12, 0.52, 0.80]
  },
  // Clean 3D render of the green modular kitchen (crops out left callout text)
  {
    src: 'public/images/projects_original_slides/akanchha-harsh-residence/kids-bunk-cad.png',
    dest: 'public/images/projects/akanchha-harsh-residence/kitchen-3d-clean.png',
    crop: [0.18, 0.12, 0.52, 0.80]
  },
  // Clean 2D internal CAD elevation of kitchen
  {
    src: 'public/images/projects_original_slides/akanchha-harsh-residence/foyer-elevation.png',
    dest: 'public/images/projects/akanchha-harsh-residence/kitchen-internal-cad-clean.png',
    crop: [0.04, 0.11, 0.92, 0.80]
  },
  // Clean 2D CAD elevation of TV & Pooja wall
  {
    src: 'public/images/projects_original_slides/akanchha-harsh-residence/kids-room-view.png',
    dest: 'public/images/projects/akanchha-harsh-residence/tv-pooja-cad-clean.png',
    crop: [0.04, 0.11, 0.92, 0.80]
  },

  // ==========================================
  // KORAMANGALA LUXURY VILLA
  // ==========================================
  // Drawing room & dining room: remove grey slide header
  {
    src: 'public/images/projects_original_slides/koramangala-luxury-villa/hero.png',
    dest: 'public/images/projects/koramangala-luxury-villa/hero-clean.png',
    crop: [0.01, 0.11, 0.98, 0.86]
  },
  {
    src: 'public/images/projects_original_slides/koramangala-luxury-villa/hero.png',
    dest: 'public/images/projects/koramangala-luxury-villa/hero.png',
    crop: [0.01, 0.11, 0.98, 0.86]
  },
  {
    src: 'public/images/projects_original_slides/koramangala-luxury-villa/drawing-room.png',
    dest: 'public/images/projects/koramangala-luxury-villa/drawing-room-clean.png',
    crop: [0.01, 0.11, 0.98, 0.86]
  },
  {
    src: 'public/images/projects_original_slides/koramangala-luxury-villa/drawing-room.png',
    dest: 'public/images/projects/koramangala-luxury-villa/drawing-room.png',
    crop: [0.01, 0.11, 0.98, 0.86]
  },
  {
    src: 'public/images/projects_original_slides/koramangala-luxury-villa/dining-area.png',
    dest: 'public/images/projects/koramangala-luxury-villa/dining-area-clean.png',
    crop: [0.01, 0.11, 0.98, 0.86]
  },
  {
    src: 'public/images/projects_original_slides/koramangala-luxury-villa/dining-area.png',
    dest: 'public/images/projects/koramangala-luxury-villa/dining-area.png',
    crop: [0.01, 0.11, 0.98, 0.86]
  },

  // ==========================================
  // SATTVA GREENAGE
  // ==========================================
  // 3D Foyer entrance render (removes orange banner and left margin text)
  {
    src: 'public/images/projects_original_slides/sattva-greenage/hero.png',
    dest: 'public/images/projects/sattva-greenage/hero-clean.png',
    crop: [0.26, 0.16, 0.46, 0.78]
  },
  {
    src: 'public/images/projects_original_slides/sattva-greenage/hero.png',
    dest: 'public/images/projects/sattva-greenage/hero.png',
    crop: [0.26, 0.16, 0.46, 0.78]
  },
  // 2D Kitchen top view CAD plan
  {
    src: 'public/images/projects_original_slides/sattva-greenage/guest-wardrobe-cad.png',
    dest: 'public/images/projects/sattva-greenage/kitchen-plan-cad-clean.png',
    crop: [0.02, 0.12, 0.96, 0.80]
  },
  // 2D Sofa wall elevation CAD
  {
    src: 'public/images/projects_original_slides/sattva-greenage/kitchen-cad.png',
    dest: 'public/images/projects/sattva-greenage/sofa-elevation-cad-clean.png',
    crop: [0.02, 0.12, 0.96, 0.80]
  },
  // 2D Shoe rack elevation CAD
  {
    src: 'public/images/projects_original_slides/sattva-greenage/living-passage-cad.png',
    dest: 'public/images/projects/sattva-greenage/shoe-rack-cad-clean.png',
    crop: [0.02, 0.12, 0.96, 0.80]
  },

  // ==========================================
  // MAHAVEER RANCHES
  // ==========================================
  // 3D TV & Pooja unit render (removes left margin callout)
  {
    src: 'public/images/projects_original_slides/mahaveer-ranches/wardrobe-cad.png',
    dest: 'public/images/projects/mahaveer-ranches/hero-clean.png',
    crop: [0.20, 0.12, 0.52, 0.80]
  },
  {
    src: 'public/images/projects_original_slides/mahaveer-ranches/wardrobe-cad.png',
    dest: 'public/images/projects/mahaveer-ranches/hero.png',
    crop: [0.20, 0.12, 0.52, 0.80]
  },
  // 3D Modular kitchen render (removes left callout text)
  {
    src: 'public/images/projects_original_slides/mahaveer-ranches/kids-study-cad.png',
    dest: 'public/images/projects/mahaveer-ranches/kitchen-3d-clean.png',
    crop: [0.18, 0.12, 0.54, 0.80]
  },

  // ==========================================
  // PLATINUM GREENFIELDS
  // ==========================================
  // Crop 3D Bar unit render (removes red banner)
  {
    src: 'public/images/projects_original_slides/platinum-greenfields/bar-unit-cad.png',
    dest: 'public/images/projects/platinum-greenfields/bar-unit-3d-clean.png',
    crop: [0.10, 0.15, 0.48, 0.68]
  },
  {
    src: 'public/images/projects_original_slides/platinum-greenfields/bar-unit-cad.png',
    dest: 'public/images/projects/platinum-greenfields/hero-clean.png',
    crop: [0.10, 0.15, 0.48, 0.68]
  },
  {
    src: 'public/images/projects_original_slides/platinum-greenfields/bar-unit-cad.png',
    dest: 'public/images/projects/platinum-greenfields/hero.png',
    crop: [0.10, 0.15, 0.48, 0.68]
  },

  // ==========================================
  // CASAGRAND FLORELLA
  // ==========================================
  // Living area CAD elevation (removes red banner)
  {
    src: 'public/images/projects_original_slides/casagrand-florella/kids-study-cad.png',
    dest: 'public/images/projects/casagrand-florella/living-elevation-cad-clean.png',
    crop: [0.04, 0.12, 0.92, 0.80]
  }
];

async function runCrops() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log(`Starting precision cropping of ${CROPS.length} project images...`);

  // Ensure casagrand-florella has a clean luxury villa hero
  const villaSrc = path.resolve('public/images/projects/5bhk-villa/bedroom-cove-stone-wall.jpg');
  if (fs.existsSync(villaSrc)) {
    fs.copyFileSync(villaSrc, path.resolve('public/images/projects/casagrand-florella/hero.png'));
    fs.copyFileSync(villaSrc, path.resolve('public/images/projects/casagrand-florella/hero-clean.png'));
    console.log('✓ Copied luxury villa hero to casagrand-florella');
  }

  for (const item of CROPS) {
    const srcAbs = path.resolve(item.src);
    const destAbs = path.resolve(item.dest);

    if (!fs.existsSync(srcAbs)) {
      console.warn(`Source not found: ${srcAbs}`);
      continue;
    }

    const buf = fs.readFileSync(srcAbs);
    const b64 = buf.toString('base64');

    const croppedB64 = await page.evaluate(async ({ b64, crop }) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const [cx, cy, cw, ch] = crop;
          const sx = Math.floor(cx * img.width);
          const sy = Math.floor(cy * img.height);
          const sw = Math.floor(cw * img.width);
          const sh = Math.floor(ch * img.height);

          const canvas = document.createElement('canvas');
          canvas.width = sw;
          canvas.height = sh;
          const ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);

          resolve(canvas.toDataURL('image/png').split(',')[1]);
        };
        img.src = 'data:image/png;base64,' + b64;
      });
    }, { b64, crop: item.crop });

    fs.mkdirSync(path.dirname(destAbs), { recursive: true });
    fs.writeFileSync(destAbs, Buffer.from(croppedB64, 'base64'));
    console.log(`✓ Cropped: ${path.basename(item.dest)}`);
  }

  await browser.close();
  console.log('All crops completed successfully!');
}

runCrops().catch(console.error);
