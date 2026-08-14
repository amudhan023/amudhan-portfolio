export const profile = {
  name: 'Amudhan Shanmugam',
  title: 'Senior AI / Platform Engineer',
  tagline: '18+ years building distributed systems — and the last 2 shipping production LLM and agentic systems on top of them.',
  location: 'Dallas, Texas',
  phone: '(209) 684-8774',
  email: 'amudhan.sec@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amudhans',
  github: 'https://github.com/amudhan023',
  summary: `Senior engineer with 18+ years building distributed systems, and the last 2 years shipping production LLM and agentic systems on top of them. Architected Kafka/Flink platforms processing 1B+ events daily at sub-second latency, then built an AI-powered SRE Copilot (LangGraph) that triages incidents against that stream, gated by an automated evaluation harness on every release. Depth in agent reliability, retrieval quality, LLM cost and latency optimization, and end-to-end observability (LangSmith, OpenTelemetry) on multi-tenant Kubernetes in a regulated fintech environment.`,
  education: 'B.E. Electrical & Electronics, Anna University · Chennai, India · 2008',
}

export const skills = [
  {
    category: 'AI & Agentic Systems',
    icon: '🤖',
    items: ['LangGraph', 'LangSmith', 'Agentic Workflows', 'Tool Calling', 'RAG & Retrieval Tuning', 'Vector Search', 'Prompt Engineering', 'Evaluation Harnesses', 'LLM-as-Judge', 'Guardrails & Prompt-Injection Defense', 'Model Routing & Caching', 'Token Cost Optimization'],
  },
  {
    category: 'Streaming & Data',
    icon: '⚡',
    items: ['Apache Kafka', 'Apache Flink', 'Kafka Streams', 'Apache Spark', 'PySpark', 'Delta Lake', 'Spark MLlib', 'Debezium CDC', 'Real-Time Feature Pipelines', 'ETL / ELT', 'Data Modeling'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    items: ['AWS (S3, EC2, EMR)', 'GCP (Pub/Sub)', 'Azure (Synapse)', 'Kubernetes (multi-tenant)', 'Docker', 'Terraform', 'Helm', 'Infrastructure as Code'],
  },
  {
    category: 'Reliability & Observability',
    icon: '📡',
    items: ['OpenTelemetry', 'Prometheus / Grafana', 'Distributed Tracing', 'SLO-Driven Design', 'Fault Tolerance', 'Threat Modeling'],
  },
  {
    category: 'Languages & Backend',
    icon: '{}',
    items: ['Python', 'Java', 'Scala', 'ZIO', 'FastAPI', 'Spring Boot', 'SQL', 'Microservices', 'Distributed Systems'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Cassandra', 'Elasticsearch', 'NoSQL'],
  },
]

export const projects = [
  {
    title: 'AI-Powered SRE Copilot',
    company: 'American Express',
    year: '2025 – 2026',
    impact: 'Automated root-cause analysis on a live incident stream',
    tags: ['LangGraph', 'LangSmith', 'Kafka', 'Apache Flink', 'Agentic Workflows', 'Tool Calling', 'Prometheus', 'ELK', 'PagerDuty'],
    description:
      'Architected and shipped an AI-powered SRE Copilot (LangGraph + Kafka + Flink) that consumes real-time alerts, logs, metrics, traces, and deployment events to correlate cross-service failure patterns and produce root-cause analyses, incident summaries, and remediation recommendations — delivered to on-call engineers through Slack and PagerDuty, and adopted across multiple engineering teams to cut median incident triage time.',
    color: 'accent',
  },
  {
    title: 'LLM Evaluation Harness & Release Gate',
    company: 'American Express',
    year: '2025',
    impact: 'Blocked quality regressions before production',
    tags: ['LLM-as-Judge', 'Golden Sets', 'LangSmith', 'CI/CD', 'Eval Rubrics', 'Human Calibration'],
    description:
      'Built the evaluation harness behind the SRE Copilot: a curated golden set of historical incidents scored by rubric-based LLM-as-judge with human calibration, wired into CI as a release gate. Every prompt, model, and retrieval change is scored before merge — raising root-cause accuracy release over release and blocking quality regressions from ever reaching production.',
    color: 'gold',
  },
  {
    title: 'Agent Reliability & LLM Cost / Latency Optimization',
    company: 'American Express',
    year: '2025',
    impact: 'Lower serving cost and p99 latency at flat eval quality',
    tags: ['Model Routing', 'Semantic Caching', 'Prompt Compression', 'Batching', 'Guardrails', 'PII Redaction', 'Fallback Models'],
    description:
      'Reduced LLM serving cost and p99 agent latency through model routing across capability tiers, prompt and context compression, semantic caching of repeated retrievals, and batching — while holding quality flat against the eval suite. Hardened the agent for a regulated environment with bounded tool-call loops, per-step timeouts and retries, fallback models on provider degradation, idempotent remediation actions, PII redaction, and output validation before any action reaches production systems.',
    color: 'accent',
  },
  {
    title: 'Real-Time Spend Analytics Platform',
    company: 'American Express',
    year: '2023 – 2025',
    impact: '1B+ transaction events daily · sub-second latency',
    tags: ['Apache Kafka', 'Apache Flink', 'Stateful Stream Processing', 'Event-Time Windowing', 'Checkpointing', 'Transaction Enrichment'],
    description:
      'Architected and operated a large-scale real-time streaming platform on Apache Kafka and Apache Flink processing 1B+ transaction events daily with sub-second latency for spend analytics and transaction enrichment, using stateful stream processing, event-time windowing, and fault-tolerant checkpointing.',
    color: 'gold',
  },
  {
    title: 'Unified Data Lakehouse Platform',
    company: 'American Express',
    year: '2023',
    impact: 'Reporting SLA from 5 hours to under 2 hours',
    tags: ['PySpark', 'Delta Lake', 'AWS S3', 'Batch Processing', 'Financial Reconciliation', 'Analytics Engineering'],
    description:
      'Built distributed batch pipelines with PySpark and Delta Lake on Amazon S3 for historical aggregations, financial reconciliation, and curated analytics datasets — improving reporting SLA from 5 hours to under 2 hours via partitioning, incremental processing, and storage optimization for downstream BI and ML workloads.',
    color: 'accent',
  },
  {
    title: 'Multi-Tenant Security Analytics Platform',
    company: 'Securonix',
    year: '2021',
    impact: 'Millions of security events / second · sub-10ms lookups',
    tags: ['Kafka', 'GCP Pub/Sub', 'Apache Flink', 'Spark MLlib', 'AWS EMR', 'Cassandra'],
    description:
      'Architected a multi-tenant security analytics platform ingesting millions of security events per second using Kafka, GCP Pub/Sub, Apache Flink, and Spark on AWS EMR. Built an ML-driven threat correlation and enrichment pipeline with Spark MLlib and Cassandra, serving sub-10ms hot-path feature lookups for online scoring.',
    color: 'gold',
  },
  {
    title: 'AST Compiler — Domain Expression Engine',
    company: 'American Express',
    year: '2024',
    impact: '80% reduction in engineering effort',
    tags: ['Scala', 'ZIO', 'Compiler Design', 'JSON'],
    description:
      'Designed and implemented an Abstract Syntax Tree (AST) compiler that converts domain-specific expressions into executable JSON-based processing logic. Eliminated manual AST creation entirely, reducing engineering effort by over 80% across the platform.',
    color: 'accent',
  },
]

export const experience = [
  {
    company: 'American Express',
    role: 'Senior Software Engineer',
    period: 'May 2023 – Present',
    location: 'Remote, TX',
    scope: 'AI Platform & Streaming Infrastructure',
    highlights: [
      'Architected and shipped an AI-powered SRE Copilot (LangGraph + Kafka + Flink) that consumes real-time alerts, logs, metrics, traces, and deployment events to correlate cross-service failure patterns and produce root-cause analyses, incident summaries, and remediation recommendations — adopted across engineering teams and cutting median incident triage time.',
      'Built the evaluation harness for the Copilot using a curated golden set of historical incidents scored by rubric-based LLM-as-judge with human calibration, wired into CI as a release gate; raised root-cause accuracy and blocked quality regressions before production.',
      'Reduced LLM serving cost and p99 agent latency through model routing across tiers, prompt and context compression, semantic caching of repeated retrievals, and batching, while holding quality flat against the eval suite.',
      'Hardened agent reliability for a regulated environment: bounded tool-call loops, per-step timeouts and retries, fallback models on provider degradation, idempotent remediation actions, PII redaction, and output validation before any action reached production systems.',
      'Architected and operated a large-scale real-time streaming platform on Apache Kafka and Apache Flink processing 1B+ transaction events daily with sub-second latency for spend analytics and transaction enrichment, using stateful stream processing, event-time windowing, and fault-tolerant checkpointing.',
      'Built distributed batch pipelines with PySpark and Delta Lake on Amazon S3 for historical aggregations, financial reconciliation, and curated analytics datasets, improving reporting SLA from 5 hours to under 2 hours via partitioning, incremental processing, and storage optimization.',
      'Established a multi-tenant Kubernetes platform (Helm, OpenTelemetry) with per-tenant isolation, deployment automation, and distributed tracing, cutting team onboarding from days to hours.',
    ],
    tech: ['LangGraph', 'LangSmith', 'Python', 'Scala', 'ZIO', 'Kafka', 'Flink', 'PySpark', 'Delta Lake', 'Kubernetes', 'OpenTelemetry'],
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
