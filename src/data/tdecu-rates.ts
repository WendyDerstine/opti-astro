export interface Rate {
    product: string;
    rate: string;
    rateType: 'APY' | 'APR';
    term?: string;
    notes?: string;
}

export interface RateCategory {
    key: string;
    label: string;
    rates: Rate[];
}

export const rateCategories: RateCategory[] = [
    {
        key: 'savings',
        label: 'Savings & Checking',
        rates: [
            { product: 'Share Savings', rate: '0.10%', rateType: 'APY' },
            { product: 'High-Yield Savings', rate: '1.00%', rateType: 'APY', notes: 'On balances up to $50,000; 0.25% APY above $50k' },
            { product: 'High-Yield Checking', rate: '2.50%', rateType: 'APY', notes: 'On balances up to $20,000; 0.25% APY above $20k' },
            { product: 'Value Plus Checking', rate: '3.00%', rateType: 'APY', notes: 'On balances up to $50,000; $8/month fee' },
            { product: 'Free Checking', rate: '0.02%', rateType: 'APY' },
            { product: 'Money Market', rate: '0.02%–0.70%', rateType: 'APY', notes: '$2,500 minimum balance; rate varies by tier' },
        ],
    },
    {
        key: 'certificates',
        label: 'Certificates & IRAs',
        rates: [
            { product: 'Certificate (3 mo)', rate: '1.75%', rateType: 'APY', term: '3 months' },
            { product: 'Certificate (6 mo)', rate: '2.25%', rateType: 'APY', term: '6 months' },
            { product: 'Certificate (12 mo)', rate: '3.00%', rateType: 'APY', term: '12 months' },
            { product: 'Certificate (24 mo)', rate: '3.25%', rateType: 'APY', term: '24 months' },
            { product: 'Certificate (36 mo)', rate: '3.50%', rateType: 'APY', term: '36 months' },
            { product: 'Certificate (60 mo)', rate: '3.75%', rateType: 'APY', term: '60 months' },
            { product: 'Jumbo Certificate (12 mo)', rate: '3.15%', rateType: 'APY', term: '12 months', notes: '$100,000 minimum' },
            { product: 'Jumbo Certificate (60 mo)', rate: '3.90%', rateType: 'APY', term: '60 months', notes: '$100,000 minimum' },
            { product: 'IRA Certificate (12 mo)', rate: '3.00%', rateType: 'APY', term: '12 months' },
            { product: 'IRA Certificate (60 mo)', rate: '3.75%', rateType: 'APY', term: '60 months' },
        ],
    },
    {
        key: 'auto',
        label: 'Vehicle Loans',
        rates: [
            { product: 'Auto Loan', rate: 'From 5.70%', rateType: 'APR', term: '48–84 months' },
            { product: 'Motorcycle Loan', rate: 'From 6.69%', rateType: 'APR', term: '48–144 months' },
            { product: 'Boat Loan', rate: 'From 6.39%', rateType: 'APR', term: '48–144 months' },
            { product: 'RV Loan', rate: 'From 6.39%', rateType: 'APR', term: '48–144 months' },
        ],
    },
    {
        key: 'personal',
        label: 'Personal Loans',
        rates: [
            { product: 'Secured Personal Loan', rate: 'From 7.14%', rateType: 'APR' },
            { product: 'Unsecured Personal Loan', rate: 'From 9.74%', rateType: 'APR' },
            { product: 'Cash $tash Line of Credit', rate: 'From 9.74%', rateType: 'APR', notes: '$1,000–$50,000 credit limit' },
        ],
    },
    {
        key: 'creditcards',
        label: 'Credit Cards',
        rates: [
            { product: 'Platinum Mastercard®', rate: '12.24%–17.99%', rateType: 'APR', notes: '0% intro APR available' },
            { product: "Buc-ee's Platinum Mastercard®", rate: '12.24%–17.99%', rateType: 'APR', notes: '0% intro APR available' },
            { product: 'Onyx Mastercard®', rate: '13.24%–17.99%', rateType: 'APR' },
            { product: 'Business Platinum Mastercard®', rate: '13.24%–17.99%', rateType: 'APR', notes: '0% intro APR available' },
        ],
    },
    {
        key: 'mortgage',
        label: 'Mortgages',
        rates: [
            { product: 'Conforming 30-Year Fixed', rate: '6.50%', rateType: 'APR', term: '30 years' },
            { product: 'FHA 30-Year Fixed', rate: '6.00%', rateType: 'APR', term: '30 years' },
            { product: 'VA 30-Year Fixed', rate: '6.00%', rateType: 'APR', term: '30 years' },
            { product: 'ARM (5/1)', rate: 'From 6.63%', rateType: 'APR', notes: 'Rate adjusts after initial fixed period' },
        ],
    },
];
