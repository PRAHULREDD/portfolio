import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Cpu, Activity, Lock, ArrowRight, Layers, FileText } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import ProjectCaseStudyModal, { ProjectCaseStudyData } from './ProjectCaseStudyModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudyData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredStack = ['Python', 'FastAPI', 'React', 'SVM', 'TF-IDF', 'SMOTE', 'Scikit-learn', 'Vercel'];

  const caseStudies: ProjectCaseStudyData[] = [
    {
      id: "fraud-job",
      name: "JobSpark AI — Fraud Detection",
      summary: "Asynchronous machine learning pipeline detecting fraudulent job postings with 98.7% accuracy.",
      metrics: [
        { value: "98.7%", label: "Classification Accuracy" },
        { value: "98.5%", label: "Precision Rate" },
        { value: "17,880", label: "Postings Analysed" },
        { value: "FastAPI", label: "REST API Gateway" }
      ],
      problem: "Online job boards suffer from a high volume of deceptive, fraudulent listings that target and exploit job seekers. Identifying these dynamically is slow and costly when relying solely on manual human audits.",
      solution: "Engineered an end-to-end ML pipeline with a fast FastAPI backend and React frontend. The backend hosts a pre-processed and optimized SVM classifier that analyzes text descriptions instantly.",
      architecture: ["React Client", "FastAPI Gateway", "Regex Cleaners", "TF-IDF Vectorizer", "SVM Classifier", "Risk Assessment API"],
      techStack: [
        { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "HTML/CSS"] },
        { category: "Machine Learning", items: ["Scikit-learn", "SVM Classifier", "SMOTE Oversampling", "TF-IDF Vectorization", "GridSearchCV"] },
        { category: "Backend / Dev", items: ["FastAPI", "React (Vite)", "Tailwind CSS", "NLTK", "Vercel"] }
      ],
      challenge: "The datasets are highly imbalanced, with fake job postings comprising less than 5% of entries. Standard classifiers are heavily biased and tend to ignore the minority class, leading to high false-negative rates.",
      approach: "Addressed minority representation by applying SMOTE (Synthetic Minority Over-sampling Technique) to balance classes in the training set before fitting the Support Vector Machine (SVM) classifier. Integrated NLTK regex cleaners to strip noise from raw job posting titles and descriptions.",
      optimization: "Optimized feature representation by combining job titles, descriptions, and company profiles into a unified textual column. Conducted hyperparameter tuning via GridSearchCV to find the optimal C and gamma parameters for the radial basis function (RBF) kernel.",
      results: [
        "Achieved 98.7% overall accuracy and 98.5% precision in target fraud detection.",
        "Successfully classified over 17,880 job postings in validation tests.",
        "Created an interactive, real-time live demo hosting the API predictions on Vercel."
      ],
      tradeOffs: "Using SMOTE oversampling increased training time [exact scaling factor not documented], but was chosen because it was critical to eliminate classifier bias, dropping false-negatives to near zero.",
      githubUrl: "https://github.com/PRAHULREDD/fraud-job-detection-ml",
      liveUrl: "https://fraud-job-detection-ml.vercel.app"
    },
    {
      id: "face-rec",
      name: "Real-Time Face Recognition System",
      summary: "Real-time edge facial identification pipeline tracking authorized personnel in live video feeds.",
      metrics: [
        { value: "93%", label: "Recognition Accuracy" },
        { value: "6 Metres", label: "Operational Range" },
        { value: "+25pp", label: "Accuracy Gain" },
        { value: "ONNX", label: "Model Runtime" }
      ],
      problem: "Organizations require secure, low-latency face identification systems that run locally on on-site hardware to track security clearances without transferring sensitive video data to cloud systems.",
      solution: "Designed a multi-stage face recognition pipeline with local embedding matching and real-time WebSocket alerts.",
      architecture: ["RTSP Stream", "OpenCV Frame Capture", "SCRFD Face Localization", "FaceNet ONNX Embeddings", "SVM Classifier", "WebSockets Broadcast"],
      techStack: [
        { category: "Languages & Vision", items: ["Python", "OpenCV", "Scikit-learn", "Numpy"] },
        { category: "Deep Learning Models", items: ["SCRFD (Face Detection)", "FaceNet (Embedding Extraction)", "MTCNN (Secondary Tracker)"] },
        { category: "Deployment", items: ["ONNX Runtime", "WebSockets", "Local SQLite"] }
      ],
      challenge: "Standard face detection methods like Haar Cascades are highly inaccurate (70% accuracy) at range and fail under side-angles or uneven room lighting, making them unusable for security clearance checkpoints.",
      approach: "Migrated the pipeline from Haar Cascades to SCRFD (Sample and Computation Redistribution for Face Detection) for high-precision face localization. Integrated a FaceNet model packaged for ONNX Runtime to extract robust 128-dimensional embedding vectors.",
      optimization: "Accelerated embeddings inference by running FaceNet via ONNX Runtime using optimized execution providers, streamlining frame processing loops to support real-time video stream speeds.",
      results: [
        "Boosted face recognition accuracy from 70% to 93% (+25pp improvement).",
        "Extended operational recognition range to 6 meters under dynamic workplace lighting.",
        "Implemented real-time WebSocket push notifications for unauthorized entry events."
      ],
      tradeOffs: "Selected SCRFD for face detection rather than a heavier ResNet50-based detector. This choice reduced detection computational latency [exact latency reduction not documented], allowing the system to run locally on low-cost edge computers.",
      nda: true
    },
    {
      id: "edge-yolo",
      name: "Edge AI Object Detection System",
      summary: "Highly optimized deep learning object detection running locally on resource-constrained Edge hardware.",
      metrics: [
        { value: "[Speed not documented]", label: "Inference Speed" },
        { value: "[Power not documented]", label: "Total Power Draw" },
        { value: "[Quantization not documented]", label: "Model Quantization" },
        { value: "[NPU spec not documented]", label: "NPU Acceleration" }
      ],
      problem: "Deploying high-speed neural networks in real-time requires high-cost, high-power GPU servers. Running them on distributed remote sites is limited by power budgets and local cooling constraints.",
      solution: "Compiled and deployed custom YOLO models on low-power, resource-constrained Edge hardware utilizing a dedicated NPU accelerator.",
      architecture: ["Camera Stream", "Raspberry Pi 5", "Hailo NPU", "YOLO Inference", "FastAPI Websockets", "Web Client Dashboard"],
      techStack: [
        { category: "Languages", items: ["Python", "TypeScript", "HTML/CSS"] },
        { category: "Deep Learning Tools", items: ["PyTorch", "ONNX", "Hailo Model Zoo Compiler", "Model Quantization"] },
        { category: "Hardware", items: ["Raspberry Pi 5 (8GB)", "Hailo-8L NPU PCIe"] },
        { category: "Web", items: ["FastAPI", "WebSockets", "React (Vite)", "Label Studio"] }
      ],
      challenge: "Standard float32 YOLO models completely overwhelm the Raspberry Pi CPU, causing frame drops, high temperatures, and latency [exact latency not documented], rendering it useless for real-time safety alerts.",
      approach: "Offloaded neural calculations from the CPU to the Hailo NPU. Developed a PyTorch to ONNX to Hailo Executable Format (HEF) compilation pipeline, creating custom quantized model configurations.",
      optimization: "Applied model quantization using the Hailo Model Zoo tools. Optimized network parameters to match the NPU requirements, reducing the model's memory footprint [exact reduction percentage not documented] while maintaining accuracy.",
      results: [
        "Achieved real-time object detection inference directly at the Edge [exact FPS not documented].",
        "Operated the entire compute pipeline within a low-power hardware budget [exact wattage not documented].",
        "Created an end-to-end dataset pipeline (data collection → augmentation → labelling via Label Studio) to retrain customized YOLO weights."
      ],
      tradeOffs: "Converting the YOLO model introduced a tiny precision loss [exact precision loss not documented] but provided a significant boost in frame rates, moving from laggy CPU processing to fluid NPU inference.",
      nda: true
    }
  ];

  const handleOpenCaseStudy = (id: string) => {
    const study = caseStudies.find(c => c.id === id);
    if (study) {
      setSelectedProject(study);
      setIsModalOpen(true);
    }
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white font-headline"
            >
              Featured Engineering
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-body pl-5"
          >
            Production-grade systems and technical architectures.
          </motion.p>
        </div>
        
        <div className="space-y-16">
          {/* 1. JobSpark AI — Fraud Detection */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} perspective={1000} scale={1.002} transitionSpeed={2000} className="bg-[#1E293B] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.05)]">
              <div className="p-8 md:p-12">
                <div className="flex flex-col gap-8">
                  {/* Top Row - Title & Meta */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white font-headline">
                          JobSpark AI — Fraud Detection
                        </h3>
                        <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 shrink-0">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Live</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {featuredStack.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-slate-900 border border-white/5 px-2.5 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 shrink-0">
                      <button
                        onClick={() => handleOpenCaseStudy('fraud-job')}
                        className="bg-primary/10 hover:bg-primary border border-primary/20 text-primary hover:text-black px-5 py-2.5 rounded font-bold flex items-center gap-1.5 transition-all text-xs cursor-pointer font-headline uppercase tracking-wider"
                      >
                        <FileText className="w-4 h-4" /> Case Study
                      </button>
                      <motion.a 
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://fraud-job-detection-ml.vercel.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-900 border border-white/10 hover:border-primary hover:text-primary text-white px-5 py-2.5 rounded font-bold flex items-center gap-1.5 transition-all text-xs"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                      <motion.a 
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://github.com/PRAHULREDD/fraud-job-detection-ml" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-white/15 text-white px-5 py-2.5 rounded font-bold flex items-center gap-1.5 hover:border-primary hover:text-primary transition-all text-xs"
                      >
                        GitHub <Github className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Core Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/5 bg-slate-900/40 px-6 rounded-xl">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5 font-headline">98.7%</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Model Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5 font-headline">98.5%</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Precision Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5 font-headline">17,880</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Postings Analysed</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5 font-headline">FastAPI</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">REST API Gateway</div>
                    </div>
                  </div>

                  {/* Structured Engineering Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1.5 font-headline">The Problem</h4>
                        <p className="text-slate-400 font-body leading-relaxed">
                          Job platforms suffer from a high volume of deceptive, fraudulent listings that target and exploit job seekers. Identifying these dynamically is slow when relying on manual human audits.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1.5 font-headline">The Solution</h4>
                        <p className="text-slate-400 font-body leading-relaxed">
                          Engineered an end-to-end ML pipeline with a fast FastAPI backend and React frontend. The backend hosts a pre-processed and optimized SVM classifier that analyzes text descriptions instantly.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1.5 font-headline">Engineering Challenge</h4>
                        <p className="text-slate-400 font-body leading-relaxed">
                          The datasets are highly imbalanced, with fake job postings comprising less than 5% of entries [exact ratio not documented]. Mitigated classification bias by applying SMOTE (Synthetic Minority Over-sampling Technique) combined with optimized TF-IDF vectorizers.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1.5 font-headline">System Architecture</h4>
                        {/* Sanitized Text Flowchart */}
                        <div className="flex flex-wrap items-center gap-1.5 mt-2 font-mono text-[9px] text-slate-300 bg-slate-950 p-3 rounded-lg border border-white/5">
                          <span>User Prompt</span>
                          <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                          <span className="bg-slate-900 px-1.5 py-0.5 rounded border border-white/5">FastAPI</span>
                          <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                          <span className="bg-slate-900 px-1.5 py-0.5 rounded border border-white/5">TF-IDF Vector</span>
                          <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                          <span className="bg-slate-900 px-1.5 py-0.5 rounded border border-primary/20 text-primary">SVM Classifier</span>
                          <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                          <span className="text-white font-bold">Risk Assessment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Secondary Grid (NDA / Confidential Deep Dives) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 2. Real-Time Face Recognition System */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} scale={1.002} transitionSpeed={2000} className="group bg-[#1E293B] p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.05)] flex flex-col h-full justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div className="flex flex-col items-start gap-1">
                      <span className="px-2.5 py-1 bg-slate-900 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded border border-white/5">
                        Internship Project · Pipra Solutions
                      </span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[9px] font-bold uppercase tracking-widest rounded border border-white/10 flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> Confidential / NDA Protected
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-[10px] font-bold uppercase tracking-wider">
                      <Activity className="w-3 h-3" /> Deployed
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 font-headline">Real-Time Face Recognition System</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['SCRFD', 'FaceNet', 'ONNX Runtime', 'MTCNN', 'SVM', 'OpenCV'].map(tag => (
                      <span key={tag} className="text-[9px] font-mono text-slate-500 uppercase bg-slate-900 border border-white/5 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>

                  {/* Sanitized Pipeline Architecture Diagram */}
                  <div className="mb-6">
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 font-headline flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> System Data Pipeline
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-center">
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center">
                        <span className="text-slate-500 font-bold block mb-1">STAGE 1</span>
                        <span className="text-white">RTSP Video Feed (OpenCV)</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center relative">
                        <span className="text-slate-500 font-bold block mb-1">STAGE 2</span>
                        <span className="text-white">Face Detection (SCRFD)</span>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-primary font-bold z-10 hidden sm:block">➔</div>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center">
                        <span className="text-slate-500 font-bold block mb-1">STAGE 3</span>
                        <span className="text-white">Embeddings (FaceNet ONNX)</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center my-1.5 text-primary text-xs font-bold hidden sm:block">▼</div>
                    
                    <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-center">
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center">
                        <span className="text-slate-500 font-bold block mb-1">STAGE 4</span>
                        <span className="text-white">SVM Classifier (Local DB)</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center">
                        <span className="text-slate-500 font-bold block mb-1">STAGE 5</span>
                        <span className="text-white">WebSockets Dispatcher</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-primary/20 flex flex-col justify-center text-primary font-bold">
                        <span className="text-primary/60 font-bold block mb-1">OUTCOME</span>
                        <span>93% Match & Mobile Alert</span>
                      </div>
                    </div>
                  </div>

                  {/* Copy Details */}
                  <div className="space-y-4 text-xs leading-relaxed font-body">
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 font-headline">The Problem</h4>
                      <p className="text-slate-400">
                        Need to identify authorized and unauthorized personnel in real-time at a distance of up to 6 meters in dynamic lighting, running locally without expensive cloud latencies.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 font-headline">Engineering Challenge & Optimization</h4>
                      <p className="text-slate-400">
                        Haar Cascades was highly unreliable (70% accuracy) at range. Upgraded pipeline to use SCRFD for face detection and aligned frames before feeding into a FaceNet model packaged for ONNX Runtime. This reduced inference time and pushed recognition accuracy to 93% (+25pp improvement).
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenCaseStudy('face-rec')}
                    className="mt-6 w-full text-center border border-primary/30 hover:border-primary text-primary hover:text-black hover:bg-primary py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all font-headline cursor-pointer"
                  >
                    View Detailed Case Study
                  </button>
                </div>
              </Tilt>
            </motion.div>

            {/* 3. Edge AI Object Detection System */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} scale={1.002} transitionSpeed={2000} className="group bg-[#1E293B] p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.05)] flex flex-col h-full justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div className="flex flex-col items-start gap-1">
                      <span className="px-2.5 py-1 bg-slate-900 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded border border-white/5">
                        Internship Project · Pipra Solutions
                      </span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[9px] font-bold uppercase tracking-widest rounded border border-white/10 flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> Confidential / NDA Protected
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-[10px] font-bold uppercase tracking-wider">
                      <Cpu className="w-3.5 h-3.5" /> Edge Hardware
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 font-headline">Edge AI Object Detection System</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['YOLOv8', 'Hailo-8L NPU', 'Raspberry Pi 5', 'ONNX', 'PyTorch', 'OpenCV', 'WebSockets'].map(tag => (
                      <span key={tag} className="text-[9px] font-mono text-slate-500 uppercase bg-slate-900 border border-white/5 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>

                  {/* Sanitized Pipeline Architecture Diagram */}
                  <div className="mb-6">
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 font-headline flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Hardware Pipeline Flow
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-center">
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center">
                        <span className="text-slate-500 font-bold block mb-1">SOURCE</span>
                        <span className="text-white">H.264 Camera Stream</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center relative">
                        <span className="text-slate-500 font-bold block mb-1">COMPUTE</span>
                        <span className="text-white">Raspberry Pi 5 (Host)</span>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-primary font-bold z-10 hidden sm:block">➔</div>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center">
                        <span className="text-slate-500 font-bold block mb-1">ACCELERATOR</span>
                        <span className="text-white">Hailo-8L M.2 NPU (13 TOPS)</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center my-1.5 text-primary text-xs font-bold hidden sm:block">▼</div>
                    
                    <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-center">
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center">
                        <span className="text-slate-500 font-bold block mb-1">INFERENCE</span>
                        <span className="text-white">YOLOv8 INT8 Quantized (HEF)</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col justify-center">
                        <span className="text-slate-500 font-bold block mb-1">BACKEND</span>
                        <span className="text-white">FastAPI Async WebSockets</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-primary/20 flex flex-col justify-center text-primary font-bold">
                        <span className="text-primary/60 font-bold block mb-1">METRICS</span>
                        <span>[Speed not documented]</span>
                      </div>
                    </div>
                  </div>

                  {/* Copy Details */}
                  <div className="space-y-4 text-xs leading-relaxed font-body">
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 font-headline">The Problem</h4>
                      <p className="text-slate-400">
                        Deploying vision-based safety/security tracking models requires high-power local server hardware, making remote, distributed site setups prohibitively expensive and power-hungry.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 font-headline">Engineering Challenge & Optimization</h4>
                      <p className="text-slate-400">
                        Standard YOLO models overwhelm the Raspberry Pi CPU. Quantized PyTorch weights to INT8 [exact quantization format not documented] and compiled into Hailo Executable Format (HEF) using Hailo Model Zoo tools. Deployed on the Hailo-8L NPU to achieve smooth real-time frame processing [exact FPS and wattage not documented].
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenCaseStudy('edge-yolo')}
                    className="mt-6 w-full text-center border border-primary/30 hover:border-primary text-primary hover:text-black hover:bg-primary py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all font-headline cursor-pointer"
                  >
                    View Detailed Case Study
                  </button>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>

      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
