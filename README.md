# Code4CapeTown Grade 10 Bursary Finder Project

## Bursary Finder

Welcome keen young minds, James here and **this** is Bursary Finder.

### What is Bursary Finder

Bursary Finder is designed to help people learn more about what bursaries are out there for them and how to get there. This is a template for you to build around and play with, ideally allowing you to build something you are proud of more easily and allowing you to focus on the tools you have aquired recently.

### What must you do?

Build out this structure into a working site which offers as much functionality, usability and style you have time for. We will discuss together exactly how you are going to split the work but lets go over some of the core functionality:

- View a list of all bursaries
- Search for a bursary
- View bursary details
- An about us page with details about the team who worked on project (Pictures, summary, school, what they did etc.)

Some other features may include:

- Qualifications (List, view details, search, link to associated bursaries institutions)
- Institutions (List, view details, search, link to qualifications offered and bursaries available)
- Bursaries (List, view details, search, link to related qualifications and institutions)
- If you have added qualifications then links between the bursary and its relevant qualification
- Pagination of result lists (both viewing all of say bursaries or search results). Paginiation is where you break up your list into smaller subsets and can click "previous" or "next" to get a different subset. E.g. If you have 100 bursaries you can show the first 10 only (bursaries 1 to 10), clicking next will show you the next 10 (bursaries 11-20).
- A home page to easily allow a user to decide where the want to go when the access the site. Do they want to go to bursaries, Institutions, Bursaries etc.

If you need data in order to add any functionality I'll find a way to get you some to play with.

### Code Structure

- css

  - bootstrap.min.css
  - **general.css** -- CSS which applies to multiple pages (used for consistency)

- fonts

  - _Ignore this folder, it holds glyphicons which I can show you how to use but arent that important._

- js

  - bootstrap.min.js
  - **bursaries.js** -- Javascript specific to the bursaries.html page
  - faker.js
  - **general.js** -- Shared js across multiple pages (include in all of them) like the render bursaries function.
  - **searchbursaries.js** -- Javascript specific to the searchbursaries.html page

- README.md

- **bursaries.html** -- Render all bursaries

- **searchbursaries.html** -- Display only results of the bursary search

Best of luck, contact me if you need help (although if it's during work hours I may struggle for time)

James Barnes, Code4CapeTown Lead Facilitator (Teacher :)
