import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';
import expect from 'expect';

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

describe('Footer snapshot', () => {
  //Para poder hacer snapshots debemos convertir nuestro componente
  //a un objecto json
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
