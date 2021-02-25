
//my own created js function designed to help with css

import {a,n} from '@/composables/types'



const cqueA = (cssclass: string)=> {
  const items = document.querySelectorAll<HTMLElement>(cssclass);
  return items
}
const cque = (cssclass: string)=> {
  const item = document.querySelector<HTMLElement>(cssclass);
  if(item){
    return item
  }
}

const cLenEqual = (items: a, str: string, len: string, callback: a = console.log()) =>{

  // console.log(items)
  // if(Array.isArray(items) || NodeList.prototype.isPrototypeOf(items)){

    if(len === 'width'){
      items.forEach((item: a) => {
        item.style.width = str;
      });
    } else if(len === 'height') {
      items.forEach((item: a) => {
        callback(item)
      });
    } else{
      // console.log('bad length')
    }
  }
  // console.log('not array')

// }














let count = 0;
const slide = (direction: n, cards: n, sliderClass: string, itemClass: string, speed = 0.3 ) => {

  //
  console.log({sliderClass, itemClass})
  const slider = cque(sliderClass);
  const outer = cque(itemClass)
  const width = outer?.offsetWidth
  //
  console.log({direction, count})
  direction > 0 //forward direction
    ? count > cards - 2
      ? (count = 0)
      : (count += direction)
    : direction < 0 //backwards direction
    ? count < 1
      ? (count = cards - 1)
      : (count += direction)
    : (count += direction);
  console.log({direction, count})
  if (slider && width) {
    slider.style.transform = `translateX(${(width * -count).toString()}px)`;
    slider.style.transition = `${speed}s`;
  }
};





const cexNone = (btnClass: string, onClass: string, onClassStyle: string, textClass: string) => {
  addEventListener("click", e => {
    if (
      e.target && 
      (e.target as HTMLElement).classList.value.includes(btnClass) &&
      ((e.target as HTMLElement).parentElement
      ?.nextElementSibling as HTMLElement)
      ) {
      //  console.log( 'hi', (e.target as HTMLElement).getElementsByClassName(textClass))
       const sibling = (e.target as HTMLElement).getElementsByClassName(textClass)
        console.log(sibling[0])
      // const sibling = (e.target as HTMLElement).parentElement?.nextElementSibling as HTMLElement;
      // console.log(sibling)
      //action
      // turn off
      if(sibling[0].classList.value.includes(onClassStyle)){
        // sibling.classList.remove(onClass)
        sibling[0].classList.remove(onClassStyle); 
      }else{ //turn on
        // sibling.classList.add(onClass)
        sibling[0].classList.add(onClassStyle); 
      }
      // sibling.classList.toggle(onClass);
      // setTimeout(()=>{
      // },100)
    }
  });
}





// up devNone on all dev
const devToggle = () => {
  const devs = cqueA(".dev");
  devs.forEach(item => {
    item.classList.toggle("devNone");
  });
};

const devAdd = () => {
  const devs = cqueA(".dev");
  devs.forEach(item => {
    item.classList.add("devNone");
  });
};















// comments
const useCss = () =>{
  return {slide, count,cqueA, cque, devToggle, devAdd, cLenEqual,cexNone }
}

export default useCss