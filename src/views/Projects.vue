<template>
  <div class="container">
    <div class="bg">
      <main>
        <h1>Мои финансы</h1>

        <div class="topFlex">
          <div class="graphics">
            <div class="mySalary">
              <chart1/>
            </div>

            <div class="commonSalary">
              <div class="chart-top-panel">
                <p>Общий заработок</p>
                <select class="chart-filter">
                  <option value="1">За 3 месяца</option>
                  <option value="2">За год</option>
                  <option value="3">За всё время</option>
                </select>
              </div>
              <p class="numberSalary">87 600 ₽</p>
              <chart2/>
              <div class="mounthLine">
                <ul>
                  <li v-for="(item, index) in mounth" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="targets">
            <div class="salaryBlock">
              <p>Вы получили</p>
              <span>962 000 ₽</span>
              <p>за 12 проектов</p>
            </div>

            <div class="newProjectsBlock">
              <p>5 новых проектов</p>

              <div class="watchButton">Просмотреть</div>
            </div>
          </div>
        </div>

        <div class="bottomFlex">
          <div class="projectBlock">
            <h2>Активные проекты</h2>
            <div class="filter">
              <p>№</p>
              <p>Название проекта</p>
              <p>Бюджет</p>
            </div>

            <div class="project">
              <p>1</p>
              <div class="projectName">
                <p>Проект первый с длинным названием</p>
              </div>
              <p>133 760 ₽</p>

              <div class="date">
                <span>Добавлено: 5 ноября 2018</span>
                <span>Срок: до 31 декабря 2018</span>
              </div>
            </div>

            <div class="project">
              <p>1</p>
              <div class="projectName">
                <p>
                  Проект второй с более длинным названием,
                  да еще и в две строки!
                </p>
              </div>
              <p>133 760 ₽</p>

              <div class="date">
                <span>Добавлено: 5 ноября 2018</span>
                <span>Срок: до 31 декабря 2018</span>
              </div>
            </div>

            <div class="project">
              <p>1</p>
              <div class="projectName">
                <p>Проект первый с длинным названием</p>
              </div>
              <p>133 760 ₽</p>

              <div class="date">
                <span>Добавлено: 5 ноября 2018</span>
                <span>Срок: до 31 декабря 2018</span>
              </div>
            </div>

            <p class="notice">Это все активные проекты на данный момент</p>
          </div>

          <div class="projectBlock">
            <h2>Закрытые проекты</h2>
            <div class="filter">
              <p>№</p>
              <p>Название проекта</p>
              <p>Бюджет</p>
            </div>

            <div class="project">
              <p>1</p>
              <div class="projectName">
                <p>Проект первый с длинным названием</p>
              </div>
              <p>133 760 ₽</p>

              <div class="date">
                <span>Добавлено: 5 ноября 2018</span>
                <span>Срок: до 31 декабря 2018</span>
              </div>
            </div>

            <div class="project">
              <p>1</p>
              <div class="projectName">
                <p>
                  Проект второй с более длинным названием,
                  да еще и в две строки!
                </p>
              </div>
              <p>133 760 ₽</p>

              <div class="date">
                <span>Добавлено: 5 ноября 2018</span>
                <span>Срок: до 31 декабря 2018</span>
              </div>
            </div>

            <div class="project">
              <p>1</p>
              <div class="projectName">
                <p>Проект первый с длинным названием</p>
              </div>
              <p>133 760 ₽</p>

              <div class="date">
                <span>Добавлено: 5 ноября 2018</span>
                <span>Срок: до 31 декабря 2018</span>
              </div>
            </div>

            <p class="showMore">Показать еще</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Chart1 from "@/components/chart/Chart1.vue";
import Chart2 from "@/components/chart/Chart2.vue";

export default {
  name: "projects",
  components: {
    Chart1,
    Chart2
  },
  data() {
    return {
      mounth: ["Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"]
    }
  }
};
</script>

<style lang="less">
.wBG(){
    background:white;
}
body{
  background:#F4F8F9;
}
.test(){
  border: 2px solid red;
}
template{
  background: #F4F8F9;//main back
}

main{
  margin-left:105px;
  margin-top:129px;

  h1{
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 25px;

      color: #63B6E0;

  }

  .topFlex{
    display: flex;
    margin-top:39px;
    margin-bottom: 37px;
  


  .graphics{
    display: flex;

    .mySalary{
      .wBG();
      width: 350px;
      height: 375px;
    }


    .commonSalary{
      .wBG();
      width: 350px;
      height: 375px;
      margin-left: 37px;
    }
  }
  //end graph


  .targets{
      margin-left: 37px;
      font-family: Roboto;


      .salaryBlock{
       
        padding-top:24px;
        text-align: center;
        font-family: Roboto;
       
      .wBG();
        width: 350px;
        height: 169px;
      p{

      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 20px;
      color: #6F7579;
      }
      span{
      display: inline-block;
      padding-top:17px; 
      padding-bottom:15px; 
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 35px;
      color: #5CCC6E;
      }
      }

      .newProjectsBlock{

        .wBG();
        width: 350px;
        height: 169px;
        margin-top: 37px;


        p{
          display: inline-block;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 30px;
        color: #5CCC6E;
        margin-left: 47px;
        margin-top: 32px;
        }

        .watchButton{
          margin-left: 81px;
          margin-top: 31px;
          padding-top:1.5%; 
          height: 37px;
          background: #5CCC6E;
          position: relative;
          text-align: center;
          width:187px;
          font-style: normal;
          font-weight: 500;
          cursor: pointer;
          font-size: 20px;
          color: #FFFFFF;
        }
      }
    }
  //end targets
  }




  .bottomFlex{
display: flex;
    font-family: Roboto;
    color: #6F7579;

    h2{
      display: inline-block;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 15px;

    color: #6F7579;
    margin-left:27px;
    margin-top:19px;
    }

  
    .projectBlock{
      .wBG();
    width: 548px;



    .filter{
      margin-left: 27px;
      margin-top:13px;
      margin-bottom: 16px;
      p{
      display: inline-block;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 10px;
      color: #90A4AE;
      }
      p:nth-child(2){
        margin-left:19px; 
      }
      p:nth-child(3){
        margin-left:277px; 
      }
      p:after{
        content: '▼';
        font-size:8px 
      }
    }

    .project{
      cursor: pointer;
      position: relative;
     margin-top:20px;
    min-height: 40px;
      padding-left:27px;
      .projectName,
      p{

        display: inline-block;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 15px;

        color: #6F7579;
      }
      p:first-child{
        vertical-align: top;
      }
      .projectName{

        width:350px;
        margin-left:21px;
      }
       p:nth-child(3){
         position: absolute;
       top:0;
       right: 60px;
      }
    span{
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 10px;

      color: #90A4AE;
    }
      span{
        display: block;
      
      }
      span:last-child{
        display: block;
      margin-left: 28px;
      }
    .date{
      margin-top: 6px;
      margin-left: 30px;
      display: flex;
    }
    }


    .notice{
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 10px;

      color: #63B6E0;
      margin-left: 57px;
      margin-top:15px;
    }
      .project:before{
    position: absolute;
      content: "";
      background: #63b6e0;
      height: 100%;
      width: 10px;
      left: -10px;
      border-radius: 5px;
      }

      .project:after{
    position: absolute;
      content: "";
      background: #F4F8F9;
      height: 100%;
      width: 10px;
      left: -10px;
      top:0;
      }
    .project:hover:before{
      left: -5px;
    }
    .project:hover p{
color: #63B6E0;
    }
    }

      .projectBlock:last-child{

      margin-left:28px;

      .project:before{
      background: #6F5BED;
      }

      .project:hover p{
color: #6F5BED;
    }


    .showMore{
      cursor: pointer;
      position: relative;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 10px;

      color: #6F5BED;

      margin-left:57px;
      margin-top:15px; 
      margin-bottom:18px; 
    }
    .showMore:before{
      content:'⧼';
      font-weight: bold;
      position: absolute;
      display:inline-block;
      transform: rotate(270deg);
     
  left:72px;
    }
    }
  }
}

.chart-top-panel {
  display: flex;
  justify-content: space-between;
}

.chart-top-panel p {
  color: #6f7579;
  font-size: 15px;
  font-weight: 500;
  padding: 18px 27px 0 27px;
}

.chart-filter {
  color: #90a4ae !important;
  position: relative;
  margin-top: 15px;
  margin-right: 15px;
  border: none;
  outline: none;
}

.chart-filter:after {
  position: absolute;
  content: "\25BC";
  font-size: 9px;
  right: 12px;
  top: 23px;
  color: #90a4ae;
}

.numberSalary {
  color: #63b6e0;
  font-size: 35px;
  font-weight: 500;
  padding-left: 27px;
  margin-top: 37px;
}

.mounthLine {
  background: #E0EAF6;
  padding: 55px 10px 25px 10px;
  overflow: hidden;
  position: relative;
}

.mounthLine ul {
  display: flex;
  list-style: none;
  justify-content: space-between;
}

.mounthLine ul li {
  font-size: 13px;
  color: #63b6e0;
  text-transform: uppercase;
  font-weight: 500;
}
</style>