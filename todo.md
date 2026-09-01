# SPECTRA Build Todo

- [x] Review the attached SPECTRA specification and convert it into page and interaction requirements.
- [x] Write the selected visual direction to `ideas.md` and keep the navy/white/orange government aerospace aesthetic consistent.
- [x] Add the isolated Supabase client configuration without touching the existing Supabase project.
- [x] Create or provision a separate Supabase project for SPECTRA and configure the app to use it.
- [x] Build the responsive SPECTRA shell: header, collapsible sidebar, mobile navigation, and theme toggle.
- [x] Build the dashboard, signal analysis workflow, reports, model learning, settings, and help views in the frontend prototype.
- [x] Add functional demo interactions for navigation, workflow progression, analysis creation, theme switching, and responsive behavior.
- [x] Validate the app with type checks/build and representative browser screenshots.
- [x] Create a new private GitHub repository named `spectra` and push the completed project without modifying the existing repository.
- [ ] Save a final checkpoint and deliver the project version and repository details.

## Constraints

- Preserve the existing repository and current Supabase project.
- Use only the specified navy, white/off-white, and restrained orange visual family, with restrained status colors.
- Do not fabricate reviews, ratings, or testimonials.
- Keep the interface precise, breathable, and government/aerospace-laboratory oriented rather than flashy or card-heavy.

## Functional Upgrade

- [ ] Implement live file selection, drag-and-drop, supported-format handling, metadata inspection, and upload status.
- [ ] Add real browser-side signal parsing where supported and clearly label backend-required formats.
- [ ] Replace the processing-volume line chart with a deterministic spectrogram/time-frequency heatmap driven by the active signal.
- [ ] Make all eight workflow steps advance through meaningful states with validation, preprocessing, detection, feature extraction, AI/DSP comparison, confidence decisions, and re-analysis.
- [ ] Persist analyses, workflow runs, and analyst feedback to the separate Supabase project.
- [ ] Add report generation, JSON/CSV export, and analyst feedback actions.
- [ ] Make dashboard KPIs, recent analyses, signals, reports, and model-learning views use live application state.
- [ ] Validate keyboard/mobile navigation, theme switching, error states, and production build.
