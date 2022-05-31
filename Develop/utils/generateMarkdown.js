// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

### Description

### Installation

### Usage

### Creator

### Collaborators

### License

### Badge
https://img.shields.io/badge/${data.BadgeLabel}-${data.BadgeMessage}-${data.BadgeColor}`;
}

module.exports = generateMarkdown;
