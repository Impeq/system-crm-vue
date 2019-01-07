<template>
  <div class="auth-container">
    <div class="auth-box">
        <div class="auth-title">Авторизация</div>
        <form action="#">
            <div class="auth-input">
                <div class="auth-placeholder">Введите почту</div><input class="auth-enter" type="text">
            </div><br>
            <div class="auth-input">
                <div class="auth-placeholder">Введите пароль</div><input class="auth-enter" type="password">
                <div class="auth-error">Неверный логин или пароль</div>
            </div><br>
            <div class="g-recaptcha" data-sitekey="6Lf03YYUAAAAABrOUsSVIM1ijKQUhwzyyf_eeNG7"></div>
            <div class="auth-submit">
                <button class="auth-button">Войти</button>
                <label>
                    <div class="auth-checkbox">
                        <input type="checkbox" name="save" id="save" class="save">
                    </div>
                    Оставаться в системе
                </label>
            </div>
        </form>
    </div>
</div>
</template>

<script>

export default {
  name: "auth",
  components: {},
  data() {
    return {

    }
  }
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    color: #323232;
    font-weight: normal;
}

body {
    -webkit-font-smoothing: antialiased;
}

.auth-container {
    background: #F4F8F9;
    height: 100%;
    width: 100%;
    position: absolute;
}

.auth-box {
    width: 683px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 35px 0;
    background: #fff;
    box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.05);
}

.auth-input {
    width: 400px;
    border: 3px solid rgba(104, 159, 255, 0.5);
    display: inline-block;
    position: relative;
    transition: 0.2s ease all;
}

.auth-input input {
    padding: 13px 22px 13px 22px;
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 20px;
    border: none;
    background: transparent;
}

.auth-button {
    background: #5C90CC;
    outline: none;
    font-size: 20px;
    padding: 13px 57px;
    border: none;
    color: #fff;
    transition: 0.2s ease all;
}

.auth-button:hover {
    background: #4972A3;
    transition: 0.2s ease all;
}

.auth-placeholder {
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 20px;
    color: #888888;
    pointer-events: none;
    background: #fff;
    transition: 0.1s ease all;
}

.active-input {
    font-size: 15px;
    color: #323232;
    top: -2px;
    left: 17px;
    padding: 0 5px;
    transition: 0.2s ease all;
}

.active-input-box {
    border: 3px solid #5C90CC;
    transition: 0.2s ease all;
}

.auth-title {
   font-size: 25px;
   margin-bottom: 41px;
}

.auth-error {
    width: 400px;
    display: inline-block;
    text-align: left;
    color: #CC5C5C;
    font-size: 10px;
    position: absolute;
    left: 0;
    bottom: -21px;
 }

.auth-input {
    margin-bottom: 50px;
}

.auth-checkbox {
    width: 15px;
    height: 15px;
    background: transparent;
    border: 2px solid #5C8FCC !important;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    margin: 0 12px 5px 43px;
    pointer-events: none;
}

.auth-submit label {
    cursor: pointer;
}
.save {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}

.error-enter,
.error-leave-to { opacity: 0 }
.error-leave,
.error-enter-to { opacity: 1 }
.error-enter-active,
.error-leave-active { transition: opacity 100ms }
</style>
