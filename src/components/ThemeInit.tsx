// Runs before paint (blocking inline script) to apply the right theme class
// before React hydrates — avoids a flash of the wrong theme.
//
// Light is the default experience regardless of OS preference: the target
// buyer (an established business owner, often 50+) reads a warm, editorial
// light interface as more trustworthy than a dark one. Dark mode is an
// opt-in alternative via the toggle, not something sprung on visitors whose
// OS happens to be set to dark. Only a stored manual choice switches it.
// A ?theme=dark / ?theme=light query param takes precedence and is persisted
// (so a shared "?theme=dark" link opens in that theme). Otherwise a stored
// manual choice applies; failing that, light.
const THEME_INIT_SCRIPT = `
(function () {
  // Marks that JS is running, before first paint. Scroll-reveal hidden states
  // are gated on html.js, so if this never runs everything stays visible.
  document.documentElement.classList.add('js');
  try {
    var param = new URLSearchParams(location.search).get('theme');
    if (param === 'dark' || param === 'light') {
      localStorage.setItem('coltura-theme', param);
    }
    var stored = localStorage.getItem('coltura-theme');
    if (stored === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function ThemeInit() {
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}
