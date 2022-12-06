/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'test-utils'],
  transform: {
    '\\.js$': 'babel-jest',
    '\\.tsx?$': 'ts-jest',
    '\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/(?!(nanoid)/)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
