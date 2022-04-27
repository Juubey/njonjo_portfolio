import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import Button from '../../styles/GlobalComponents/Button';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};
/**
   * Easy event listener function
   */
 const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)

	 /**
   * Navbar links active state on scroll
   */
	  let navbarlinks = select('#navbar .scrollto', true)
	  const navbarlinksActive = () => {
		let position = window.scrollY + 200
		navbarlinks.forEach(navbarlink => {
		  if (!navbarlink.hash) return
		  let section = select(navbarlink.hash)
		  if (!section) return
		  if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
			navbarlink.classList.add('active')
		  } else {
			navbarlink.classList.remove('active')
		  }
		})
	  }
	  window.addEventListener('load', navbarlinksActive)
	  onscroll(document, navbarlinksActive)
	
	  /**
	   * Scrolls to an element with header offset
	   */
	  const scrollto = (el) => {
		let elementPos = select(el).offsetTop
		window.scrollTo({
		  top: elementPos,
		  behavior: 'smooth'
		})
	  }

/**
   * Back to top button
   */
 let backtotop = select('backtotop')
 if (backtotop) {
   const toggleBacktotop = () => {
	 if (window.scrollY > 100) {
	   backtotop.classList.add('active')
	 } else {
	   backtotop.classList.remove('active')
	 }
   }
   window.addEventListener('load', toggleBacktotop)
   onscroll(document, toggleBacktotop)
 }

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};
/* Broken
window.addEventListener('scroll', toggleVisible);
*/
  
return (
	<Button>
	<FaArrowCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	</Button>
);
}
}

export default ScrollButton;
