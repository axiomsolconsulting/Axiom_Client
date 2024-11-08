
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
    {
      question: "What services does Axiom provide?",
      answer: "Axiom provides a comprehensive range of digital services including software development, cloud solutions, cybersecurity, and digital transformation consulting. Our expertise spans across multiple industries and technologies."
    },
    {
      question: "How does the project initiation process work?",
      answer: "Our project initiation process begins with a thorough consultation to understand your needs and goals. We then develop a detailed project plan, including timelines, milestones, and resource allocation. This is followed by a kickoff meeting to align all stakeholders before development begins."
    },
    {
      question: "How long does it take to complete a typical project?",
      answer: "Project timelines vary depending on scope and complexity. We provide detailed timeline estimates during the initial consultation phase and maintain transparent communication throughout the development process."
    },
    {
      question: "What is Axiom's approach to cybersecurity and data protection?",
      answer: "We implement industry-leading security measures and follow best practices for data protection. Our comprehensive approach includes regular security audits, encryption protocols, and compliance with international security standards."
    },
    {
      question: "Can Axiom help with cloud migration and ongoing cloud management?",
      answer: "Yes, we offer full-service cloud migration solutions and ongoing cloud management services. Our team has extensive experience in major cloud platforms and can help optimize your cloud infrastructure."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide comprehensive post-project support and maintenance services to ensure your solutions continue to perform optimally and remain up-to-date."
    }
  ]
export default function Page() {
    // const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <>
            {/* Hero Section */}
            <div className=" hero-section mt-[180px]">
               
                <div className=" top-0 left-0 w-full h-full flex flex-col justify-center  items-center text-white px-3">
                    <h1 className="text-base font-medium text-center uppercase text-[var(--Blue-Color)] mb-2">FAQs</h1>
                    <p className="text-center text-3xl md:text-6xl md:leading-[80px] font-semibold max-w-[824px] mb-10 text-[#000915]">
                        Got Questions? <br /> We’ve Got Answers!
                    </p>
                    <p className="text-center text-lg leading-[30px] max-w-4xl text-[#454545]"> Here, we’ve compiled answers to the most common questions about our services, processes, and what to expect when working with us. If you have further questions, please don’t hesitate to reach out.</p>
                </div>
            </div>

            <div className=" max-w-[950px] mx-auto pb-28 pt-5 mt-10">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-[8px] px-7 hover:border-[#002FF5] hover:shadow-faq-shadow ">
                            <AccordionTrigger className="text-[#2B3E61] !no-underline text-xl font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-[#304874] text-lg">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="mt-[50px] flex justify-center">
                    <Link href="/contact" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-4 px-8 rounded-md hover:bg-[#011633] hover:text-white hover:border-red-500 transition-colors duration-300">
                        Load More
                    </Link>
                </div>
            </div>
        </>
    );
}
