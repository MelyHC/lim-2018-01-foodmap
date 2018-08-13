describe('data-rest', () => {

  const rest = fixtures;

  const dataPrueba = [{
    name: 'LA Cabrera',
    coordinates: {
      lat: -12.1369698, lng: -77.0224273
    },
    score: 4.5,
    addres: 'Av. Almte. Miguel Grau 1502, Barranco, Lima 15063',
    type: 'parrillas, criolla',
    photo: 'https://lh5.googleusercontent.com/p/AF1QipOIIdB5g2ueORm76G3qR5lA-2QShjzBCbL4TU6s=w408-h306-k-no'
  }];

  it('debería exponer función districtRest en objeto global', () => {
    assert.isFunction(districtRest);
  });

  it('debería exponer función typeRest en objeto global', () => {
    assert.isFunction(typeRest);
  });

  it('debería exponer función searchNameRest en objeto global', () => {
    assert.isFunction(searchNameRest);
  });

  it('debería exponer función selecRest en objeto global', () => {
    assert.isFunction(selecRest);
  });

  describe('districtRest(rest, district)', () => {

    it('debería retornar arreglo de restaurantes según el distrito de barranco', () => {

      // const processed = districtRest(rest, 'barranco');

      // processed.forEach(resto => {
      //   assert.ok(resto.addres.indexOf('barranco'));
      // })
    });

    it('debería retornar arreglo de restaurantes según el distrito de miraflores', () => {

      // const processed = districtRest(rest, 'miraflores');

      // processed.forEach(resto => {
      //   assert.ok(resto.addres.indexOf('miraflores'));
      // })
    });

    it('debería retornar arreglo de restaurantes según el distrito de chorrillos', () => {

      // const processed = districtRest(rest, 'chorrillos');

      // processed.forEach(resto => {
      //   assert.ok(resto.addres.indexOf('chorrillos'));
      // })
    });

    it('debería retornar arreglo de restaurantes según el distrito de surco', () => {

      // const processed = districtRest(rest, 'surco');

      // processed.forEach(resto => {
      //   assert.ok(resto.addres.indexOf('surco'));
      // })
    });

  });

  describe('typeRest(rest, typeFood)', () => {

    it('debería retornar arreglo de restaurantes con comida Oriental', () => {

      // const processed = typeRest(rest, 'oriental')

      // processed.forEach(resto => {
      //   assert.ok(resto.type.indexOf('oriental'));
      // })
    });

    it('debería retornar arreglo de restaurantes con comida Marina', () => {

      // const processed = typeRest(rest, 'mariscos')

      // processed.forEach(resto => {
      //   assert.ok(resto.type.indexOf('mariscos'));
      // })
    });

    it('debería retornar arreglo de restaurantes con comida Parrillas', () => {

      // const processed = typeRest(rest, 'parrillas')

      // assert.deepEqual(
      //   processed.forEach(resto => {
      //     resto.type.indexOf('parrillas')
      //   })
      // )
    });

    it('debería retornar arreglo de restaurantes con comida Criolla', () => {

      // const processed = typeRest(rest, 'criolla')

      // processed.forEach(resto => {
      //   assert.ok(resto.type.indexOf('criolla'));
      // })
    });

    it('debería retornar arreglo de restaurantes con comida Vegetariana', () => {

      // const processed = typeRest(rest, 'vegetariana')

      // processed.forEach(resto => {
      //   assert.ok(resto.type.indexOf('vegetariana'));
      // })
    });

    it('debería retornar arreglo de restaurantes con comida Postres, snacks, etc', () => {

      // const processed = typeRest(rest, 'café')


    });

  });

  describe('searchNameRest(rest, search)', () => {

    it('debería retornar nuevo arreglo solo con restaurantes con nombres que contengan el string', () => {

      const processed = searchNameRest(rest, 'la Cabrera');

      assert.deepEqual(dataPrueba, processed);
    });

  });

  describe('selecRest({ districtRest, typeRest, searchNameRest })', () => {

    it('debería retornar arreglo de restaurantes con comida criolla en barranco y de nombre cabrera', () => {

      const optionsRestaurant = {
        restaurants: rest,
        addres: 'barranco',
        name: 'cabrera',
        type: 'criolla'
      }

      const processed = selecRest(optionsRestaurant);
      assert.deepEqual(dataPrueba, processed);
    });

  });

});
