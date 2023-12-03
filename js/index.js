
// 스크롤이동시 animate 적용하기 시작
// var target = $("#aboutme");
//   $('html, body').animate({
//     scrollTop: target.offset().top
//   }, 1500, function() {
   
//   });

  // 스크롤이동시 animate 적용하기 끝

  // 스크롤 이벤트 리스너 추가
// $(window).scroll(function() {

//   // 현재 스크롤 위치
//   var scrollTop = $(window).scrollTop();

//   // about me 섹션의 스크롤 위치
//   var aboutmeScrollTop = $("#aboutme").offset().top;

//   // 헤더가 about me 섹션에 가려지는 경우
//   if (aboutmeScrollTop <= scrollTop) {

//     // 헤더를 100px 위로 올림
//     // $(".header").css("top", "100px");
//       $("#aboutme").css("margin-top", "100px");
//   } else {

//     // 헤더를 원래 위치로 복원
//     // $(".header").css("top", "0px");
//       $("#aboutme").css("margin-top", "0px");
//   }
// });