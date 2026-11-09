"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Faculty from "@/components/sections/Faculty";
import Results from "@/components/sections/Results";
import Faqs from "@/components/sections/Faqs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [classValue, setClassValue] = useState("");
  const [batchValue, setBatchValue] = useState("");

  function chooseCourse(id: string) {
    const course = site.courses.items.find(item => item.id === id);
    setSelectedCourse(id);
    setClassValue(course?.classValue ?? "");
    setBatchValue(course?.batchValue ?? "");
  }

  return <main id="main">
    <Hero />
    <Courses selectedId={selectedCourse} onChoose={chooseCourse} />
    <WhyChooseUs />
    <Faculty />
    <Results />
    <Faqs />
    <Contact classValue={classValue} batchValue={batchValue} onClassChange={setClassValue} onBatchChange={setBatchValue} />
  </main>;
}
