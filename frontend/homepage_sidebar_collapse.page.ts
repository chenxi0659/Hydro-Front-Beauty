const collapsibleTitles = new Set([
  'Discussion Nodes',
  '讨论节点',
  '討論節點',
  'Recent Problems',
  '最新题目',
  '最近题目',
  '最新題目',
  '最近題目',
  'Hitokoto',
  '一言',
  'Recommended',
  '推荐',
  '推薦',
]);

function normaliseTitle(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function getLabels() {
  const chinese = document.documentElement.lang.toLowerCase().startsWith('zh');
  return chinese
    ? { collapse: '折叠', expand: '展开' }
    : { collapse: 'Collapse', expand: 'Expand' };
}

function getStorageKey(title: string) {
  return `hfb:homepage:sidebar:${location.pathname}:${title}`;
}

function setCollapsed(section: HTMLElement, button: HTMLButtonElement, collapsed: boolean, title: string) {
  const labels = getLabels();
  section.classList.toggle('hfb-sidebar-section--collapsed', collapsed);
  button.setAttribute('aria-expanded', String(!collapsed));
  button.setAttribute('aria-label', `${collapsed ? labels.expand : labels.collapse}${title}`);
  button.title = collapsed ? labels.expand : labels.collapse;
  button.textContent = collapsed ? '⌄' : '⌃';
}

function initialiseSidebarCollapse() {
  if (document.documentElement.dataset.page !== 'homepage') return;

  document.querySelectorAll<HTMLElement>('.section.side').forEach((section) => {
    if (section.dataset.hfbCollapsible === 'true') return;

    const header = section.querySelector<HTMLElement>(':scope > .section__header');
    const titleNode = header?.querySelector<HTMLElement>('.section__title');
    const title = normaliseTitle(titleNode?.textContent || '');
    if (!header || !titleNode || !collapsibleTitles.has(title)) return;

    section.dataset.hfbCollapsible = 'true';
    section.classList.add('hfb-sidebar-section');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'hfb-sidebar-section__toggle';
    header.append(button);

    const storageKey = getStorageKey(title);
    let collapsed = false;
    try {
      collapsed = localStorage.getItem(storageKey) === 'collapsed';
    } catch {
      // Private browsing or browser policy can prevent localStorage access.
    }
    setCollapsed(section, button, collapsed, title);

    button.addEventListener('click', () => {
      const nextCollapsed = !section.classList.contains('hfb-sidebar-section--collapsed');
      setCollapsed(section, button, nextCollapsed, title);
      try {
        localStorage.setItem(storageKey, nextCollapsed ? 'collapsed' : 'expanded');
      } catch {
        // The UI remains functional even if the preference cannot be stored.
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiseSidebarCollapse, { once: true });
} else {
  initialiseSidebarCollapse();
}
