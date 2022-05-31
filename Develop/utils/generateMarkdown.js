// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

### Description
${data.Description}

### Installation
${data.Installation}

### Usage
${data.Use}

### Creator
${data.GithubUsername}

### Collaborators
${data.Collaborators}

### License
${data.License}.

### Badge
https://img.shields.io/badge/${data.BadgeLabel}-${data.BadgeMessage}-${data.BadgeColor}`;
}

module.exports = generateMarkdown;
