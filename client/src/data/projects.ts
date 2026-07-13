export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  techStack: string[];
  focus: string;
  outcome: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'building-agents',
    title: 'Building Agents Portfolio',
    category: 'AI Engineering',
    summary:
      'Production-oriented multi-agent AI systems across regulated domains: insurance claims triage & SEC filing research, healthcare prior-auth extraction & CDC BRFSS research, and fintech AML alert scoring & CFPB complaint research.',
    techStack: ['Python', 'FastAPI', 'LLM Agents', 'Docker', 'CI/CD'],
    focus: 'Multi-agent orchestration combining LLM reasoning with deterministic fallback logic and external data tools',
    outcome: 'Three domain-specific agent systems built with production-style engineering gates (CI, containerisation, HTTP APIs).',
    githubUrl: 'https://github.com/Falli007/Building-Agents',
    featured: true,
  },
  {
    slug: 'who-rag-recommendation',
    title: 'WHO RAG Service',
    category: 'GenAI / RAG',
    summary:
      'A microservice for querying WHO guideline documents using Retrieval-Augmented Generation: PDF ingestion, SBERT embeddings, vector indexing, and semantic summarisation via an HTTP API.',
    techStack: ['Python', 'FastAPI', 'FAISS', 'Pinecone', 'SBERT'],
    focus: 'Document ingestion & chunking, embedding generation, vector search, and RAG-based summarisation',
    outcome: 'Shipped an /ask endpoint for semantic search and summarisation over WHO guidelines, with pytest coverage.',
    githubUrl: 'https://github.com/Falli007/WHO-RAG-Recommendation',
    featured: true,
  },
  {
    slug: 'oncobot',
    title: 'OncoBot: Lung-Cancer RAG Assistant',
    category: 'GenAI / RAG',
    summary:
      'A Retrieval-Augmented-Generation assistant that answers questions about early lung-cancer detection using published research papers.',
    techStack: ['Python', 'FAISS', 'Sentence-Transformers', 'Flan-T5', 'FastAPI', 'Streamlit'],
    focus: 'Nearest-neighbour document retrieval, embedding-based search, and prompt-driven answer generation',
    outcome: 'Delivered a working API and lightweight web UI for querying lung-cancer research literature.',
    githubUrl: 'https://github.com/Falli007/Oncobot',
  },
  {
    slug: 'clinical-nlp-pipeline',
    title: 'Clinical NLP Pipeline',
    category: 'Data Science / NLP',
    summary:
      'A production-grade clinical NLP pipeline covering classification, NER, RAG, and evaluation across 614K+ samples, running entirely on local HuggingFace models for regulated healthcare environments.',
    techStack: ['Python', 'BiomedBERT', 'BioBERT', 'Flan-T5', 'FAISS', 'Django'],
    focus: 'Medical Q&A classification, MedMCQA multiclass classification, NER, and a 417K-vector RAG pipeline',
    outcome: 'Built 8 notebooks and a Django web app spanning 5 distinct NLP tasks with no external API dependency.',
    githubUrl: 'https://github.com/Falli007/-clinical-nlp-pipeline',
    featured: true,
  },
  {
    slug: 'brain-mri-tumor-detection',
    title: 'Brain Tumor MRI Classifier',
    category: 'Computer Vision',
    summary:
      'A 4-class brain tumor MRI classifier (glioma, meningioma, pituitary, no tumor) trained in Colab and packaged for local CPU inference.',
    techStack: ['Python', 'TensorFlow/Keras', 'EfficientNetB0', 'Streamlit'],
    focus: 'Transfer learning on 256x256 MRI scans, model packaging, and CPU-only inference',
    outcome: 'Achieved ~97.8% held-out test accuracy, shipped with both a CLI and a Streamlit inference app.',
    githubUrl: 'https://github.com/Falli007/brain-mri-tumor-detection',
  },
  {
    slug: 'bbc-nlp-platform',
    title: 'BBC News NLP Intelligence Platform',
    category: 'Data Science / NLP',
    summary:
      'A local-only NLP platform for the BBC News archive: dataset auditing, a fine-tuned ModernBERT classifier, entity recognition, sub-topic classification, semantic search, a FastAPI backend, and a Django UI.',
    techStack: ['Python', 'ModernBERT', 'GLiNER', 'FastAPI', 'Django'],
    focus: 'Dataset validation, text classification fine-tuning, NER, and semantic search — all running locally',
    outcome: 'Delivered a full-stack NLP platform with no hosted inference or API key dependency.',
    githubUrl: 'https://github.com/Falli007/BBC-Subclassification-NLP',
  },
  {
    slug: 'insurance-data-engineering',
    title: 'Insurance Data Engineering Pipeline',
    category: 'Data Engineering',
    summary:
      'A medallion-architecture data pipeline for insurance data: bronze ingestion, silver dimensional modelling (dim/fact tables), and gold-layer business metrics (claims trends, policy profitability, customer lifetime value).',
    techStack: ['Python', 'REST API', 'Dimensional Modelling'],
    focus: 'Bronze/silver/gold layering, dimensional modelling, and business-metric aggregation',
    outcome: 'Produced ready-to-consume gold tables for claims trends, regional performance, and profitability analysis.',
    githubUrl: 'https://github.com/Falli007/Insurance-Data-Engineer-RestAPI-Prpject',
    featured: true,
  },
  {
    slug: 'ecommerce-microsoft-fabric',
    title: 'E-Commerce Lakehouse on Microsoft Fabric',
    category: 'Data Engineering',
    summary:
      'An e-commerce lakehouse pipeline built on Microsoft Fabric OneLake: bronze ingestion from Parquet into Delta tables, followed by silver-layer cleansing and typing with Spark SQL.',
    techStack: ['PySpark', 'Microsoft Fabric', 'Delta Lake', 'Spark SQL'],
    focus: 'Bronze-to-silver transformation for orders, customers, products, and order items',
    outcome: 'Built a working medallion pipeline on Fabric OneLake using PySpark and Delta Lake.',
    githubUrl: 'https://github.com/Falli007/ecommerce-using-microsoft-fabric',
  },
];
