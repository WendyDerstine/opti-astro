export interface Alert {
    id: string;
    type: 'warning' | 'error' | 'info' | 'success';
    title: string;
    message: string;
}

export const alerts: Alert[] = [
    {
        id: 'digital-banking-outage',
        type: 'error',
        title: 'Digital Banking Interruption',
        message: 'We are currently experiencing issues with online and mobile banking. Our team is working to resolve this as quickly as possible. Please visit a branch or call us at 1-800-TDECU-4U for assistance.',
    },
    {
        id: 'scheduled-maintenance',
        type: 'warning',
        title: 'Scheduled Maintenance',
        message: 'Online and mobile banking will be unavailable Sunday, July 13 from 2:00 AM – 6:00 AM CT for scheduled system maintenance. We apologize for the inconvenience.',
    },
    {
        id: 'fraud-alert',
        type: 'warning',
        title: 'Fraud Alert',
        message: 'TDECU will never call, text, or email asking for your full account number, password, or one-time passcode. If you receive a suspicious message, do not respond — contact us directly at 1-800-TDECU-4U.',
    },
    {
        id: 'new-feature',
        type: 'info',
        title: 'New: Instant Card Controls',
        message: 'You can now instantly lock and unlock your debit or credit card directly in the TDECU mobile app. Update your app to get started.',
    },
    {
        id: 'branch-closure',
        type: 'info',
        title: 'Holiday Branch Hours',
        message: 'All TDECU branches will be closed on Monday, July 4 in observance of Independence Day. ATMs and digital banking will remain available.',
    },
];
