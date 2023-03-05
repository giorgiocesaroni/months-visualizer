import {
   differenceInDays,
   differenceInMonths,
   differenceInYears,
} from "date-fns";

export function remainingDays(date) {
   if (!date || isNaN(date)) return;
   const today = new Date();
   return differenceInDays(date, today);
}

export function elapsedYears(date) {
   if (!date || isNaN(date)) return;
   const today = new Date();
   return differenceInYears(today, date);
}

export function elapsedDays(date) {
   if (!date || isNaN(date)) return;
   const today = new Date();
   return differenceInDays(today, date);
}

export function elapsedMonths(date) {
   if (!date || isNaN(date)) return;
   const today = new Date();
   return differenceInMonths(today, date);
}
