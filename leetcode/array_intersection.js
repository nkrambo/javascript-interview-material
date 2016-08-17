
const intersect = function(nums1, nums2) {

  // type check
  if (Object.prototype.toString.call(nums1) !== '[object Array]' || Object.prototype.toString.call(nums2) !== '[object Array]') {
    throw new Error('Invalid parameters. Pass 2 arrays.');
  }

  return nums1.filter(function(n) {
    return nums2.indexOf(n) !== -1;
  });
}
