"use client";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading name="My Experience" />

      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((data, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRadius: "0.4rem solid #9ca3af",
              }}
              date={data.date}
              icon={data.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{data.title}</h3>
              <p className="font-normal !mt-0">{data.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {data.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
