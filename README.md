# P. Rahul Reddy — Edge AI & Machine Learning Engineering Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-prahulredd.github.io%2FPortfolio-00D9C0?style=for-the-badge&logo=google-chrome&logoColor=black)](https://prahulredd.github.io/Portfolio/)
[![React 19](https://img.shields.io/badge/React-19.0.0-0070F3?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-v12.23-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

An engineering-first personal portfolio website built for **P. Rahul Reddy**, showcasing systems and research in **Edge AI Acceleration**, **Real-Time Computer Vision**, and **Production Machine Learning Architecture**.

Designed with GPU-accelerated spatial interactions, strict design tokens, and comprehensive accessibility (including full `prefers-reduced-motion` compliance).

---

## Live Deployment

The production deployment is hosted on GitHub Pages:  
[https://prahulredd.github.io/Portfolio/](https://prahulredd.github.io/Portfolio/)

---

## Technical Highlights and Empirical Benchmarks

| Metric | Context / Subsystem | Technology |
| :--- | :--- | :--- |
| **98.7% / 98.5%** | **Fraudulent Recruitment Detection** (98.7% Accuracy, 98.5% Precision, 0.978 F1-Score) | Calibrated Linear SVM · SMOTE Resampling · TF-IDF N-Grams |
| **93.0%** | **Real-Time Biometric Recognition at 6m Range** (+25pp improvement over Haar Cascades) | SCRFD Ultra-Light Detection · FaceNet 512-D Embeddings · ONNX Runtime |
| **13 TOPS** | **Hardware NPU Acceleration** (<4.2W power envelope, 30+ FPS edge inference) | Hailo-8L M.2 HAT · Raspberry Pi 5 · INT8 Quantization · HEF Compiler |
| **6 Months** | **Production Engineering Experience** across healthcare ML and edge vision pipelines | Pipra Solutions Pvt. Ltd. & RealMeds |
| **8.5 CGPA** | **B.Tech in Artificial Intelligence & Data Science** (Class of 2027) | Saveetha School of Engineering, Chennai |

---

## Featured Engineering Projects

### 1. JobSpark AI — Flagship Machine Learning Platform
- **Objective**: Identify fraudulent job advertisements in recruitment corpora under extreme class imbalance (<5% positive fraud distribution).
- **Architecture**:
  1. *Corpus Processing*: 17,880 labeled recruitment records.
  2. *Feature Extraction*: Sublinear TF-IDF word unigrams and bigrams across titles, requirements, and metadata.
  3. *Imbalance Mitigation*: Synthetic Minority Over-sampling Technique (SMOTE) projecting the minority fraud class to parity in feature space.
  4. *Model*: Calibrated Linear Support Vector Machine (LinearSVC) optimized via grid search cross-validation.
  5. *Serving Infrastructure*: Asynchronous FastAPI ASGI server providing sub-12ms inference latency.
- **Interface Engineering**: Pinned 220vh 5-act scroll choreography with camera perspective translation, interactive compute data-bus visualization, and a direct "Skip intro" navigation bypass.
- **Accessibility Fallback**: Automatically collapses into a clean, static vertical stack without scroll-jacking or 3D transforms when `prefers-reduced-motion: reduce` is detected.

### 2. Real-Time Face Recognition Pipeline
- **Stack**: Python, OpenCV, SCRFD, FaceNet (512-D embeddings), ONNX Runtime, WebSockets.
- **Performance**: 93% accuracy at a 6-meter focal distance under fluctuating lighting conditions.
- **Implementation**: Sub-millisecond Cosine distance metric matching (threshold `< 0.60`) paired with a WebSocket streaming service for instantaneous intrusion alerts.

### 3. Edge AI Object Detection Acceleration
- **Target Hardware**: Raspberry Pi 5 (Host) coupled with Hailo-8L M.2 HAT (13 TOPS Neural Processing Unit).
- **Quantization Pipeline**: PyTorch model conversion to ONNX format, followed by INT8 post-training quantization via the Hailo Dataflow Compiler to produce hardware-native HEF binaries.
- **Performance**: Sustained 30+ FPS inference execution within a strict `<4.2W` total board power envelope.

---

## Production Experience

### AI / ML Intern — Pipra Solutions Pvt. Ltd.
*Hyderabad, India · July 2025 – October 2025 (4 months)*
- Implemented and evaluated real-time Face Recognition and YOLO object detection models on embedded hardware (Raspberry Pi 5 + Hailo-8L NPU).
- Benchmarked SCRFD lightweight face detection against classical Haar cascades, raising recognition accuracy from 70% to 93% at extended distances (6m).
- Applied INT8 post-training quantization to deep neural network weights, achieving low-latency edge inference with zero loss in task precision.
- Built a low-overhead WebSocket transport layer to stream processed video feeds and broadcast surveillance events.

### AI / ML Intern — RealMeds
*Remote · October 2025 – December 2025 (3 months)*
- Developed data ingestion and cleaning pipelines utilizing Python, Pandas, and NumPy for healthcare machine learning datasets.
- Handled compliance requirements and validation rules for electronic medical records adhering to healthcare privacy guidelines.
- Standardized tabular preprocessing pipelines, significantly decreasing preparation latency for downstream predictive models.

---

## Education and Verified Credentials

- **Bachelor of Technology — Artificial Intelligence and Data Science**  
  *Saveetha School of Engineering, Chennai, India (2023 – 2027) · Cumulative CGPA: 8.5 / 10*
- **Introduction to Internet of Things (IoT)** — *NPTEL / IIT Kharagpur*  
  *Elite Certificate · January – April 2025 · Credential ID: `NPTEL25CS44S243303391`*
- **Oracle Database SQL Certified Specialist** — *Oracle University*  
  *Specialist Certification · November 2024 · Credential ID: `100914473OCSSQL12C`*
- **Bharatiya Antariksh Hackathon 2025** — *ISRO & Hack2Skill*  
  *National Level Innovation Challenge · Submission ID: `2025H2S06BAH25-P06739`*

---

## Technical Skills Taxonomy

| Category | Technologies and Tools |
| :--- | :--- |
| **Languages & Core** | Python (Expert), TypeScript, JavaScript, SQL, Java, Bash |
| **Machine Learning** | Scikit-learn (Expert), SVM (Expert), TF-IDF, SMOTE, Hyperparameter Optimization |
| **Deep Learning** | PyTorch (Expert), TensorFlow, Keras, Convolutional Neural Networks (CNN) |
| **Computer Vision** | OpenCV (Expert), YOLO (v8/v11), FaceNet, SCRFD, MediaPipe |
| **Edge AI & Hardware** | Raspberry Pi 5 (Expert), Hailo-8L NPU (Expert), ONNX Runtime, Model Quantization (INT8), TensorRT |
| **Backend & DevOps** | FastAPI (Expert), Docker, Git / GitHub (Expert), Linux, WebSockets |

---

## User Interface and Design System Specifications

- **Design Philosophy**: High-agency brutalist aesthetic inspired by aerospace avionics and silicon NPU telemetry consoles.
- **Color System (OLED Dark Mode)**:
  - Background: `#0A0A0A` (OLED True Black)
  - Surface: `#141414` (Level 1 Surface)
  - Surface Raised: `#1F1F1F` (Level 2 Elevation)
  - Border: `#262626` (Subtle Structural Boundary)
  - Primary Accent: `#00D9C0` (Electric Cyber Teal)
  - Secondary Accent: `#0070F3` (Cobalt Silicon Blue)
  - Status Success: `#00D96E` (Available Indicator)
  - Caution / NDA: `#FFB800` (Confidentiality Badge)
- **Typography Stack**:
  - Headlines: Space Grotesk (Weights: 700, 800, 900)
  - Body Text: Inter (Weights: 400, 500, 600)
  - Telemetry and Code: Space Mono (Weights: 400, 700)
- **Layout and Spacing**:
  - Macro spacing normalized to 64px boundaries to ensure uninterrupted scroll transitions across all viewports.
  - Interactive cards feature dynamic spotlight gradients (`SpotlightCard`) and spring-damped tilt physics.

---

## Project Directory Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD deployment workflow
├── public/
│   ├── certifications/             # Certificate PDFs and preview images
│   ├── Rahul_Reddy_Resume_Fresher.pdf
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── motion/
│   │   │   ├── PinSection.tsx           # Pinned scroll track with reduced-motion fallback
│   │   │   ├── ProjectFlowDiagram.tsx   # SVG node data-bus diagram
│   │   │   ├── Reveal.tsx               # Viewport entry animation component
│   │   │   ├── SpotlightCard.tsx        # 3D spring tilt with cursor spotlight glow
│   │   │   └── TextReveal.tsx           # Kinetic word-by-word reveal
│   │   ├── About.tsx                    # Background story, values, and fact chips
│   │   ├── CertificateComponents.tsx    # Modal previewer and certificate card components
│   │   ├── Contact.tsx                  # Interactive email CTA and professional links
│   │   ├── EducationCertifications.tsx  # Unified 3-column academic and credential trio
│   │   ├── Experience.tsx               # Career timeline and internship deliverables
│   │   ├── Footer.tsx                   # System status bar and navigation links
│   │   ├── Hackathons.tsx               # ISRO National Hackathon presentation
│   │   ├── Hero.tsx                     # Top viewport, telemetry bar, and status pill
│   │   ├── MagneticButton.tsx           # Spring-physics magnetic cursor button
│   │   ├── Navbar.tsx                   # Floating glassmorphism header navigation
│   │   ├── Projects.tsx                 # Secondary project showcases (Face Rec & Edge AI)
│   │   ├── ProjectShowcase.tsx          # Flagship JobSpark AI 5-act cinematic sequence
│   │   ├── ResumeModal.tsx              # In-browser PDF resume viewer modal
│   │   ├── ScrollProgress.tsx           # Fixed top progress indicator
│   │   ├── ScrollToTop.tsx              # Floating return-to-top trigger button
│   │   ├── SectionNavDots.tsx           # Fixed right-side section anchor navigation
│   │   └── Skills.tsx                   # 6-category technical skill matrix with level filters
│   ├── App.tsx                          # Root application layout
│   ├── index.css                        # Tailwind CSS v4 design tokens and utilities
│   └── main.tsx                         # Client application entry point
├── .env.example                         # Environment variable schema
├── .gitignore                           # Excluded artifacts, builds, and media
├── package.json                         # Package dependencies and task scripts
├── tsconfig.json                        # TypeScript strict compiler configuration
└── vite.config.ts                       # Vite bundler configuration
```

---

## How to Run the Repository

### Prerequisites

Verify that your system meets the minimum requirements before proceeding:

- **Node.js**: Version `20.18.0` or higher (LTS recommended)
- **npm**: Version `10.0.0` or higher
- **Git**: Version `2.30.0` or higher

To verify installed versions:
```bash
node -v
npm -v
git --version
```

---

### Step 1: Clone the Repository

Clone the project from GitHub and navigate into the project directory:

```bash
git clone https://github.com/PRAHULREDD/Portfolio.git
cd Portfolio
```

---

### Step 2: Configure Environment Variables (Optional)

Copy the template environment file to create your local `.env`:

```bash
# On macOS / Linux
cp .env.example .env

# On Windows (PowerShell)
Copy-Item .env.example .env
```

The application functions fully without modifying `.env`. However, if you wish to configure Google Analytics or form endpoints, update the following keys:
```env
VITE_GA_ID=G-XXXXXXXXXX
VITE_WEB3FORMS_KEY=your-web3forms-key-here
```

---

### Step 3: Install Dependencies

Install the project dependencies using `npm`:

```bash
npm install
```

For clean continuous integration environments:
```bash
npm ci
```

---

### Step 4: Run the Local Development Server

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Once initialized, open your browser and navigate to:
```
http://localhost:5173/Portfolio/
```

> **Important Note on Base Path**: The repository is configured with `base: '/Portfolio/'` in `vite.config.ts` to support GitHub Pages hosting. When accessing the local development server, append `/Portfolio/` to the host URL.

---

### Step 5: Perform Type-Checking and Linting

Validate that the TypeScript codebase compiles without type violations:

```bash
npm run lint
```

This runs `tsc --noEmit` across all project files. Zero errors indicate full type safety.

---

### Step 6: Create a Production Build

Compile and bundle the application for production deployment:

```bash
npm run build
```

This outputs optimized, minified assets into the `dist/` directory:
- Production HTML with inlined metadata and preload links
- Minified JavaScript bundles with chunk splitting
- Tree-shaken Tailwind CSS stylesheets

---

### Step 7: Preview the Production Build Locally

To inspect the production bundle locally under identical conditions to the live deployment:

```bash
npm run preview
```

By default, the preview server binds to port `4173`:
```
http://localhost:4173/Portfolio/
```

---

### Step 8: Deploying Updates

#### Automated Deployment (Recommended)
Pushes to the `main` branch automatically trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which installs dependencies, builds the production bundle, and deploys to GitHub Pages.

#### Manual Deployment via gh-pages
```bash
npm run deploy
```

---

### Common Troubleshooting

1. **Blank Page or 404 on Root (`/`)**:
   - Cause: The application requires the `/Portfolio/` base path prefix.
   - Solution: Navigate to `http://localhost:5173/Portfolio/` or `http://localhost:4173/Portfolio/`.

2. **Port Conflict on Port 5173 or 4173**:
   - Solution: Pass a custom port flag:
     ```bash
     npm run dev -- --port 3000
     npm run preview -- --port 8080
     ```

3. **Node.js Version Incompatibility**:
   - Solution: If encountering syntax errors during build, ensure your active Node version is at least v20.x via `nvm use 20` or by updating your Node runtime.

---

## Contact and Professional Profiles

- **Email**: [rahulreddyp24@gmail.com](mailto:rahulreddyp24@gmail.com)
- **LinkedIn**: [linkedin.com/in/rahulreddypulicharla](https://www.linkedin.com/in/rahulreddypulicharla/)
- **GitHub**: [@PRAHULREDD](https://github.com/PRAHULREDD)
- **LeetCode**: [leetcode.com/u/PULICHARLARAHUL](https://leetcode.com/u/PULICHARLARAHUL/)

---

*Copyright 2025–2026 P. Rahul Reddy. All rights reserved.*

