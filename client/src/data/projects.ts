export interface Project {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  focus: string;
  outcome: string;
  githubUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'crypto-prediction',
    title: 'Cryptocurrency Prediction',
    summary:
      'Predictive model to forecast cryptocurrency price trends using historical data, machine learning, and time-series analysis.',
    techStack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Random Forest', 'Flask'],
    focus: 'Price forecasting, feature engineering, model evaluation',
    outcome: 'Improved forecasting accuracy using a Random Forest Regressor, served via a Flask app.',
    githubUrl: 'https://github.com/Falli007/mycurrentcryptomarket/blob/main/stock.ipynb',
    image: '/images/Cryptocurrency_image.jpeg',
  },
  {
    slug: 'book-genre-classification',
    title: 'Book Genre Classification',
    summary:
      'Text classification model that automatically labels books by genre based on descriptions and metadata using NLP.',
    techStack: ['Python', 'scikit-learn', 'NLTK/spaCy', 'Pandas', 'Flask'],
    focus: 'Text preprocessing, TF-IDF vectorization, classification algorithms',
    outcome: 'Achieved high accuracy predicting genres, demonstrating potential for automated categorisation.',
    githubUrl: 'https://github.com/Falli007/SentimentAnalysis/blob/main/Book_Genre_Classification.ipynb',
    image: '/images/Book_Genre_image.jpeg',
  },
  {
    slug: 'heart-attack-prediction',
    title: 'Heart Attack Prediction',
    summary:
      'Machine learning models predicting the likelihood of heart attacks from clinical and laboratory data.',
    techStack: ['Python', 'Pandas', 'scikit-learn', 'Jupyter', 'Streamlit'],
    focus: 'Classification (Random Forest, Logistic Regression), ROC/AUC evaluation',
    outcome: 'Identified high-risk patients with significant accuracy, supporting early detection.',
    githubUrl: 'https://github.com/Falli007/Heart-Attack/blob/main/main.py',
    image: '/images/Heart_attack_image.jpeg',
  },
  {
    slug: 'netflix-recommendation',
    title: 'Netflix Recommendation System',
    summary:
      'Content-based filtering system suggesting movies and TV shows based on user preferences and metadata similarity.',
    techStack: ['Python', 'Pandas', 'scikit-learn', 'CountVectorizer'],
    focus: 'Cosine similarity, content-based filtering, feature extraction',
    outcome: 'Delivered relevant recommendations by analysing plot overviews, genres, and ratings.',
    githubUrl: 'https://github.com/Falli007/Recommendation_system/blob/main/Netflix.ipynb',
    image: '/images/Netflix_image.jpeg',
  },
  {
    slug: 'call-centre-forecast',
    title: 'Total Call Centre Cases Forecast',
    summary:
      'SARIMA and Prophet models predicting call volumes for a call centre to optimise staffing and resourcing.',
    techStack: ['Python', 'Pandas', 'NumPy', 'statsmodels', 'Prophet', 'SARIMA'],
    focus: 'Time-series forecasting, model selection, hyperparameter tuning',
    outcome: 'Increased forecasting accuracy, enabling reduced wait times through better scheduling.',
    githubUrl:
      'https://github.com/Falli007/Forecasting-SARIMA-and-Prophet/blob/main/Total%20Call%20Centre%20Forecast%20Using%20SARIMA%20Ending%20of%20Jan-Feb%202024.ipynb',
    image: '/images/call_centre_image.jpeg',
  },
  {
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    summary:
      'Classification models detecting fraudulent credit card transactions with model comparison across ensemble methods.',
    techStack: ['Python', 'scikit-learn', 'PyCaret', 'Flask'],
    focus: 'Classification metrics, model comparison (Random Forest, LightGBM), feature engineering',
    outcome: 'High accuracy identifying fraud, significantly reducing false positives.',
    githubUrl: 'https://github.com/Falli007/CreditCardFraudDetection/blob/main/Credit_Card_Fraud_Detection.ipynb',
    image: '/images/credit_card.jpeg',
  },
];

export interface DashboardProject {
  title: string;
  summary: string;
  githubUrl: string;
  image: string;
}

export const dashboards: DashboardProject[] = [
  {
    title: 'Fintech Dashboard',
    summary:
      'Interactive Power BI dashboard providing insights into total sales, country-wise performance, discount bands, and product segments.',
    githubUrl: 'https://github.com/Falli007/Power-BI-DashBoard/blob/main/Finance%20Dashboard.pbix',
    image: '/images/Finance_Dashboard.jpeg',
  },
  {
    title: 'Human Resources Dashboard',
    summary:
      'Workforce analytics dashboard covering total employees, average salaries, sick days, and performance ratings by business unit.',
    githubUrl: 'https://github.com/Falli007/Power-BI-DashBoard',
    image: '/images/human_resources_dashboard.jpeg',
  },
  {
    title: 'Products Analysis Dashboard',
    summary:
      'Product sales performance dashboard covering top products, categories, subcategories, and reseller data by region.',
    githubUrl: 'https://github.com/Falli007/Power-BI-DashBoard/blob/main/Products%20Analysis%20Dashboard.pbix',
    image: '/images/Product_Analysis_Dashboard.jpeg',
  },
];
