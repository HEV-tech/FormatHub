# FormatHub

> Локальный веб‑сервис и open‑source‑платформа для конвертации, сжатия и базового
> редактирования файлов различных типов. Все операции выполняются на вашей машине —
> файлы никогда не покидают устройство.

**Разработчик:** HEV
**Статус:** в разработке (см. `TS.md` — техническое задание)

---

## ✨ Возможности

- **Конвертация** изображений, видео, аудио, документов, таблиц, презентаций,
  архивов, электронных книг, векторной графики, 3D‑моделей, CAD, кода и данных,
  баз данных, образов дисков и пакетов приложений.
- **Сжатие** с пресетами («Макс. качество», «Баланс», «Макс. сжатие»).
- **Инструменты (Tools)** — обрезка/поворот/фильтры изображений, trim/watermark
  видео, PDF‑утилиты (merge, split, protect, unlock, rotate, crop, extract‑images,
  flatten), OCR, пакетная обработка (batch).
- **Локальная обработка** — приватность и работа офлайн; используются системные
  инструменты (FFmpeg, LibreOffice, Ghostscript, pandoc/calibre, Tesseract,
  Blender, CAD‑конвертеры, 7‑Zip).
- **Живой прогресс** через WebSocket, отмена задач.
- **Liquid Glass UI** — тёмная/светлая темы, локализация RU/EN, режим низкой
  производительности (`lowPerformance`).

---

## 🚀 Быстрый старт

> Требуется **Node.js 22 LTS**. Опционально (расширяет список поддерживаемых
> форматов): FFmpeg, LibreOffice, Ghostscript, pandoc, calibre, Tesseract,
> Blender, ODA File Converter / LibreCAD / FreeCAD, 7‑Zip.

```bash
# 1. Установка зависимостей (корневой package.json запускает workspaces)
npm install

# 2. Запуск фронтенда и бэкенда одной командой
npm run dev
```

После запуска:
- Фронтенд: <http://localhost:3000>
- Бэкенд (API + WebSocket): <http://localhost:3001>

---

## 📦 Структура монорепозитория

```
formathub/
├── frontend/   # Next.js 18 (App Router) + React + TypeScript
├── backend/    # Node.js 22 + Express 5 + WebSocket
└── package.json
```

Подробное дерево директорий — в разделе «9. СТРУКТУРА ПРОЕКТА» файла `TS.md`.

---

## 🛠 Технологический стек

| Слой        | Технологии                                                                       |
| ----------- | -------------------------------------------------------------------------------- |
| Фронтенд    | React 20, Next.js 18, TypeScript 6, TailwindCSS 4, Zustand, Framer Motion, next-intl, Lucide React |
| Бэкенд      | Node.js 22 LTS, Express 5, WebSocket (ws), Multer, Sharp, FFmpeg, Puppeteer, mammoth, sheetjs, pdf-lib |
| Инфраструктура | монорепо (npm workspaces), concurrently                                       |

---

## 📚 Документация

Полное техническое задание (концепция, требования, API, форматы, Roadmap) —
в файле [`TS.md`](./TS.md).

---

## 📄 Лицензия

MIT
