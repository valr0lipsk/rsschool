export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    'vite-env.d.ts',
    'index.ts',
    'main.tsx',
    'entry-client.tsx',
    'entry-server.tsx',
  ],
};
