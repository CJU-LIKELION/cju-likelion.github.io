type ScrollToIdOptions = {
  behavior?: ScrollBehavior;
  updateHash?: boolean;
};

export function scrollToId(id: string, options: ScrollToIdOptions = {}) {
  const { behavior = "smooth", updateHash = true } = options;
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior, block: "start" });

  if (updateHash) {
    history.replaceState(null, "", `#${id}`);
  }
}
