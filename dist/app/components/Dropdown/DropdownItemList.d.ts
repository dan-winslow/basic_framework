interface DropdownItemProps {
    /** Label to display for the dropdown item */
    label: React.ReactNode;
    /** Click handler for the dropdown item */
    onClick: () => void;
}
/** List of dropdown items, optionally divided into top and bottom sections */
declare const DropdownItemList: ({ topItems, bottomItems }: {
    topItems: DropdownItemProps[];
    bottomItems?: DropdownItemProps[];
}) => import("react/jsx-runtime").JSX.Element;
export default DropdownItemList;
export type { DropdownItemProps };
//# sourceMappingURL=DropdownItemList.d.ts.map