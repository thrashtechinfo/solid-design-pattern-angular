export interface PaymentProcessor {
    processPayment(amount: number): boolean;
}

export interface Refundable {
    refundPayment(amount: number): boolean;
}

export interface InvoiceGenerator {
    generateInvoice(invoiceId: string): void;
}