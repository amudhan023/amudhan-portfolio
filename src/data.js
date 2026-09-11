export const profile = {
  name: 'Amudhan Shanmugam',
  title: 'Senior AI Platform Engineer',
  tagline: '18+ years building distributed systems, and the last 2 shipping production AI and agentic systems on top of them: 1B+ events a day, 44% faster incident triage.',
  location: 'Dallas, Texas',
  phone: '(209) 684-8774',
  email: 'amudhan.sec@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amudhans',
  github: 'https://github.com/amudhan023',
  summary: `Senior AI Platform Engineer with 18+ years building distributed systems and real-time data platforms, and the last 2 years focused on production AI and agentic systems. Architected streaming platforms processing 1B+ events daily at sub-second latency, and LangGraph-based AI SRE agents that reduced median triage time by 44% and improved root-cause accuracy from 53% to 82%. Depth in RAG and hybrid retrieval, LLM evaluation, MCP integrations, AI reliability and security, observability, cloud, Kubernetes, and scalable platform engineering.`,
  education: 'B.E. Electrical & Electronics, Anna University',
}

export const skills = [
  {
    category: 'AI & Agentic Systems',
    icon: '🤖',
    items: ['LangGraph', 'LangSmith', 'LLM Applications', 'Agentic Workflows', 'Tool Calling', 'MCP', 'Model Routing', 'AI Guardrails'],
  },
  {
    category: 'LLM Evaluation',
    icon: '🎯',
    items: ['RAGAS', 'LLM-as-Judge', 'Golden Sets', 'Human Calibration', 'Eval Rubrics', 'CI Release Gates'],
  },
  {
    category: 'RAG & Retrieval',
    icon: '🔎',
    items: ['Document Retrieval', 'Hybrid Retrieval', 'Semantic Chunking', 'Overlapping Chunking', 'BGE-M3', 'pgvector', 'BM25', 'RRF', 'BGE Reranker', 'Semantic Caching'],
  },
  {
    category: 'Streaming & Data',
    icon: '⚡',
    items: ['Apache Kafka', 'Apache Flink', 'Kafka Streams', 'Apache Spark', 'PySpark', 'Delta Lake', 'Real-Time Streaming', 'ETL / ELT', 'Data Analytics', 'Data Modeling'],
  },
  {
    category: 'Languages & Backend',
    icon: '{}',
    items: ['Java', 'Scala', 'Python', 'ZIO', 'RxJava', 'Spring Boot', 'FastAPI', 'Microservices', 'Distributed Systems'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    items: ['AWS (S3, EC2, EMR)', 'GCP (Pub/Sub)', 'Azure (Synapse)', 'Kubernetes', 'Docker', 'Terraform', 'Helm', 'Infrastructure as Code'],
  },
  {
    category: 'Observability & Reliability',
    icon: '📡',
    items: ['OpenTelemetry', 'Prometheus', 'Grafana', 'OpenSearch / Elasticsearch', 'Distributed Tracing', 'Fault Tolerance', 'SLO-Driven Design'],
  },
  {
    category: 'Databases & Caching',
    icon: '🗄️',
    items: ['PostgreSQL', 'NoSQL', 'Redis', 'Cassandra'],
  },
  {
    category: 'DevOps & Security',
    icon: '🔐',
    items: ['CI/CD', 'Jenkins', 'Git', 'PII Protection', 'Prompt-Injection Defense', 'Threat Modeling'],
  },
]

export const projects = [
  {
    title: 'AI-Powered SRE Copilot',
    company: 'American Express',
    year: '2025 – 2026',
    impact: 'Median incident triage time down 44%',
    tags: ['LangGraph', 'LangSmith', 'MCP', 'Kafka', 'Apache Flink', 'Agentic Workflows', 'Tool Calling', 'Prometheus', 'OpenSearch', 'PagerDuty'],
    description:
      'Architected an agentic AI-powered SRE Copilot (Python + LangGraph + LLMs) that automates incident investigation, correlating real-time alerts, logs, metrics, traces, and deployment events into root-cause analyses, incident summaries, and remediation recommendations. MCP-based observability integrations pull telemetry directly from the monitoring stack; results reach on-call engineers through Slack and PagerDuty. Adopted across multiple engineering teams and cut median triage time by 44%.',
    color: 'accent',
  },
  {
    title: 'Hybrid RAG Retrieval Pipeline',
    company: 'American Express',
    year: '2025',
    impact: 'Semantic + keyword retrieval fused with RRF and reranking',
    tags: ['BGE-M3', 'pgvector', 'PostgreSQL FTS', 'BM25', 'RRF', 'BGE Reranker', 'Semantic Chunking', 'Semantic Caching'],
    description:
      'Built the retrieval layer behind the SRE Copilot: BGE-M3 embeddings in PostgreSQL/pgvector for semantic search, PostgreSQL full-text search for keyword matching, and Reciprocal Rank Fusion to merge both rankings before a BGE cross-encoder rerank. Semantic and overlapping chunking keep incident context intact across document boundaries, and semantic caching absorbs repeated retrievals, raising contextual relevance while holding down latency and token spend.',
    color: 'gold',
  },
  {
    title: 'LLM Evaluation Harness & Release Gate',
    company: 'American Express',
    year: '2025',
    impact: 'Root-cause accuracy from 53% to 82%',
    tags: ['RAGAS', 'LLM-as-Judge', 'Golden Sets', 'LangSmith', 'CI/CD', 'Human Calibration'],
    description:
      'Engineered the evaluation framework behind the SRE Copilot: a golden set of 300+ curated historical incidents scored with RAGAS and rubric-based LLM-as-a-Judge, calibrated against human grading, and wired into CI as a release gate. Every prompt, model, and retrieval change is scored before merge, lifting root-cause accuracy from 53% to 82% and blocking quality regressions from ever reaching production.',
    color: 'accent',
  },
  {
    title: 'Agent Reliability & LLM Cost / Latency Optimization',
    company: 'American Express',
    year: '2025',
    impact: 'LLM serving cost down 42%, p99 agent latency down 38%',
    tags: ['Model Routing', 'Semantic Caching', 'Prompt Compression', 'Tenant Isolation', 'Guardrails', 'PII Redaction', 'Fallback Models'],
    description:
      'Hardened the Copilot for enterprise production: model routing across capability tiers, prompt and context compression, semantic caching of repeated retrievals, and batching cut LLM serving costs by 42% and p99 agent latency by 38% while holding quality flat against the eval suite. Reliability and security controls include tenant isolation, bounded agent and tool-call loops, per-step timeouts and retries, fallback models on provider degradation, PII redaction, and output validation before any action reaches production systems.',
    color: 'gold',
  },
  {
    title: 'Real-Time Spend Analytics Platform',
    company: 'American Express',
    year: '2023 – 2025',
    impact: '1B+ transaction events daily · sub-second latency',
    tags: ['Apache Kafka', 'Apache Flink', 'Stateful Stream Processing', 'Event-Time Windowing', 'Checkpointing', 'Transaction Enrichment'],
    description:
      'Architected and operated a large-scale real-time streaming platform on Apache Kafka and Apache Flink processing 1B+ transaction events daily with sub-second latency for spend analytics and transaction enrichment, using stateful stream processing, event-time windowing, and fault-tolerant checkpointing.',
    color: 'accent',
  },
  {
    title: 'Unified Data Lakehouse Platform',
    company: 'American Express',
    year: '2023',
    impact: 'Reporting SLA from 5 hours to under 2 hours',
    tags: ['PySpark', 'Delta Lake', 'AWS S3', 'Batch Processing', 'Financial Reconciliation', 'Analytics Engineering'],
    description:
      'Built distributed batch pipelines with PySpark and Delta Lake on Amazon S3 for historical aggregations, financial reconciliation, and curated analytics datasets, improving reporting SLA from 5 hours to under 2 hours via partitioning, incremental processing, and storage optimization for downstream BI and ML workloads.',
    color: 'gold',
  },
  {
    title: 'Multi-Tenant Security Analytics Platform',
    company: 'Securonix',
    year: '2021',
    impact: 'Millions of security events / second · sub-10ms lookups',
    tags: ['Kafka', 'GCP Pub/Sub', 'Apache Flink', 'Spark MLlib', 'AWS EMR', 'Cassandra'],
    description:
      'Architected a multi-tenant security analytics platform ingesting millions of security events per second using Kafka, GCP Pub/Sub, Apache Flink, and Spark on AWS EMR. Built an ML-driven threat correlation and enrichment pipeline with Spark MLlib and Cassandra, serving sub-10ms hot-path feature lookups for online scoring.',
    color: 'accent',
  },
  {
    title: 'AST Compiler: Domain Expression Engine',
    company: 'American Express',
    year: '2024',
    impact: '80% reduction in engineering effort',
    tags: ['Scala', 'ZIO', 'Compiler Design', 'JSON'],
    description:
      'Designed and implemented an Abstract Syntax Tree (AST) compiler that converts domain-specific expressions into executable JSON-based processing logic. Eliminated manual AST creation entirely, reducing engineering effort by over 80% across the platform.',
    color: 'gold',
  },
]

export const experience = [
  {
    company: 'American Express',
    role: 'Senior Software Engineer, AI Platforms',
    period: 'May 2023 – Present',
    location: 'Remote, TX',
    scope: 'AI Platform & Streaming Infrastructure',
    highlights: [
      'Architected and operated a large-scale Kafka/Flink streaming platform processing 1B+ transaction events daily with sub-second latency for real-time spend analytics and transaction enrichment.',
      'Built PySpark and Delta Lake batch pipelines on Amazon S3 for historical aggregation and financial reconciliation, reducing reporting SLA from 5 hours to under 2 hours through partitioning and incremental processing.',
      'Architected an agentic AI-powered SRE Copilot using Python, LangGraph, and LLMs to automate incident investigation, generating root-cause analyses, incident summaries, and remediation recommendations from operational telemetry and historical incidents, cutting median triage time by 44%.',
      'Built a hybrid RAG retrieval pipeline using BGE-M3 embeddings with PostgreSQL/pgvector for semantic search and PostgreSQL full-text search for keyword retrieval, combining results with RRF and BGE reranking to improve contextual relevance.',
      'Engineered an LLM evaluation framework using 300+ curated historical incidents, RAGAS, LLM-as-a-Judge, and human-calibrated scoring, integrating evaluations into CI as a release gate and improving root-cause accuracy from 53% to 82%.',
      'Hardened the platform for enterprise production with MCP-based observability integrations, tenant isolation, bounded agent/tool-call loops, retries, fallback models, PII redaction, output validation, semantic caching, and model routing, reducing LLM serving costs by 42% and p99 agent latency by 38%.',
      'Deployed scalable inference services using FastAPI, Kubernetes, Redis caching, and CI/CD automation for production reliability.',
    ],
    tech: ['LangGraph', 'LangSmith', 'MCP', 'Python', 'FastAPI', 'pgvector', 'RAGAS', 'Scala', 'ZIO', 'Kafka', 'Flink', 'PySpark', 'Delta Lake', 'Kubernetes', 'Redis', 'OpenTelemetry'],
  },
  {
    company: 'Walmart Labs',
    role: 'Senior Software Engineer',
    period: 'Feb 2023 – Apr 2023',
    location: 'Remote, TX',
    highlights: [
      'Short-term engagement focused on distributed data systems and high-throughput processing platforms.',
    ],
    tech: ['Java', 'Kafka', 'Distributed Systems'],
  },
  {
    company: 'Microsoft',
    role: 'Senior Software Engineer',
    period: 'Jun 2022 – Jan 2023',
    location: 'Remote, TX',
    highlights: [
      'Designed and implemented scalable end-to-end data ingestion, aggregation, and analytics platforms on Azure Synapse Analytics with PySpark, Bicep, and Terraform.',
    ],
    tech: ['Azure Synapse', 'Python', 'PySpark', 'Terraform', 'Bicep'],
  },
  {
    company: 'Securonix',
    role: 'Technical Lead',
    period: 'Jun 2020 – Jun 2022',
    location: 'Dallas, TX',
    highlights: [
      'Architected a multi-tenant security analytics platform ingesting millions of security events per second using Kafka, GCP Pub/Sub, Apache Flink, and Spark on AWS EMR.',
      'Built an ML-driven threat correlation and enrichment pipeline with Spark MLlib and Cassandra, serving sub-10ms hot-path feature lookups for online scoring.',
    ],
    tech: ['Apache Kafka', 'GCP Pub/Sub', 'Apache Flink', 'Spark MLlib', 'AWS EMR', 'Cassandra'],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Senior Software Engineer',
    period: 'May 2018 – Jun 2020',
    location: 'San Jose, CA',
    highlights: [
      'Architected a non-blocking reactive data flow pipeline using RxJava and Spring Boot microservices for high-throughput, low-latency processing.',
    ],
    tech: ['RxJava', 'Spring Boot', 'Spring Cloud'],
  },
  {
    company: 'Apple',
    role: 'Lead Software Engineer',
    period: 'May 2016 – Apr 2018',
    location: 'San Jose, CA',
    highlights: [
      'Architected a high-performance multi-threaded streaming solution from Oracle to Elasticsearch, improving throughput by 40% with checkpoint-based auto-recovery.',
    ],
    tech: ['Java', 'Kafka', 'Elasticsearch', 'ZooKeeper', 'Oracle'],
  },
  {
    company: 'General Motors',
    role: 'Java Tech Lead',
    period: '2014 – 2016',
    location: 'Phoenix, AZ',
    highlights: [
      'Led technical design, demos, and developer meetings to remove blockers.',
      'Implemented Enterprise Integration Patterns using Apache Camel.',
      'Mentored engineers and coordinated development across the team.',
    ],
    tech: ['Java', 'Apache Camel', 'Multithreading'],
  },
  {
    company: 'InComm',
    role: 'Software Developer',
    period: '2013 – 2014',
    location: 'India',
    highlights: [
      'Developed enterprise applications using Spring MVC, Spring DAO, Hibernate, and Oracle.',
      'Built monitoring and alerting features for throughput, latency, and JVM/OS metrics.',
    ],
    tech: ['Spring MVC', 'Hibernate', 'Oracle', 'Monitoring'],
  },
  {
    company: 'Ford Motors',
    role: 'Systems Analyst',
    period: '2012 – 2013',
    location: 'India',
    highlights: [
      'Participated in full SDLC including prototyping, design, implementation, testing, and maintenance.',
      'Developed web applications for business reporting, system monitoring, and troubleshooting.',
    ],
    tech: ['Java', 'J2EE', 'Tomcat'],
  },
  {
    company: 'Verizon Wireless',
    role: 'Java Developer',
    period: '2010 – 2011',
    location: 'India',
    highlights: [
      'Designed and developed RESTful APIs for multiple business modules.',
      'Built enterprise applications using Spring, Hibernate, and Oracle.',
    ],
    tech: ['Spring', 'Hibernate', 'Oracle', 'REST APIs'],
  },
  {
    company: 'HDFC Bank',
    role: 'Java Developer',
    period: '2008 – 2010',
    location: 'India',
    highlights: [
      'Developed web applications using Spring MVC architecture.',
      'Managed application configuration, deployment, and release automation with Maven and Tomcat.',
    ],
    tech: ['Spring MVC', 'Maven', 'Tomcat', 'Java/J2EE'],
  },
]
