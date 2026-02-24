type Page = 'components' | 'layouts' | 'docs';
interface NavbarProps {
    /** The currently active page */
    currentPage: Page;
    /** Optional boolean to add a bottom border */
    borderBottom?: boolean;
}
/**
 * Navbar component with optional bottom border
 */
declare const Navbar: ({ currentPage, borderBottom }: NavbarProps) => import("react/jsx-runtime").JSX.Element;
export default Navbar;
//# sourceMappingURL=Navbar.d.ts.map