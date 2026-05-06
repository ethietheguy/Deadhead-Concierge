/**
 * Run the full editorial pipeline on a show: research → synthesize → verify.
 *
 * Usage: npm run pipeline -- 1977-05-08
 *
 * On success, you'll have data/finalized/<date>.json — paste-ready editorial
 * for splicing into lib/concierge/catalog.ts.
 *
 * Each stage is run as a subprocess so its existing CLI (and .env.local
 * loading via tsx --env-file) stays intact. If any stage fails, the
 * pipeline stops and the exit code propagates.
 */
import { spawnSync } from "node:child_process";
import * as path from "node:path";

function usage(): never {
  console.error("Usage: npm run pipeline -- YYYY-MM-DD");
  process.exit(1);
}

function run(npmScript: string, date: string): void {
  console.error(`\n──── ${npmScript} ${date} ─────────────────────────────`);
  const result = spawnSync(
    "npm",
    ["run", npmScript, "--silent", "--", date],
    {
      stdio: "inherit",
      cwd: path.join(__dirname, ".."),
    },
  );
  if (result.status !== 0) {
    console.error(`\n✗ ${npmScript} failed for ${date}. Pipeline aborted.`);
    process.exit(result.status ?? 1);
  }
}

function main() {
  const arg = process.argv[2];
  if (!arg) usage();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(arg)) usage();
  const date = arg;

  run("research", date);
  run("synthesize", date);
  run("verify", date);

  console.error(`\n✓ Pipeline complete for ${date}.`);
  console.error(`  Output: data/finalized/${date}.json`);
}

main();
