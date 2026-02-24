interface AlertListProps {
    /** Whether the entire alert list can be dismissed */
    dismissible: boolean;
    /** Array of alert objects to display */
    alerts: {
        type: 'success' | 'danger' | 'warning' | 'info';
        message: string;
        dismissible: boolean;
    }[];
}
/**
 * Displays a list of alerts, can be dismissed as a whole
 */
declare const AlertList: ({ dismissible, alerts }: AlertListProps) => false | import("react/jsx-runtime").JSX.Element;
export default AlertList;
//# sourceMappingURL=AlertList.d.ts.map