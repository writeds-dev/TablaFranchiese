import "./index.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <>
      {/* FAQ Section */}

      <section id="faq" className="faq-area background-area py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-0">
            <span className="text-red-700">Frequently Asked</span> Questions
          </h2>

          <div className="w-16 h-1 bg-red-900 mx-auto mb-10 mt-2"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="video-area">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/951267091?h=a3aa651a1a" width="600" height="340"></iframe>
            </div>
            <div className="mt-5">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">
                  Can I own more than one restaurant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Yes. We believe some owners will operate multiple units under either model. We offer discounts on initial franchise fees for owners who commit up front to a multi-unit development agreement.


                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">
                  Are you seeking owner operators or executive owners?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                We want our owners to be involved in the management of the business, but not working “in” the business. Most of our franchise owners will focus on marketing, guest loyalty and business development.


                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography component="span">
                  Do I need experience as a chef in an Indian or Asian restaurant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                No. We do offer head chef training for our fine dining model. The menu in our fast casual concept is simpler and does not require this.


                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Typography component="span">
                  How much space do I need for this restaurant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Between 800 to 2,000 square feet for the fast casual model and 2,000 to 3,000 square feet for a fine dining full-service restaurant. Either model requires adequate parking and drive by traffic. Inquire about specific site criteria which will help you evaluate real estate that would be a good fit for the Tabla model you choose.

                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  <Typography component="span">
                  How long does it take to open?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Estimated timeframe is between 4 and 9 months (cafe) up to 12 months (fine dining restaurant) based on 2nd Generation space in order to finish our pre-opening process and attend training.
                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6-content"
                  id="panel6-header"
                >
                  <Typography component="span">
                  How many employees are needed to operate the restaurant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Depending on the model, between 5 and 15 full-time and part-time employees per shift.


                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7-content"
                  id="panel7-header"
                >
                  <Typography component="span">
                  What are the startup costs and what do they include?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Startup funding includes the initial franchise fee and other estimated costs such as 3rd party professional fees, insurance, equipment, furniture and fixtures, plus initial marketing and 3-months of working capital.


                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel8-content"
                  id="panel8-header"
                >
                  <Typography component="span">
                  Can I visit the restaurant to learn more?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Absolutely, we would love to host you for a tour and have you meet our team!


                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel9-content"
                  id="panel9-header"
                >
                  <Typography component="span">
                  How much will the business make in a year?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                We will be able to share our Financial Performance Representation, called an Item 19, in our Franchise Disclosure Document which highlights affiliate performance and history. This can be a useful tool to help you evaluate the revenue potential of your Tabla restaurant or cafe.


                  {/* <div className="mt-2">
                    <Link
                      href="#home"
                      className="px-3 py-2 bg-green-800 text-white rounded text-[14px] font-bold"
                    >
                      INQUIRE TODAY
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
