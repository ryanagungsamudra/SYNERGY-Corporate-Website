"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

// Shadcn
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";

interface DialogItemProps {
  title: string;
  titleBold?: boolean;
  description: any;
  component?: any;
}
const DialogItem: React.FC<DialogItemProps> = ({
  title,
  titleBold = true,
  description,
  component,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="py-2 cursor-pointer hover:bg-slate-100 hover:underline hover:text-[#9ACFC9] hover:font-extrabold">
          <p className={titleBold ? "font-bold" : "font-normal"}>{title}</p>
        </div>
      </DialogTrigger>

      <DialogContent className="min-w-[50vw]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <hr className="w-full mb-1 border-[#DEE2E6]" />

        <div className="mt-0">{description}</div>

        {component}
      </DialogContent>
    </Dialog>
  );
};

interface PersonCardProps {
  name: string;
  title: string;
  institution: string;
  image: string;
}
const PersonCard: React.FC<PersonCardProps> = ({
  name,
  title,
  institution,
  image,
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-1">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="object-contain w-[200px] h-[200px] rounded-full"
      />

      <p className="mt-2 text-lg font-bold text-center">{name}</p>

      <p className="text-base text-center">{title}</p>

      <p className="text-lg font-bold text-[#485056] text-center">
        {institution}
      </p>
    </div>
  );
};

export default function Page() {
  const path = usePathname();
  const menuName = path.split("/")[1];
  const { changeMenu } = useContext(SynergyContext);

  useEffect(() => {
    changeMenu(menuName);
  }, []);

  const people = [
    {
      name: "Dr Chen Ren Bao",
      title: "Associate Professor FINANCE",
      institution: "National University of Singapore",
      image: require("@/app/assets/page/standards/dr-chen-ren-bao.jpg"),
    },
    {
      name: "Dr Yuanto Kusnadi",
      title: "Assistant Professor School of Accountancy",
      institution: "Singapore University of Social Sciences",
      image: require("@/app/assets/page/standards/dr-yuanto-kusnadi.jpg"),
    },
    {
      name: "Ronald Wong, CFP®",
      title: "Managing Director",
      institution: "Financial Perspectives",
      image: require("@/app/assets/page/standards/ronald-wong.jpg"),
    },
    {
      name: "Dr Ding Ding",
      title: "Associate Professor Vice Dean School of Business",
      institution: "Financial Perspectives",
      image: require("@/app/assets/page/standards/dr-ding-ding.jpg"),
    },
    {
      name: "Dr Angie Low",
      title: "Associate Professor Deputy Head of Division Banking & Finance",
      institution: "Nanyang Technological University Singapore",
      image: require("@/app/assets/page/standards/dr-angie-low.jpg"),
    },
    {
      name: "Kimmis Pun, IBF Fellow",
      title: "Board of Director",
      institution: "Financial Planning Standards Board",
      image: require("@/app/assets/page/standards/kimmis-pun.jpg"),
    },
  ];
  return (
    <div className="mt-[-1.3rem]">
      <div className="bg-gradient-to-r from-[#7297CA] to-[#97C6CD]">
        <Image
          src={require("@/app/assets/page/standards/standards-main-banner.jpg")}
          alt="standards"
          width={1920}
          height={1080}
          className="object-contain w-full md:h-[80vh]"
        />
      </div>

      <div className="flex flex-wrap w-full justify-center gap-4 my-8">
        <Card className="flex flex-col text-center border rounded-lg h-full">
          <Image
            src={require("@/app/assets/page/standards/banner-general.jpg")}
            alt="standards"
            width={400}
            height={400}
            className="object-contain w-[300px] h-full rounded-tl-lg rounded-tr-lg"
          />
          <DialogItem
            title="Provision for Emergency Funds"
            description={
              <>
                Emergency Funds refer to money saved and set aside for rainy day
                situations that could occur such as loss of job or a medical
                emergency. <br />
                <br />
                The recommended number of months of salary minimally needed to
                set aside for emergency funds is 6 months and it is selected via
                a poll by practitioners at SYNERGY.
              </>
            }
          />

          <DialogItem
            title="Provision for Final Expenses"
            description={
              <>
                Final Expenses refer to the amount of expenses needed to settle
                the procedures involved after one’s life has ended. <br />
                <br />
                The recommended final expenses needed is at least $30,000 and it
                is selected via a poll by practitioners at SYNERGY.
              </>
            }
          />

          <DialogItem
            title="Wage Increment Rate"
            description={
              <>
                The wage increment rate data is obtained from Ministry of
                Manpower. A geometric average was used to derive the expected
                wage increment rate.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/wage-increment-rate.png")}
                />
              </>
            }
          />

          <DialogItem
            title="Number of Months of Bonus"
            description={
              <>
                The number of months of bonus data is obtained from Ministry of
                Manpower. A simple average was used based on a 10-year moving
                average period.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/number-of-months-of-bonus.png")}
                />
              </>
            }
          />
        </Card>

        <Card className="flex flex-col text-center border rounded-lg h-full">
          <Image
            src={require("@/app/assets/page/standards/banner-rates.jpg")}
            alt="standards"
            width={400}
            height={400}
            className="object-contain w-[300px] h-full rounded-tl-lg rounded-tr-lg"
          />
          <DialogItem
            title="Inflation Rate"
            description={
              <>
                Inflation Rate refers to the general increase in price level. It
                is obtained from computing the increase in CPI Index which can
                be found from Department of Statistics Singapore. The geometric
                average is used to compute the increase during the duration
                period. The duration period is selected via a poll by
                practitioners at SYNERGY.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/inflation-rate.png")}
                />
              </>
            }
          />

          <DialogItem
            title="Healthcare Inflation Rate"
            description={
              <>
                The Healthcare Inflation Rate refers to the general increase in
                cost of healthcare in Singapore. It is obtained from computing
                the increase in CPI Index of Healthcare. The data can be found
                from Department of Statistics Singapore. A geometric mean is
                used to compute the increase during the duration period. The
                duration period is selected via a poll by practitioners at
                SYNERGY.
              </>
            }
          />

          <div className="py-2 bg-slate-100">
            <p className={"font-bold"}>Rate of Returns of</p>
          </div>

          <DialogItem
            title="Cash"
            titleBold={false}
            description={
              <>
                The rate of return of cash refers to the average returns in
                holding liquid cash. It is obtained from the Bank and Financial
                Companies Savings Deposit rates which is found on the Monetary
                Authority of Singapore (MAS) website. A simple average is used
                to compute the rate. The duration period is selected via a poll
                by practitioners at SYNERGY.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/ror-cash.png")}
                />
              </>
            }
          />

          <DialogItem
            title="Equity Investment"
            titleBold={false}
            description={
              <>
                The rate of return of equity refers to the average returns of
                investing in equity. A global index, the MSCI World Index is
                used to calculate the returns of equity. MSCI World Index is
                chosen as it is diversified globally. The returns are obtained
                from FE Analytics and the duration that the returns should be
                measured upon is selected via a poll by practitioners at
                SYNERGY.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/ror-equity.png")}
                />
              </>
            }
          />

          <DialogItem
            title="Fixed Income Investment"
            titleBold={false}
            description={
              <>
                The rate of return of fixed income refers to the average returns
                of investing in fixed income. 8 global fixed income funds with
                at least 10 years of track record has been selected. An average
                is taken from their returns to calculate the expected return in
                investing in fixed income. The returns are obtained from FE
                Analytics and the duration that the returns should be measured
                upon is selected via a poll by practitioners at SYNERGY.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/ror-fixed-income.png")}
                />
              </>
            }
          />

          <DialogItem
            title="Investment Property"
            titleBold={false}
            description={
              <>
                The property capital returns refer to the average returns of
                investing in property. This assumes a buy and hold scenario. The
                Private Residential Price Index and HDB Resale Price Index is
                used to compute the returns. Both indexes are found from data
                provided by the Urban Redevelopment Authority. A geometric mean
                is used in calculating the returns.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/property-capital-return.png")}
                />
              </>
            }
          />

          <DialogItem
            title="CPF OA / SA"
            titleBold={false}
            description={
              <>
                The rate of return of fixed income refers to the average returns
                of investing in fixed income. 8 global fixed income funds with
                at least 10 years of track record has been selected. An average
                is taken from their returns to calculate the expected return in
                investing in fixed income. The returns are obtained from FE
                Analytics and the duration that the returns should be measured
                upon is selected via a poll by practitioners at SYNERGY.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/ror-cpf.png")}
                />
              </>
            }
          />
        </Card>

        <Card className="flex flex-col text-center border rounded-lg h-full">
          <Image
            src={require("@/app/assets/page/standards/banner-rp.jpg")}
            alt="standards"
            width={400}
            height={400}
            className="object-contain w-[300px] h-full rounded-tl-lg rounded-tr-lg"
          />
          <DialogItem
            title="Life Expectancy - Male / Female"
            description={
              <>
                The Life Expectancy is the expected age a male/female is
                expected to live to in Singapore. The information is obtained
                from SingStat.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/life-expectancy.png")}
                />
              </>
            }
          />

          <DialogItem
            title="Inflation Rate during Retirement"
            description={
              <>
                The Inflation Rate at Retirement is an add-on % to the Inflation
                Rate decided. <br />
                <br />
                The add-on % is a buffer. The chosen rate is 2% and it is
                selected via a poll by practitioners at SYNERGY. <br />
                <br /> This results in an Inflation Rate during Retirement of
                3.35%.
              </>
            }
          />
        </Card>

        <Card className="flex flex-col text-center border rounded-lg h-full">
          <Image
            src={require("@/app/assets/page/standards/banner-ce.jpg")}
            alt="standards"
            width={400}
            height={400}
            className="object-contain w-[300px] h-full rounded-tl-lg rounded-tr-lg"
          />
          <div className="py-2 bg-slate-100">
            <p className={"font-bold"}>Average Cost of Education Today</p>
          </div>

          <DialogItem
            title="Local"
            titleBold={false}
            description={
              <>
                The local education cost is the average cost of local university
                education. In deriving the average cost, an average is taken for
                the cost of courses across local universities. Following which,
                the median is applied to the averages to calculate the average
                cost of local university education. Median is used as it would
                be the mid-point of the fees of the different courses and would
                be more accurate as some courses might be way higher than the
                rest of courses. The fees of each course are obtained from the
                various university websites.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/4-local.png")}
                />
              </>
            }
          />

          <DialogItem
            title="Australia"
            titleBold={false}
            description={
              <>
                The overseas education cost in Australia is the average cost of
                studying in Australia as an international student. In deriving
                the average cost of a course, the top 5 universities in
                Australia are used. To derive the average cost of each course in
                Australia, an average is applied to the cost of each course
                across the various universities. Then, a median is applied to
                the average of various courses to calculate the average cost of
                studying in Australia. A simple average is used to calculate the
                average living cost in Australia. Both are added together to
                give the estimation of the cost for an international student
                living in Australia. The amount is then converted into Singapore
                Dollars at the rate of 1 AUD: 0.99 SGD. The cost of courses and
                living expenses are found from the websites of the various
                schools and government source such as study in Australia.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/4-australia.png")}
                />
              </>
            }
          />

          <DialogItem
            title="UK"
            titleBold={false}
            description={
              <>
                The overseas education cost in UK is the average cost of
                studying in UK as an international student. In deriving the
                average cost of a course, the top 5 universities in UK are used.
                To derive the average cost of each course in UK, an average is
                applied to the cost of each course across the various
                universities. Then, a median is applied to the average of
                various courses to calculate the average cost of studying in UK.
                A simple average is used to calculate the average living cost in
                UK. Both are added together to give the estimation of the cost
                for an international student living and studying in UK. The
                amount is then converted into Singapore Dollars at the rate of 1
                GBP: 1.81 SGD. The cost of courses and living expenses are found
                from the websites of the various schools.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/4-uk.png")}
                />
              </>
            }
          />

          <DialogItem
            title="US"
            titleBold={false}
            description={
              <>
                The overseas education in US is the average cost of studying in
                US as an international student. The prices for different courses
                are not displayed on the website. Hence the most general type of
                course, the bachelor course is used as price information was
                available. An average is taken across the different
                universities. The living cost is taken as an average across the
                various universities. Both are added together to give the
                estimation of the cost for an international student living and
                studying in US. The amount is then converted into Singapore
                Dollars at the rate of 1 USD: 1.36 SGD. The cost of courses and
                living expenses are found from the websites of the various
                schools.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/4-us.png")}
                />
              </>
            }
          />

          <div className="py-2 bg-slate-100">
            <p className={"font-bold"}>Education Inflation Rate</p>
          </div>

          <DialogItem
            title="Local"
            titleBold={false}
            description={
              <>
                The education inflation rate refers to the increase in cost of
                education in Singapore over the years. Across a timespan from
                2008 to 2020, university business course in Singapore is
                measured and an average is used. Business Course has been used
                as the course as it is the most common course across
                universities. The cost of each course is found from the websites
                of the various schools.
              </>
            }
            component={
              <>
                <Image
                  alt="wage"
                  src={require("@/app/assets/page/standards/4-local-inflation.png")}
                />
              </>
            }
          />

          <DialogItem
            title="Foreign"
            titleBold={false}
            description={
              <>
                A buffer of 1% is added onto the local education inflation rate.
                This is done for conservative purposes. <br />
                <br />
                This results in a Foreign Education Inflation Rate of 5%.
              </>
            }
          />
        </Card>
      </div>

      <div className="w-full text-center mb-6 italic">
        <p>Click on the respective labels to view more information</p>
      </div>

      {/* OUR OBJECTIVE */}
      <div className="flex flex-col items-start justify-start w-full h-full px-10 py-4 md:px-[8rem] md:py-[1rem]">
        <h1 className="text-3xl font-bold text-start text-[#1A1A63] md:text-4xl">
          OUR OBJECTIVE
        </h1>
        <hr className="w-full mt-1 mb-2 border-[#1A1A63] border-[1px]" />
        <p className="mt-4 text-lg text-start text-gray-800">
          Currently there is no known financial planning standards governing the
          use of these assumptions and parameters. Hence at SYNERGY, we aim to
          provide reliable financial planning references that standardises the
          assumptions and parameters used for their financial planning needs.{" "}
          <br />
          <br />
          This in turn provides the answers to the question of how one can
          achieve their financial goals set. Be it for their own retirement, for
          their child’s education or for wealth planning, the standards aim to
          give an accurate and realistic estimation to how one can achieve their
          goals set. <br />
          <br />
          For example, a parent today could be thinking how much is needed to
          send their child to a local university in 15 years’ time. By using the
          figures provided such as Local Average Cost of Education, Local
          Education and Rate of Returns of Investments, an estimation can be
          derived on how much is needed to be invested now to achieve the aim.
          <br />
          <br />
          These figures are updated yearly to reflect the changes in the current
          economic landscape.
        </p>
      </div>

      {/* OUR METHODOLOGY */}
      <div className="flex flex-col items-start justify-start w-full h-full px-10 py-4 md:px-[8rem] md:py-[1rem]">
        <h1 className="text-3xl font-bold text-start text-[#1A1A63] md:text-4xl">
          OUR METHODOLOGY
        </h1>
        <hr className="w-full mt-1 mb-2 border-[#1A1A63] border-[1px]" />
        <p className="mt-4 text-lg text-start text-gray-800">
          For assumptions where data are available from the various official
          sources, the figures are extracted from those websites. Some examples
          include CPF OA / SA Rates and Life Expectancy.
          <br />
          <br />
          For assumptions where data are available from the various official
          sources, but an average figure and timeframe is required, the figures
          are first extracted from the various websites. Then, the figure used
          is based on the time frame selected which is decided by the panel of
          financial planning experts consisting of our CFPs and ChFCs. Some
          examples include Inflation Rate and Healthcare Inflation Rate.
          <br />
          <br />
          For assumptions where data from official sources are not available and
          no primary data research can be conducted, we adopt the
          &quot;widely-use best practices&quot; which uses the average rate from
          an annual market survey of our CFPs and ChFCs. Some examples include
          Rate of Return from Equity Investments and Fixed Income Investments.
          <br />
          <br />
          Do visit each label above to see what the rates are and how they are
          derived.
        </p>
      </div>

      {/* PANEL OF ACADEMIA */}
      <div className="flex flex-col items-start justify-start w-full h-full px-10 py-4 md:px-[8rem] md:py-[1rem]">
        <h1 className="text-3xl font-bold text-start text-[#1A1A63] md:text-4xl">
          PANEL OF ACADEMIA
        </h1>
        <hr className="w-full mt-1 mb-2 border-[#1A1A63] border-[1px]" />
        <p className="mt-4 text-lg text-start text-gray-800">
          These are the members of the panel who have given their feedback in
          the formation of the financial planning standards and subsequently
          endorsed the standards to be reasonable and accurate.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 w-full justify-center mt-10">
        {people.map((person, index) => (
          <div key={index} className="w-[190px]">
            <PersonCard
              name={person.name}
              title={person.title}
              institution={person.institution}
              image={person.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
