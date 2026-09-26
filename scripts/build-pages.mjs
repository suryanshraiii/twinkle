import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
execFileSync('npm', ['run', 'build'], { stdio: 'inherit' });
mkdirSync('docs', { recursive: true });
cpSync('dist', 'docs', { recursive: true });
writeFileSync('docs/.nojekyll', '');
