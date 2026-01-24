// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Testimonial } from "@/lib/types"; // Assuming this type exists in your project
// import { Trophy, Linkedin, BadgeCheck } from "lucide-react";

// interface TestimonialCardProps {
//   testimonial: Testimonial;
// }

// export function TestimonialCard({ testimonial }: TestimonialCardProps) {
//   return (
//     <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-100 dark:border-gray-800">
//       {/* LinkedIn Link - Absolutely positioned top-right for a clean UI */}
//       {testimonial.linkedinUrl && (
//         <a
//           href={testimonial.linkedinUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute right-4 top-4 z-10 text-gray-400 transition-colors hover:text-[#0077b5] dark:text-gray-500 dark:hover:text-[#0077b5]"
//           aria-label="LinkedIn Profile"
//         >
//           <Linkedin className="h-5 w-5" />
//         </a>
//       )}

//       <CardContent className="flex flex-col gap-4 p-6">
//         {/* Header Section: Image & Badges */}
//         <div className="relative w-fit">
//           <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gray-100 shadow-sm dark:border-gray-700">
//             <Image
//               src={testimonial.image}
//               alt={testimonial.name}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Best in Cohort Trophy */}
//           {testimonial.isBestInCohort && (
//             <div
//               className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 shadow-md ring-2 ring-white dark:ring-gray-900"
//               title="Best in Cohort"
//             >
//               <Trophy className="h-4 w-4 text-yellow-900" />
//             </div>
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="flex flex-col gap-1">
//           {/* Name Row with Verified Tick and Flag */}
//           <div className="flex items-center gap-2">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//               {testimonial.name}
//             </h3>

//             {/* Verified Badge */}
//             <BadgeCheck className="h-5 w-5 fill-blue-500 text-white dark:text-gray-900" />

//             {/* Country Flag */}
//             <span
//               className={`fi fi-${testimonial.countryFlag.toLowerCase()} h-4 w-5 rounded shadow-sm`}
//               aria-label={`Flag of ${testimonial.country}`}
//             />
//           </div>

//           {/* Role */}
//           <p className="font-medium text-gray-600 dark:text-gray-300">
//             {testimonial.role}
//           </p>

//           {/* Cohort Meta Data */}
//           <div className="mt-2 flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500">
//             <span className="rounded-full bg-gray-100 px-2 py-0.5 dark:bg-gray-800">
//               {testimonial.cohort}
//             </span>
//             <span>•</span>
//             <span>Class of {testimonial.year}</span>
//           </div>
//         </div>

//         {/* Optional: Testimonial Text (Uncomment if needed) */}
//         <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
//           {testimonial.text}
//         </p>

//       </CardContent>
//     </Card>
//   );
// }


import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/lib/types";
import { Trophy, Linkedin, BadgeCheck } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <a
      href={testimonial.linkedin || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full outline-none focus:ring-2 focus:ring-[#0077b5] rounded-xl"
    >
      <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">

        {/* LinkedIn Indicator - Top Right
            Uses group-hover to turn blue when ANY part of the card is hovered */}
        <div className="absolute right-5 top-5 z-10">
          <Linkedin className="h-6 w-6 text-gray-300 transition-colors duration-300 group-hover:text-[#0077b5] dark:text-gray-600" />
        </div>

        <CardContent className="flex flex-col gap-4 p-6 pt-8">
          {/* Header Section: Image & Badges */}
          <div className="relative w-fit">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-sm ring-1 ring-gray-100 dark:border-gray-900 dark:ring-gray-800">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Best in Cohort Trophy */}
            {testimonial.isBestInCohort && (
              <div
                className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 shadow-md ring-4 ring-white dark:ring-gray-950"
                title="Best in Cohort"
              >
                <Trophy className="h-5 w-5 text-yellow-900" />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-1 mt-2">
            {/* Name Row with Verified Tick */}
            <div className="flex items-center gap-1.5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0077b5] transition-colors">
                {testimonial.name}
              </h3>

              {/* Verified Badge - Blue check */}
              <BadgeCheck className="h-5 w-5 fill-blue-500 text-white" />

              {/* Country Flag (Optional spacing/separator if needed) */}
              <span
                className={`fi fi-${testimonial.countryFlag.toLowerCase()} ml-1 h-3 w-4 rounded-[2px] shadow-sm opacity-80`}
                aria-label={`Flag of ${testimonial.country}`}
              />
            </div>

            {/* Role */}
            <p className="font-medium text-gray-600 dark:text-gray-400">
              {testimonial.role}
            </p>

            {/* Cohort Meta Data - Clean Pill Design */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-500">
              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                {testimonial.cohort}
              </span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span>Class of {testimonial.year}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
