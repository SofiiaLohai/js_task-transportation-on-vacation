/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discountFor7Days = 50;
  const discountFor3Days = 20;
  const totalPrice = days * costPerDay;

  if (days >= 7) {
    return totalPrice - discountFor7Days;
  }

  if (days >= 3) {
    return totalPrice - discountFor3Days;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
