"use strict";
const removeButtons = document.getElementsByClassName("remove");
for (let i = 0; i < removeButtons.length; i++) {
    const item = removeButtons[i];
    item.addEventListener("click", () => {
        var _a;
        (_a = item === null || item === void 0 ? void 0 : item.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    });
}
//# sourceMappingURL=index.js.map