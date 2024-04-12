import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import {randomUUID} from 'node:crypto';
import '@testing-library/jest-dom/vitest'


// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});

window.crypto.randomUUID = randomUUID;
