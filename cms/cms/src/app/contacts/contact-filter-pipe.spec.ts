import { ContactsFilterPipe } from './contact-filter-pipe';

describe('ContactFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ContactsFilterPipe ();
    expect(pipe).toBeTruthy();
  });
});
