
<template>
  <div id="resume2" class="resume">
    <div class="top-row">
      <span class="person-name">{{cvdata.personal.name}} {{cvdata.personal.lastname}}</span>
      <span class="person-position">{{cvdata.personal.position}}</span>
    </div>
    <div class="right-col">
      <div class="person-image">
        <div class="image-centerer">
          <div class="img" :style="{ backgroundImage: `url(${cvdata.personal.profileurl})` }"></div>
        </div>
      </div>
      <div class="contact">
        <h3>Contact</h3>
        <div class="contact-row">
          <a href="#">{{cvdata.contact.email}}</a>
        </div>
        <div class="contact-row dots">
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
        </div>
        <div class="contact-row">
          <a href="#">{{cvdata.contact.tel}}</a>
        </div>
        <div class="contact-row dots">
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
        </div>
        <div class="contact-row">
          {{cvdata.contact.street}}
          <br>
          {{cvdata.contact.city}}
        </div>
        <div class="contact-row dots">
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
        </div>
        <div class="contact-row">
          <a href="#">{{cvdata.contact.fb}}</a>
        </div>
      </div>
    </div>
    <div class="left-col">
      <div class="experience">
        <h3>Experience</h3>
        <div class="experience-block" v-for="experience in cvdata.experience" :key="experience">
          <div class="row">
            <span class="company">{{experience.company}} -</span>
            <span class="job-title">{{experience.position}}</span>
          </div>
          <div class="row">
            <span class="time-period">{{experience.timeperiod}}</span>
          </div>
          <div class="row">
            <span class="job-description">{{experience.description}}</span>
          </div>
        </div>
      </div>
      <div class="education">
        <h3>Education</h3>
        <div class="education-block" v-for="education in cvdata.education" :key="education">
          <div class="row">
            <span class="degree">{{education.degree}}</span>
          </div>
          <div class="row">
            <span class="degree-description">{{education.description}}</span>
          </div>
        </div>
      </div>
      <div class="skills-block">
        <h3>Skills</h3>
        <div class="skills">
          <div class="skill" v-for="skill in cvdata.skill.hardskill" :key="skill">
            <span class="skill-name">{{skill.skillname}}</span>
          </div>
        </div>
        <span class="skills-other">{{cvdata.personal.about}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classiccv",
  props: {
    cvdata: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
//@import "bootstrap/dist/css/bootstrap.css";
//@import url("font-awesome/css/font-awesome.min.css");

#resume2 {
  font-family: "Raleway", sans-serif;
  padding-bottom: 50px;
  text-align: right;
  direction: rtl;
  a,
  a:focus,
  a:hover,
  a:visited {
    text-decoration: none;
  }
  h3 {
    text-transform: uppercase;
    padding-top: 0;
    margin-top: 0;
    letter-spacing: 5px;
    font-weight: 400;
  }
  .top-row {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    span {
      width: 100%;
      display: block;
      text-align: center;
      font-weight: normal;
    }
    span.person-name {
      text-transform: uppercase;
      font-size: 50px;
      letter-spacing: 10px;
    }
    span.person-position {
      letter-spacing: 5px;
    }
  }
  .right-col {
    width: 26%;
    float: right;
    padding-right: 8%;
    padding-left: 4%;
    .person-image .image-centerer {
      display: flex;
      justify-content: center;
      height: auto;
      overflow: hidden;
      .img {
        flex: none;

        background-position: center;
        background-size: cover;
        height: 250px;
        width: 100%;
      }
    }
    .contact h3 {
      text-align: center;
      margin-top: 20px;
    }
    .contact .contact-row {
      text-align: center;
      letter-spacing: 2px;
      margin-bottom: 3px;
      direction: ltr;
      a {
        color: black;
      }
    }
    .contact .contact-row:first-of-type {
      margin-top: 50px;
    }
    .contact .contact-row.dots {
      margin-top: 20px;
      margin-bottom: 15px;
      font-size: 10px;
      color: rgba(153, 153, 153, 0.6);
    }
  }
  .left-col {
    width: 50%;
    float: left;
    padding-right: 4%;
    padding-left: 8%;
    .experience-block {
      margin-bottom: 10px;
      .row:first-child {
        margin-bottom: 3px;
      }
      .row .company {
        text-transform: uppercase;
        font-size: 19px;
      }
      .row .job-title {
        font-size: 19px;
      }
    }
    .education {
      margin-top: 50px;
      .education-block {
        margin-bottom: 10px;
        .degree {
          font-size: 19px;
          text-transform: uppercase;
          margin-bottom: 3px;
        }
      }
    }
    .skills-block {
      margin-top: 50px;
      position: relative;
      .skills {
        margin-bottom: 10px;
        margin-bottom: 20px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        .skill {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          position: relative;
          border: #333333 1px solid;
          margin: 3px;
          float: right;
          font-size: 13px;
          .skill-name {
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
          }
        }
        .skills-other {
          display: inline-block;
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>


