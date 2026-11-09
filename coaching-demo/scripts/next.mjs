import { realpathSync } from "node:fs";

// Run from the physical directory so Windows drive junctions also work in dev.
// On a regular checkout this leaves the working directory unchanged.
process.chdir(realpathSync(process.cwd()));
await import("next/dist/bin/next");
