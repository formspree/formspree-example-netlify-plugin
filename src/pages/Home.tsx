import { zonedTimeToUtc } from "date-fns-tz";
import { intervalToDuration, format } from "date-fns";

import {
  NewspaperIcon,
  PresentationChartLineIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

import BigNumber from "../components/BigNumber";
import BigText from "../components/BigText";
import Speakers from "../components/Speakers";
import Form from "../components/Form";
import Video from "../components/Video";
import License from "../components/License";

import ElonURL from "../assets/Elon_Musk.jpeg";
import ObamaURL from "../assets/Obama.jpeg";
import Section from "../components/Section";

function Home() {
  const confTime = new Date("2024-01-03 9:00:00");
  const timeToConf = intervalToDuration({
    start: Date.now(),
    end: zonedTimeToUtc(confTime, "Australia/Sydney"),
  });
  const monthsToConf =
    (timeToConf.months as number) + (timeToConf.years as number) * 12;

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <BigText>
        MAXCON
        <br />
        2024
      </BigText>

      <div className="w-[80vw] max-w-[800px] mb-20">
        {/* ---------------- Countdown ---------------- */}
        <div className="inline-block flex flex-wrap justify-center lg:justify-between text-3xl font-bold gap-12 mt-20">
          <BigNumber number={monthsToConf} unit={"months"} />
          <BigNumber number={timeToConf.days as number} unit={"days"} />
          <BigNumber number={timeToConf.hours as number} unit={"hours"} />
        </div>

        {/* ---------------- Main info ---------------- */}
        <Section background="bg-white/90 backdrop-blur-sm">
          <h1 className="text-4xl font-bold font-sans text-primary">
            {format(confTime, "MMMM do, yyyy")}, Sydney Australia
          </h1>
          <p className="text-xl mt-8">
            Join the biggest names in this once in a lifetime opportunity to see
            more than you've ever witnessed in one place.
          </p>

          <Video />

          <h1 className="text-4xl font-bold font-sans text-primary">
            Catch the latest from experts in:
          </h1>

          <div className="flex gap-4 justify-around flex-wrap w-full mt-12">
            <div className="flex flex-col justify-center items-center">
              <NewspaperIcon className="h-40 text-primary" />
              <p className="mt-2 text-3xl">Current Events</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <PresentationChartLineIcon className="h-40 text-primary" />
              <p className="mt-2 text-3xl">Stock Tips</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BeakerIcon className="h-40 text-primary" />
              <p className="mt-2 text-3xl">Science!</p>
            </div>
          </div>
        </Section>

        {/* ---------------- Speakers ---------------- */}
        <BigText>Speakers</BigText>
        <Speakers>
          <Speakers.Headshot src={ElonURL} />
          <Speakers.Detail name={"Elon Musk"} title={"Quixotic Billionaire"}>
            <p>
              Elon will be discussing the role of space exploration, neural
              interfaces and transportation innovation in family life.{" "}
            </p>
          </Speakers.Detail>
          <Speakers.Headshot src={ObamaURL} />
          <Speakers.Detail
            name={"Michelle Obama"}
            title={"Former First Lady, Influencer"}
          >
            <p>
              Michelle hits the stage with a hilarious yet profound one-woman
              show that recounts her harrowing journey from Chicago to
              Washington.
            </p>
          </Speakers.Detail>
        </Speakers>

        {/* ---------------- Signup Form ---------------- */}
        <Section>
          <h1 className="text-4xl font-bold font-sans text-primary">
            Sign up today!
          </h1>
          <Form className="mt-12">
            <Form.Input
              label="Name"
              name="Name"
              placeholder="Don Joe"
              required={true}
            />
            <Form.Input
              label="Pronouns"
              name="Pronouns"
              placeholder="He/Him, She/Her, They/Them"
            />
            <Form.Input
              label="Email"
              type="email"
              name="Email"
              required={true}
              placeholder="djoe@memail.com"
            />
            <Form.Input
              label="Dietary Restrictions"
              name="Restrictions"
              placeholder="Gluten free etc."
            />
            <Form.Input
              label="How did you hear about us?"
              name="Referred By"
              type="textarea"
            />
            <Form.Submit />
          </Form>
        </Section>

        {/* ---------------- Footer ---------------- */}
        <Section>
          <p className="mb-2">© 2022, Formspree, Inc.</p>
          <License className="block mb-2" />
          Photo by{" "}
          <a href="https://unsplash.com/@kewal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Kewal
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/sydney?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </Section>
      </div>
    </div>
  );
}

export default Home;
