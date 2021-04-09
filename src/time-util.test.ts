import { expect } from 'chai'
import { DurationUnit, timeUtil } from './time-util'

describe('timeUtil', () => {
  describe('dateToUnixSec', () => {
    ;([
      [new Date('2020-01-01 00:00:00'), 1577836800],
      [new Date('2020-01-01 10:00:00'), 1577872800],
      [new Date('2020-01-01 01:10:00'), 1577841000],
      [new Date('2020-01-01 01:01:10'), 1577840470],
      [new Date('2020-01-01 01:01:01'), 1577840461],
      [new Date('2020-01-01 01:01:01.123'), 1577840461],
    ] as [Date, number][]).forEach(([date, unix]) => {
      it(`should convert ${date} to ${unix}`, () => {
        expect(timeUtil.dateToUnixSec(date)).to.eq(unix)
      })
    })
  })
  describe('dateToUnix', () => {
    ;([
      [new Date('2020-01-01 00:00:00'), 1577836800000],
      [new Date('2020-01-01 10:00:00'), 1577872800000],
      [new Date('2020-01-01 01:10:00'), 1577841000000],
      [new Date('2020-01-01 01:01:10'), 1577840470000],
      [new Date('2020-01-01 01:01:01'), 1577840461000],
      [new Date('2020-01-01 01:01:01.123'), 1577840461123],
    ] as [Date, number][]).forEach(([date, unix]) => {
      it(`should convert ${date} to ${unix}`, () => {
        expect(timeUtil.dateToUnix(date)).to.eq(unix)
      })
    })
  })
  describe('addToDate', () => {
    ;([
      [new Date('2020-01-01 00:00:00'), new Date('2020-01-01 00:00:01'), 'seconds', 1],
      [new Date('2020-01-01 00:00:00'), new Date('2020-01-01 00:02:00'), 'minutes', 2],
      [new Date('2020-01-01 00:00:00'), new Date('2020-01-01 03:00:00'), 'hours', 3],
      [new Date('2020-01-01 00:00:00'), new Date('2020-01-05 00:00:00'), 'days', 4],
      [new Date('2020-01-01 00:00:00'), new Date('2020-02-05 00:00:00'), 'weeks', 5],
      [new Date('2020-01-01 00:00:00'), new Date('2020-07-01 00:00:00'), 'months', 6],
      [new Date('2020-01-01 00:00:00'), new Date('2027-01-01 00:00:00'), 'years', 7],
      [new Date('2020-01-01 00:00:00'), new Date('2019-12-31 23:59:59'), 'seconds', -1],
      [new Date('2020-01-01 00:00:00'), new Date('2019-12-31 23:58:00'), 'minutes', -2],
      [new Date('2020-01-01 00:00:00'), new Date('2019-12-31 21:00:00'), 'hours', -3],
      [new Date('2020-01-01 00:00:00'), new Date('2019-12-28 00:00:00'), 'days', -4],
      [new Date('2020-01-01 00:00:00'), new Date('2019-11-27 00:00:00'), 'weeks', -5],
      [new Date('2020-01-01 00:00:00'), new Date('2019-07-01 00:00:00'), 'months', -6],
      [new Date('2020-01-01 00:00:00'), new Date('2013-01-01 00:00:00'), 'years', -7],
    ] as [Date, Date, DurationUnit, number][]).forEach(([date, expectedDate, unit, value]) => {
      it(`should add ${value} ${unit} to ${date}`, () => {
        expect(timeUtil.addToDate({ unit, value }, date)).to.deep.eq(expectedDate)
      })
    })
  })
})
