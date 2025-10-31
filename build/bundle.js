(() => {
  // Định nghĩa các module
  var modules = {
    456: (module) => {
      module.exports = (a, b) => a + b; // Hàm cộng
    }
  };

  // Bộ nhớ cache module
  var cache = {};

  // Hàm require (giống như CommonJS)
  function __webpack_require__(moduleId) {
    // Nếu module đã có trong cache -> trả về luôn
    var cachedModule = cache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // Nếu chưa có -> tạo module mới
    var module = (cache[moduleId] = { exports: {} });

    // Chạy code của module
    modules[moduleId](module, module.exports, __webpack_require__);

    // Trả về exports
    return module.exports;
  }

  // Gọi module 456 (hàm cộng)
  const sum = __webpack_require__(456)(3, 5);

  console.log(sum);
  document.write(sum);
})();
