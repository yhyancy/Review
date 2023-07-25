'use strict';

const reviewCommitlintConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(reviewCommitlintConfig(), 'Hello from reviewCommitlintConfig');
console.info('reviewCommitlintConfig tests passed');
