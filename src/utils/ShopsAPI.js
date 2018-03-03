import request from 'superagent/lib/client';

//  TODO legit api fetching for real products from a url
// export default {
//   getShops: (url) => {
//     return new Promise((resolve, reject) => {
//       request
//         .get(url)
//         .end((err, response) => {
//           if(err) reject(err);
//           console.log(response.text);
//           resolve(JSON.parse(response.text));
//         })
//     });
//   }
// }

export default {
  getShops: (url) => {
    return [
      {shopId: '01', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'},
      {shopId: '02', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'},
      {shopId: '03', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'},
      {shopId: '04', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'},
      {shopId: '05', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'},
      {shopId: '06', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'},
      {shopId: '07', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'},
      {shopId: '08', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'},
      {shopId: '09', shopName: 'Some Shop', shopPicture: 'https://britishart.yale.edu/sites/default/files/images/Museum%20Shop/ba-gen-20170315-1001-mas_w2.jpg', shopDescription: 'This is a description'}
    ]
  }
}
