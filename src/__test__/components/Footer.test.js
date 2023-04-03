import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from '../../components/Footer';

// mount() hace render del DOM y simila eventos de los usuarios
// shallow() no hace render del DOM pero es mucho mas rapido
describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
