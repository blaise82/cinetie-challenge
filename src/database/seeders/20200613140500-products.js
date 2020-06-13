export default {
  up: (queryInterface) => queryInterface.bulkInsert('Products', [
    {
      id: '2fdd8fbb-9de2-4ed7-8531-4263c57107f2',
      name: 'nSanDisk 128GB MicroSDXC UHS-I Memory Card for Nintendo Switch - SDSQXAO-128G-GNCZName',
      price: 300,
      createdBy: 'd0a051d9-447a-49a8-aebc-7e1b031afd62',
      description: 'Nintendo-licensed to provide dependable, high-performance storage, The SanDisk microSDXC card for the Nintendo Switch system.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2fdd8fbb-9de9-4ed7-8531-4263c57107f8',
      name: 'they must delete me after all',
      price: 300,
      createdBy: 'd0a051d9-447a-49a8-aebc-7e1b031afd62',
      description: 'we will be using this product to test deleting',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
