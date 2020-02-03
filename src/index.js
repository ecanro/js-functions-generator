import _ from 'lodash';
import './index.css';
import Hands from './icon.png';
import Data from './data.xml'


function component() {
    const element = document.createElement('div');
  
   
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');


  // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Hands;

   element.appendChild.sort(myIcon);

   console.log(Data)

  
    return element;
  }
  
  document.body.appendChild(component());

  //** indempotent function ahorra cpu pero gasta memoria 
  //** ya que se ejecuta alli en cache las veces que se le llame

  //**Template string e template literals de la forma `${valor};` */

  //**practicar metodo foreach */

  //** repasar arrow functions */

  //**practicar metodo map, sort, list and push and reduce*/

