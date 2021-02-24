"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.async = void 0;
exports.async = {
    /**
     * Wrap async express http request end return promise or call next on catch
     * @param _target
     * @param _key
     * @param descriptor
     */
    httpErrorHandler: (_target, _key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            // eslint-disable-next-line prefer-rest-params
            const next = arguments[2];
            // eslint-disable-next-line prefer-rest-params
            return Promise.resolve(originalMethod.apply(this, arguments)).catch(next);
        };
        return descriptor;
    },
};
//# sourceMappingURL=async.js.map