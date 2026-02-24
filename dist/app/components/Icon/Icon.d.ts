import { CSSProperties } from 'react';
declare const icons: Record<string, string>;
export type IconName = keyof typeof icons;
export interface IconProps {
    /** Name of the icon to display */
    name: IconName;
    /** Size of the icon (width and height). Default is 24 */
    size?: number | string;
    /** Additional CSS class names to apply to the icon */
    className?: string;
    /** Additional inline styles to apply to the icon */
    style?: CSSProperties;
    /** Color of the icon. Defaults to current text color */
    color?: string;
}
/** Icon component that renders SVG icons by name */
declare const Icon: ({ name, size, className, style, color }: IconProps) => import("react/jsx-runtime").JSX.Element | null;
export default Icon;
//# sourceMappingURL=Icon.d.ts.map