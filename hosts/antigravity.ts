import type { HostConfig } from '../scripts/host-config';

const antigravity: HostConfig = {
  name: 'antigravity',
  displayName: 'Antigravity',
  cliCommand: 'antigravity',
  cliAliases: ['gemini', 'gemini-antigravity'],

  globalRoot: '.gemini/antigravity/skills',
  localSkillRoot: '.gemini/antigravity/skills',
  hostSubdir: '.antigravity',
  usesEnvVars: true,

  frontmatter: {
    mode: 'allowlist',
    keepFields: ['name', 'description'],
    descriptionLimit: null,
  },

  generation: {
    generateMetadata: false,
    skipSkills: ['codex'],
  },

  pathRewrites: [
    { from: '~/.claude/skills/gstack', to: '~/.gemini/antigravity/skills' },
    { from: '.claude/skills/gstack', to: '.gemini/antigravity/skills' },
    { from: '.claude/skills', to: '.gemini/antigravity/skills' },
  ],

  suppressedResolvers: [
    'DESIGN_OUTSIDE_VOICES',
    'ADVERSARIAL_STEP',
    'CODEX_SECOND_OPINION',
    'CODEX_PLAN_REVIEW',
    'REVIEW_ARMY',
    'GBRAIN_CONTEXT_LOAD',
    'GBRAIN_SAVE_RESULTS',
  ],

  runtimeRoot: {
    globalSymlinks: ['bin', 'browse/dist', 'browse/bin', 'gstack-upgrade', 'ETHOS.md'],
    globalFiles: {
      'review': ['checklist.md', 'TODOS-format.md'],
    },
  },

  install: {
    prefixable: false,
    linkingStrategy: 'symlink-generated',
  },

  coAuthorTrailer: 'Co-Authored-By: Antigravity <noreply@google.com>',
  learningsMode: 'basic',
};

export default antigravity;
