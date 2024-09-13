<template>
  <header id="header">
    <div class="row">
      <div class="logo-wrap">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/user/img/logo_wh.png" alt="logo" />
          </router-link>
        </div>
      </div>
      <div class="menu_wrap">
        <div id="gnb">
          <ul class="row">
            <li>사업단소개</li>
            <li>교육과정</li>
            <li>디지털배지</li>
            <li>커뮤니티</li>
          </ul>
          <div class="snb_area" ref="snbArea">
            <div class="snb_bg">
              <ul>
                <li>단장 인사말</li>
                <li>사업 소개</li>
              </ul>
              <ul>
                <li>교육과정 소개</li>
                <li>교과목 안내</li>
              </ul>
              <ul>
                <li>디지털배지 소개 ></li>
                <li>발급절차</li>
                <li>진위여부 확인</li>
              </ul>
              <ul>
                <li>공지사항</li>
                <li>Q&A</li>
                <li>자료실</li>
              </ul>
            </div>
            <!--snb_bg-->
          </div>
          <!--snb_area-->
        </div>
        <!--gnb-->
        <div class="bar"></div>
        <div class="login">로그인</div>
      </div>
      <!--menu_wrap-->
    </div>
    <!--row-->

    <div class="mobile-btn" @click="openMobileMenu">
      <span class="material-symbols-outlined">menu</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped lang="scss">
body {
  width: 100%;
  height: 100%;
  background-color: black;
}
a,
li {
  list-style: none;
  text-decoration: none;
  border: none;
  color: inherit;
}

#header {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(7, 28, 48, 0.1);
  z-index: 2;
  box-sizing: border-box;
  top: 0;
  right: 0;
  left: 0;
  // position: fixed;
  transition: all ease-in-out 0.2s;
}

#header.showBackground {
  background-color: rgba(7, 28, 48, 0.9);
}

#gnb {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

#gnb ul.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

#gnb ul.row li {
  flex: 0 0 150px;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px 0;
}

#header > .row {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center !important;
  justify-content: space-around !important;
}

#header > .row:hover .snb_area {
  background: rgba(7, 28, 48, 0.9);
  height: 200px;
  display: flex;
}

#header:hover {
  background-color: rgba(7, 28, 48, 0.9) !important;
}

#header > .row .logo-wrap {
  width: 100%;
}

#header.scrolled {
  background-color: rgba(7, 28, 48, 0.9) !important; /* 스크롤 시 배경색 변경 */
}

.logo {
  width: 100px;
}

.logo > a {
  width: 200px !important;
  height: initial !important;
}

.logo > a > img {
  width: 100%;
  height: 100%;
}

#header .login {
  width: 120px;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
}

#header .login > a {
  color: white;
  transition: ease-in-out 0.1s;
}

#header .login a:hover {
  color: #86f8ff !important;
}

.snb_area {
  height: 0;
  overflow: hidden;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: ease-in-out 0.3s;
  z-index: 1;
}
.snb_area .snb_bg {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 1200px;
  padding: 20px 0;
}
.snb_area .snb_bg ul:last-child {
  width: 100px;
}
.snb_area .snb_bg .row {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.snb_area.navi {
  height: 130px;
}

@keyframes slider {
  from {
    height: 0;
  }
  to {
    height: 150px;
  }
}

.snb_area h2 {
  width: 200px;
}

.snb_area ul {
  width: 150px;
}

.snb_area .snb_bg ul li {
  text-align: center;
  padding: 5px 0;
  white-space: nowrap;

  color: #ffffff;
}

.snb_area ul > li > a {
  margin-top: 7px;
  color: #ffffff;
  transition: all 0.2s;
}

.snb_area ul > li > a:hover {
  color: #86f8ff;
}

.menu_wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.mobile-btn {
  display: none;
}

.mobile-btn span {
  color: white;
  cursor: pointer;
}

.close-btn {
  color: white;
  cursor: pointer;
}

.mobile-wrap {
  display: flex;
  justify-content: flex-end;
  display: none;
  z-index: 100;
}

.side_menu_wrap {
  position: fixed;
  /* width: 100vw; */
  /* height: 100vh; */
  top: 0px;
  right: -1000vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.side_menu_wrap .side_menu {
  width: 70%;
  height: 600vh;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 150px 20px 20px 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 30px;
}

.side_menu_wrap.show {
  width: 100vw;
  height: 100vh;
  right: 0;
  transition: all ease-in-out 0.3s;
}

.side_menu_wrap.show .side_menu {
  transition: all ease-in-out 5s;
}

.side_menu_wrap .side_menu .mobile-btn {
  position: absolute;
  top: 30px;
  right: 10px;
}

.side_menu .m-login {
  margin-bottom: 20px;
  transition: ease-in-out 0.1s;
}

.side_menu .m-login a {
  color: #ffffff;
}

.side_menu .m-login a:hover {
  color: #86f8ff;
}

.side_menu .mobile_menu {
  height: 30px;
  color: white;
  cursor: pointer;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: ease-in-out all 1s;
  margin-right: 20px !important;
}

.mobile_menu:after {
  content: "\002B";
  color: white;
  font-weight: bold;
  margin-left: 5px;
}
.mobile_menu.active:after {
  content: "\2212";
}

.mobile_menu:hover {
  color: #86f8ff;
}

.mobile_sub_wrap {
  overflow: hidden;
  width: 100%;
  transition: ease-in-out all 1s;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.mobile_sub_wrap.active {
  transition: ease-in-out all 1s;
}

.mobile_sub_wrap > a {
  cursor: pointer;
  transition: all 0.2s ease-out;
  color: #ffffff;
}

.mobile_sub_wrap > a:hover {
  color: #86f8ff;
}

/*반응형*/

@media (max-width: 1300px) {
  #header {
    padding: 10px;
  }
  #header > .row {
    margin-right: 0;
  }
}

@media (max-width: 1200px) {
  #header > .row .logo-wrap {
    left: 30px;
  }
  .snb_area .snb_bg {
    margin-right: 20px;
  }
}

@media (max-width: 1024px) {
  #header > .row {
    margin-right: 30px;
  }
  .snb_area .snb_bg {
    margin-right: 50px;
  }
}

@media (max-width: 960px) {
  html,
  body {
    /*overflow-x: hidden;*/
  }
  #header .menu_wrap {
    display: none !important;
  }

  .mobile-btn {
    display: flex;
  }

  .mobile-wrap {
    display: flex !important;
    margin-right: 20px;
  }
}

@media (max-width: 600px) {
  #header .row {
  }
  .side_menu {
    width: 80%;
  }
}

@media (max-width: 540px) {
  #header {
    /*padding: 20px;*/
  }
}
</style>
