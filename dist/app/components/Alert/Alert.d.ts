interface AlertProps {
    /** The type of alert. Can be 'success', 'danger', 'warning', or 'info' */
    type: 'success' | 'danger' | 'warning' | 'info';
    /** Whether the alert can be dismissed */
    dismissible?: boolean;
    /** The alert message to display */
    message: string;
}
/**
 * Alert Component - can be made dismissible or permanent until page reload
 */
declare const Alert: ({ type, message, dismissible }: AlertProps) => false | import("react/jsx-runtime").JSX.Element;
export default Alert;
//# sourceMappingURL=Alert.d.ts.map