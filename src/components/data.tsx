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
    description: "The Management App is a comprehensive system designed for managing and recording all members of an organization. It allows users to store detailed member data, including names, positions, and photographs. The web application is developed in two parts: the front end is built with React, while the back end is powered by Java. Additionally, the application is integrated with a MySQL database for secure and efficient data storage.",
    responsibilities: " Developed the front end using React, Designed the back end using Java Spring Boot, Integrated the application with a MySQL database, Implemented Oauth2 for secure user authentication",
  },
  {
    img1: roamer,
    alt: "roamer",
    title_img: "Roamer",
    language: " NodeJS | Google Cloud | API",
  },
  {
    img1: traffic,
    alt: "traffic",
    title_img: "Adaptive Traffic Light",
    language: "Python | OpenCV | YOLOv8 ",
  },
  {
    img1: portal,
    alt: "portal",
    title_img: "Portal Elektro",
    language: "PHP | Laravel",
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
  },
  {
    img1: dashboard_mangantri,
    alt: "dashboard_mangantri",
    title_img: "Mangantri",
    language: "PHP | Laravel | NodeJS | Google Cloud",
  },
  {
    img1: semariot,
    alt: "semariot",
    title_img: "SemarIOT",
    language: "PHP | Laravel ",
  },
  {
    img1: SmartPV,
    img2: logoSmartPV,
    alt2: "SmartPv",
    alt1: "LogoSmartPV",
    title_img: "SmartPV",
    language: "PHP | Laravel | IoT",
  },
  {
    img1: hydroponik,
    img2: hydroponik_monitoring,
    alt1: "hydroponik",
    alt2: "monitoring",
    title_img: "Smart Farming System",
    language: "Python | PHP | IoT",
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
  },
  {
    img1: kadipiro,
    alt: "kadipiro",
    title_img: "KADIPIRO",
    language: "Laravel",
  },
  { img1: pereng, alt: "pereng", title_img: "PERENG", language: "Laravel" },
];

export default images;