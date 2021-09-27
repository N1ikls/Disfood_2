<template>
  <div class="header">
    <b-navbar toggleable="lg" variant="white" class="navbar" fixed>
      <div class="header__logo">
        <div class="header__logotype">
          <b-navbar-brand href="#">
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.78827 4.91612C9.50279 4.91612 10.8945 6.30779 10.8945 8.01684C10.8945 9.72953 9.50279 11.1212 7.78827 11.1212C6.07558 11.1212 4.68391 9.72953 4.68391 8.01684C4.68391 6.30779 6.07558 4.91612 7.78827 4.91612ZM7.72808 0.0370483C11.9998 0.0370483 15.4598 3.50073 15.4598 7.76878C15.4598 12.0368 11.7627 18.3076 7.72808 23.5788C4.28264 18.7745 0 12.0368 0 7.76878C0 3.50073 3.46551 0.0370483 7.72808 0.0370483Z"
                fill="#71BF45"
              />
            </svg>
            <svg
              width="26"
              height="34"
              viewBox="0 0 26 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.816895 0.421204V8.16388C4.7621 8.16388 8.04339 8.11281 11.5654 8.12193C12.7127 8.12193 13.7122 8.49584 14.5768 9.20535C15.4267 9.92399 16.0888 10.9272 16.5704 12.2222C17.0373 13.5099 17.2799 15.0274 17.289 16.7547C17.2799 18.5148 17.0373 20.0469 16.5704 21.3547C16.0888 22.6625 15.4304 23.6748 14.5768 24.3898C13.7177 25.1139 12.7127 25.4823 11.5654 25.4823L8.42642 25.6227C6.90525 28.158 5.49898 30.3431 3.39414 33.3454L11.6585 33.2286C13.7597 33.2013 15.6693 32.8219 17.3693 32.0376C19.0728 31.2588 20.5247 30.1279 21.7394 28.676C22.9524 27.2187 23.8826 25.4768 24.5264 23.4504C25.1575 21.4149 25.4694 19.155 25.4567 16.6617C25.4475 14.2103 25.1192 11.9924 24.4608 10.0042C23.8023 8.01979 22.8739 6.30527 21.6555 4.88077C20.4408 3.45261 18.9835 2.35459 17.2945 1.58853C15.6091 0.824297 13.7305 0.432148 11.6585 0.421204H0.816895Z"
                fill="#51668F"
              />
            </svg>
          </b-navbar-brand>
          <div class="header__text">
            <b-navbar-brand class="logotype p-0 dark" href="#"
              >DISFOOD</b-navbar-brand
            >
            <b-navbar-brand class="logotype__bottom primary p-0" href="#"
              >Market</b-navbar-brand
            >
          </div>
        </div>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="header__items">
          <b-navbar-brand class="header__link gray mr-5" href="#"
            >Статистика</b-navbar-brand
          >
          <b-navbar-brand class="header__link gray mr-5" href="#"
            >Мои товары</b-navbar-brand
          >
          <b-navbar-brand class="header__link gray mr-5" href="#"
            >Мои сделки</b-navbar-brand
          >
          <b-navbar-brand class="header__link gray" href="#"
            >Сообщения</b-navbar-brand
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <div class="header__items__logo m-1">
            <b-nav-text
              class="header__link__text text-reset p-0"
              align="right"
              href="#"
              >Дары Кубани</b-nav-text
            >
            <b-nav-text class="bottom__text text-white" href="#">
              Поставщик • аккредитован</b-nav-text
            >
          </div>
          <b-nav-item class="header__link__logo p-2" align="center" href="#">
            <b-icon icon="person-fill" variant="dark"></b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Head"
};
</script>

<style>
.dark {
  color: #51668f !important;
}
.header__logotype {
  display: flex;
}
.header__link__text {
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
}
.header__items__logo {
  display: flex;
  flex-direction: column;
}
.header__text {
  display: flex;
  flex-direction: column;
}
.bottom__text {
  font-size: 10px;
  font-style: normal;
  line-height: 20px;
  border-radius: 5px;
  padding: 0px 10px;
  color: #ffffff;
  background: #71bf45;
}
.primary {
  color: #71bf45 !important;
}

.logotype__bottom {
  font-size: 12px;
}
.logotype {
  font-size: 20px;
  font-weight: 900;
}
.header__link__logo {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(113, 191, 69, 0.32);
  border-radius: 90px;
  margin: 0 20px;
}
.header__logo {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 20px;
}
.gray {
  color: #66727e !important;
}
.gray:hover {
  font-weight: 600;
  color: #71bf45 !important;
}
.header__link {
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  font-style: normal;
}
.navbar {
  justify-content: space-between;
}
</style>
