type Page = 'components' | 'layouts' | 'docs';
interface NavListProps {
    /** Array of navigation item links */
    navItems: Page[];
    /** The currently active page */
    currentPage: Page;
}
/**
 * NavList component rendering a list of navigation items
 */
declare const NavList: ({ navItems, currentPage }: NavListProps) => import("react/jsx-runtime").JSX.Element;
export default NavList;
//# sourceMappingURL=NavList.d.ts.map