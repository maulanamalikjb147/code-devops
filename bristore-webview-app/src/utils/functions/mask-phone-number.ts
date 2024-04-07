export const maskPhoneNumber = (phoneNumber: string) => {
  const length = phoneNumber.length;
  const visibleCount = Math.round(length / 4);
  const hiddenCount = length - visibleCount * 2;

  return phoneNumber.substring(0, visibleCount) + '*'.repeat(hiddenCount) + phoneNumber.substring(length + visibleCount * -1, length + 1);
};
