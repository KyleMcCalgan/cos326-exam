# COS326 Study Studio

Static HTML, CSS and JavaScript study site built from the supplied COS326 materials. Open `website/index.html` directly or serve `website/` with a static HTTP server. The original lecture notes and exams remain outside this project.

The GitHub Actions workflow deploys `website/` to GitHub Pages; configure Pages to use GitHub Actions in repository settings. All links are relative.

Progress and theme are stored in browser localStorage; clearing browser data removes them. `website/data/sources.json` inventories discovered sources, including entries in the original archive; archive entries have not all been reviewed independently. `website/data/coverage.json` maps source lecture groups to pages. The original exams and supplied index should be used to check exact question wording and diagrams.

The quick quiz is in `website/js/questions.js`; the corresponding JSON is `website/data/questions.json`. Update both if changing questions. Lecture pages are static HTML; edit their files directly. No build tools are needed to run the site.
