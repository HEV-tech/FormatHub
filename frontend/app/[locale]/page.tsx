import styles from "./page.module.css";

/* =========================================================
   FormatHub — главная страница (/)
   • Top bar: 64px, border-bottom #343434, лого «FormatHub»
   • Hero: заголовок + подзаголовок (значения из Figma)
   • Бесконечная лента форматов: 2 ряда, иногда квадрат на 2 ряда,
     прокрутка влево, hover → градиент + свечение.

   Градиенты (conic/angular) берутся из globals.css — классы .cat-*
   задают --gradient и --glow. Локальные стили — в page.module.css.
   Иконки реализованы как <span> с background + CSS-маской, что
   позволяет красить их в НАСТОЯЩИЙ conic-градиент при hover.
   ========================================================= */

type Category =
  | "documents"
  | "spreadsheets"
  | "presentations"
  | "images"
  | "video"
  | "pdf"
  | "audio"
  | "archives"
  | "vector"
  | "3d"
  | "cad"
  | "html"
  | "css"
  | "js"
  | "react"
  | "markdown"
  | "json"
  | "apk"
  | "disk";

/** Имя класса маски иконки в page.module.css (без префикса icon). */
type IconClass =
  | "Pdf"
  | "Documents"
  | "Images"
  | "Spreadsheets"
  | "Video"
  | "Presentations"
  | "Audio"
  | "Archives"
  | "Ebooks"
  | "Vector"
  | "3d"
  | "Cad"
  | "Html"
  | "Css"
  | "Js"
  | "React"
  | "Markdown"
  | "Json"
  | "Apk"
  | "Disk";

interface FormatCardData {
  /** Имя класса категории в globals.css (без точки), задаёт --gradient и --glow. */
  category: Category;
  /** Имя класса маски иконки в page.module.css. */
  icon: IconClass;
  /** Подпись под иконкой. */
  label: string;
  /** Квадратная карточка — занимает оба ряда ленты. */
  square?: boolean;
}

/* ---------- Список карточек (порядок случайный, как в ленте) ---------- */

const cards: FormatCardData[] = [
  { category: "pdf", icon: "Pdf", label: "PDF" },
  { category: "documents", icon: "Documents", label: "DOCX" },
  { category: "images", icon: "Images", label: "Images", square: true },
  { category: "spreadsheets", icon: "Spreadsheets", label: "XLSX" },
  { category: "video", icon: "Video", label: "Video" },
  { category: "presentations", icon: "Presentations", label: "PPTX" },
  { category: "audio", icon: "Audio", label: "Audio" },
  { category: "archives", icon: "Archives", label: "ZIP" },
  { category: "ebooks", icon: "Ebooks", label: "EPUB" },
  { category: "vector", icon: "Vector", label: "SVG" },
  { category: "3d", icon: "3d", label: "3D", square: true },
  { category: "cad", icon: "Cad", label: "DWG" },
  { category: "html", icon: "Html", label: "HTML" },
  { category: "css", icon: "Css", label: "CSS" },
  { category: "js", icon: "Js", label: "JS" },
  { category: "react", icon: "React", label: "React" },
  { category: "markdown", icon: "Markdown", label: "MD" },
  { category: "json", icon: "Json", label: "JSON", square: true },
  { category: "apk", icon: "Apk", label: "APK" },
  { category: "disk", icon: "Disk", label: "ISO" },
];

/* ---------- Карточка ---------- */

/** Приводит IconClass к имени ключа styles.icon<Name>. */
function iconClassName(name: IconClass): string {
  // CSS Modules хранят классы в объекте; ключи вида "iconPdf".
  const key = `icon${name}`;
  return styles[key] ?? "";
}

function FormatCard({ category, icon, label, square }: FormatCardData) {
  const catClass = `cat-${category}`;
  const classNames = [
    styles.card,
    catClass,
    square ? styles.square : "",
  ]
    .filter(Boolean)
    .join(" ");

  const iconClasses = [styles.icon, iconClassName(icon)]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} role="img" aria-label={label} tabIndex={0}>
      <span className={iconClasses} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </div>
  );
}

/* ---------- Страница ---------- */

export default function HomePage() {
  // Лента дублируется дважды для бесшовной прокрутки.
  const track = [...cards, ...cards];

  return (
    <div className={styles.page}>
      {/* ====== Top bar (64px, border-bottom) ====== */}
      <header className={styles.topBar}>
        <a className={styles.brand} href="#" aria-label="FormatHub — home">
          <span className={styles.logoMark} aria-hidden="true" />
          FormatHub
        </a>
      </header>

      {/* ====== Hero ====== */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Convert in a second.
          <br />
          Trust it for life.
        </h1>
        <p className={styles.heroSubtitle}>
          FormatHub is a local web service for converting, compressing and
          editing files. All processing happens on your computer, files never
          leave your device.
        </p>
      </section>

      {/* ====== Бесконечная лента форматов ====== */}
      <section className={styles.strip} aria-label="Supported formats">
        <div className={styles.track}>
          {track.map((card, index) => (
            <FormatCard key={`${card.label}-${index}`} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}

