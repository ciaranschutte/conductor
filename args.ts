import { Select } from "@cliffy/prompt/select";

type ProfileInput = {
  name: string;
  value: string;
};

const PROFILES: ProfileInput[] = [
  { name: "platform", value: "platform" },
  { name: "stageDev", value: "stageDev" },
  { name: "arrangerDev", value: "arrangerDev" },
  { name: "maestroDev", value: "maestroDev" },
  { name: "songDev", value: "songDev" },
  { name: "scoreDev", value: "scoreDev" },
];

export async function parseArguments(inputArgs: string[]) {
  const profile = await Select.prompt({
    message: "Select a profile:",
    options: PROFILES,
  });
  console.log("answer", profile);

  return profile;
}
