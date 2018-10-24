/**
 * Get value for object from path.
 * @param {string} path - Property name of object. For nested objects use property.nested
 */
export function getObjectValue(theObject: any, path: string, separator = '.') {
    try {
        return path.
            replace('[', separator).replace(']', '').
            split(separator).
            reduce(
                (obj, property) => {
                    return obj[property];
                }, theObject
            );

    } catch (err) {
        return undefined;
    }
}

/**
 * usage: interface Test {
 *  a: string;
 *  b: number;
 *  c: boolean;
 * }
 * Omit a single property: type OmitA = Omit<Test, "a">; // Equivalent to: {b: number, c: boolean}
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
