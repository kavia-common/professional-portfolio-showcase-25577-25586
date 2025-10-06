# Assets to React Pages Mapping

This folder contains React page components created by porting the provided static asset screens.

- assets/take-this-jobs-907-315.html -> src/pages/TakeThisJobs907315.jsx
  - Styles: src/pages/css/take-this-jobs-907-315.css (imports /assets/take-this-jobs-907-315.css)
  - Route: /take-this-jobs

- assets/jobs-detail-open-907-267.html -> src/pages/JobsDetailOpen907267.jsx
  - Styles: src/pages/css/jobs-detail-open-907-267.css (imports /assets/jobs-detail-open-907-267.css)
  - Route: /jobs-detail-open

- assets/profile-907-374.html -> src/pages/Profile907374.jsx
  - Styles: src/pages/css/profile-907-374.css (imports /assets/profile-907-374.css)
  - Route: /profile

Notes:
- Class names are preserved for pixel accuracy. Each screen is wrapped by its root container class to avoid style leakage.
- Minimal JavaScript behaviors from assets/*.js are implemented via useEffect inside each component.
- Images are referenced from /assets/figmaimages/... which are served from the public folder at runtime.
- Navigation is provided via React Router in src/routes.jsx and linked from a simple top nav.
