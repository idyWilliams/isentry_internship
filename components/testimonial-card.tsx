import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/lib/types";
import { Trophy, Linkedin } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="relative h-full transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex flex-col gap-2 ">
          <figure className=" border border-gray-200 shadow-md w-fit rounded-full">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={164}
              height={164}
              className="h-28 w-28 rounded-full object-cover "
            />
            {testimonial.isBestInCohort && (
              <div className="absolute -bottom-1 right-32 rounded-full bg-yellow-400 p-1 shadow-lg">
                <Trophy className="h-4 w-4 text-yellow-900" />
              </div>
            )}
          </figure>
          <div className="">
            <div className="">
              <div className="flex items-center  gap-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-xl">
                {testimonial.name}
              </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {/* {testimonial.countryFlag} {testimonial.country} */}
                  <span
                    className={`fi fi-${testimonial.countryFlag.toLowerCase()}`}
                    style={{ marginRight: "8px" }}
                    aria-label={`Flag of ${testimonial.country}`}
                  />
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role}
              </p>

            </div>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          {/* <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400 dark:hover:text-[#00A8E8]"
          >
            <Linkedin className="h-5 w-5" />
          </a> */}
        </div>
        {/* <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p> */}
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
          {testimonial.cohort} • Class of {testimonial.year}
        </p>
      </CardContent>
    </Card>
  );
}
