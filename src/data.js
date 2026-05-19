export const profile = {
  name: 'Amudhan Shanmugam',
  title: 'Senior Software Engineer',
  tagline: '18+ years building large-scale distributed data platforms, real-time streaming systems, and cloud-native analytics.',
  location: 'Dallas, Texas',
  phone: '(209) 684-8774',
  email: 'amudhanfz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amudhans',
  github: 'https://github.com', // Update with your actual GitHub
  summary: `Senior Software Engineer with 18+ years of experience building large-scale distributed data platforms, real-time streaming systems, and cloud-native analytics solutions. Deep expertise in Kafka, Spark, PySpark, AWS, GCP, Azure, Scala, and reactive microservices for high-volume event-driven architectures. Proven track record designing workflow orchestration engines, AST-based rule evaluation frameworks, and scalable execution pipelines aligned with modern AI/ML feature processing.`,
}

export const skills = [
  {
    category: 'Streaming & Data',
    icon: '⚡',
    items: ['Apache Kafka', 'Apache Spark', 'PySpark', 'Apache Flink', 'Spark Structured Streaming'],
  },
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    items: ['AWS (S3, EMR, EC2, Glue)', 'GCP (Pub/Sub, BigQuery, Bigtable, GCS)', 'Azure Synapse Analytics', 'Terraform', 'Bicep'],
  },
  {
    category: 'Languages',
    icon: '{}',
    items: ['Scala', 'Python', 'Java', 'PySpark', 'SQL'],
  },
  {
    category: 'Infra & Observability',
    icon: '📡',
    items: ['Kubernetes (K8s)', 'Helm', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Distributed Tracing'],
  },
  {
    category: 'Frameworks',
    icon: '🔧',
    items: ['ZIO', 'Spring Boot', 'Spring Cloud', 'RxJava', 'Apache Camel'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'Oracle', 'Elasticsearch', 'Bigtable', 'BigQuery'],
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
    title: 'Workflow Orchestration Engine',
    company: 'American Express',
    year: '2023',
    impact: 'Zero-downtime deployments at scale',
    tags: ['Scala', 'ZIO', 'Kafka', 'PostgreSQL', 'Kubernetes'],
    description:
      'Architected a workflow compiler that transforms user-defined JSON workflows into processor-ready execution plans. Built an async metadata propagation processor that keeps control and execution plane databases in sync with reliable configuration deployment across Kubernetes clusters.',
    color: 'gold',
  },
  {
    title: 'Cybersecurity Analytics Platform',
    company: 'Securonix',
    year: '2021',
    impact: '70% latency reduction · 40% MTTD improvement',
    tags: ['Kafka', 'Spark', 'Flink', 'AWS EMR', 'OpenTelemetry'],
    description:
      'Led architecture and development of a large-scale cybersecurity analytics platform processing billions of security events per day. Built reusable analytics components on AWS EMR, instrumented distributed services with OpenTelemetry, and built Prometheus alerting with Grafana dashboards that cut mean-time-to-detect production incidents by 40%.',
    color: 'accent',
  },
  {
    title: 'Oracle → Elasticsearch Replication Pipeline',
    company: 'Apple',
    year: '2017',
    impact: '40% improvement in processing efficiency',
    tags: ['Java', 'Kafka', 'Elasticsearch', 'ZooKeeper', 'Multithreading'],
    description:
      'Architected a mission-critical multi-threaded pipeline to replicate data from Oracle Database to Elasticsearch. Implemented checkpoint-based recovery, health monitoring, and fault-tolerant handling across Kafka, Elasticsearch, Apache ZooKeeper, and Oracle. Improved processing efficiency by 40% through optimized concurrency and resource management.',
    color: 'gold',
  },
  {
    title: 'AI-Assisted Vulnerability Remediation',
    company: 'American Express',
    year: '2024',
    impact: '180+ repos automated · Built in 1 week',
    tags: ['AI/ML', 'Python', 'Automation', 'Security'],
    description:
      'Developed automated remediation jobs using AI-assisted tooling to identify and apply security vulnerability fixes across more than 180 repositories. Created an internal vulnerability management application in one week using AI-assisted development to automate tracking and remediation workflows.',
    color: 'accent',
  },
]

export const experience = [
  {
    company: 'American Express',
    role: 'Senior Engineer',
    period: 'May 2023 – Present',
    location: 'Dallas, TX',
    highlights: [
      'Designed core platform components for a large-scale data streaming and workflow orchestration platform.',
      'Implemented an AST compiler reducing engineering effort by 80%; built workflow compiler for dynamic orchestration.',
      'Deployed containerized microservices on Kubernetes with zero-downtime rolling updates.',
      'Leveraged AI tools to accelerate development, debugging, code generation, and operational automation.',
    ],
    tech: ['Scala', 'ZIO', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Prometheus', 'Grafana'],
  },
  {
    company: 'Microsoft',
    role: 'Senior Software Engineer',
    period: 'Jun 2022 – Jan 2023',
    location: 'Dallas, TX',
    highlights: [
      'Designed enterprise-scale cloud analytics platforms on Microsoft Azure.',
      'Built end-to-end data ingestion, transformation, aggregation, and reporting pipelines.',
      'Automated infrastructure provisioning using Terraform and Bicep.',
    ],
    tech: ['Azure Synapse', 'Python', 'PySpark', 'Terraform', 'Bicep'],
  },
  {
    company: 'Securonix',
    role: 'Technical Lead Engineer',
    period: 'Jun 2020 – Jun 2022',
    location: 'Dallas, TX',
    highlights: [
      'Led architecture of a cybersecurity analytics platform processing billions of events/day.',
      'Reduced anomaly detection latency by 70% with reusable analytics components on AWS EMR.',
      'Cut MTTD of production incidents by 40% with Prometheus + Grafana observability stack.',
    ],
    tech: ['Spark', 'Flink', 'Kafka', 'AWS EMR', 'OpenTelemetry', 'Scala'],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Senior Software Engineer',
    period: 'May 2018 – Jun 2020',
    location: 'San Jose, CA',
    highlights: [
      'Architected reactive microservices and high-throughput data integration systems.',
      'Developed non-blocking services using Spring Boot, Spring Cloud, and RxJava.',
    ],
    tech: ['RxJava', 'Spring Boot', 'Spring Cloud'],
  },
  {
    company: 'Apple',
    role: 'Lead Software Engineer',
    period: 'May 2016 – Apr 2018',
    location: 'San Jose, CA',
    highlights: [
      'Designed mission-critical streaming and search integration systems.',
      'Architected multi-threaded Oracle → Elasticsearch replication pipeline with 40% efficiency gain.',
      'Implemented checkpoint-based recovery and fault-tolerant handling across distributed components.',
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
      'Designed persistence layers, POJO mappings, and CRUD operations.',
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
