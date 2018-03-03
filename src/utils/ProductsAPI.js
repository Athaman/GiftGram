import request from 'superagent/lib/client';

export default {
  // TODO real products API
  // getProducts: (url) => {
  //   return new Promise((resolve, reject) => {
  //     request
  //       .get(url)
  //       .end((err, response) => {
  //         if(err) reject(err);
  //         resolve(JSON.parse(response.text));
  //       })
  //   });
  // }

  getProducts: (url) => {
    return [
      {productId: '01', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '02', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '03', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '04', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '05', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '06', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '07', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '08', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '09', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'},
      {productId: '10', productName: 'Some Product', productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg', productDescription: 'this is a description of the product'}
    ]
  }
}
