<template>
  <div class="container-fluid">
    <h2>Researchers</h2>
    <div class="row">
      <div class="col-4 p-3">
        <TeamMember
          img="http://perso.citi-lab.fr/jdibangoy/images/portrait.jpg"
          name="Jilles Dibangoye"
          position="Associate Professor"
          mail="jilles.dibangoye@inria.fr"
          website="http://perso.citi-lab.fr/jdibangoy/#/"
        />
      </div>
      <div class="col-4 p-3">
        <TeamMember
          img="http://perso.citi-lab.fr/osimonin/OlivierSimonin_fichiers/port4.jpg"
          name="Olivier Simonin"
          position="Full Professor"
          mail="olivier.simonin@inria.fr"
          website="http://perso.citi-lab.fr/osimonin/"
        />
      </div>
      <div class="col-4 p-3">
        <TeamMember
          name="Christian Wolf"
          position="Associate Professor"
          mail="christian.wolf@insa-lyon.fr"
          website="https://perso.liris.cnrs.fr/christian.wolf/"
        />
      </div>
    </div>
    <h2>Engineers</h2>
    <div class="row">
      <div class="col-4 p-3">
        <TeamMember
          img="https://www.david-albert.fr/img/photo-dav-md.616f7aa4.jpg"
          name="David Albert"
          position="Research Engineer"
          mail="david.albert@inria.fr"
          website="https://www.david-albert.fr/"
        />
      </div>
    </div>
    <h2>PhD Students</h2>
    <div class="row">
      <div class="col-4 p-3">
        <TeamMember
          name="Aurélien Delage"
          position="PhD Student"
          mail="aurelien.delage@inria.fr"
        />
      </div>
    </div>
    <h2>Internship</h2>
    <div class="row">
      <div class="col-4 p-3">
        <TeamMember img="/assets/img/jerome.jpeg" name="Jérome Arjonilla" position="Research Intern" />
      </div>
      <div class="col-4 p-3">
        <TeamMember img="https://avatars.githubusercontent.com/u/45429224?v=4" name="Baris Sayil" position="Research Intern" />
      </div>
      <div class="col-4 p-3">
        <TeamMember img="/assets/img/anthonin.jpeg" name="Anthonin Vianey" position="Research Intern" />
      </div>
      <div class="col-4 p-3">
        <TeamMember name="Yushuan Xie" position="Research Intern" />
      </div>
      <div class="col-4 p-3">
        <TeamMember name="Thomas Dambrin" position="Research Intern" />
      </div>
    </div>
    <h2>External partners</h2>
    <div class="row">
      <div class="col-4 p-3">
        <TeamMember
          name="Olivier Buffet"
          position="Inria Researcher"
          mail="olivier.buffet@inria.fr"
          website="https://members.loria.fr/olivier.buffet/"
        />
      </div>
      <div class="col-4 p-3">
        <TeamMember
          name="François Charpillet"
          position="Inria Researcher"
          mail="francois.charpillet@inria.fr"
          website="https://members.loria.fr/FCharpillet/"
        />
      </div>
      <div class="col-4 p-3">
        <TeamMember
          name="Abdallah Saffidine"
          position="Associate Professor"
          mail="abdallahs@cse.unsw.edu.au"
          website="https://cgi.cse.unsw.edu.au/~abdallahs/"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TeamMember from "@theme/global-components/TeamMember.vue";

export default {
  name: "Members",
  components: {
    TeamMember,
  },
};
</script>

<style lang="stylus">
/* Style the Image Used to Trigger the Modal */
.myImg {
  margin: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.myImg:hover {
  opacity: 0.6;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: darken($navBackColor, 20%); /* Fallback color */
  opacity: 0.95;
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 90%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, .caption {
  animation-name: zoom;
  animation-duration: 0.6s;
  font-size: 1.3rem;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover, .close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
  color: darken($navAccentColor, 20%); /* Fallback color */
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
