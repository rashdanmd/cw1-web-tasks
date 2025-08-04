// Closures
function babySleepTracker() {
  let totalSleep = 0;

  return function napTime(hours: number) {
    totalSleep += hours;
    console.log(
      `😴 Baby slept for ${hours} hours. Baby has slept a total of ${totalSleep} hours`
    );
  };
}

const babySleeps = babySleepTracker();
babySleeps(2);
babySleeps(3);

// Destructuring
type Chores = {
  dad: string;
  mum: string;
  child1: string;
  child2: string;
  baby: string;
};

const familyChores: Chores = {
  dad: "tidy the living rooom",
  mum: "change the baby",
  child1: "mess the house",
  child2: "make more mess",
  baby: "poop",
};

const { dad, child1 } = familyChores;

console.log(`Dad needs to ${dad} and child1 wants to ${child1}`);

// Spread and rest opeators
const myFood: string[] = ["burger", "chips"];
const childrenFood: string[] = ["skittles", "ice cream"];
const babyFood: string[] = ["milk"];

const familyFeast: string[] = [...myFood, ...childrenFood, ...babyFood];
console.log("Tonights family feast includes:", familyFeast.join(", "));

// Arrow Functions
const babyNapTracker = (hours: number): string =>
  `😴 Baby napped for ${hours} hour(s)`;

console.log(babyNapTracker(2));

// Higher Order Functions
const messyPeople: [string, string][] = Object.entries(familyChores).filter(
  ([person, chore]) => chore.includes("mess")
);

console.log("Messy indviduals:", messyPeople);

const allChores: string[] = Object.values(familyChores).map((chore) => chore);
console.log("All chores:", allChores);
