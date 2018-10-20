module.exports = {
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": ".*(test|spec)\\.(ts|js)x?$",
    "testPathIgnorePatterns": [
        "/node_modules/",
        "/lib/"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],

    "moduleNameMapper": {
        // added paths for ts paths/webpack alias
        "^@common/(.*)$": "<rootDir>/src/common/$1",
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@containers/(.*)$": "<rootDir>/src/containers/$1",
        "^@actions/(.*)$": "<rootDir>/src/actions/$1",
        "^@reducers/(.*)$": "<rootDir>/src/reducers/$1",
        // transformer so static assets will work https://github.com/facebook/jest/issues/2663#issuecomment-317109798
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/assetsTransformer.ts",
        "\\.(css|scss)$": "<rootDir>/test/assetsTransformer.ts"
    },

    // Setup Enzyme
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupTestFrameworkScriptFile": "<rootDir>/test/enzymeConfig.ts",
}