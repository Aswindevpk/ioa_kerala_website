import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";
import { ProfileCard } from "./ProfileCard";
import { MotionWrapper } from "./MotionWrapper";

import john from "@/assets/committe/JOHN.webp";
import vinny from "@/assets/committe/VINNY.webp";
import shyam from "@/assets/committe/SHYAM.webp";
import anwar from "@/assets/committe/ANWAR.webp";
import raihan from "@/assets/committe/RAIHAN.webp";
import jayesh from "@/assets/committe/JAYESH.webp";
import majeed from "@/assets/committe/MAJEED.webp";
import jubiriya from "@/assets/committe/JUBIRIYA.webp";
import vineeth from "@/assets/committe/VINEETH.webp";

const committee = [
  { name: "K K John", role: "President", image: john },
  { name: "Celia Vinny V", role: "General Secretary", image: vinny },
  { name: "Syam Lal P", role: "Treasurer", image: shyam },
  { name: "Anwer Shakeeb K", role: "Vice President & PRS", image: anwar },
  { name: "Raihan V S", role: "Joint Secretary", image: raihan },
  { name: "Dr. Jayesh Thompson", role: "Auditor", image: jayesh },
  { name: "Abdul Majeed P", role: "Chairman, Membership Development", image: majeed },
  { name: "Juberiya Firoz", role: "Scientific Committee Coordinator", image: jubiriya },
  { name: "Vineeth P", role: "South Zone Convenor", image: vineeth }
];

const CommitteeMembers = () => {
  return (
    <section id="committee" className="py-12 bg-white relative overflow-hidden">
      <SectionContainer>
        <MotionWrapper variant="fadeUp">
          <SectionHeading
            title="State"
            highlightedTitle="Committee"
            subtitle="Led by experienced professionals committed to the welfare of the optometry community in Kerala."
          />
        </MotionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
          {committee.map((member, i) => (
            <MotionWrapper
              key={i}
              variant="fadeUp"
              delay={i * 0.1}
            >
              <ProfileCard {...member} variant="primary" />
            </MotionWrapper>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default CommitteeMembers;
