
import { Service, Project, Tool } from './types';

export const SERVICES: Service[] = [
  {
    id: 'cad-dfm',
    title: 'Product Engineering & DFM',
    description: 'We architect production-grade mechanical systems optimized for manufacturability, cost efficiency, and performance at scale. Our CAD workflows integrate tolerance analysis, material science, and industrial automation constraints.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    details: 'Full-cycle product development from concept sketches to manufacturing-ready assemblies. We leverage parametric CAD, generative design, and DFM/DFA principles to reduce tooling costs by 30-50% while maintaining structural integrity.',
  },
  {
    id: 'simulation',
    title: 'Computational Analysis & Validation',
    description: 'Advanced multi-physics simulation: CFD for fluid dynamics, FEA for structural mechanics, thermal analysis for heat dissipation, and coupled simulations for complex interactions. We validate before you manufacture.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    details: 'Our simulation lab runs on enterprise-grade solvers (ANSYS, COMSOL, OpenFOAM) with HPC clusters for rapid iteration. We deliver convergence studies, mesh independence verification, and validation against analytical benchmarks or experimental data.',
  },
  {
    id: 'prototyping',
    title: 'Rapid Prototyping & Validation',
    description: 'High-fidelity physical prototypes using additive manufacturing, CNC machining, and mechatronics integration. We build, test, iterate. Real hardware, real data.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800',
    details: 'From concept proof to pilot production runs. We integrate sensors, actuators, and embedded systems for functional testing. Our lab includes 3D printers (FDM, SLA, SLS), 5-axis CNC mills, laser cutters, and electronics benches.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Aerodynamic Optimization: F1 Rear Wing Assembly',
    category: 'CFD',
    description: 'Computational fluid dynamics study to maximize downforce while minimizing drag for a Formula 1 rear wing under race conditions (250+ km/h).',
    image: '/f1-wing-diagram.png',
    tags: ['CFD', 'OpenFOAM', 'Aerodynamics'],
    situation: 'Client required 15% increase in downforce without increasing drag coefficient for competitive advantage in high-speed corners.',
    task: 'Optimize wing geometry using parametric CFD sweeps across 50+ design variants with turbulence modeling (k-ω SST).',
    action: 'Deployed automated mesh generation pipeline with adaptive refinement in wake regions. Ran 2 million cell simulations on HPC cluster. Validated against wind tunnel data (R² = 0.94).',
    result: '18.2% downforce increase, 3% drag reduction. Lap time simulations predicted 0.4s improvement per lap. Design transitioned to carbon fiber manufacturing.',
  },
  {
    id: 'p2',
    title: 'Modal Analysis: 3U CubeSAT Structural Integrity',
    category: 'FEA',
    description: 'Static and dynamic stress analysis for a 3U CubeSAT satellite to survive launch vibration profiles (NASA GEVS) and orbital thermal cycling.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800',
    tags: ['ANSYS', 'FEA', 'Aerospace'],
    situation: 'Satellite failed pre-launch vibration testing due to resonance at 140 Hz, risking mission abort and $2M loss.',
    task: 'Identify resonant modes, redesign chassis structure to shift natural frequencies outside launch spectrum (20-2000 Hz).',
    action: 'Performed modal analysis with Contact FEA. Added strategic ribs and changed aluminum alloy to Al-7075. Ran random vibration analysis per MIL-STD-810G.',
    result: 'Shifted first mode to 280 Hz. Passed qualification testing with 40% stress margin. Satellite launched successfully on SpaceX Falcon 9.',
  },
  {
    id: 'p3',
    title: 'Thermal Management: EV Battery Pack Cooling',
    category: 'Thermal',
    description: 'Conjugate heat transfer simulation for liquid-cooled battery pack maintaining cell temperatures between 20-35°C under fast charging.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    tags: ['COMSOL', 'Thermal', 'Automotive'],
    situation: 'Battery pack exceeded 45°C during DC fast charging, triggering thermal throttling and reducing charge rate by 50%.',
    task: 'Design serpentine cooling channel layout with minimal pumping power (<50W) to keep all 96 cells below 35°C.',
    action: 'Built transient thermal model with electrochemical heat generation coupled to fluid flow (Re~3000). Optimized channel geometry using adjoint solver.',
    result: 'Max cell temp reduced to 32°C. Charge time reduced by 22%. Pump power: 35W. Client integrated design into production vehicles (10k+ units/year).',
  },
  {
    id: 'p4',
    title: 'Structural Design: Industrial Robotic Arm',
    category: 'Mechanical Design',
    description: 'Lightweight manipulator design for 50kg payload with <0.5mm end-effector deflection under dynamic loading.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    tags: ['SolidWorks', 'FEA', 'Robotics'],
  },
];

export const TOOLS: Tool[] = [
  { name: 'Ansys', logo: 'ANSYS' },
  { name: 'SolidWorks', logo: 'SOLIDWORKS' },
  { name: 'MATLAB', logo: 'MATLAB' },
  { name: 'COMSOL', logo: 'COMSOL' },
  { name: 'Catia', logo: 'CATIA' },
  { name: 'Fusion 360', logo: 'FUSION' },
  { name: 'Python', logo: 'PYTHON' },
  { name: 'OpenFOAM', logo: 'OPENFOAM' },
];

