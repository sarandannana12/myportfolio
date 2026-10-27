/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };


export const profile = {
  fullName: 'Dannana Saran Babu',
  displayName: 'Saran Babu',
  firstName: 'SARAN',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SARAN ORIGINAL',
  role: 'Graduate Engineer Trainee | Solar Manufacturing',
  tagline: ['Cloud & DevOps', 'VLSI Design', 'Solar Technology'],
  intro:
    'Electronics and Communication Engineering graduate with experience in solar cell manufacturing, AWS cloud services, and VLSI design. Interested in Cloud, DevOps, embedded systems, and semiconductor technologies.',
  location: 'Odisha, India',
  email: 'dannanasaranbabu@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/dannanasaranbabu/',
    github: 'https://github.com/sarandannana12/',
  },
  resumePdf: '/assets/Saran_Babu_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Dannana Saran Babu',
  },
  interests: ['Cloud Computing (AWS)', 'DevOps', 'VLSI Design', 'Solar Technology'],
};



export const education = [
  {
    school: 'NIST University',
    place: 'Berhampur, Odisha',
    degree: 'Bachelor of Technology — Electronics and Communication Engineering',
    period: '2023 – 2026',
    score: 'CGPA 8.2',
  },
  {
    school: 'Diploma in Electrical Engineering',
    place: 'Odisha',
    degree: 'Diploma — Electrical Engineering',
    period: 'Completed July 2023',
    score: '74%',
  },
  {
    school: 'Secondary Education',
    place: 'Odisha',
    degree: '10th Standard',
    period: '2018',
    score: '58%',
  },
];


export const experience = [
  {
    company: 'Saatvik Green Energy Ltd.',
    role: 'Graduate Engineer Trainee (GET) — Process',
    place: 'Solar Cell Manufacturing Plant, India',
    period: '2026 – Present',
    points: [
      'Working in the Cell Division Process Department, supporting TOPCon solar cell manufacturing operations and process activities.',
      'Learning thermal line processes, including Boron Diffusion, Annealing, ALD, and Front and Rear PECVD.',
      'Observing equipment installation, alignment, automation trials, and manufacturing line readiness activities.',
      'Developing knowledge of process parameters, equipment operation, EHS requirements, and solar cell manufacturing quality standards.',
    ],
  },
  {
    company: 'Zoho Corporation',
    role: 'AWS Cloud Engineer Trainee Intern',
    place: 'Remote',
    period: 'May – August 2025',
    points: [
      'Gained exposure to AWS cloud services, including Amazon EC2, Amazon S3, IAM, and AWS Lambda.',
      'Learned cloud resource provisioning, configuration, access management, and basic cloud security practices.',
      'Explored application deployment workflows and cloud storage integration on AWS.',
      'Practiced basic cloud resource monitoring, log review, and troubleshooting of common deployment issues.',
      'Developed an understanding of cloud automation, infrastructure management, and reliable cloud deployment practices.',
    ],
  },
];


export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};


export const projects: Project[] = [
  {
    id: 'aws-cloud-storage',
    title: 'AWS Cloud-Based File Storage & Sharing',
    year: '2025',
    genre: 'AWS • Cloud • Serverless',
    logline:
      'A cloud-based file storage and sharing system using AWS managed services and serverless architecture.',
    stack: ['AWS S3', 'AWS Lambda', 'Amazon Cognito', 'CloudFront'],
    build: [
      'Designed a cloud-based file storage and sharing solution using Amazon S3 for object storage and AWS Lambda for serverless operations.',
      'Used Amazon Cognito for user authentication and CloudFront for content delivery, exploring secure access and scalable distribution of stored files.',
    ],
    features: [
      'Cloud object storage using Amazon S3',
      'Serverless processing with AWS Lambda',
      'User authentication using Amazon Cognito',
      'Content delivery using Amazon CloudFront',
      'Scalable cloud storage architecture',
    ],
    metrics: [
      { value: '4', label: 'AWS services integrated' },
      { value: 'S3', label: 'object storage' },
      { value: 'Serverless', label: 'compute architecture' },
    ],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'tenants',
  },
  {
    id: 'ahb-apb-bridge',
    title: 'AHB-to-APB Bridge Design',
    year: '2024',
    genre: 'VLSI • RTL Design • Verification',
    logline:
      'A Verilog HDL implementation of an interface bridge between AMBA AHB and APB buses.',
    stack: ['Verilog HDL', 'AMBA Protocols', 'Xilinx Vivado', 'Testbench'],
    build: [
      'Designed an AHB-to-APB bridge in Verilog HDL to enable communication between a high-performance AHB bus and a simpler APB peripheral bus.',
      'Worked on bridge control logic, transfer sequencing, and simulation-based verification of bus transactions.',
    ],
    features: [
      'AHB and APB interface logic',
      'Finite-state-machine-based control',
      'Bus transfer sequencing',
      'Verilog RTL design',
      'Simulation and testbench verification',
    ],
    metrics: [
      { value: 'AHB', label: 'high-performance bus interface' },
      { value: 'APB', label: 'peripheral bus interface' },
      { value: 'RTL', label: 'hardware description' },
    ],
    palette: {
      from: '#1a0d02',
      via: '#8a4a07',
      to: '#0a0806',
      accent: '#ffb547',
    },
    motif: 'flow',
  },
  {
    id: 'aws-infrastructure-monitoring',
    title: 'AWS Infrastructure Monitoring & Automation',
    year: '2026',
    genre: 'AWS • DevOps • Cloud Operations',
    logline:
      'A sample cloud engineering project for monitoring AWS resources and automating basic operational alerts.',
    stack: [
      'Amazon EC2',
      'Amazon CloudWatch',
      'AWS Lambda',
      'Amazon SNS',
      'AWS IAM',
    ],
    build: [
      'Proposed a cloud monitoring workflow using Amazon CloudWatch metrics and alarms to track EC2 instance health and resource utilization.',
      'Designed an event-driven automation flow using AWS Lambda and Amazon SNS to process monitoring events and send operational notifications.',
      'Included IAM roles and least-privilege permissions as part of the design for secure access between AWS services.',
    ],
    features: [
      'EC2 health and utilization monitoring',
      'CloudWatch metrics and alarms',
      'Event-driven automation using Lambda',
      'Notifications using Amazon SNS',
      'IAM roles and least-privilege access',
    ],
    metrics: [
      { value: '5', label: 'AWS services in the design' },
      { value: 'Event-driven', label: 'automation approach' },
      { value: 'IAM', label: 'access control' },
    ],
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};


export const achievements: Achievement[] = [
  {
    id: 'solar-engineering',
    title: 'Graduate Engineer Trainee',
    org: 'Saatvik Green Energy Ltd.',
    detail:
      'Selected to work in the Cell Division Process Department, gaining exposure to TOPCon solar cell manufacturing and thermal line operations.',
    laurel: 'Professional Experience',
  },
  {
    id: 'vlsi-project',
    title: 'AHB-to-APB Bridge Design',
    org: 'VLSI Design Project',
    detail:
      'Worked on an RTL design project using Verilog HDL focused on communication between AHB and APB bus interfaces.',
    laurel: 'Hardware Design',
  },
  {
    id: 'cloud-project',
    title: 'AWS Cloud Storage System',
    org: 'Cloud Computing Project',
    detail:
      'Developed a cloud storage and sharing project using AWS services including S3, Lambda, Cognito, and CloudFront.',
    laurel: 'Cloud Computing',
  },
];


export type Certification = { issuer: string; name: string; link: string };


export const certifications: Certification[] = [
  {
    issuer: 'Forage',
    name: 'Deloitte Australia - Cyber Job Simulation',
    link: 'https://www.linkedin.com/in/dannanasaranbabu/details/certifications/',
  },
  {
    issuer: 'Udemy',
    name: 'Microsoft Excel Data Analysis with Formulas and VBA',
    link: 'https://www.linkedin.com/in/dannanasaranbabu/details/certifications/',
  },
  {
    issuer: 'Udemy',
    name: 'Verilog for an FPGA Engineer with Xilinx Vivado Design Suite',
    link: 'https://www.linkedin.com/in/dannanasaranbabu/details/certifications/',
  },
  {
    issuer: 'HackerRank',
    name: 'SQL Basic',
    link: 'https://www.hackerrank.com/certificates/2940ada3c898',
  },
  {
    issuer: 'Infosys',
    name: 'Fundamentals of Information Security',
    link: 'https://www.linkedin.com/in/dannanasaranbabu/details/certifications/',
  },
  {
    issuer: 'HackerRank',
    name: 'Problem Solving Basic',
    link: 'https://www.hackerrank.com/certificates/45fcf8204c72',
  },
  {
    issuer: 'HackerRank',
    name: 'SQL Advanced',
    link: 'https://www.hackerrank.com/certificates/iframe/c3f0e3d0b82c',
  },
  {
    issuer: 'SAP',
    name: 'SAP Certified Associate - Backend Developer - ABAP Cloud',
    link: 'https://www.linkedin.com/in/dannanasaranbabu/details/certifications/',
  },
  {
    issuer: 'Forage',
    name: 'Goldman Sachs - Operations Job Simulation',
    link: 'https://www.linkedin.com/in/dannanasaranbabu/details/certifications/',
  },
  {
    issuer: 'LearnTube.ai',
    name: 'AWS Cloud',
    link: 'https://www.linkedin.com/in/dannanasaranbabu/details/certifications/',
  },
];


export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: { name: string; mono: string }[];
};

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Computing',
    subtitle: 'AWS services & infrastructure',
    skills: [
      { name: 'AWS EC2', mono: 'Ec' },
      { name: 'AWS S3', mono: 'S3' },
      { name: 'AWS IAM', mono: 'Ia' },
      { name: 'AWS Lambda', mono: 'La' },
      { name: 'CloudFormation', mono: 'Cf' },
      { name: 'CloudFront', mono: 'Cw' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    subtitle: 'Automation, deployment & version control',
    skills: [
      { name: 'Linux', mono: 'Lx' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'CI/CD Pipelines', mono: 'Ci' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Git Bash', mono: 'Gb' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Programming & scripting',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Verilog', mono: 'Vl' },
      { name: 'SystemVerilog', mono: 'Sv' },
    ],
  },
  {
    id: 'vlsi',
    title: 'VLSI & Hardware',
    subtitle: 'RTL design & verification',
    skills: [
      { name: 'RTL Design', mono: 'Rt' },
      { name: 'Testbenches', mono: 'Tb' },
      { name: 'Xilinx Vivado', mono: 'Xv' },
      { name: 'MATLAB', mono: 'Mt' },
      { name: 'Digital Electronics', mono: 'De' },
      { name: 'Microcontrollers', mono: 'Mc' },
    ],
  },
  {
    id: 'solar',
    title: 'Solar Manufacturing',
    subtitle: 'TOPCon cell process knowledge',
    skills: [
      { name: 'TOPCon Technology', mono: 'Tp' },
      { name: 'Boron Diffusion', mono: 'Bd' },
      { name: 'PECVD', mono: 'Pe' },
      { name: 'ALD', mono: 'Al' },
      { name: 'Annealing', mono: 'An' },
      { name: 'Process Monitoring', mono: 'Pm' },
      { name: 'EHS & Safety', mono: 'Eh' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Technical Fundamentals',
    subtitle: 'Core engineering concepts',
    skills: [
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Digital Communication', mono: 'Dc' },
      { name: 'Signal Processing', mono: 'Sp' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'AWS EC2': ['AWS Infrastructure Monitoring & Automation'],
  'AWS S3': ['AWS Cloud-Based File Storage & Sharing'],
  'AWS IAM': [
    'AWS Cloud-Based File Storage & Sharing',
    'AWS Infrastructure Monitoring & Automation',
  ],
  'AWS Lambda': [
    'AWS Cloud-Based File Storage & Sharing',
    'AWS Infrastructure Monitoring & Automation',
  ],
  CloudFormation: ['Cloud Infrastructure & Automation'],
  CloudFront: ['AWS Cloud-Based File Storage & Sharing'],
  Linux: ['Cloud Infrastructure & Deployment'],
  'Git / GitHub': ['Project Version Control'],
  Docker: ['Cloud & DevOps Learning'],
  Jenkins: ['CI/CD Learning'],
  'CI/CD Pipelines': ['Cloud & DevOps Learning'],
  Python: ['Cloud Automation Learning'],
  C: ['Programming Fundamentals'],
  SQL: ['Database Fundamentals'],
  Verilog: ['AHB-to-APB Bridge Design'],
  SystemVerilog: ['RTL Verification Learning'],
  'RTL Design': ['AHB-to-APB Bridge Design'],
  Testbenches: ['AHB-to-APB Bridge Design'],
  'Xilinx Vivado': ['AHB-to-APB Bridge Design'],
  MATLAB: ['Electronics & Communication Engineering'],
  'Digital Electronics': ['AHB-to-APB Bridge Design'],
  Microcontrollers: ['Smart Home Automation'],
  'TOPCon Technology': ['Solar Cell Manufacturing Experience'],
  'Boron Diffusion': ['Solar Cell Manufacturing Experience'],
  PECVD: ['Solar Cell Manufacturing Experience'],
  ALD: ['Solar Cell Manufacturing Experience'],
  Annealing: ['Solar Cell Manufacturing Experience'],
  'Process Monitoring': ['Solar Cell Manufacturing Experience'],
  'EHS & Safety': ['Solar Cell Manufacturing Experience'],
  'Computer Networks': ['Computer Science Fundamentals'],
  'Operating Systems': ['Computer Science Fundamentals'],
  DBMS: ['Database Fundamentals'],
  'Digital Communication': ['Electronics & Communication Engineering'],
  'Signal Processing': ['Electronics & Communication Engineering'],
};


export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };


export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2018 – 2023',
    synopsis:
      'Building an electrical engineering foundation through ITI and Diploma studies.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The First Step',
        description:
          'Completed matriculation in Odisha before beginning a journey into electrical and electronics engineering.',
        tags: ['Matriculation', 'Electrical Engineering'],
        runtime: '2018',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Hands-On Engineering',
        description:
          'Completed ITI in Electrical and Electronics Engineering, developing a foundation in practical electrical work.',
        tags: ['ITI', 'Electrical Engineering'],
        runtime: '2018 – 2020',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'The Diploma',
        description:
          'Completed a Diploma in Electrical and Electronics Engineering through SCTE & VT, Odisha.',
        tags: ['Diploma', 'Electrical & Electronics'],
        runtime: '2021 – 2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Into Electronics',
    period: '2023 – 2026',
    synopsis:
      'Advancing into Electronics and Communication Engineering at NIST University, Berhampur.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description:
          'Completed a Bachelor of Technology in Electrical, Electronics and Communications Engineering at NIST University.',
        tags: ['B.Tech', 'ECE', 'NIST University'],
        runtime: 'December 2023 – June 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Hardware Designer',
        description:
          'Worked on an AHB-to-APB bridge design using Verilog HDL, exploring bus protocols, RTL design, and hardware verification.',
        tags: ['Verilog HDL', 'RTL Design', 'VLSI'],
        runtime: '2024 – 2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Exploring Technology',
    period: '2024 – 2025',
    synopsis:
      'Gaining exposure to cloud computing, VLSI design, and professional collaboration.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Cloud Learner',
        description:
          'Worked on a cloud-based file storage and sharing project using Amazon S3, AWS Lambda, Amazon Cognito, and CloudFront during the Vaidsys Technologies AWS internship.',
        tags: ['AWS', 'Cloud Computing', 'Serverless'],
        runtime: 'July – August 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The VLSI Trainee',
        description:
          'Completed a VLSI design internship at Maven Silicon, working on an AHB-to-APB bridge implementation using Verilog.',
        tags: ['VLSI', 'Verilog', 'Bus Protocols'],
        runtime: 'May – June 2025',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Collaborator',
        description:
          'Served as a Campus Ambassador at Edu-versity, helping promote entrepreneurship and innovation among students.',
        tags: ['Campus Ambassador', 'Entrepreneurship'],
        runtime: 'October 2024 – June 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Career Beginnings',
    period: '2026 – Present',
    synopsis:
      'Building professional experience across technical support and solar cell manufacturing.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Technical Support Engineer',
        description:
          'Worked as a Technical Support Engineer at Zoho, gaining professional experience in technical support and troubleshooting.',
        tags: ['Technical Support', 'Troubleshooting'],
        runtime: 'May – August 2026',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The Graduate Engineer',
        description:
          'Joined Saatvik Green Energy Ltd. as a Graduate Engineer Trainee in the Cell Division Process Department.',
        tags: ['Process Engineering', 'Solar Energy'],
        runtime: 'September 2026 – Present',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Process Learner',
        description:
          'Developing practical knowledge of TOPCon solar cell manufacturing, including diffusion, annealing, ALD, PECVD, wet processing, and metallization.',
        tags: ['TOPCon', 'Thermal Line', 'Process Monitoring'],
        runtime: 'Ongoing',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'The Manufacturing Engineer',
        description:
          'Learning about equipment installation, alignment, automation trials, process parameters, safety, and manufacturing line readiness.',
        tags: ['Automation', 'Equipment', 'EHS'],
        runtime: 'Ongoing',
        palette: violet,
      },
    ],
  },
  
  {
    number: 5,
    title: "What's Next",
    period: 'The Next Chapter',
    synopsis:
      'Growing in solar manufacturing and process engineering while building expertise in cloud computing and DevOps.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Solar Process Engineer',
        description:
          'Aiming to grow into an experienced process engineer by mastering TOPCon solar cell manufacturing, process optimization, equipment performance, quality improvement, yield enhancement, and industrial automation.',
        tags: [
          'Solar Manufacturing',
          'TOPCon',
          'Process Optimization',
          'Quality & Yield',
        ],
        runtime: 'Long-term career goal',
        palette: amber,
      },
      {
        code: 'S05 E02',
        title: 'The Manufacturing Specialist',
        description:
          'Working toward deeper expertise in manufacturing technology, process control, equipment commissioning, troubleshooting, and continuous improvement within the solar and semiconductor industries.',
        tags: [
          'Process Control',
          'Equipment',
          'Semiconductor Manufacturing',
          'Continuous Improvement',
        ],
        runtime: 'Long-term career goal',
        palette: ocean,
      },
      {
        code: 'S05 E03',
        title: 'The Cloud & DevOps Engineer',
        description:
          'Developing practical skills in Linux, AWS, Docker, CI/CD pipelines, and infrastructure automation to pursue future opportunities in cloud engineering and DevOps.',
        tags: [
          'AWS',
          'Linux',
          'Docker',
          'CI/CD',
          'DevOps',
        ],
        runtime: 'Ongoing learning',
        palette: jade,
      },
    ],
  },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };


export const topPicks: TopPick[] = [
  {
    label: 'Current role',
    title: 'GET at Saatvik Solar',
    detail: 'TOPCon Solar Cell Manufacturing • Process Department',
    palette: amber,
  },
  {
    label: 'Manufacturing technology',
    title: 'TOPCon Solar Cells',
    detail: 'Diffusion • Annealing • ALD • PECVD',
    palette: crimson,
  },
  {
    label: 'Cloud project',
    title: 'AWS File Storage System',
    detail: 'S3 • Lambda • Cognito • CloudFront',
    palette: ocean,
  },
  {
    label: 'VLSI project',
    title: 'AHB-to-APB Bridge',
    detail: 'Verilog HDL • RTL Design • Xilinx Vivado',
    palette: violet,
  },
  {
    label: 'Cloud experience',
    title: 'AWS Cloud Intern',
    detail: 'Vaidsys Technologies • July–August 2025',
    palette: jade,
  },
  {
    label: 'VLSI experience',
    title: 'VLSI Design Intern',
    detail: 'Maven Silicon • May–June 2025',
    palette: amber,
  },
  {
    label: 'Professional experience',
    title: 'Technical Support Engineer',
    detail: 'Zoho • May–August 2026',
    palette: crimson,
  },
  {
    label: 'Professional certification',
    title: 'SAP ABAP Cloud',
    detail: 'SAP Certified Associate – Back-End Developer',
    palette: ocean,
  },
  {
    label: 'Technical skills',
    title: 'Cloud & DevOps',
    detail: 'AWS • Linux • Docker • CI/CD',
    palette: jade,
  },
  {
    label: 'Future direction',
    title: 'Solar + Cloud Engineering',
    detail: 'Process Optimization • Automation • Cloud Infrastructure',
    palette: violet,
  },
];


/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };


export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: [
      'NIST University, Berhampur',
      'December 2023 – June 2026',
      'CGPA 8.2',
    ],
    chips: ['Electronics', 'Communication', 'Engineering'],
  },
  {
    kicker: 'Skills',
    title: 'Engineering meets technology.',
    lines: [
      'C, Python, SQL, Verilog, SystemVerilog',
      'AWS, Linux, Docker, Jenkins, Git, CI/CD',
      'TOPCon Solar Manufacturing · VLSI · Embedded Systems',
    ],
    chips: ['AWS', 'Verilog', 'Linux', 'TOPCon', 'Python'],
  },
  {
    kicker: 'Experience',
    title: 'From electronics to industry.',
    lines: [
      'Graduate Engineer Trainee · Saatvik Green Energy Ltd.',
      'Cell Division · Process Department · Thermal Line',
      'Learning manufacturing processes, equipment alignment, and automation trials',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Building with purpose.',
    lines: [
      'AWS File Storage & Sharing — S3, Lambda, Cognito, CloudFront',
      'AHB-to-APB Bridge — Verilog HDL and RTL design',
      'Smart Home Automation — Arduino/ESP32 and IoT',
    ],
  },
  {
    kicker: 'Professional journey',
    title: 'Learning across domains.',
    lines: [
      'AWS Cloud Intern · Vaidsys Technologies',
      'VLSI Design Intern · Maven Silicon',
      'Technical Support Engineer · Zoho',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Learning that continues.',
    lines: [
      'SAP Certified Associate – Back-End Developer – ABAP Cloud',
      'HackerRank SQL Basic and SQL Advanced',
      'Information Security · Verilog and FPGA Design',
    ],
  },
  {
    kicker: 'Future mission',
    title: 'Solar engineering + Cloud/DevOps.',
    lines: [
      'Solar path: Process Engineering · Yield Improvement · Manufacturing Automation',
      'Cloud path: AWS · Linux · Docker · CI/CD · Infrastructure Automation',
      'Goal: Grow into a skilled engineer through practical learning and experience',
    ],
  },
];



export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Saran Babu',
    blurb: 'The complete engineering journey',
    color: '#4cc9ff',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, projects & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Cloud projects, technology & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Career story & engineering highlights',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];


export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'Education • Engineering Interests',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Projects • Cloud, VLSI & Engineering`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Career Highlights',
    meta: `${topPicks.length} Featured Highlights`,
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'Technical Skills',
    meta: `${skillCategories.length} Skill Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Achievements',
    card: 'Achievements & Certifications',
    meta: `${achievements.length} Highlights • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'Professional Profile',
    meta: 'Experience • Education • Resume',
    palette: violet,
  },
};

