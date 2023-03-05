import React, { useState, useEffect, useRef } from "react";
import { elapsedDays, elapsedMonths, elapsedYears } from "./utils/date";
import { dateForPicker } from "./utils/dateForPicker";

const colorMap = {
   1: ["border-green-400", "bg-green-400"],
   2: ["border-green-400", "bg-green-400"],
   3: ["border-green-400", "bg-green-400"],
   4: ["border-green-400", "bg-green-400"],
   5: ["border-green-400", "bg-green-400"],
   6: ["border-green-400", "bg-green-400"],
   7: ["border-green-400", "bg-green-400"],
   8: ["border-green-400", "bg-green-400"],
   9: ["border-green-400", "bg-green-400"],
   10: ["border-green-400", "bg-green-400"],
};

function App() {
   let search = window.location.search;
   let params = new URLSearchParams(search);
   let dob = params.get("dob");
   let name = params.get("name");

   const [dateOfBirth, setDateOfBirth] = useState(dob ?? "2000-01-01");

   return (
      <main className="max-w-lg p-4 mx-auto grid">
         <h1 className="font-bold text-xl mb-4">{`Hi${
            name ? " " + name : ""
         }, here's your life.`}</h1>
         <label className="mb-6">
            <p className="text-gray-500 mb-6">
               Each dot represents a month of a 100 year lifespan. Filled dots
               are months you've lived.
            </p>
            <p className="text-gray-500">Date of birth</p>
            <input
               value={dateOfBirth}
               type="date"
               placeholder="Date of birth"
               onChange={event => setDateOfBirth(event.target.value)}
            ></input>
         </label>
         <AgeVisualizer dateOfBirth={dateOfBirth} />
      </main>
   );
}

function AgeVisualizer({ dateOfBirth }) {
   const totalMonths = 100 * 12;
   const ageInMonths = elapsedMonths(new Date(dateOfBirth));

   console.log({ age: ageInMonths, totalDays: totalMonths });

   return (
      <div className="grid gap-4">
         {Array(9)
            .fill(0)
            .map((_, ageGroupIndex) => {
               return (
                  <div className="grid gap-2 grid-cols-[1fr,2rem]">
                     <div className="flex flex-wrap gap-1">
                        {Array(10 * 12)
                           .fill(0)
                           .map((_, monthIndex) => {
                              const _elaspedMonths =
                                 monthIndex + 1 + (ageGroupIndex + 1) * 120;
                              console.log({ _elaspedMonths, ageInMonths });

                              const isFilled = _elaspedMonths <= ageInMonths;

                              const yearGroup =
                                 Math.floor(
                                    Math.floor(ageGroupIndex / 12) / 10
                                 ) + 1;

                              const [border, background] = colorMap[yearGroup];

                              return (
                                 <Square
                                    background={isFilled ? background : null}
                                    border={border}
                                 />
                              );
                           })}
                     </div>
                     <p className="text-gray-500 text-xs">{`${
                        (ageGroupIndex + 1) * 10
                     }'s`}</p>
                  </div>
               );
            })}
      </div>
   );
}

function Square({ border = "border-green-500", background = "bg-black" }) {
   return (
      <div
         className={`w-2 h-2 rounded-full border ${border} ${background}`}
      ></div>
   );
}

export default App;
