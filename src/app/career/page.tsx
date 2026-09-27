import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Glassbox AI",
  description:
    "Glassbox AI is hiring an AI Engineer to deploy, fine-tune, and maintain production-grade ML models and LLMs.",
};

const responsibilities = [
  {
    title: "Model Integration",
    text: "Deploy, fine-tune, and maintain production-grade ML models and LLMs (such as GPT-4, Claude, or open-source variants like Llama).",
  },
  {
    title: "Pipeline Development",
    text: "Build and optimize robust data pipelines to preprocess massive datasets for training and real-time inference.",
  },
  {
    title: "API & Systems Design",
    text: "Architect scalable microservices and APIs to serve AI-driven features with minimal latency.",
  },
  {
    title: "Optimization & Monitoring",
    text: "Continuously evaluate model performance, cost, and bias while monitoring live production systems.",
  },
];

const requirements = [
  {
    title: "Experience",
    text: "3+ years of professional software engineering experience, with at least 1-2 years focused on deploying AI/ML models in production systems.",
  },
  {
    title: "Programming Skills",
    text: "Strong proficiency in Python and standard machine learning frameworks (e.g., PyTorch, TensorFlow, or JAX).",
  },
  {
    title: "AI Ecosystem",
    text: "Hands-on experience with LLM orchestration tools like LangChain, LlamaIndex, and vector databases (e.g., Pinecone, Milvus, Chroma).",
  },
  {
    title: "Cloud & DevOps",
    text: "Experience with cloud infrastructure (AWS, GCP, or Azure) and containerized workflows using Docker and Kubernetes.",
  },
  {
    title: "Education",
    text: "Bachelor’s or Master's degree in Computer Science, Data Science, Mathematics, or a related technical field (or equivalent practical experience).",
  },
];

const RoleList = ({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; text: string }[];
}) => (
  <div className="mb-12 rounded-sm bg-white px-8 py-10 shadow-three dark:bg-gray-dark sm:px-10">
    <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl">
      {heading}
    </h2>
    <ul>
      {items.map((item) => (
        <li key={item.title} className="mb-6 last:mb-0">
          <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
            {item.title}
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Career"
        description="We are hiring an AI Engineer to deploy, fine-tune, and maintain production-grade machine learning models and large language models."
      />
      <section className="pb-16 pt-8 md:pb-20 lg:pb-28">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            AI Engineer
          </h2>
          <RoleList heading="What You’ll Do" items={responsibilities} />
          <RoleList heading="What We’re Looking For" items={requirements} />
          <div className="rounded-sm bg-white px-8 py-10 shadow-three dark:bg-gray-dark sm:px-10">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Apply
            </h2>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
              Send your application to{" "}
              <a
                href="mailto:admin@xai.hk"
                className="text-primary duration-300 hover:underline"
              >
                admin@xai.hk
              </a>
              .
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
