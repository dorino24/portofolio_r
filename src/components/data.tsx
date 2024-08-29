import SmartPV from "../assets/Baskara.jpg";
import logoSmartPV from "../assets/logoSmartPV.png";
import bms1 from "../assets/bms1.jpeg";
import bms2 from "../assets/bms2.jpeg";
import bms_slave from "../assets/slave.jpeg";
import dashboard_mangantri from "../assets/dashboard mangantri.png";
import buana_dash from "../assets/dashboardbuana.png";
import buana_login from "../assets/Login buana.png";
import gui_analyzing from "../assets/GUI_Analyzing.png";
import gui_depan from "../assets/GUI_Depan.png";
import gui_result from "../assets/GUI_Result.png";
import hydroponik from "../assets/Hidroponik.jpg";
import hydroponik_monitoring from "../assets/hidroponik-magetan.png";
import kadipiro from "../assets/kadipiro.png";
import pereng from "../assets/pereng.png";
import portal from "../assets/portal.png";
import roamer from "../assets/roamer.jpg";
import semariot from "../assets/Semariot.png";
import traffic from "../assets/traffic.png";

const images = [
  {
    img1: buana_dash,
    img2: buana_login,
    alt2: "buana_login",
    alt1: "buana_dash",
    title_img: "Management App",
    language: " React | Java Spring Boot | Oauth2",
    description:
      "The Management App is a comprehensive system designed for managing and recording all members of an organization. It allows users to store detailed member data, including names, positions, and photographs. The web application is developed in two parts: the front end is built with React, while the back end is powered by Java. Additionally, the application is integrated with a MySQL database for secure and efficient data storage.",
    responsibilities:
      " Developed the front end using React, Designed the back end using Java Spring Boot, Integrated the application with a MySQL database, Implemented Oauth2 for secure user authentication",
    youtube:"FHCdqvu4i1A",
  },
  {
    img1: roamer,
    alt: "roamer",
    title_img: "Roamer",
    language: " Express.js | Google Cloud | API",
    description:
      " Roamer is a Tourist Attraction Recommendation app that leverages machine learning and cloud computing to provide personalized suggestions. The recommendation system combines Content-Based Filtering, which matches user preferences with similar places in the dataset, and Collaborative Filtering, which uses the preferences of other users to suggest popular destinations. This dual approach ensures recommendations are tailored based on both individual preferences and collective user interactions.",
    responsibilities:
      " Develop API using Express.js, the API will handle user authentication (login and sign-up), destination data retrieval, and integrate with a machine learning model.  Deployed the API on Google Cloud Run, with connections to Cloud SQL for data storage and Cloud Storage for image management.",
    youtube: "ZjCq2YFbbhE",
  },
  {
    img1: traffic,
    alt: "traffic",
    title_img: "Adaptive Traffic Light",
    language: "Python | OpenCV | YOLOv8 ",
    description:
      "The Adaptive Traffic Light System is an application that automatically adjusts traffic light durations based on the number of vehicles at a given location. The system counts the vehicles in front of the traffic light and then uses an algorithm to calculate the appropriate light duration in real-time. This system utilizes YOLOv8 for machine learning modeling and Python as the main system.",
    responsibilities:
      "Develop the dataset model, train the model using YOLOv8, and develop adaptive traffic light program logic using the trained model.",
      youtube:"Z2ZHb5B54B0",
  },
  {
    img1: portal,
    alt: "portal",
    title_img: "Portal Elektro",
    language: "PHP | Laravel",
    description:
      " Portal Elektro is a web application that provides members of the Electrical Engineering Student with access to various resources and information. The portal includes features such as thesis management (skripsi), internship management, and information about Electrical Engineering Department. The application is built using PHP and Laravel",
    responsibilities: "Develop and maintain the Portal Elektro website",
  },
  {
    img1: gui_depan,
    img2: gui_analyzing,
    img3: gui_result,
    alt3: "gui_result",
    alt2: "gui_analyzing",
    alt1: "gui_depan",
    title_img: "Seizure Detection System",
    language: "Python | LSTM | Machine Learning",
    description:
      "Seizure Detection System is a machine learning-based application that detects seizures in patients with epilepsy. The system uses a Long Short-Term Memory (LSTM) neural network to analyze EEG signals and identify patterns associated with seizures. The system is displayed in a graphical user interface that shows the EEG signal, analysis results, and seizure detection result.",
    responsibilities:
      " Develop the machine learning model using LSTM, Create a graphical user interface for the system, Integrate the model with the GUI for real-time seizure detection.",
  },
  {
    img1: dashboard_mangantri,
    alt: "dashboard_mangantri",
    title_img: "Mangantri",
    language: "PHP | Laravel | Express.js | Google Cloud",
    description:
      " Mangantri is a web application that provides client to a platform for managing and monitoring their queue system in real-time. The application includes features such as queue management, customer notification, and data analytics. The application is built using PHP, Laravel, and Express, and is hosted on Google Cloud Platform.",
    responsibilities:
      " Develop the front end using PHP and Laravel, develop the back end features using Express, Integrate the application with Google Cloud Platform services.",
      youtube:"95ZPPjpx56Y",
  },
  {
    img1: semariot,
    alt: "semariot",
    title_img: "SemarIOT",
    language: "PHP | Laravel ",
    description:
      " Semar IOT is a web application that provides information about IoT Challenges events in Electrical Engineering Department of University of Sebelas Maret. The application includes features such as event registration, event information, and contact information. The application is built using PHP and Laravel.",
    responsibilities: " Develop and maintain the Semar IOT website.",
    youtube:"KqTldyfNvyE",
  },
  {
    img1: SmartPV,
    img2: logoSmartPV,
    alt2: "SmartPv",
    alt1: "LogoSmartPV",
    title_img: "SmartPV",
    language: "PHP | Laravel | IoT",
    description:
      " SmartPV is a web application that provides information about solar panel control and monitoring system. The application includes features such as solar panel monitoring, data analytics, and system control. The application is built using PHP and Laravel, and is integrated with IoT devices for real-time data collection.",
    responsibilities:
      " Develop and maintain the SmartPV website, Develop the microcontroller code, Integrate the website with microcontroller using IoT protocols (HTTP) for data collection.",
  },
  {
    img1: hydroponik,
    img2: hydroponik_monitoring,
    alt1: "hydroponik",
    alt2: "monitoring",
    title_img: "Smart Farming System",
    language: "Python | PHP | IoT",
    description:
      " Smart Farming System is a web application for Kebun Refugia Magetan. This application provides information about hydroponic farming system, including monitoring and control of the hydroponic system. The application is built using Python, PHP, and Raspberry Pi for data collection and control.",
    responsibilities:
      " Develop and maintain the Smart Farming System website, Develop the Raspberry PI code, Integrate the website with microcontroller using IoT protocols for data collection.",
  },
  {
    img1: bms1,
    img2: bms_slave,
    img3: bms2,
    alt3: "bms2",
    alt2: "bms2",
    alt1: "bms1",
    title_img: "BMS",
    language: " C++ | Arduino | STM32",
    description:
      " Battery Management System (BMS) is a system that monitors and controls the battery pack in an electric train system collaborates with PT. INKA. The system includes features such as battery monitoring, cell balancing, charging and discharging control, and temperature monitoring. this system is built using C++, Arduino, and STM32.",
    responsibilities:
      "Develop the battery monitoring system using Arduino and STM32, Develop the cell balancing algorithm, Develop the battery protection system, and integrate the system with the electric train system.",
  },
  {
    img1: kadipiro,
    alt: "kadipiro",
    title_img: "KADIPIRO ",
    language: "Laravel",
    description:
      " KADIPIRO is a web application that provides information about the Kadipiro Village in Sragen. The application includes features such as village profile, government information, UMKM information, Komoditas information, and KKN gallery. The application also provides content management system for the village administration to update the information. The application is built using PHP and Laravel.",
    responsibilities: " Develop front end and back end using Laravel ",
    youtube:"bSuwEP5-vJk",
  },
  {
    img1: pereng,
    alt: "pereng",
    title_img: "PERENG",
    language: "Laravel",
    description:
      " PERENG is a web application that provides information about the Pereng Village in Karanganyar. The application includes features such as village profile, government information, UMKM information, Komoditas information, and Sosial information. The application also provides content management system for the village administration to update the information. The application is built using PHP and Laravel.",
    responsibilities: " Develop front end and back end using Laravel ",
    youtube:"LE7LjXKsYEo",
  },
];

export default images;
