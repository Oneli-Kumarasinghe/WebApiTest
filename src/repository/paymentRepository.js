const Payment = require('../model/paymentModel');

class PaymentRepository {
    async save(paymentData) {
        try {
            const payment = await Payment.create(paymentData);
            return payment.payment_id;
        } catch (error) {
            console.error('Error saving payment:', error);
            throw error;
        }
    }
}

module.exports = new PaymentRepository();
