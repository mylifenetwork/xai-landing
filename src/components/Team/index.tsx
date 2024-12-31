import { Team } from "@/types/team";
import Image from "next/image";
import brandsData from "./TeamData";
import { Card, CardContent, CardMedia } from "@mui/material";

const Team = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((person) => (
                <Person key={person.id} person={person} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

const Person = ({ person }: { person: Team }) => {
  const { image, name, title, desc } = person;

  return (
    <div className="flex w-full items-center justify-center px-3 py-[30px] sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      {/* <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" style={{objectFit: 'cover'}}/>
        <Image src={image} alt={name} fill className="block dark:hidden" style={{objectFit: 'cover'}} />
      </a> */}
      <Card className="bg-gray-light dark:bg-gray-dark relative h-320 w-full opacity-90 transition hover:opacity-100 dark:opacity-90 dark:hover:opacity-100">
        <CardMedia sx={{height: 300}} image={image}/>
        <CardContent>
          <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            {name}
          </h1>
          <p className="text-base font-medium leading-relaxed text-black dark:text-white">
            {title}
          </p>
          <p className="text-base font-medium leading-relaxed text-body-color">
            {desc}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
