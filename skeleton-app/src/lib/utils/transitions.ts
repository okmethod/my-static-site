import { navigateTo } from "$lib/utils/navigation.client";

type TransitionAction = "navigate" | "redirect" | "redirectNewTab";

export interface TransitionContent {
  label: string;
  imageIndex?: string;
  action: TransitionAction;
  target: string;
}

export interface TransitionButtonConfig {
  label: string;
  image: {
    src: string;
    alt: string;
  } | null;
  onClick: () => void;
}

function getOnClick(action: TransitionAction, target: string): () => void {
  const actions: { [key in TransitionAction]: () => void } = {
    navigate: () => navigateTo(target),
    redirect: () => {
      window.location.href = target;
    },
    redirectNewTab: () => window.open(target, "_blank"),
  };
  return actions[action] || (() => {});
}

export function generateButtonConfigs(
  contents: TransitionContent[],
  imageUrlDict?: Record<string, string>,
): TransitionButtonConfig[] {
  return contents.map((content) => ({
    label: content.label,
    image:
      imageUrlDict !== undefined && content.imageIndex !== undefined
        ? {
            src: imageUrlDict[content.imageIndex],
            alt: content.imageIndex,
          }
        : null,
    onClick: getOnClick(content.action, content.target),
  }));
}
