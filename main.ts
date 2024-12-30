import { parseArguments } from "./args.ts";
import terminalImage from "npm:terminal-image";

async function main(inputArgs: string[]): void {
  console.log(`Welcome to Conductor!\n\n\n`);
  await printLogo();
  const profile = await parseArguments(inputArgs);
  const p = await new Deno.Command("docker", {
    args: ["compose", "--profile", profile, "up", "--attach", "conductor"],
  }).output();
  console.log("args", profile);
  console.log("a", p);
  const td = new TextDecoder();
  const out = td.decode(p.stdout).trim();
  const err = td.decode(p.stderr).trim();
  console.log("STDOUT ==> ", out);
  console.log("STDERR ==> ", err);
}

async function printLogo() {
  console.log(
    // keep image size low so it doesn't look "bitty" in terminal (ascii)
    await terminalImage.file("download.svg", { width: "15%", height: "15%" })
  );
}

main([]);
