import { ReactNode } from 'react';
import { DropdownItemProps } from './DropdownItemList';
interface DropdownProps {
    /** Optional. Trigger element to replace the default hamburger icon */
    trigger?: ReactNode;
    /** Items to show in the top section of the dropdown */
    topItems: DropdownItemProps[];
    /** Optional. Items to show in the bottom section of the dropdown */
    bottomItems?: DropdownItemProps[];
    /** Optional. Whether to use the animated hamburger icon as the trigger */
    useHamburger?: boolean;
}
/** Dropdown component with optional animated hamburger icon trigger */
declare const Dropdown: ({ trigger, topItems, bottomItems, useHamburger }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map