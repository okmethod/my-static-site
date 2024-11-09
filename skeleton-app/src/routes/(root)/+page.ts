import { generateButtonConfigs, type TransitionContent } from "$lib/utils/transitions";
import { GITHUB_REPO_URL } from "$lib/constants/common";

const contentLinks: TransitionContent[] = [
  {
    label: "Example route",
    action: "navigate",
    target: "/example",
  },
  {
    label: "Github Repository",
    action: "redirect",
    target: GITHUB_REPO_URL,
  },
];

export async function load() {
  const buttonConfigs = generateButtonConfigs(contentLinks);

  return { buttonConfigs };
}
