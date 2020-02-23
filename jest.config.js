module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '.*(test|spec)\\.(ts|js)x?$',
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    moduleNameMapper: {
        // transformer so static assets will work https://github.com/facebook/jest/issues/2663#issuecomment-317109798
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/assetsTransformer.ts',
        '\\.(css|scss)$': '<rootDir>/test/assetsTransformer.ts'
    },

    setupFilesAfterEnv: ['./test/setup.ts']
};
