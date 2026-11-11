# COS326 Study Studio

Static HTML, CSS and JavaScript study site built from the supplied COS326 materials. Open `website/index.html` directly or serve `website/` with a static HTTP server. No build tools are needed. The GitHub Actions workflow deploys `website/` to GitHub Pages; configure Pages to use GitHub Actions in repository settings. All links are relative.

## Site map

The navigation has four sections, one per job:

| Section | Folder | What is in it |
|---|---|---|
| Notes | `website/notes/` | Topic map with progress tracking, lecture notes (`lecture-01` to `lecture-17`, covering lectures 1-24), worked guides for PySpark and Lectures 20-24 |
| Papers | `website/papers/` | Paper library; marked 2026 tests with your answer beside the memo (`st1-2026`, `st2-2026`); semester-test guide; exam question index and answer memo; all PDFs in `papers/pdf/` |
| Practice | `website/practice/` | Seven 20-mark essays with model answers, 45-question bank, quick quiz |
| Reference | `website/reference/` | Two cheat sheets, coding patterns, MongoDB operators and indexing |

Each topic on `notes/index.html` links to its patterns, past-paper questions, memo and practice. Each lecture page has a "Use this topic" row doing the same.

## Notes for editing

- The header, footer and section sub-navigation are repeated in every page; edit them in each file if you change the navigation.
- Progress and theme are stored in browser localStorage; clearing browser data removes them.
- The quick quiz is in `website/js/questions.js`; the corresponding JSON is `website/data/questions.json`. Update both if changing questions.
- `website/data/sources.json` inventories discovered sources. `website/data/coverage.json` maps source lecture groups to pages (the `file` values are lecture page names inside `notes/`).
- The original exams and supplied index should be used to check exact question wording and diagrams.
- To add a marked paper, copy `papers/st1-2026.html`, add the PDF to `papers/pdf/`, and add it to `papers/index.html`.
