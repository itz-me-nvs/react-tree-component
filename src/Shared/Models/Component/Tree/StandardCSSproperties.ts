import * as CSS from '../../packages/cssType';

/**
 * Map of all available CSS properties (including aliases) and their raw value.
 * Only used internally to map CSS properties to input types (responsive value,
 * theme function or nested) in `SystemCssProperties`.
 */
export type StandardCSSProperties = CSS.PropertiesFallback<number | string>;
