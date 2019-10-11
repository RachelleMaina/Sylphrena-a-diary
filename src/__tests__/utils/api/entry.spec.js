import { api } from '../../../utils/api/entry';

describe('Should test axios api requests', () => {
  it('should test get object', () => {
    api.list().then(response => {
      expect(response).toEqual(Promise({}));
    });
  });
});
