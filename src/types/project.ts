export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: "Residential" | "Commercial" | "Furniture" | "Hospitality" | "Villa" | "Café Interior";
  location: string;
  year?: string;
  headline: string;
  shortDescription: string;
  heroImage: string;
  thumbnailImage: string;
  details?: {
    scope?: string;
    area?: string;
    timeline?: string;
    deliverables?: string[];
  };
  designDecisions?: {
    function: string;
    material: string;
    detail: string;
  };
  spatialStudy?: SpatialStudy;
}

export interface SpatialHotspot {
  id: string;             // "01", "02", "03", "04", "05"
  title: string;          // e.g. "TV & Media Wall"
  description: string;    // 1-2 sentence design explanation
  x: number;              // Axonometric X coordinate (percentage 0-100)
  y: number;              // Axonometric Y coordinate (percentage 0-100)
  planX: number;          // 2D Floor plan X coordinate (percentage 0-100)
  planY: number;          // 2D Floor plan Y coordinate (percentage 0-100)
  category?: string;      // "Storage", "Circulation", "Lighting", "Materials", "Seating"
}

export interface SpatialMaterialSwatch {
  name: string;           // "Light Oak", "Travertine Stone", "Warm White"
  textureUrl?: string;    // Texture swatch image or background color
  colorHex?: string;      // Fallback hex
  finish?: string;        // "Natural matte oil", "Honed matte", "Eggshell"
}

export interface SpatialHighlight {
  id: string;
  label: string;          // "Open Planning", "Natural Materials", "Custom Storage", etc.
  iconName: string;       // Lucide icon identifier
  description: string;
}

export interface SpatialRenderPreview {
  url: string;
  caption: string;
  viewLabel: string;
}

export interface SpatialStudy {
  enabled: boolean;
  roomName: string;       // "Living & Dining"
  subtitle?: string;      // "From plan to experience."
  designIntention: string;// "A warm, open living and dining environment designed around natural light, conversation and concealed everyday storage."
  floorPlanTitle?: string;// "Furniture Layout"
  floorPlanImage?: string;// Optional floor plan image overlay
  axonometricImage: string;
  hotspots: SpatialHotspot[];
  highlights: SpatialHighlight[];
  materials: SpatialMaterialSwatch[];
  gallery: SpatialRenderPreview[];
}

export interface CategoryPortal {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StyleOutput {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  evidence: string[];
  linkText: string;
  href: string;
  tag?: string;
  badge?: string;
  category?: string;
  swatches?: { name: string; hex: string }[];
}

export interface FurnitureDimensionMm {
  width: number;
  depth: number;
  height: number;
  clearanceMm?: number;
  toleranceMm?: number;
  unit: "mm";
}

export interface FurnitureHardware {
  brand: "Blum" | "Häfele" | "Hettich" | "Grass" | "Custom Architectural";
  partCode: string;
  name: string;
  application: string;
  qty: number | string;
}

export interface FurnitureCutListItem {
  partName: string;
  qty: number;
  thicknessMm: number;
  lengthMm: number;
  widthMm: number;
  material: string;
  edgeBanding: string;
}

export interface FurnitureRenderView {
  title: string;
  caption: string;
  image: string;
  mood: string;
}

export interface FurnitureCADData {
  drawingNumber: string;
  scale: string;
  datumReference: string;
  system32Pitch: string;
  fillerSpecification: string;
  elevationSvgType: string;
  frontElevationSvg?: string;
  sideSectionSvg?: string;
  planViewSvg?: string;
  dimensionChains: {
    label: string;
    dimension: string;
    arithmetic: string;
    verifiedStatus: "verified" | "derived" | "reference";
  }[];
  criticalJoineryNotes: string[];
}

export interface FurnitureItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: "Living" | "Dining" | "Bedroom" | "Storage" | "Study" | "Pooja";
  materials: string;
  dimensions: string;
  dimensionsMm: FurnitureDimensionMm;
  description: string;
  designIntent: string;
  ergonomicRationale: string;
  technicalSpecs: string[];
  image: string;
  cadData: FurnitureCADData;
  hardwareSchedule: FurnitureHardware[];
  cutList: FurnitureCutListItem[];
  renderGallery: FurnitureRenderView[];
  materialPalette: {
    name: string;
    finish: string;
    colorHex: string;
    notes: string;
  }[];
}


