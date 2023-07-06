import weightlift from "@/assets/weightlift.jpg";
import yoga from "@/assets/yoga.jpg";
import core from "@/assets/core.jpg";
import advanture from "@/assets/adventure.jpg";
import fitness from "@/assets/fitness.jpg";
import training from "@/assets/training.jpg";
import { LessonsType } from "@/shared/types/other-types.ts";
import overlayStyle from "../../style/style.ts";

const lessons: LessonsType[] = [
  {
    name: "Weight Training Classes",
    description:
      "Unleash your potential in our motivating weight training classes. Strengthen muscles, improve posture, and boost metabolism. Overcome plateaus and achieve greatness with us. Let's lift, sculpt, and thrive together.",
    image: weightlift,
  },
  {
    name: "Yoga Classes",
    description:
      "Discover a sanctuary of peace and balance in our rejuvenating yoga classes at the gym. Guided by experienced instructors, our yoga classes provide a holistic approach to wellness, allowing you to cultivate strength, flexibility, and inner harmony.",
    image: yoga,
  },
  {
    name: "Ab Core Classes",
    description:
      "Sculpt your abs with our intense ab core classes. Target your midsection from all angles with planks, crunches, and innovative exercises. Build core strength for improved performance and overall fitness. Join us for a rewarding and challenging experience.",
    image: core,
  },
  {
    name: "Adventure Classes",
    description:
      "Experience thrilling adventures in our action-packed classes. From rock climbing to kayaking, challenge your limits and embrace the spirit of adventure. Join us for an unforgettable journey of exploration and empowerment.",
    image: advanture,
  },
  {
    name: "Fitness Classes",
    image: fitness,
  },
  {
    name: "Training Classes",
    description:
      "Unleash your potential in our dynamic training classes. Led by expert trainers, these classes offer structured workouts that challenge and empower. Join us to enhance endurance, build strength, and achieve your goals.",
    image: training,
  },
];

export default function Lesson() {
  return (
    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
      <ul className="w-[1800px] whitespace-nowrap">
        {lessons.map((lesson: LessonsType, index) => (
          <li
            key={index}
            className="relative mx-5 inline-block h-[380px] w-[450PX]"
          >
            <div className={overlayStyle}>
              <p className="text-2xl">{lesson.name}</p>
              <p className="mt-5">{lesson.description}</p>
            </div>
            <img className="h-[380px] w-[450px]" alt="" src={lesson.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
