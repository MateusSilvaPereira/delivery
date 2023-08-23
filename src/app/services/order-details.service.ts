import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

fooaDetails = [

  {
    id: 1,
    foodName: "Sanduiche Natural de Frango",
    foodDetails: "Sanduiche Natural de Frango",
    foodPrice: 50,
    foodImage: "http://4.bp.blogspot.com/-m03XYQrK00A/UxN6mnkaM4I/AAAAAAAAB1Q/mr60LfT1kYc/s1600/receita-sanduiche-de-beterraba-e-agriao.jpg"
  },
  {
    id: 2,
    foodName: "Pizza de Frango & vegetais",
    foodDetails: "Cebola | Tomate | Frango | Queijo",
    foodPrice: 60,
    foodImage: "https://th.bing.com/th/id/OIP.jWgJYUXS1rL5y6g2Q2qtCQHaFj?pid=ImgDet&w=1024&h=768&rs=1"
  },
  {
    id: 3,
    foodName: "Hamburger",
    foodDetails: "O mais Gostoso",
    foodPrice: 39,
    foodImage: "https://th.bing.com/th/id/OIP.LEQc1OgzeBt0Mg-pIsk0lQHaEK?pid=ImgDet&rs=1"
  },
  {
  id: 4,
  foodName: "Enrolado Frango & Vegetais",
  foodDetails: "Frango | Vegetais",
  foodPrice: 40,
  foodImage: "https://th.bing.com/th/id/R.f9d81045e22ffe7e85db854694466ba6?rik=kmCfodmi5QGs4Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f-xkbqajfe3cI%2fUwnYR1w6QLI%2fAAAAAAAANrs%2fgA_YkpAoN5Q%2fw1200-h630-p-k-no-nu%2frolinho%2bprimavera.JPG&ehk=Nz7P%2fucVsaKmERX09xQ3JMiNv18qPGF4pbZUna2tH9w%3d&risl=&pid=ImgRaw&r=0"
},
{
  id: 5,
  foodName: "Ovo de Colher",
  foodDetails: "Ovo de Colher",
  foodPrice: 56,
  foodImage: "https://cdn.brasildefato.com.br/media/f7f0fcf6cc71a30e3815ad65564dee10.jpg"
},
{
  id: 6,
  foodName: "Sorvete Italiano",
  foodDetails: "Sorvete Italiano",
  foodPrice: 61,
  foodImage: "https://static.tribunadoceara.com.br/wp-content/uploads/sites/5/2016/06/sorvete-de-laranja.jpg"
},
{
  id: 7,
  foodName: "Bebidas",
  foodDetails: "Melhores bebidas",
  foodPrice: 20,
  foodImage: "https://th.bing.com/th/id/R.075327705effb93fc206f6c37fbf2cef?rik=7JPcr7rKRAh%2bbQ&riu=http%3a%2f%2fblog.fazedores.com%2fwp-content%2fuploads%2f2015%2f04%2fDepositphotos_6870203_l.jpg&ehk=sVDQGVifN8exdjhl3F6qJLIU9Aqv15oEjiyIzB97LeY%3d&risl=&pid=ImgRaw&r=0"
},
{
  id: 8,
  foodName: "Drinks",
  foodDetails: "Melhores Drinks",
  foodPrice: 50,
  foodImage: "https://foto.wuestenigel.com/wp-content/uploads/api/delicious-junk-food-burger-iced-drink-and-fries.jpeg"
}

]

}
