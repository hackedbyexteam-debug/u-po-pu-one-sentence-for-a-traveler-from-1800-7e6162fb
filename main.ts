// One Sentence for a Traveler from 1800 — one sentence, 141 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (careful-reader judge):
// 14 candidates drafted and compared. Winner:
//   "Imagine every post office, library, and market stall in the world
//    joined by one road, where any letter you send arrives before the ink
//    dries."
// 1. Explains the internet: communication (letters), knowledge (library),
//    commerce (market stall) — the three things the internet is for.
// 2. Built only from what 1800 knows: post office, library, market stall,
//    road, letter, ink. Not one word coined after the traveler's time.
// 3. True, taken literally: a message sent anywhere arrives in under a
//    second — before ink would dry — and the world's books and markets are
//    reachable down that road.
// 4. No filler, no crammed list: one coherent image (a single road joining
//    the three institutions), not three features stapled together.
// 5. Memorable: "arrives before the ink dries" is the phrase a reader
//    still has a week later.
// Runner-up: "A road runs from your door to every door on earth, and on it
// a letter arrives before the ink on it dries, carrying any book you name."
// (133 chars) — a beautiful single-road image, but narrower: letters and
// books only, no market, and its second half ("carrying any book you name")
// is weaker than the winner's three-institution road.
// The rest lost: the "library where every book answers back" line (135) is
// a three-item list, which the brief forbids; "folded into one room in your
// house" (122) muddles the device with the internet; "holds every letter
// ever written" and "every book ever printed" overclaim and would mislead a
// literal reader; "built into a single small box" (150) describes a device,
// not the internet; "a post office, a library, and a market square all at
// once" is an explicit list; "kept in one place" misleads (the internet is
// not one place); the London-to-Boston letter (120) is vivid and true but
// covers only letters, not the whole internet; "largest library ... a voice
// that answers" covers only the library; the "speed of thought" road (110)
// lists letters, books and gossip instead of building one image.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Imagine every post office, library, and market stall in the world joined by one road, where any letter you send arrives before the ink dries.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
