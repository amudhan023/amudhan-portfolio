export const profile = {
  name: 'Amudhan Shanmugam',
  title: 'Senior Software Engineer',
  tagline: '18+ years building large-scale distributed data platforms, real-time streaming systems, and cloud-native analytics.',
  location: 'Dallas, Texas',
  phone: '(209) 684-8774',
  email: 'amudhan.sec@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amudhans',
  github: 'https://github.com',
  summary: `Senior Software Engineer with 18+ years of experience building scalable distributed systems, real-time data platforms, and cloud-native applications across fintech, cybersecurity, and enterprise domains. Deep expertise in Kafka, Spark, Flink, Databricks, Snowflake, and modern cloud technologies across AWS, GCP, and Azure.`,
}

export const skills = [
  {
    category: 'Streaming & Data',
    icon: '⚡',
    items: ['Apache Kafka', 'Apache Spark', 'PySpark', 'Apache Flink', 'Kafka Streams', 'Spark MLlib'],
  },
  {
    category: 'Lakehouse & Orchestration',
    icon: '🏗️',
    items: [ 'Delta Lake', 'Debezium', 'Kafka Connect', 'ETL / ELT'],
  },
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    items: ['AWS (S3, EMR, EC2 )', 'GCP (Pub/Sub)', 'Azure (Synapse, Data Explorer)'],
  },
  {
    category: 'Languages & Frameworks',
    icon: '{}',
    items: ['Scala', 'Java', 'Python', 'SQL',  'ZIO', 'Spring Boot', 'RxJava', 'Apache Camel'],
  },
  {
    category: 'Infra & DevOps',
    icon: '📡',
    items: ['Kubernetes (K8s)', 'Helm', 'Docker', 'Terraform', 'Jenkins CI/CD', 'OpenTelemetry'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'Cassandra', 'Redis', 'Elasticsearch', 'MySQL'],
  },
  {
    category: 'AI & Agentic Systems',
    icon: '🤖',
    items: ['LangGraph', 'LLM Applications', 'Agentic Workflows', 'Prompt Engineering', 'Tool Calling', 'FastAPI'],
  },
]

export const projects = [
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
  {
    title: 'Real-Time Fraud Intelligence platform',
    company: 'American Express',
    year: '2025',
    impact: 'Real-Time analytics on 1B+ transaction events daily with sub-second latency',
    tags: ['Apache Flink',
    'Apache Kafka',
    'Debezium CDC',
    'Event Streaming',
    'Real-time Analytics',
    'Fraud Detection'],
    description:
      'Architected real-time streaming pipelines using Apache Flink, Kafka, and Debezium CDC for fraud detection and spend analytics platforms, processing 1B+ transaction events daily with sub-second latency to enable near real-time anomaly detection, transaction enrichment, and risk scoring.',
    color: 'gold',
  },
  {
    title: 'Unified Data Lakehouse Platform',
    company: 'American Express',
    year: '2023',
    impact: 'Improved batch processing SLA by 60%',
    tags: ['Data Engineering',
    'Apache Spark',
    'PySpark',
    'Delta Lake',
    'AWS S3',
    'Data Lakehouse',
    'Batch Processing',
    'ETL Pipelines',
    'Analytics Engineering'],
    description:
      'Built scalable batch data processing pipelines using PySpark and Delta Lake on S3 to generate historical aggregations, reconciliation reports, and curated analytics datasets, reducing end-to-end reporting SLA timelines from 5 hours to under 2 hours (60% improvement) for downstream BI and machine learning workloads.',
    color: 'accent',
  },
  {
    title: 'Multi-Tenant Security Analytics Platform',
    company: 'Securonix',
    year: '2021',
    impact: '70% latency reduction · Millions of events/sec',
    tags: ['Kafka', 'GCP Pub/Sub', 'Flink', 'Spark MLlib', 'AWS EMR', 'Cassandra' ],
    description:
      ' Architected a multi-tenant security analytics platform ingesting millions of security events per second using Kafka, GCP Pub/ Sub, Apache Flink, and Spark on AWS EMR. Built a threat correlation and enrichment pipeline using Spark MLlib and Cassandra for sub-10ms hot event lookups. ',
    color: 'gold',
  },
  {
    title: 'AI-Assisted SRE Copilot',
    company: 'American Express',
    year: '2024',
    impact: 'Automated root-cause analysis and incident response at scale',
    tags: ['LangGraph', 'LLM', 'Kafka', 'Apache Flink', 'Prometheus', 'ELK', 'Agentic Workflows', 'PagerDuty'],
    description:
      'Developed an AI-powered SRE Copilot using LangGraph, Kafka, and Flink to ingest real-time alerts, logs, metrics, and traces. Correlates multi-service failures leveraging Prometheus, ELK, and deployment events to generate root-cause hypotheses, incident summaries, and mitigation recommendations via LLM-based analysis — delivered through Slack and PagerDuty.',
    color: 'accent',
  }
]

export const experience = [
  {
    company: 'American Express',
    role: 'Senior Software Engineer',
    period: 'May 2023 – Present',
    location: 'Remote, TX',
    highlights: [
	  'Architected real-time streaming pipelines using Apache Flink, Kafka, and Debezium CDC for fraud detection and spend analytics platforms, processing 1B+ transaction events daily with sub-second latency to enable near real-time anomaly detection, transaction enrichment, and risk scoring.',
      'Built scalable batch data processing pipelines using PySpark and Delta Lake on S3 to generate historical aggregations, reconciliation reports, and curated analytics datasets, reducing end-to-end reporting SLA timelines from 5 hours to under 2 hours (60% improvement) for downstream BI and machine learning workloads.',
	  'Designed and implemented an Abstract Syntax Tree (AST) compiler that converted domain-specific expressions into executable JSON-based processing logic, reducing engineering effort for rule development by over 80%.',
	  'Established a multi-tenant Kubernetes platform with Helm-managed deployments, Jenkins CI/ CD, and OpenTelemetry-based distributed tracing.',
    ],
    tech: ['Scala', 'ZIO', 'Kafka', 'Debezium', 'Databricks', 'Snowflake', 'Airflow', 'Delta Lake', 'Kubernetes'],
  },
  {
    company: 'Microsoft',
    role: 'Senior Software Engineer',
    period: 'Jun 2022 – Jan 2023',
    location: 'Remote, TX',
    highlights: [
      'Designed and implemented scalable end-to-end data ingestion, aggregation, and analytics platforms.',
      'Built pipelines using Azure Synapse Analytics, PySpark, Bicep, and Terraform.',
    ],
    tech: ['Azure Synapse', 'Python', 'PySpark', 'Terraform', 'Bicep'],
  },
  {
    company: 'Securonix',
    role: 'Technical Lead',
    period: 'Jun 2020 – Jun 2022',
    location: 'Dallas, TX',
    highlights: [
      'Architected a multi-tenant security analytics platform ingesting millions of security events per second using Kafka, GCP Pub/ Sub, Apache Flink, and Spark on AWS EMR' ,
	  'Built a threat correlation and enrichment pipeline using Spark MLlib and Cassandra for sub-10ms hot event lookups'
    ],
    tech: ['Apache Kafka', 'GCP Pub/Sub', 'Apache Flink', 'Spark MLlib', 'AWS EMR', 'Cassandra'],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Senior Software Engineer',
    period: 'May 2018 – Jun 2020',
    location: 'San Jose, CA',
    highlights: [
      'Architected a non-blocking reactive data flow pipeline using RxJava for high-throughput, low-latency processing.',
      'Built Spring Boot microservices for scalable data integration systems.',
    ],
    tech: ['RxJava', 'Spring Boot', 'Spring Cloud'],
  },
  {
    company: 'Apple',
    role: 'Lead Software Engineer',
    period: 'May 2016 – Apr 2018',
    location: 'San Jose, CA',
    highlights: [
      'Architected a high-performance multi-threaded streaming solution from Oracle to Elasticsearch, improving efficiency by 40%.',
      'Implemented checkpoint-based auto-recovery and fault-tolerant handling across distributed components.',
    ],
    tech: ['Java', 'Kafka', 'Elasticsearch', 'ZooKeeper', 'Oracle'],
  },
  {
    company: 'General Motors',
    role: 'Java Tech Lead',
    period: 'Oct 2014 – Apr 2016',
    location: 'Phoenix, AZ',
    highlights: [
      'Led technical design, demos, and developer meetings to remove blockers.',
      'Implemented Enterprise Integration Patterns using Apache Camel.',
      'Mentored engineers and coordinated development across the team.',
    ],
    tech: ['Java', 'Apache Camel', 'Multithreading'],
  },
  {
    company: 'InComm Payments',
    role: 'Senior Software Engineer',
    period: 'Jun 2013 – Sep 2014',
    location: 'Chennai',
    highlights: [
      'Developed enterprise applications using Spring MVC, Spring DAO, Hibernate, and Oracle.',
      'Built monitoring and alerting features for throughput, latency, and JVM/OS metrics.',
    ],
    tech: ['Spring MVC', 'Hibernate', 'Oracle', 'Monitoring'],
  },
  {
    company: 'Ford Motors',
    role: 'System Analyst',
    period: 'Jan 2012 – May 2013',
    location: 'Chennai',
    highlights: [
      'Participated in full SDLC including prototyping, design, implementation, testing, and maintenance.',
      'Developed web applications for business reporting, system monitoring, and troubleshooting.',
    ],
    tech: ['Java', 'J2EE', 'Tomcat'],
  },
  {
    company: 'Verizon Wireless',
    role: 'Software Engineer',
    period: 'Oct 2010 – Sep 2011',
    location: 'Chennai',
    highlights: [
      'Designed and developed RESTful APIs for multiple business modules.',
      'Built enterprise applications using Spring, Hibernate, and Oracle.',
    ],
    tech: ['Spring', 'Hibernate', 'Oracle', 'REST APIs'],
  },
  {
    company: 'HDFC Bank',
    role: 'Software Engineer',
    period: 'Jul 2008 – Oct 2010',
    location: 'Chennai',
    highlights: [
      'Developed web applications using Spring MVC architecture.',
      'Managed application configuration, deployment, and release automation with Maven and Tomcat.',
    ],
    tech: ['Spring MVC', 'Maven', 'Tomcat', 'Java/J2EE'],
  },
]
