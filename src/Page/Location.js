import React from 'react'
import './Location.css'

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

function Location() {
  return (
    <div className='Location' id='Location'>
      <div className='Location-h reveal'>Event Location - สถานที่จัดงาน</div>
      <div className='Location-c reveal'>
        <div className='map'>
          x
        </div>
        <div className='place'>
          <h5>Sense of Art (Art Asthetic) </h5>
          <p>บริเวณ ห้องทรูแลป(True LAB)</p>
          <h5>Sense of Music</h5>
          <p>บริเวณ สนามรักบี้ มหาวิทยาลัยเกษตรศาสตร์</p>
          <h5>Sense of Joy</h5>
          <p>บริเวณ ลานกิจกรรมหน้าอาคารเทพศาสตร์สถิตย์ และ ถนน กำพล อดุลย์วิทย์</p>
        </div>
      </div>
    </div>
  )
}

export default Location