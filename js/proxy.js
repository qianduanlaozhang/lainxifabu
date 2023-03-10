// let products = new Proxy({
//     browsers: ['Internet Explorer', 'Netscape']
// }, {
//     get: function (obj, prop) {
//         // 附加一个属性
//         if (prop === 'latestBrowser') {
//             return obj.browsers[obj.browsers.length - 1];
//         }

//         // 默认行为是返回属性值
//         return obj[prop];
//     },
//     set: function (obj, prop, value) {
//         console.log(obj, prop, value)
//         // 附加属性
//         if (prop === 'latestBrowser') {
//             obj.browsers.push(value);
//             return;
//         }

//         // 如果不是数组，则进行转换
//         if (typeof value === 'string') {
//             value = [value];
//         }

//         // 默认行为是保存属性值
//         obj[prop] = value;

//         // 表示成功
//         return true;
//     }
// });

// console.log(products.browsers); // ['Internet Explorer', 'Netscape']
// products.browsers = 'Firefox';  // 如果不小心传入了一个字符串
// console.log(products.browsers); // ['Firefox'] <- 也没问题，得到的依旧是一个数组

// products.latestBrowser = 'Chrome';
// console.log(products.browsers);      // ['Firefox', 'Chrome']
// console.log(products.latestBrowser); // 'Chrome'



// 
let products = new Proxy([
    { name: 'Firefox'    , type: 'browser' },
    { name: 'SeaMonkey'  , type: 'browser' },
    { name: 'Thunderbird', type: 'mailer' }
  ], {
    get: function(obj, prop) {
        console.log(obj, prop)
      // 默认行为是返回属性值，prop ?通常是一个整数
      if (prop in obj) {
        console.log(prop)
        return obj[prop];
      }
  
      // 获取 products 的 number; 它是 products.length 的别名
      if (prop === 'number') {
        console.log(prop)
        return obj.length;
      }
  
      let result, types = {};
  
      for (let product of obj) {
        console.log(product)
        if (product.name === prop) {
          result = product;
        }
        if (types[product.type]) {
          types[product.type].push(product);
        } else {
          types[product.type] = [product];
        }
      }
  
      // 通过 name 获取 product
      if (result) {
        return result;
      }
  
      // 通过 type 获取 products
      if (prop in types) {
        return types[prop];
      }
  
      // 获取 product type
      if (prop === 'types') {
        return Object.keys(types);
      }
  
      return undefined;
    }
  });
  
  console.log(products[0]); // { name: 'Firefox', type: 'browser' }
  console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
  console.log(products['Chrome']); // undefined
  console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
  console.log(products.types); // ['browser', 'mailer']
  console.log(products.number); // 3