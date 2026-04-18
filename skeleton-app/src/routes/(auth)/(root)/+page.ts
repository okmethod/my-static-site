import type { TransitionContent, TransitionButtonConfig } from "$lib/application/utils/transitions";
import { generateButtonConfigs } from "$lib/application/utils/transitions";
import { GITHUB_REPO_URL } from "$lib/presentation/constants/common";

const contentLinks: TransitionContent[] = [
  {
    label: "Example route",
    symbolSrc: { type: "icon", key: "mdi:page-next" },
    action: "navigate",
    target: "/example",
  },
  {
    label: "Github Repository",
    symbolSrc: { type: "icon", key: "mdi:source-repository" },
    action: "redirectNewTab",
    target: GITHUB_REPO_URL,
  },
];

export async function load(): Promise<{ buttonConfigs: TransitionButtonConfig[] }> {
  const buttonConfigs = generateButtonConfigs(contentLinks);

  return { buttonConfigs };
}
