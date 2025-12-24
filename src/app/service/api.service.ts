import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Mean:any;

  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
}

getElectronics() {
  return [
    {
      id: 9,
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
      price: 64,
      description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance',
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png',
      rating: { rate: 3.3, count: 203 }
    },
    {
      id: 10,
      title: 'SanDisk SSD PLUS 1TB Internal SSD',
      price: 109,
      description: 'Easy upgrade for faster boot up, shutdown, application load and response',
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png',
      rating: { rate: 2.9, count: 470 }
    },
    {
      id: 11,
      title: 'Silicon Power 256GB SSD',
      price: 109,
      description: '3D NAND flash applied to deliver high transfer speeds',
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png',
      rating: { rate: 4.8, count: 319 }
    },
    {
      id: 12,
      title: 'WD 4TB Gaming Drive',
      price: 114,
      description: 'Expand your PS4 gaming experience',
      image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png',
      rating: { rate: 4.5, count: 400 }
    },
    {
      id: 13,
      title: 'Acer SB220Q Monitor',
      price: 599,
      description: '21.5 inches Full HD IPS display',
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png',
      rating: { rate: 2.5, count: 250 }
    },
    {
      id: 14,
      title: 'Samsung 49-Inch Curved Gaming Monitor',
      price: 999.99,
      description: '49 inch Super UltraWide QLED display',
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png',
      rating: { rate: 4.7, count: 500 }
    }
  ];
}


getFashion() {
  return [
    {
      id: 1,
      title: 'Fjallraven Backpack',
      price: 109.95,
      description: 'Perfect pack for everyday use',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
      rating: { rate: 3.9, count: 120 }
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      description: 'Slim-fitting style with soft fabric',
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
      rating: { rate: 4.1, count: 259 }
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      description: 'Great outerwear jacket for winter',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
      rating: { rate: 4.7, count: 500 }
    },
    {
      id: 15,
      title: 'Women Snowboard Jacket',
      price: 56.99,
      description: 'Warm and detachable winter jacket',
      image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png',
      rating: { rate: 3.6, count: 145 }
    },
    {
      id: 16,
      title: 'Women Faux Leather Jacket',
      price: 29.95,
      description: 'Removable hooded biker jacket',
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png',
      rating: { rate: 4.0, count: 340 }
    },
    {
      id: 17,
      title: 'Women Rain Jacket',
      price: 39.99,
      description: 'Lightweight striped raincoat',
      image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png',
      rating: { rate: 3.8, count: 200 }
    },
    {
      id: 18,
      title: 'Women Solid Short Sleeve Top',
      price: 9.85,
      description: 'Comfortable cotton stretch top',
      image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png',
      rating: { rate: 4.2, count: 420 }
    },
    {
      id: 19,
      title: 'Women Moisture T-Shirt',
      price: 7.95,
      description: 'Breathable moisture-wicking fabric',
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png',
      rating: { rate: 3.5, count: 180 }
    },
    {
      id: 20,
      title: 'Women Casual Cotton T-Shirt',
      price: 12.99,
      description: 'Soft cotton V-neck casual tee',
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png',
      rating: { rate: 4.4, count: 390 }
    }
  ];
}

getJewel() {
  return [
    {
      id: 5,
      title: 'John Hardy Bracelet',
      price: 695,
      description: 'Inspired by mythical water dragon',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png',
      rating: { rate: 4.6, count: 400 }
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave',
      price: 168,
      description: 'Satisfaction guaranteed jewelry',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png',
      rating: { rate: 3.9, count: 70 }
    }
  ];
}


removeItem(id:any){
  this.http.delete("https://fakestoreapi.com/products"+id)
}

}

   




