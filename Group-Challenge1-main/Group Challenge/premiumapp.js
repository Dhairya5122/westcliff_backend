const app = new Vue({
    el: '#app',
    data: {
      cardInfo: [
        { title: 'Premium', tag: 'card-header' },
        { title: '50GB', tag: 'card-item' },
        { title: '50', tag: 'card-item' },
        { title: '50', tag: 'card-item' },
        { title: 'Endless', tag: 'card-item' },
        { title: '$50', tag: 'card-item card-wide', price: true },
        { title: 'per month', tag: 'card-item card-opacity' },
        { tag: 'card-btn' }
      ]
    }
  })