import React from 'react'
import "../../ComponentStyles/HomePageStyle.css/FAQsPage.css"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion.jsx"

const FAQsPage = () => {
  return (
    <>
      <div className="FAQsPage">
        <div className="FAQsPageContainer">
          <div className="FAQsLeft">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="FAQsRight">
            <Accordion type="single" collapsible>
              <AccordionItem value="item1" className="item1">
                <AccordionTrigger><h2>What is ClarioSpace?</h2></AccordionTrigger>
                <AccordionContent><p>ClarioSpace is a unified platform for smarter knowledge sharing, collaboration, and project management designed for students, researchers, and small teams.</p></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item2" className="item2">
                <AccordionTrigger><h2>Who can use ClarioSpace?</h2></AccordionTrigger>
                <AccordionContent><p>Anyone! Students, educators, researchers, startups, and teams who want to streamline their workflow and collaborate more effectively.</p></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item3" className="item3">
                <AccordionTrigger><h2>How is ClarioSpace different from other platforms?</h2></AccordionTrigger>
                <AccordionContent><p>Unlike scattered tools, ClarioSpace brings knowledge sharing, team communication, and project collaboration into one seamless experience.</p></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item4" className="item4">
                <AccordionTrigger><h2>Do I need technical skills to use ClarioSpace?</h2></AccordionTrigger>
                <AccordionContent><p>Not at all. ClarioSpace is beginner-friendly with an intuitive, clean interface. You don’t need to be tech-savvy—if you can use basic online tools, you’ll feel right at home.</p></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item5" className="item5">
                <AccordionTrigger><h2>Can ClarioSpace be used for academic and research purposes?</h2></AccordionTrigger>
                <AccordionContent><p>Yes. ClarioSpace is ideal for class projects, group assignments, hackathons, and research teams. It allows members to collaborate on ideas, share resources, and track progress efficiently.</p></AccordionContent>
              </AccordionItem>

            </Accordion>

          </div>
        </div>
      </div>
    </>
  )
}

export default FAQsPage
