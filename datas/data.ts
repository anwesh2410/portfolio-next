export const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/anwesh2410",
    simpleIcon: "/svgs/github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anwesh-ale/",
    simpleIcon: "/svgs/linkedIn.svg",
  },
];

export const technologies = [
  { name: "Python", iconLink: "https://cdn.simpleicons.org/python" },
  { name: "TypeScript", iconLink: "https://cdn.simpleicons.org/typescript" },
  { name: "SQL", iconLink: "https://cdn.simpleicons.org/postgresql" },
  { name: "Java", iconLink: "https://cdn.simpleicons.org/openjdk" },
  { name: "LangChain", iconLink: "https://cdn.simpleicons.org/langchain" },
  { name: "LangGraph", iconLink: "https://cdn.simpleicons.org/langchain" },
  { name: "OpenAI", iconLink: "https://cdn.simpleicons.org/openai" },
  { name: "Anthropic", iconLink: "https://cdn.simpleicons.org/anthropic" },
  { name: "Google Gemini", iconLink: "https://cdn.simpleicons.org/googlegemini" },
  { name: "PyTorch", iconLink: "https://cdn.simpleicons.org/pytorch" },
  { name: "TensorFlow", iconLink: "https://cdn.simpleicons.org/tensorflow" },
  { name: "Keras", iconLink: "https://cdn.simpleicons.org/keras" },
  { name: "scikit-learn", iconLink: "https://cdn.simpleicons.org/scikitlearn" },
  { name: "XGBoost", iconLink: "https://cdn.simpleicons.org/scikitlearn" },
  { name: "Pandas", iconLink: "https://cdn.simpleicons.org/pandas" },
  { name: "NumPy", iconLink: "https://cdn.simpleicons.org/numpy" },
  { name: "FastAPI", iconLink: "https://cdn.simpleicons.org/fastapi" },
  { name: "Next.js", iconLink: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "React", iconLink: "https://cdn.simpleicons.org/react" },
  { name: "TailwindCss", iconLink: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Streamlit", iconLink: "https://cdn.simpleicons.org/streamlit" },
  { name: "Apache Spark", iconLink: "https://cdn.simpleicons.org/apachespark" },
  { name: "Apache Kafka", iconLink: "https://cdn.simpleicons.org/apachekafka" },
  { name: "Apache Airflow", iconLink: "https://cdn.simpleicons.org/apacheairflow" },
  { name: "PostgreSQL", iconLink: "https://cdn.simpleicons.org/postgresql" },
  { name: "MongoDB", iconLink: "https://cdn.simpleicons.org/mongodb" },
  { name: "Redis", iconLink: "https://cdn.simpleicons.org/redis" },
  { name: "Elasticsearch", iconLink: "https://cdn.simpleicons.org/elasticsearch" },
  { name: "Docker", iconLink: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", iconLink: "https://cdn.simpleicons.org/kubernetes" },
  { name: "GCP", iconLink: "https://cdn.simpleicons.org/googlecloud" },
  { name: "AWS", iconLink: "https://cdn.simpleicons.org/amazonwebservices" },
  { name: "Git", iconLink: "https://cdn.simpleicons.org/git" },
];

export const sections = [
  { idRoute: "/#about", name: "About" },
  { idRoute: "/#experience", name: "Experience" },
  { idRoute: "/#projects", name: "Projects" },
  { idRoute: "/#contact", name: "Contact" },
];

export const companies = [
  "Wisemate",
  "Kavida.ai",
  "ActionSync",
  "Snapmint",
  "IIT-J × IARI",
];

export const companiesInfo = [
  {
    title: "Founding AI Engineer",
    company: "Wisemate — AI Sales-Agent Platform",
    location: "London, UK (Remote)",
    duration: "Mar 2026 – Present",
    roles: [
      "First AI hire at an early-stage AI sales-agent platform; own the 0→1 ML + data stack end-to-end and ship the MVP's ICP-profiling and outbound outreach agents.",
      "Architect agentic workflows with LangGraph, orchestrating multi-provider LLMs (OpenAI, Anthropic, Gemini) behind a unified FastAPI service.",
      "Partner directly with founders on model selection, infrastructure, and product decisions; establish engineering conventions for prompts, schemas, versioning, and evaluation.",
      "Stack: Python · LangChain · LangGraph · OpenAI · Anthropic · Gemini · FastAPI · PostgreSQL · pgvector · Docker · GCP.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Kavida.ai — AI Procurement Automation",
    location: "Remote",
    duration: "Oct 2025 – Nov 2025",
    roles: [
      "Shipped a production SQL-Explainer agent that translates LLM-generated SQL (from an upstream text-to-SQL agent) into plain-English explanations — improving analyst trust and cutting manual query review.",
      "Integrated Apache Flink for real-time stream processing of query telemetry, enabling continuous feedback on agent-generated SQL quality.",
      "Stack: Python · LangChain · LLM agents · Apache Flink · PostgreSQL.",
    ],
  },
  {
    title: "AI Engineer Intern",
    company: "ActionSync — Enterprise Knowledge Management",
    location: "Remote, India",
    duration: "Sep 2025 – Oct 2025",
    roles: [
      "Architected an asynchronous data pipeline over Google Drive & OneDrive, cutting redundant processing by 80% via an intelligent change-detection module (MD5 checksums + Changes API + Redis state).",
      "Deployed a production hybrid Retrieval-Augmented Generation (RAG) system (sole owner) using LangChain & OpenAI, arbitrating between keyword and vector/embedding retrieval (pgvector, ANN) to reduce query latency by 40% across thousands of daily queries.",
      "Built an async queueing layer with exponential backoff + jitter to survive Google / Microsoft API rate limits under concurrent ingestion.",
      "Stack: Python · LangChain · OpenAI · AsyncIO · aiohttp · APScheduler · PostgreSQL · pgvector · GCP · Docker · Redis.",
    ],
  },
  {
    title: "Data Science & Business Analyst Intern",
    company: "Snapmint — India's Leading Zero-Cost EMI Fintech",
    location: "Bengaluru, Karnataka",
    duration: "Jun 2025 – Aug 2025",
    roles: [
      "Built an end-to-end ML pipeline over 700K+ user records at India's leading Zero-Cost EMI fintech (4M+ consumers, ~INR 2,000 Cr transactions) — engineered 50+ behavioural, transactional, and credit-bureau features.",
      "Trained XGBoost / NN propensity-scoring models with SMOTE for class imbalance; lifted campaign CTR & purchase rate 4x (300%) in a live A/B test (25K vs. 25K control, 30-day).",
      "In pilot campaigns driven by the model: reduced CAC by 40% and lifted sales originations by 25%. Operationalized scoring via Airflow DAGs; shipped Redash + BigQuery dashboards for real-time CAC, ROI, and revenue attribution.",
      "Stack: Python · SQL · Spark · scikit-learn · XGBoost · SMOTE · Airflow · Webengage · Redash · BigQuery · MongoDB · PostgreSQL · A/B Testing.",
    ],
  },
  {
    title: "R&D Intern (Computer Vision)",
    company: "IIT Jodhpur × Indian Agricultural Research Institute (IARI)",
    location: "Jodhpur, India",
    duration: "Apr 2024 – Aug 2024",
    roles: [
      "Research position under Dr. Bikash Santra focused on advanced computer-vision applications for agricultural phenotyping.",
      "Engineered a custom annotation and predictive-analysis tool with 30+ advanced features; generated a high-quality dataset of 158 specialised images.",
      "Implemented 10 state-of-the-art ML models including RCNN, Faster R-CNN, YOLO, Mask R-CNN, U-Net, and DeepLab. Improved segmentation accuracy from a 61% baseline to 71% IOU through iterative model tuning.",
      "Stack: Python · PyTorch · TensorFlow · OpenCV · U-Net · Mask R-CNN · DeepLab.",
    ],
  },
];

export type Project = {
  name: string;
  type: string;
  description: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
  loomLink?: string;
  stacks: string[];
};

export const projects: Project[] = [
  {
    name: "DyG-RAG: Dynamic-Graph Temporal QA",
    type: "Bachelor Thesis",
    description:
      "Event-centric dynamic-graph Retrieval-Augmented Generation system for temporal question answering over PDFs. Extended the open-source RingBDStack/DyG-RAG framework with Gemini 2.5 integration, a Streamlit UI, and 2D/3D network visualisations. Cut LLM operating cost 96% vs. GPT-4o, achieved 100% event-extraction success, 3–6s query latency (GPU BERT NER + cross-encoder), and 90% cost savings on repeated queries via multi-level caching. Bachelor Thesis under Dr. Binod Kumar.",
    image: "/ai_banner.jpg",
    githubLink: "https://github.com/anwesh2410/Temporal_RAG",
    stacks: [
      "Python",
      "Google Gemini 2.5",
      "BERT NER",
      "NetworkX",
      "NanoVectorDB",
      "Streamlit",
      "Plotly",
      "PyVis",
    ],
  },
  {
    name: "Real-Time Face Mask Detection (Ensemble DL)",
    type: "Featured Project",
    description:
      "Production-ready face-mask detection system achieving 79.3% IOU across three categories with sub-100ms inference. Architected an ensemble of 4 deep-learning architectures (ResNet18, ResNet50, YOLOv8, Faster R-CNN) with majority voting. Solved severe class imbalance (minority = 4%) via focal loss, progressive unfreezing, and AdamW. Processed 853 images with 4,072 labelled faces; deployed live on Hugging Face Spaces.",
    image: "/face_mask_detection.png",
    githubLink: "https://github.com/anwesh2410/Face-Mask-Detection",
    liveLink: "https://huggingface.co/spaces/eagle2346/facemask",
    stacks: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Transfer Learning",
      "Ensemble Learning",
      "Computer Vision",
    ],
  },
  {
    name: "Community Reader Analytics",
    type: "Data Engineering",
    description:
      "Production-grade big-data pipeline using Lambda Architecture — Apache Spark for batch analytics over reader-behaviour logs plus Apache Kafka for real-time event streams. Containerised services with Docker & Docker Compose, cutting deployment time by 40%. Designed a normalised PostgreSQL warehouse (3NF) with Elasticsearch integration for full-text and faceted search.",
    image: "/community_reader.jpg",
    githubLink: "https://github.com/anwesh2410/Book-Recommendation-Site",
    stacks: [
      "Python",
      "Apache Spark",
      "Apache Kafka",
      "Docker",
      "PostgreSQL",
      "Elasticsearch",
      "DVC",
    ],
  },
  {
    name: "Trustworthy AI — Explainable & Adversarially-Robust Classification",
    type: "Dependable AI Course",
    description:
      "Extreme multi-label classification robustness research. Built a dual-attribution interpretation system across 290+ labels with 65% dimensionality reduction while preserving explanation fidelity. Evaluated adversarial robustness under FGSM and PGD attacks; engineered defenses via an enhanced ECLARE algorithm over GNN-based label embeddings.",
    image: "/trustworthy_ai.jpg",
    githubLink: "https://github.com/anwesh2410/Explainable_AI",
    stacks: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "Graph Neural Networks",
      "Adversarial Defense",
      "Explainable AI",
    ],
  },
  {
    name: "Bitcoin Price Prediction Using Machine Learning",
    type: "Time-Series Project",
    description:
      "Comprehensive cryptocurrency price-prediction system built on multiple regression and time-series models. Implemented Elastic-Net, Polynomial Regression, Bayesian Regression, ARIMA, SARIMAX, and GARCH. Achieved an optimal RMSE of 154.32 with SARIMAX on historical CoinMarketCap data.",
    image: "/bitcoin.jpg",
    githubLink: "https://github.com/anwesh2410/Bitcoin-Price-Prediction",
    stacks: [
      "Python",
      "Time Series Analysis",
      "ARIMA",
      "SARIMAX",
      "GARCH",
      "Regression Models",
    ],
  },
  {
    name: "Remote Desktop Application",
    type: "Systems Project",
    description:
      "Client-server remote desktop application in Java built under Dr. Sumit Kalra. GUI implemented with Java Swing; achieved real-time screen updates with latency under 100 ms supporting up to 30 fps over TCP sockets.",
    image: "/remote_desktop.jpg",
    githubLink: "https://github.com/anwesh2410/RemoteDesk",
    stacks: [
      "Java",
      "Socket Programming",
      "DataInputStream",
      "DataOutputStream",
      "ServerSocket",
      "Swing GUI",
    ],
  },
  {
    name: "Plant Phenomics — Deep-Learning Image Segmentation",
    type: "IIT-J × IARI Research",
    description:
      "Research project with IIT Jodhpur × Indian Agricultural Research Institute under Dr. Bikash Santra. Trained and compared U-Net, Mask R-CNN, DeepLab, Faster R-CNN, and YOLO for agricultural phenotype segmentation on a curated dataset of 158 specialised images; lifted IOU accuracy from 61% to 71% through iterative model tuning. Delivered a custom annotation + predictive-analysis tool with 30+ features for internal IARI researchers.",
    image: "/plant_phenomics.jpg",
    stacks: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "U-Net",
      "Mask R-CNN",
      "DeepLab",
    ],
  },
  {
    name: "Optimizing Parameters for Quantum Computing",
    type: "Research Project",
    description:
      "Research project under Dr. Atul Kumar focusing on quantum-state optimisation and entanglement parameter tuning for enhanced quantum-computing performance.",
    image: "/quantum.jpg",
    stacks: ["Python", "Qiskit", "FidelityQuantumKernel"],
  },
];
