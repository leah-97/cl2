$(document).ready(function () {
  let headerDefaultColor = "#fff";
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: false,
    overflow: "visible",

    responsiveWidth: 1200,
    afterLoad: function (anchor, index) {
      $(".navbar li").removeClass("active");
      if (index > 0 && index < 7) {
        $(".navbar li")
          .eq(index - 1)
          .addClass("active");
      }

      if (index >= 7) {
        $("header, .navbar").stop().fadeOut(300);
      } else {
        $("header, .navbar").stop().fadeIn(300);
      }
      if (index === 2 || (index > 3 && index < 7)) {
        headerDefaultColor = "#222";
        $("header nav > ul > li > a").css({
          color: "#222",
        });
        $(".navbar li").css({ color: "#B8AFA3" });
        $(".navbar li.active").css({ color: "#000" });
        $(".menebar span").css({ "background-color": "#222" });
      } else {
        headerDefaultColor = "#fff";
        $("header nav > ul > li > a").css({
          color: "#fff",
        });

        $(".navbar li").css({ color: "#B8AFA3" });
        $(".navbar li.active").css({ color: "#fff" });
        $(".menebar span").css({ "background-color": "#fff" });
      }
      switch (index) {
        case 3: // sec3
          $(".sec3word")
            .css("margin-left", "60px")
            .animate({ "margin-left": "0px" }, 600);
          $(".section3 .map")
            .css("margin-top", "60px")
            .animate({ "margin-top": "0px" }, 600);
          break;
        case 4: // sec4
          $(".sec4word > div > div")
            .css("margin-left", "60px")
            .animate({ "margin-left": "0px" }, 600);
          break;
        case 5: // sec5
          $(".sec5word > div")
            .css("margin-left", "60px")
            .animate({ "margin-left": "0px" }, 600);
          $(".btn")
            .css("margin-top", "80px")
            .animate({ "margin-top": "50px" }, 600);
          $(".sec5con > div:nth-child(2)")
            .css("margin-top", "100px")
            .animate({ "margin-top": "60px" }, 600);
          break;
      }
    },
  });

  $(".navbar li").on("click", function () {
    let i = $(this).index();
    $(".navbar li").removeClass("active");
    $(".navbar li").eq(i).addClass("active");
    let target = $(".section").eq(i).offset().top;
    $.fn.fullpage.moveTo(i + 1);
  });

  //헤더
  let menuIndex = -1;
  let currentMenuIndex = -1;

  $(".main > li").mouseenter(function () {
    menuIndex = $(this).index();

    $(".headerbg1").stop().slideDown(400);
    $(".main li a").css({ color: "#ccc" });
    $(".headerbg1 .line").addClass("active");
    $(this).find("a").css({ color: "#000" });
    $(".main li a:hover").css({ color: "#000" });

    $(".sub1").stop().css({ display: "none", opacity: 0, top: "20px" });

    $(".sub1")
      .eq(menuIndex)
      .css({ display: "flex", opacity: 0, top: "20px" })
      .animate(
        {
          opacity: 1,
          top: 0,
        },
        400,
      );

    if (
      menuIndex === 2 ||
      menuIndex === 4 ||
      menuIndex === 5 ||
      menuIndex === 6
    ) {
      $(".headerbg1").stop().animate({ height: "210px" }, 400);
    } else {
      $(".headerbg1").stop().animate({ height: "360px" }, 400);
    }
  });

  $("header").mouseleave(function () {
    $(".main li a").css({ color: headerDefaultColor });
    $(".menebar span").css({ "background-color": headerDefaultColor });
    $(".sub1")
      .stop()
      .animate(
        {
          opacity: 0,
          top: "20px",
        },
        400,
        function () {
          $(this).css("display", "none");
        },
      );
    $(".headerbg1")
      .stop()
      .slideUp(400, function () {
        $(".headerbg1 .line").removeClass("active");
        $(".headerbg1").css({ height: "350px" });
      });
  });
  //모달창
  $(".menebar").click(function () {
    $(".sitemap").fadeIn(400);
    $(".sitemap").addClass("active");
    $(".sitemap > div > div > h2").animate({ "letter-spacing": "0" });
  });
  $(".sitemap > div > div > button").click(function () {
    $(".sitemap").removeClass("active");
    $(".sitemap > div > div > h2").animate(
      { "letter-spacing": "0.4em" },
      function () {
        $(".sitemap").fadeOut();
      },
    );
  });
  $(".sitemapMain li").click(function () {
    $(this).find(".sub").slideToggle();
  });
  //section1
  let con1BotIndex = 1;

  $(".con1Bot").click(function () {
    con1BotIndex = $(this).index();
    $(".con1Bot").removeClass("on");
    $(".wordWrap").removeClass("on");

    $(this).addClass("on");
    $(".con1Left").fadeOut();
    $(".con1Left")
      .eq(con1BotIndex)
      .fadeIn(function () {
        $(this).find(".wordWrap").addClass("on");
        $(this)
          .find(".wordWrap span")
          .delay(100)
          .animate({ "margin-left": "0px" });
        $(this)
          .find(".wordWrap h2")
          .delay(300)
          .animate({ "margin-left": "0px" });
        $(this)
          .find(".wordWrap p")
          .delay(500)
          .animate({ "margin-left": "0px" });
      });

    $(".con1Right").fadeOut();
    $(".con1Right").eq(con1BotIndex).fadeIn();
  });

  //section1 more버튼
  $(".more").mouseenter(function () {
    $(".cir a").stop().animate({
      "margin-left": "-180px",
      "background-color": "#e67e22;",
    });
    $(".word a").stop().animate({
      "margin-left": "60px",
    });
  });
  $(".more").mouseleave(function () {
    $(".cir a").stop().animate({
      "margin-left": "0px",
      "background-color": "#b8afa3;",
    });
    $(".word a").stop().animate({
      "margin-left": "0px",
    });
  });
});

// 인디케이터
const mainMenu = document.querySelectorAll("header nav > ul.main > li");
const indicator = document.querySelector(".indicator");

mainMenu.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const itemRect = this.getBoundingClientRect();
    const navRect = this.closest("nav").getBoundingClientRect();
    const itemCenter = itemRect.left - navRect.left + itemRect.width / 2;

    indicator.style.left = itemCenter + "px";
    indicator.style.opacity = "1";
  });
});

document.querySelector("header").addEventListener("mouseleave", () => {
  indicator.style.opacity = "0";
});

//sec2 hover
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const hover = document.querySelector(".hover");
  const sec2con = document.querySelector(".sec2con");

  items.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      const itemLeft = this.offsetLeft;
      const itemTop = this.offsetTop;

      items.forEach(function (otherItem) {
        otherItem.classList.remove("on");
      });

      this.classList.add("on");
      hover.classList.add("on");
      hover.style.left = itemLeft + "px";
      hover.style.top = itemTop + "px";
    });
  });

  sec2con.addEventListener("mouseleave", function () {
    items.forEach(function (item) {
      item.classList.remove("on");
    });
    hover.classList.remove("on");
  });

  // sec4 월드맵 클릭
  let con4Index = 1;
  $(".sec4word .world li").click(function () {
    con4Index = $(this).index();
    $(".sec4word .world li").removeClass("active");
    $(this).addClass("active");
    $(".sec4word .info li").hide();
    $(".sec4word .info li").eq(con4Index).show();
    $(".sec4word .imgBox li").hide();
    $(".sec4word .imgBox li").eq(con4Index).show();
  });
  //sec5
  $(".btn li").click(function () {
    $(".btn li").removeClass("on");
    $(this).addClass("on");
  });
  $(".btn li:first").click(function () {
    $(".notice").hide();
    $(".news").show();
  });
  $(".btn li:last").click(function () {
    $(".news").hide();
    $(".notice").show();
  });

  // sec5 뉴스/공지 슬라이드
  let currentSlide = 0;

  $(".btnBox .fa-chevron-right").click(function () {
    let activeList = $(".btn li.on").index() === 0 ? $(".news") : $(".notice");
    let totalItems = activeList.find("li").length;

    if (currentSlide < totalItems - 1) {
      currentSlide++;
      activeList.find("li").hide();
      activeList.find("li").eq(currentSlide).fadeIn();
    }
  });

  $(".btnBox .fa-chevron-left").click(function () {
    let activeList = $(".btn li.on").index() === 0 ? $(".news") : $(".notice");

    if (currentSlide > 0) {
      currentSlide--;
      activeList.find("li").hide();
      activeList.find("li").eq(currentSlide).fadeIn();
    }
  });

  $(".btn li span").click(function () {
    currentSlide = 0;
    $(".news li, .notice li").hide();
    $(".news li").eq(0).show();
    $(".notice li").eq(0).show();
  });

  $(".news li").hide();
  $(".news li").eq(0).show();
  $(".notice li").hide();

  // 패밀리사이트
  $(".familysite span").click(function () {
    $(".sitelist").toggle();
  });
});
