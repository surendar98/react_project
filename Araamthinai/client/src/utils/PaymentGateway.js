import axios from 'axios';

const savePayment=(paymentId,amount)=>{
    axios.post('http://localhost:5000/api/payment', {paymentId,amount});
     
}
export default async function displayRazorpay(amount) {
 const data = await axios.post('http://localhost:5000/api/razorpay', { amount });

  const options = {
    key: 'rzp_test_gs1ywZ6rimzbAP',
    currency: data.data.currency,
    amount: data.data.amount,
    name: "Test",
    description: "Wallet Transaction",
    image: "http://localhost:5000/logo.png",
    order_id: data.data.id,
    handler: function (response) {
      console.log("PAYMENT ID ::" + response.razorpay_amount);
      savePayment(response.razorpay_payment_id,data.data.amount);
       // console.log("ORDER ID :: " + response.razorpay_order_id);
      alert("Payment Success")
    }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
