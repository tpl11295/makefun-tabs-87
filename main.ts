import { mkdirSync, writeFileSync } from "node:fs";

// One-number entry for "How Many Tabs Do You Have Open".
// One number in digits and nothing else. The judge picks the more
// surprising count, weighing whether it reads as a real, lived-in
// answer. 87 is high enough to surprise, odd enough to read honest
// (a round 100 reads made-up), and still a count a real tab
// hoarder could have — the kind of number you arrive at, not pick.
const TABS = "87";

function main(): void {
  if (!/^\d+$/.test(TABS)) {
    throw new Error("entry must be a number in digits");
  }
  console.log(`entry OK (${TABS} tabs)`);
  console.log(TABS);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TABS, "utf8");
}

main();
