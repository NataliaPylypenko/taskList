<h1>Task List Project</h1>

* Production - https://nataliapylypenko.github.io/taskList/

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/NataliaPylypenko/taskList.git

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

* `src/js/[name].js` - main application files where you include/import all necessary libraries and modules for initialization
* `src/js/libs` - put libs here
* `src/js/modules` - put custom app scripts here
* `src/html/pages/[name].html` - layout for pages
* `src/scss/[name].scss` - main SCSS styles where you include/import all necessary styles. You need to import them in `[name].js`
* `src/scss/[name]/[component].scss` - put components SCSS styles here. You need to import them in `[name].scss`
* `src/scss/libs` - put libs SCSS styles here
* `src/static/` - folder with extra static assets that will be copied into output folder
