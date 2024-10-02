export interface PaymentProcessor {
    processPayment(amount: number): boolean;
    refundPayment(amount: number): boolean;
    validatePaymentDetails(details: any): boolean;
    generateInvoice(invoiceId: string): void;
}