import React, { useState, useRef, useEffect } from 'react';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

if (typeof window !== "undefined") {

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff} .anim-typewriter{ animation: typewriter 4s steps(44) 1s 1 normal both, blinkTextCursor 500ms steps(44) infinite normal} @keyframes typewriter{from{width: 0;} to{width: 24em;}} @keyframes blinkTextCursor{from{border-right-color: rgba(255,255,255,.75);}to{border-right-color: transparent;}}"
  document.body.appendChild(css);
};

  // browser code
}

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, I'm Njonjo Njubi,<br />
        I'm a 
        <a href="" class="typewrite" data-period="2000" data-type='[ " Developer", " Designer", " Freelancer"]'>
          <span class="wrap"></span>
        </a>.     
      </SectionTitle>
      <SectionText>
      Please take a look around, see what I've been up to, and let's see what we can build together.<br />
      <p>Browse some of my work.</p>
      </SectionText>
      <ul>
        <li>
          <Button onClick={() => window.location = 'https://github.com/Juubey' }>Need a Software Developer?</Button>
          <Button onClick={() => window.location = 'https://albert-njubi.itch.io/' }>Need a Game Dev?</Button>
        </li>
      </ul>
    </LeftSection>

  </Section>
);

export default Hero;