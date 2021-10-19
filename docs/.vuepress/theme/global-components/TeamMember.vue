<template>
  <div class="card bg-gray">
    <img
      class="logo arrondie my-3"
      :src="$withBase(img)"
      :alt="name"
      width="150"
      height="150"
    />
    <div class="card-body text-center">
      <h3 class="cname card-title">{{ name }}</h3>
      <h6 class="cposition">{{ position }}</h6>
      <div class="text-left" style="font-size: 13px">
        <i v-if="mail" class="fas fa-at"></i>
        <a v-if="mail" :href="'mailto:' + mail">{{ mail }}</a>
        <br />
        <i v-if="website" class="fas fa-link"></i>
        <a v-if="website" :href="website">{{ website }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    img: {
      type: String,
      default: "/assets/img/member-default.png",
    },
    name: String,
    mail: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="stylus">
/* Style the Image Used to Trigger the Modal */
.cname {
}

.cposition {
  font-style: italic;
  color: #424242;
}

.bg-gray {
  background-color: #eee
}

.logo {
  margin-left: 5rem;
  transition: 0.3s;
}

.arrondie {
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  border-radius: 100px;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
