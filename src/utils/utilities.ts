export function decodeHtmlEntities(input: string): string {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(`<!DOCTYPE html><body>${input}`, 'text/html').body.textContent;
    return decodedString || '';
}
