import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
}

export function FAQSection({
  title = "FAQs",
//   subtitle = "Our top-list of commonly asked questions",
  faqs,
}: FAQSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          {/* <p className="text-orange-500 mb-2">{subtitle}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-t py-4">
              <AccordionTrigger className="flex justify-between text-left font-medium text-base md:text-lg hover:no-underline">
                <span className="mr-2">{index + 1}.</span> {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pl-6 md:pl-8 pt-2 text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

