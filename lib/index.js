// 🖱️ Dreamcatcher Cursor 
// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     cursor change
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /


$(document).ready(function () {

     // 정보 칸 호버시
     $(".overlay_info").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
               $(this).children("a").css("cursor", "url('/img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
               // $(this).children().css("cursor", "url('/img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
               // $(this).css("pointer-events", "auto");
          },
          /*  function () {
                $("html").css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
           } */
     );

     /*  function () {
           $("html").css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
      } */


     $("").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
               $(this).css("pointer-events", "auto");

          },
          /*  function () {
                $("html").css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
           } */
     );

     $(".help").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/2.Help Select_도움말선택.png'), help");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".progress").hover(
          function () {
               $(this).css("cursor",
                    "url('/img/DC_cursor/3.Working In Background_백그라운드 작업.gif'), progress");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".wait").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/4.Busy_사용 중.gif'), wait");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".crosshair").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/5.Precision Select_정밀도 선택.png'), crosshair");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".text").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/6.Text Select_텍스트선택(중심점-Y축만_35).png'), text");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".not-allowed").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/7.Unavailable_사용할 수 없음.png'), not-allowed");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".s-resize").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/8.Vertical Resize_수직 크기 조절.png'), s-resize");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".w-resize").hover(
          function () {
               $(this).css("cursor",
                    "url('/img/DC_cursor/9.Horizontal Resize_수평 크기 조절.png'), w-resize");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".nwse-resize").hover(
          function () {
               $(this).css("cursor",
                    "url('/img/DC_cursor/10.Diagonal Resize1_대각선 방향 크기 조절1.png'), nesw-resize");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".nesw-resize").hover(
          function () {
               $(this).css("cursor",
                    "url('/img/DC_cursor/11.Diagonal Resize2_대각선 방향 크기 조절2.png'), nwse-resize");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );

     $(".move").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/12.Move_이동.png'), move");
               $(this).css("pointer-events", "auto");
          },
          // function () {
          //      $(this).css("cursor", "url('/img/DC_cursor/1.Nomal Select_일반선택.png'), default");
          // }
     );


});