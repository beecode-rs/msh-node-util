"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeUtil = void 0;
const date_fns_1 = require("date-fns");
exports.timeUtil = {
    dateToUnix: (date = new Date()) => +date_fns_1.format(date, 'T'),
    dateToUnixSec: (date = new Date()) => +date_fns_1.format(date, 't'),
    addToDate: (addBy, date = new Date()) => date_fns_1.add(date, { [addBy.unit]: addBy.value }),
    unixToDate: (unix) => date_fns_1.parse(unix.toString(), 'T', new Date()),
};
//# sourceMappingURL=time-util.js.map