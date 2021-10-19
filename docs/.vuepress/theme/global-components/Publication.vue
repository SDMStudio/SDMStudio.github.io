<template>
  <div class="publication card bg-gray small-arrondie my-4">
    <div class="card-body">
      <h3 v-if="url" class="card-title">
        <a :href="url">{{ title }}</a>
      </h3>
      <h3 v-else class="card-title">{{ title }}</h3>
      <h6 class="authors">{{ authors }} - {{ date }}</h6>
      <p>{{ abstract }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publication",
  props: {
    title: String,
    url: String,
    date: String,
    authors: String,
    abstract: String,
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

.publication {
  max-height: 170px;
  overflow: hidden;
  transition-property: max-height;
  transition-duration: 0.5s;
}

.publication:hover {
  max-height: 400px;
}

.bg-gray {
  background-color: #eee;
}

.authors {
  font-style: italic;
}

.date {
  color: #00bcd4;
  font-weight: bold;
}

.small-arrondie {
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  border-radius: 20px;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
