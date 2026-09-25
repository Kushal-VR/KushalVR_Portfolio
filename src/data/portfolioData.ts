export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  role: string;
  technology: string;
  status: string;
  website?: string;
  image: string;
  secondaryImage?: string;
  videoUrl?: string;
  overview: string;
  whatIBuilt: string[];
  approach: string;
  features: string[];
  techStack: string[];
}

export interface Discipline {
  number: string;
  name: string;
  skills: string[];
  description: string;
}


export interface TechCategory {
  category: string;
  items: {
    name: string;
    status: 'USED IN PROJECTS' | 'CURRENTLY EXPLORING' | 'CORE ARCHITECTURE';
  }[];
}

export interface JourneyStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'cortinex',
    number: '01',
    title: 'CORTINEX BILLING SYSTEM',
    category: 'BUSINESS SOFTWARE / POS & ERP',
    description: 'A comprehensive, cloud-based billing and business management platform designed for retail stores, kirana shops, and growing enterprises with GST compliance, inventory tracking, and POS invoicing.',
    role: 'BACKEND & FULL-STACK DEVELOPER',
    technology: 'NODE.JS / JAVASCRIPT / CAPACITOR / POSTGRESQL',
    status: 'HOSTED & LIVE',
    website: 'cortinex-billingsystem.cloud',
    image: '/projects/cortinex_dash.png',
    secondaryImage: '/projects/cortinex_landing.png',
    overview: 'Cortinex Billing System is an end-to-end commerce operations engine. Built to eliminate manual billing friction, manage multi-store inventory, track profit margins, and generate GST-compliant invoices with both desktop dashboard and portable Android APK support.',
    whatIBuilt: [
      'Engineered scalable Node.js REST APIs for sub-second POS invoice generation and ledger audit trails.',
      'Designed PostgreSQL schema handling multi-store inventory sync, low-stock alerts, and gross margin calculations.',
      'Implemented daily collection analytics, vendor registry, and automated GST filing reports.',
      'Packaged cross-platform mobile client with Capacitor enabling Bluetooth thermal printing and offline transaction caching.'
    ],
    approach: 'Focusing on zero-latency checkout speeds, bulletproof data consistency under concurrent billing, and an ultra-clean user interface for non-technical shop owners.',
    features: [
      'GST-compliant thermal & digital PDF invoice generation',
      'Real-time store insight metrics (revenue, gross profit, sales delta)',
      'Multi-store inventory valuation & low-stock alerts',
      'Vendor ledger, customer accounts & POS transaction sync'
    ],
    techStack: ['Node.js', 'Express', 'JavaScript', 'PostgreSQL', 'Capacitor', 'Tailwind CSS', 'Android APK']
  },
  {
    id: 'quenalty',
    number: '02',
    title: 'QUENALTY',
    category: 'PRODUCTIVITY / AI PROTOCOL',
    description: 'A high-accountability productivity protocol and neuro-priming system designed to forge mental discipline through daily missions, AI neuro-analysis, and penalty-enforced commitment contracts.',
    role: 'BACKEND & SYSTEM DEVELOPER',
    technology: 'NODE.JS / JAVASCRIPT / CAPACITOR / AI',
    status: 'IN ACTIVE DEVELOPMENT',
    image: '/projects/quenalty_real.png',
    overview: 'Quenalty operates on the principle that real habit formation requires real stakes. By coupling structured daily missions with loss-aversion penalty contracts and AI neuro-analysis, the platform keeps users completely accountable to their commitments.',
    whatIBuilt: [
      'Constructed asynchronous commitment verification state machine with time-locked penalty trigger mechanics.',
      'Integrated AI-assisted prompt analysis verifying task completion evidence and user reflection logs.',
      'Architected cross-platform mobile app interface using Capacitor with persistent offline state synchronization.',
      'Built progressive penalty escalations and streak tracking systems that reward relentless consistency.'
    ],
    approach: 'Harnessing behavioral psychology and irreversible commitments to transform passive task lists into an active discipline engine.',
    features: [
      'AI-driven neural prompts and reflection analysis',
      'Loss-aversion penalty escrow and deadline verification',
      'Streak multipliers and habit evolution tracking',
      'Offline-first mobile synchronization architecture'
    ],
    techStack: ['Node.js', 'JavaScript', 'Capacitor', 'AI Prompts', 'PostgreSQL', 'REST APIs']
  },
  {
    id: 'imposter-3d',
    number: '03',
    title: 'IMPOSTER 3D',
    category: 'MULTIPLAYER 3D GAME',
    description: 'A real-time multiplayer 3D social-deduction building game built with Three.js and WebGL. Players cooperatively build structures around a secret keyword while a concealed Imposter sabotages the arena without being detected.',
    role: 'FULL-STACK & 3D DEVELOPER',
    technology: 'THREE.JS / JAVASCRIPT / WEBGL / WEBSOCKETS',
    status: 'COMPLETED & PLAYABLE',
    image: '/projects/imposter_real.png',
    videoUrl: '/projects/imposter_gameplay.mp4',
    overview: 'Imposter 3D combines spatial voxel architecture with psychological deception. Built directly in the browser using Three.js and WebGL, players enter a shared 3D arena where builders use materials (Cement, Wood, Glass, Steel, Gold, Water, Wheels, Diamonds) to construct objects, while the Imposter can trigger area sabotages and override builds.',
    whatIBuilt: [
      'Crafted custom browser 3D voxel sandbox engine using Three.js, procedural mesh generation, and dynamic shadows.',
      'Built authoritative multiplayer synchronization engine over low-latency WebSockets with state interpolation.',
      'Authored in-game building palette, material shaders, and sound-reactive spatial events.',
      'Engineered Imposter sabotage mechanics (Area Sabotage, Override Build, secret role distribution, and countdown voting rounds).'
    ],
    approach: 'Achieving zero-install 60fps 3D graphics in modern browsers, responsive spatial networking, and immersive emergent multiplayer gameplay.',
    features: [
      'Interactive 3D voxel builder (cube & round shapes, multiple materials)',
      'Real-time multiplayer synchronization with sub-40ms latency',
      'Imposter role mechanics (Area Sabotage, Override Build)',
      'Dynamic in-game UI with role badges, round timers, and audio controls'
    ],
    techStack: ['Three.js', 'WebGL', 'JavaScript', 'WebSockets', 'Node.js', 'GLSL Shaders']
  },
  {
    id: 'blender-works',
    number: '04',
    title: '3D SPATIAL & ARCHITECTURAL RENDERS',
    category: '3D MODELING & SPATIAL DESIGN',
    description: 'A portfolio of 3D environmental design, spatial architectural layouts, and hard-surface asset modeling created in Blender with realistic lighting, procedural materials, and technical blueprint accuracy.',
    role: '3D ARTIST & SPATIAL DESIGNER',
    technology: 'BLENDER / CYCLES / EEVEE / 3D GRAPHICS',
    status: 'SELECTED WORKS',
    image: '/blender/architectural_office.png',
    secondaryImage: '/blender/simple_suzanne.png',
    overview: 'Exploration of physical space, camera optics, and material rendering. From complete top-down architectural office layout blueprints with precise structural measurements and interior furnishings, to lighting studies and stylized asset composition.',
    whatIBuilt: [
      'Modeled complete commercial office spatial blueprints featuring private executive suites, open conference lounge, and technical CAD annotations.',
      'Developed lighting setups exploring diffuse ambient illumination, shadows, and reflection mapping in Blender Cycles & Eevee.',
      'Created hard-surface props and stylized composition renders with custom shaders.',
      'Optimized geometry topologies for export into WebGL and Three.js real-time game engines.'
    ],
    approach: 'Balancing architectural precision with cinematic lighting to translate physical spaces into digital 3D models.',
    features: [
      'Commercial architectural layout modeling with metric blueprint fidelity',
      'Interior asset staging (executive desks, modern seating, glass partitions)',
      'Custom Cycles material nodes & photorealistic lighting rigs',
      'Optimized low-poly workflows for WebGL/Three.js web integration'
    ],
    techStack: ['Blender 4.x', 'Cycles Render Engine', 'Eevee', 'UV Mapping', 'Spatial Design', 'GLTF/GLB Pipeline']
  }
];

export const DISCIPLINES: Discipline[] = [
  {
    number: '01',
    name: 'AI',
    skills: ['Local AI', 'LLMs', 'Agents', 'Automation'],
    description: 'Building autonomous agent loops, local model deployment with Ollama, tool calling pipelines, and practical workflow automations.'
  },
  {
    number: '02',
    name: 'WEB',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    description: 'Developing resilient, scalable full-stack applications with clean architectural boundaries and ultra-responsive interfaces.'
  },
  {
    number: '03',
    name: '3D',
    skills: ['Blender', 'Three.js', 'WebGL', 'Interactive Worlds'],
    description: 'Crafting immersive spatial experiences, custom shaders, and optimized 3D web environments that run smoothly across devices.'
  },
  {
    number: '04',
    name: 'GAME',
    skills: ['Unreal Engine', 'C++', 'Blueprints', 'Multiplayer'],
    description: 'Designing deterministic multiplayer mechanics, character controllers, and interactive game systems with tight physical feel.'
  }
];


export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'AI',
    items: [
      { name: 'Python', status: 'CORE ARCHITECTURE' },
      { name: 'Ollama', status: 'USED IN PROJECTS' },
      { name: 'LLMs', status: 'CORE ARCHITECTURE' },
      { name: 'AI Agents', status: 'CURRENTLY EXPLORING' },
      { name: 'Automation', status: 'USED IN PROJECTS' },
      { name: 'n8n', status: 'USED IN PROJECTS' }
    ]
  },
  {
    category: 'WEB & SOFTWARE',
    items: [
      { name: 'JavaScript', status: 'CORE ARCHITECTURE' },
      { name: 'TypeScript', status: 'CORE ARCHITECTURE' },
      { name: 'React', status: 'CORE ARCHITECTURE' },
      { name: 'Next.js', status: 'USED IN PROJECTS' },
      { name: 'Node.js', status: 'CORE ARCHITECTURE' },
      { name: 'PostgreSQL', status: 'CORE ARCHITECTURE' },
      { name: 'Supabase', status: 'USED IN PROJECTS' }
    ]
  },
  {
    category: '3D',
    items: [
      { name: 'Blender', status: 'USED IN PROJECTS' },
      { name: 'Three.js', status: 'CORE ARCHITECTURE' },
      { name: 'WebGL', status: 'USED IN PROJECTS' }
    ]
  },
  {
    category: 'GAME DEVELOPMENT',
    items: [
      { name: 'Unreal Engine', status: 'CURRENTLY EXPLORING' },
      { name: 'C++', status: 'USED IN PROJECTS' },
      { name: 'Blueprints', status: 'USED IN PROJECTS' }
    ]
  },
  {
    category: 'INFRASTRUCTURE',
    items: [
      { name: 'Git', status: 'CORE ARCHITECTURE' },
      { name: 'GitHub', status: 'CORE ARCHITECTURE' },
      { name: 'Docker', status: 'USED IN PROJECTS' },
      { name: 'Redis', status: 'USED IN PROJECTS' },
      { name: 'Capacitor', status: 'USED IN PROJECTS' }
    ]
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    number: '01',
    title: 'START',
    subtitle: 'THE INITIAL SPARK',
    description: 'Discovered the power of code not through school theory, but by wondering how software, tools, and digital experiences were actually assembled.'
  },
  {
    number: '02',
    title: 'LEARN',
    subtitle: 'BREAKING ABSTRACTIONS',
    description: 'Dove into low-level logic, syntax, data structures, and computer science foundations. Learned to love understanding the machinery underneath.'
  },
  {
    number: '03',
    title: 'BUILD',
    subtitle: 'BEYOND TUTORIALS',
    description: 'Transitioned from guided exercises to creating real, functioning backends, APIs, and databases capable of withstanding real user traffic.'
  },
  {
    number: '04',
    title: 'EXPERIMENT',
    subtitle: 'CROSSING DISCIPLINES',
    description: 'Expanded beyond standard web development into 3D graphics, WebGL engines, game development, and local AI agent workflows.'
  },
  {
    number: '05',
    title: 'BREAK',
    subtitle: 'STRESS AND FAILURE',
    description: 'Pushed systems to their breaking points: handling race conditions in multiplayer netcode, memory leaks, and distributed state desync.'
  },
  {
    number: '06',
    title: 'REBUILD',
    subtitle: 'CRAFTSMANSHIP & RIGOR',
    description: 'Reconstructed architectures with discipline: modular decoupling, strict typing, deterministic state machines, and defensive design.'
  },
  {
    number: '07',
    title: 'SHIP',
    subtitle: 'INTO THE REAL WORLD',
    description: 'Shipped production billing platforms, interactive multiplayer games, and productivity tools utilized by real humans.'
  },
  {
    number: '08',
    title: 'NEXT',
    subtitle: 'THE UNEXPLORED HORIZON',
    description: 'Continuing to build across the intersection of intelligent local models, spatial 3D interfaces, and high-performance digital tools.'
  }
];

export const CURRENT_FOCUS_ITEMS = [
  'AI SYSTEMS',
  'INTERACTIVE WEB EXPERIENCES',
  '3D WORLDS',
  'GAME SYSTEMS',
  'SOFTWARE PRODUCTS',
  'LOCAL AGENTIC ARCHITECTURES'
];
