import { ReactNode } from 'react';
interface Tab {
    /** Unique identifier for the tab */
    id: string;
    /** Label displayed on the tab */
    label: string;
    /** Content displayed when the tab is active */
    content: ReactNode;
}
interface TabsProps {
    /** Array of tab objects to be rendered */
    tabs: Tab[];
}
/** Tabs Navigation Component */
declare const Tabs: ({ tabs }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map