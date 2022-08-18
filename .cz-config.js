module.exports = {
  types: [
    {
      value: ':rocket: feat',
      name: '🚀 feature:\tIntroducing new features.',
    },
    {
      value: ':bug: fix',
      name: '🐛 fix:\tFixing a bug.',
    },
    {
      value: ':memo: docs',
      name: '📝 docs:\tAdd or update documentation.',
    },
    {
      value: ':art: style',
      name: '🎨 style:\tAdd or update styles, ui or ux.',
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor:\tCode change that neither fixes a bug nor adds a feature.',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:\tCode change that improves performance.',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:\tAdding tests cases.',
    },
    {
      value: ':truck: chore',
      name: '🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation.',
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert:\tRevert to a commit.',
    },
    {
      value: ':construction: wip',
      name: '🚧 wip:\tWork in progress.',
    },
    {
      value: ':construction_worker: build',
      name: '👷 build:\tAdd or update regards to build process.',
    },
    {
      value: ':green_heart: ci',
      name: '💚 ci:\tAdd or update regards to build process.',
    },
  ],

  scopes: [
    { name: 'repo' },
    { name: 'content-docs' },
    { name: 'ui' },
    { name: 'home' },
    { name: 'bug' },
    { name: 'algorithm' },
    { name: 'data-structure' },
    { name: 'git' },
    { name: 'pwa' },
    { name: 'blog' },
    { name: 'sidebar' },
    { name: 'assets' },
    { name: 'contributor' },
    { name: 'URL' },
    { name: 'docusaurus' },
    { name: 'package' },
    { name: 'scopes' },
  ],

  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'test' },
      { name: 'hotfix' },
    ],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],
  subjectLimit: 100,
};
