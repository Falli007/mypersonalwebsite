export interface Job {
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  items: string;
}

export const resumeData = {
  name: 'Fredrick Alli',
  title: 'Data Consultant | ML & Data Engineering | DevOps',
  location: 'London, UK',
  email: 'allifred18@gmail.com',
  company: {
    name: 'FA Grace Consulting Ltd',
    address: '167–169 Great Portland Street, London, England, W1W 5PF',
    summary:
      'FA Grace Consulting Ltd is a UK-based technology consultancy specialising in Machine Learning, ' +
      'Data Engineering, Business Intelligence, and DevOps solutions. We design, build, and deploy ' +
      'high-performance systems that power data-driven decision-making, optimise cloud infrastructure, ' +
      'and transform business processes. Our expertise includes predictive analytics, real-time data ' +
      'processing, IoT integration, and scalable cloud architectures.',
  },
  skills: [
    { category: 'Cloud Infrastructure', items: 'AWS, Azure Synapse, Key Vault, Azure DevOps, Databricks, Snowflake' },
    { category: 'CI/CD Pipeline Design', items: 'GitLab, Jenkins, Azure DevOps' },
    { category: 'Infrastructure-as-Code (IaC)', items: 'Terraform, Docker, Kubernetes, Bicep' },
    { category: 'Data Engineering', items: 'Kafka, MQTT, CouchDB, Redis, Azure Data Lake' },
    { category: 'Machine Learning Models', items: 'XGBoost, CatBoost, Random Forest, SARIMA, Prophet' },
    { category: 'DevOps Automation & Monitoring', items: 'Prometheus, Grafana, Ansible' },
    { category: 'IoT Data Management', items: 'YuDetect, YuStatus, Stratos Integration' },
    { category: 'API Development & Integration', items: 'REST, MQTT, WebSockets' },
    { category: 'Data Modelling', items: 'Star Schema, Snowflake Schema, Dimensional Modelling' },
    { category: 'Data Analysis & Visualization', items: 'Power BI (DAX, Power Query, Dashboards), Excel' },
  ] satisfies SkillGroup[],
  experience: [
    {
      company: 'FA Grace Consulting Ltd',
      location: 'London, UK',
      dateRange: 'Apr 2025 – Present',
      bullets: [
        'Designed and deployed cloud-native applications with Azure Synapse, Databricks, and Snowflake for real-time data processing and analytics.',
        'Developed machine learning models for predictive maintenance and financial forecasting using XGBoost, Random Forest, and Prophet.',
        'Engineered scalable ETL pipelines with Azure Data Factory, Databricks, and Kafka for high-throughput environments.',
        'Implemented Infrastructure-as-Code (IaC) using Terraform, Docker, and Kubernetes for seamless cloud deployments.',
        'Architected MQTT and Kafka-based IoT systems for smart-city traffic monitoring and predictive analytics.',
        'Built and optimised Power BI dashboards for real-time business insights and decision support.',
        'Managed end-to-end DevOps pipelines, including CI/CD, monitoring, and automated scaling.',
        'Partnered with Focus Logistics to deliver a construction-site supply-chain management platform and bespoke BI dashboards.',
      ],
    },
    {
      company: 'Focus Logistics (Contracting)',
      location: 'London, UK',
      dateRange: 'Dec 2024 – May 2025',
      bullets: [
        'Developed interactive Power BI dashboards visualising delivery metrics, route efficiency, and fleet utilisation, enabling real-time KPI monitoring.',
        'Engineered ETL pipelines in Azure Data Factory and Databricks, ingesting & transforming 50M+ daily IoT GPS records with PySpark.',
        'Built XGBoost- and Prophet-based predictive models for delivery-time estimation, improving on-time performance by 18%.',
        'Developed a real-time logistics optimisation platform using Kafka and Spark Streaming to process telemetry from 1,000+ vehicles.',
        'Designed a microservices architecture (Docker & Kubernetes on AKS) exposing RESTful APIs for dynamic route management.',
        'Provisioned infrastructure-as-code with Terraform: VM scale sets, AKS clusters, Azure Functions, and Key Vault.',
        'Orchestrated CI/CD in Azure DevOps with automated tests, container builds, and blue/green deployments.',
        'Implemented anomaly detection on sensor streams using Spark MLlib, flagging delays and equipment faults in real time.',
        'Configured Azure Data Lake Gen2 with raw/curated zones and Delta Lake tables for cost-efficient storage.',
        'Integrated ERP and TMS systems via REST and SOAP APIs to ensure end-to-end data consistency.',
        'Monitored system health with Prometheus & Grafana, setting up alerts and dashboards for pipeline SLA breaches.',
      ],
    },
    {
      company: 'HazelTree',
      location: 'Bournemouth, UK',
      dateRange: 'May 2024 – Nov 2024',
      bullets: [
        'Led the development of a predictive churn model using historical transaction and interaction data, improving client retention strategies by 20%.',
        'Built a collaborative-filtering recommendation engine to suggest tailored training content to employees, resulting in a 30% increase in completion rates.',
        'Designed and implemented a machine learning model to predict external counterparty data delivery times, reducing operational delays by 25%.',
        'Developed a broker scorecard monitoring data from prime brokers (HSBC, Scotiabank, JPMorgan), tracking SLA times and delivery patterns.',
        'Collaborated with clients and partner banks to streamline data integration processes, handling wire-transfer ISO formats.',
        'Integrated over 2.5 million+ records from REST APIs, SOAP services, and SFTP sources into a unified data architecture, cutting manual intervention by 40%.',
        'Optimised ETL pipelines using Azure Data Factory and Databricks, boosting data processing speed by 40%.',
        'Utilised PySpark for distributed data workloads on large financial datasets, and designed dimensional models to accelerate report generation by 25%.',
        'Authored comprehensive ETL documentation and reporting frameworks, ensuring transparency and seamless handover across teams.',
      ],
    },
    {
      company: 'Badger Health Group',
      location: 'Southampton, UK',
      dateRange: 'Nov 2023 – Apr 2024',
      bullets: [
        'Implemented a time-series forecasting model using Prophet, SARIMA, N-Hits to predict patient volume, reducing costs by 10% annually.',
        'Built an automated ML pipeline for sentiment analysis, boosting client satisfaction by 15%.',
        'Extracted data from multiple sources such as REST API and SQL databases for data analysis.',
        'Designed and implemented a data governance framework to ensure data quality, compliance, and security, reducing data errors by 25%.',
        'Collaborated with cross-functional teams to identify business requirements, define KPIs, and deliver actionable insights.',
        'Developed interactive Power BI dashboards to monitor KPIs such as patient volume, revenue, and patient satisfaction.',
        'Conducted A/B testing and analysed marketing campaign performance to optimise marketing spend and improve ROI.',
        'Provided training and support to non-technical stakeholders on data analysis tools and techniques.',
        'Developed and maintained data dictionaries, data lineage, and data quality metrics.',
        'Collaborated with data engineers to design and implement data pipelines, transformations, and integration processes.',
        'Enhanced Snowflake data operations by optimising Snowpipe, tasks, stages, and streams to improve processing speed.',
      ],
    },
    {
      company: 'Siemens (Contracting)',
      location: 'London, UK',
      dateRange: 'Feb 2023 – May 2023',
      bullets: [
        'Collaborated with engineering teams to integrate data-driven solutions into Siemens Teamcenter PLM.',
        'Conducted 3D data validation and reviewed data attributes in Siemens Teamcenter 11.',
        'Identified system inefficiencies in Teamcenter, improving project data accuracy by 20%.',
        'Supported migration of technical data for the Desiro City Platform using Snowflake.',
      ],
    },
    {
      company: 'Holistic Care Medical Assistance',
      location: 'Remote',
      dateRange: 'Jul 2020 – Oct 2023',
      bullets: [
        'Built scalable ETL pipelines in Databricks and Snowflake, reducing reporting cycle time by 30%.',
        'Developed predictive models with Prophet and SARIMA to forecast healthcare trends.',
        'Constructed segmentation models to personalise health communications, boosting service uptake.',
        'Built and maintained automated dashboards using Dash and Power BI for real-time monitoring.',
        'Conducted pricing analysis and simulation modelling, influencing key financial decisions.',
        'Ensured code quality through Git, peer reviews, and reproducible Jupyter/RMarkdown workflows.',
      ],
    },
  ] satisfies Job[],
  education: [
    'MSc Applied AI and Data Science (Merit) – Southampton Solent University',
    'BSc Biomedical Science (2:1) – Southampton Solent University',
  ],
  certifications: [
    'Microsoft Certified: Azure Data Engineering Associate',
    'Microsoft Certified: Azure Data Fundamentals',
    'Microsoft Certified: Power BI Data Analyst Associate',
  ],
  achievements: [
    'Improved forecasting accuracy by 15-20% with ML models (SARIMA, Prophet).',
    'Automated data workflows in Azure Databricks, reducing manual data wrangling by 40%.',
    'Implemented ML models for customer churn and demand forecasting, enhancing decision-making.',
  ],
};
