<template>
  <div>
    <img
      class="myImg"
      :src="$withBase(img)"
      :alt="title"
      style="width: 200%; max-width: 1000px"
      v-on:click="zoom(img, title)"
    />

    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- The Close Button -->
      <span class="close" v-on:click="close()">&times;</span>

      <!-- Modal Content (The Image) -->
      <img class="modal-content" id="img01" />

      <!-- Modal Caption (Image Text) -->
      <div id="caption" class="caption"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageZoom",
  props: {
    img: String,
    title: String,
  },
  methods: {
    zoom: function (image, titlee) {
      var modal = document.getElementById("myModal");

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      modal.style.display = "block";
      modalImg.src = image;
      captionText.innerHTML = titlee;
    },
    close: function () {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
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
