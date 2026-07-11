import '../src/styles/ui-default-overrides.css';

function removeHydroTitleSuffix() {
  const cleanedTitle = document.title.replace(/\s*-\s*Hydro$/i, '');
  if (document.title !== cleanedTitle) document.title = cleanedTitle;
}

removeHydroTitleSuffix();

// Keep the tab title clean if a Hydro page script changes it after initial load.
const titleNode = document.querySelector('title');
if (titleNode) {
  new MutationObserver(removeHydroTitleSuffix).observe(titleNode, {
    childList: true,
    characterData: true,
    subtree: true,
  });
}

const brandLogo = new Image();
brandLogo.addEventListener('load', () => {
  document.querySelectorAll<HTMLImageElement>('.nav__logo, .header--mobile__domain img')
    .forEach((image) => { image.src = brandLogo.src; });
});
brandLogo.src = '/brand/gnnu-nav-logo.png';

// CSS and this small global behavior are bundled by Hydro ui-default.
export {};
