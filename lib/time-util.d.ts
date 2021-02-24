export declare type DurationUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';
export declare type AddByOptions = {
    unit: DurationUnit;
    value: number;
};
export declare const timeUtil: {
    dateToUnix: (date?: Date) => number;
    dateToUnixSec: (date?: Date) => number;
    addToDate: (addBy: AddByOptions, date?: Date) => Date;
    unixToDate: (unix: number) => Date;
};
//# sourceMappingURL=time-util.d.ts.map