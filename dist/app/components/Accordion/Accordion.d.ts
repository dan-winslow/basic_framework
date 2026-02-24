import { ReactNode } from 'react';
interface AccordionItemData {
    /** Unique identifier for the accordion item */
    id: string;
    /** Title displayed on the accordion trigger */
    title: string;
    /** Content displayed when the accordion item is expanded */
    content: ReactNode;
}
interface AccordionProps {
    /** List of accordion items to display */
    items: AccordionItemData[];
    /** Whether to allow multiple items to be open simultaneously */
    allowMultiple?: boolean;
    /** List of item IDs that should be open by default */
    defaultOpen?: string[];
}
/**
 * Collapsible Accordion Component. Can be retstricted to single open item or allow multiple.
 */
declare const Accordion: ({ items, allowMultiple, defaultOpen }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map