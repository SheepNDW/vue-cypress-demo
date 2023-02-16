import MessageForm from './MessageForm.vue';
import { mount } from 'cypress/vue';

describe('MessageForm.vue', () => {
  it('should emit "send" event', () => {
    mount(MessageForm);
    cy.get('[data-test="messageText"]').type('message');
    cy.contains('send')
      .click()
      .then(() => {
        // @ts-ignore
        expect(Cypress.vueWrapper.emitted('send')[0]).to.eql(['message']);
      });
  });
});
