import { decodeHtmlEntities } from './utilities';

describe('decodeHtmlEntities function', () => {
    it('should return correct value', () => {
        const entity = decodeHtmlEntities('test');
        expect(entity).toEqual('test');
    });

    it('should return empty string if took bad value', () => {
        const badValue = '<Bad value/>';
        const entity = decodeHtmlEntities(badValue);
        expect(entity).toEqual('');
    });
});
