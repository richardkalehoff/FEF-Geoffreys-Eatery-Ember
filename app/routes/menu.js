import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      name: 'stovetop-lasagna',
      title: 'Stovetop Lasagna',
      rating: 3.1,
      img: 'lasagna'
    }, {
      name: 'shake-n-shimmy-pork-chops',
      title: 'Shake n\' Shimmy Pork Chops',
      rating: 3.7,
      img: 'pork-chops'
    }, {
      name: 'caramel-chocolate-and-candy-apples',
      title: 'Caramel, Chocolate and Candy Apples',
      rating: 5,
      img: 'candy-apples'
    }, {
      name: 'deviled-chicken-lollipops',
      title: 'Deviled Chicken Lollipops',
      rating: 4.2,
      img: 'chicken-lollipops'
    }];
  }
});
