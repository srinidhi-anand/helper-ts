export default {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      { changelogFile: "CHANGELOG.md" }
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "package.json",
          "package-lock.json",
          "CHANGELOG.md",
          "README.md",
          "docs/**"
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
};
