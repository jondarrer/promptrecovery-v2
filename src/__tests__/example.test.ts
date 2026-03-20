/**
 * Example test suite using Node's built-in test runner (node:test).
 *
 * No external test framework (Jest, Vitest, etc.) is required.
 * Run all tests with: npm test
 * Run this file directly: node --import tsx --test src/__tests__/example.test.ts
 *
 * Key APIs:
 *   describe()  — groups related tests (nestable)
 *   it()        — defines a single test case (alias: test())
 *   before()    — runs once before all tests in the block
 *   beforeEach()— runs before each test
 *   after()     — runs once after all tests
 *   afterEach() — runs after each test
 *
 * Assertions come from node:assert/strict, which defaults every comparison
 * to strict equality (=== rather than ==). Docs:
 *   https://nodejs.org/api/assert.html
 */
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

// ---------------------------------------------------------------------------
// Replace the examples below with real unit tests as you build the site.
// Good candidates: utility functions, data-transformation helpers, URL
// builders, and any pure business logic that doesn't need a browser.
// ---------------------------------------------------------------------------

describe('Arithmetic sanity checks', () => {
  it('adds two numbers correctly', () => {
    assert.equal(1 + 1, 2);
  });

  it('multiplies two numbers correctly', () => {
    assert.equal(3 * 4, 12);
  });
});

describe('String utilities', () => {
  it('trims whitespace from a string', () => {
    const raw = '  hello world  ';
    assert.equal(raw.trim(), 'hello world');
  });

  it('checks substring presence', () => {
    const siteTitle = 'Prompt Recovery';
    assert.ok(siteTitle.includes('Recovery'), 'expected "Recovery" to appear in the site title');
  });
});
