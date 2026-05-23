export const profile = {
  name: 'Amudhan Shanmugam',
  title: 'Senior Software Engineer',
  tagline: '18+ years building large-scale distributed data platforms, real-time streaming systems, and cloud-native analytics.',
  location: 'Dallas, Texas',
  phone: '(209) 684-8774',
  email: 'amudhanfz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amudhans',
  github: 'https://github.com',
  summary: `Senior Software Engineer with 18+ years of experience building scalable distributed systems, real-time data platforms, and cloud-native applications across fintech, cybersecurity, and enterprise domains. Deep expertise in Kafka, Spark, Flink, Databricks, Snowflake, and modern cloud technologies across AWS, GCP, and Azure.`,
}

export const skills = [
  {
    category: 'Streaming & Data',
    icon: '⚡',
    items: ['Apache Kafka', 'Apache Spark', 'PySpark', 'Apache Flink', 'Kafka Streams', 'KSQL', 'Spark MLlib'],
  },
  {
    category: 'Lakehouse & Orchestration',
    icon: '🏗️',
    items: ['Databricks', 'Snowflake', 'Apache Airflow', 'Delta Lake', 'Debezium', 'Kafka Connect', 'ETL / ELT'],
  },
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    items: ['AWS (S3, EMR, EC2, Glue)', 'GCP (Pub/Sub, BigQuery, Bigtable, GCS)', 'Azure (Synapse, Data Explorer)'],
  },
  {
    category: 'Languages',
    icon: '{}',
    items: ['Scala', 'Python', 'Java', 'PySpark', 'SQL'],
  },
  {
    category: 'Infra & DevOps',
    icon: '📡',
    items: ['Kubernetes (K8s)', 'Helm', 'Docker', 'Terraform', 'Bicep', 'Jenkins CI/CD', 'OpenTelemetry'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'Cassandra', 'Redis', 'Elasticsearch', 'Bigtable', 'BigQuery', 'MySQL'],
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
    title: 'Change Data Capture Pipeline',
    company: 'American Express',
    year: '2024',
    impact: 'Real-time data sync across 5 systems',
    tags: ['Debezium', 'Kafka Connect', 'PySpark', 'Flink', 'Delta Lake', 'Snowflake', 'S3'],
    description:
      'Designed and implemented an enterprise-grade Change Data Capture pipeline using Debezium and Kafka Connect with downstream PySpark, Apache Flink, S3, Delta Lake, and Snowflake integrations — enabling real-time data propagation across the entire analytics stack.',
    color: 'gold',
  },
  {
    title: 'Unified Data Lakehouse Platform',
    company: 'American Express',
    year: '2023',
    impact: '150+ jobs orchestrated · Real-time + batch analytics',
    tags: ['Databricks', 'Snowflake', 'Apache Airflow', 'Delta Lake'],
    description:
      'Built a unified data lakehouse supporting real-time analytics via Databricks and batch BI queries via Snowflake, orchestrating 150+ jobs using Apache Airflow — enabling both operational and analytical workloads on a single scalable platform.',
    color: 'accent',
  },
  {
    title: 'Multi-Tenant Security Analytics Platform',
    company: 'Securonix',
    year: '2021',
    impact: '70% latency reduction · Millions of events/sec',
    tags: ['Kafka', 'GCP Pub/Sub', 'Flink', 'Spark MLlib', 'AWS EMR', 'Bigtable', 'BigQuery'],
    description:
      'Architected a multi-tenant security analytics platform ingesting millions of security events per second using Kafka, GCP Pub/Sub, Apache Flink, and Spark on AWS EMR. Built a threat correlation and enrichment pipeline using Spark MLlib and Bigtable for sub-10ms hot event lookups and BigQuery-based analytics.',
    color: 'gold',
  },
  {
    title: 'Oracle → Elasticsearch Replication Pipeline',
    company: 'Apple',
    year: '2017',
    impact: '40% improvement in processing efficiency',
    tags: ['Java', 'Kafka', 'Elasticsearch', 'ZooKeeper', 'Multithreading'],
    description:
      'Architected a high-performance multi-threaded streaming pipeline from Oracle to Elasticsearch with checkpoint-based auto-recovery, improving processing efficiency by 40% through optimized concurrency and resource management.',
    color: 'accent',
  },
  {
    title: 'Workflow Orchestration Engine',
    company: 'American Express',
    year: '2023',
    impact: 'Zero-downtime deployments at scale',
    tags: ['Scala', 'ZIO', 'Kafka', 'Kubernetes', 'Jenkins'],
    description:
      'Architected a workflow compiler that transforms user-defined JSON workflow definitions into processor-ready execution plans for dynamic orchestration. Established a multi-tenant Kubernetes platform with Helm-managed deployments, Jenkins CI/CD, and OpenTelemetry-based distributed tracing.',
    color: 'gold',
  },
]

export const experience = [
  {
    company: 'American Express',
    role: 'Senior Software Engineer',
    period: 'May 2023 – Present',
    location: 'Remote, TX',
    highlights: [
      'Implemented an AST compiler that converts domain-specific expressions into executable JSON logic, reducing rule development effort by 80%.',
      'Built an enterprise-grade CDC pipeline using Debezium and Kafka Connect with downstream PySpark, Flink, S3, Delta Lake, and Snowflake integrations.',
      'Built a unified data lakehouse for real-time analytics via Databricks and batch BI via Snowflake, orchestrating 150+ jobs with Apache Airflow.',
      'Established a multi-tenant Kubernetes platform with Helm, Jenkins CI/CD, and OpenTelemetry-based distributed tracing.',
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
      'Architected a multi-tenant security analytics platform ingesting millions of security events per second using Kafka, GCP Pub/Sub, Apache Flink, and Spark on AWS EMR.',
      'Built a threat correlation and enrichment pipeline using Spark MLlib and Bigtable for sub-10ms hot event lookups with BigQuery-based analytics.',
      'Reduced anomaly detection latency by 70% with reusable analytics components on AWS EMR.',
    ],
    tech: ['Kafka', 'GCP Pub/Sub', 'Flink', 'Spark MLlib', 'AWS EMR', 'Bigtable', 'BigQuery'],
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
