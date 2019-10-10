import dateConverter from '../../utils/dateConverter';

describe('dateConverter', () => {
  it('converts date to the desired format', () => {
    expect(dateConverter('2019-06-29T13:02:14.342Z')).toEqual({
      date: 29,
      dateYear: 'June, 2019',
      day: 'Sat',
      month: 'June',
      time: '13:02',
      year: 2019
    });
  });
});
