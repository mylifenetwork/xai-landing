import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef6a3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8"/></svg>
    ),
    title: "Speech-to-Text Solutions",
    paragraph:
      "Convert spoken language into written text with high accuracy, enabling seamless communication and documentation.",
  },
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef6a3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
    ),
    title: "Optical Character Recognition (OCR)",
    paragraph:
      "Digitize and automate data entry from scanned documents, enhancing efficiency and reducing manual errors.",
  },
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef6a3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    ),
    title: "AI Chatbots",
    paragraph:
      "Enhance customer engagement and support with intelligent chatbots that provide instant responses and personalized interactions.",
  },
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef6a3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
    ),
    title: "Document Management Systems",
    paragraph:
      "Streamline the organization, storage, and retrieval of documents with AI-driven systems that improve productivity and compliance.",
  },
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef6a3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
    ),
    title: "Predictive Analytics",
    paragraph:
      "Leverage historical data to forecast trends and make informed business decisions, ensuring you stay ahead of the competition.",
  },
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef6a3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      ),
    title: "Explainable AI",
    paragraph:
      "Ensure transparency in AI decision-making, allowing users to understand outcomes and fostering trust within your organization.",
  },
];
export default featuresData;
