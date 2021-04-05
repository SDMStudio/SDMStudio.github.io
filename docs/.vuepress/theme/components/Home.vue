<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <vue-particles
      color="#98e7ff"
      :particleOpacity="0.8"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="5"
      linesColor="#98e7ff"
      :linesWidth="3"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <img
      v-if="data.heroImage"
      :src="$withBase(data.heroImage)"
      :alt="data.heroAlt || 'hero'"
      id="main-logo"
    />

    <div id="main-title">
      <h1 v-if="data.heroText !== null">
        {{ data.heroText || $title || "Hello" }}
      </h1>

      <h3 v-if="data.tagline !== null" class="description" id="sub-title">
        {{ data.tagline || $description || "Welcome to your VuePress site" }}
      </h3>
    </div>

    <p v-if="data.actionText && data.actionLink">
      <NavLink class="hero-action" :item="actionLink" />
    </p>

    <div>
      <div class="title">
        <h2>Why SDM'Studio ?</h2>
      </div>
      <div v-if="data.features && data.features.length" class="features">
        <div
          v-for="(feature, index) in data.features"
          :key="index"
          class="feature"
        >
          <img
            :src="$withBase(feature.img)"
            :alt="'feature'"
            id="feature-img"
          />
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div v-if="data.links && data.links.length" class="links">
        <div v-for="(link, index) in data.links" :key="index" class="link">
          <h2>{{ link.title }}</h2>
          <p>{{ link.details }}</p>
          <a :href="link.link" class="button">{{ link.name_button }}</a>
          <p v-if="link.text && link.link" class="action">
            <NavLink class="action-button" :item="link" />
          </p>
        </div>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "Home",

  components: {
    NavLink,
  },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus">
.home {
  #particles-js {
    height: 100vh;
    background-color: darken($navBackColor, 20%);
  }

  #main-logo {
    font-family: "'Courier New', Courier, monospace";
    color: #dedede;
    position: absolute;
    text-align: left;
    top: 15%;
    width: 30%;
    margin-left: 8rem;
  }

  #main-title {
    font-family: "'Courier New', Courier, monospace";
    color: #dedede;
    position: absolute;
    text-align: left;
    top: 30%;
    width: 60%;
    margin-left: 8rem;
  }

  .action, h1 {
    font-size: 2.7rem;
  }

  h3 {
    font-size: 2rem;
  }

  h1, .description, .action {
    margin: 1.8rem auto;
  }

  .description {
    // max-width: 35rem;
    font-size: 1.2rem;
    line-height: 1.3;
    color: darken($navTextColor, 10%);
  }

  .hero-action {
    position: absolute;
    text-align: left;
    top: 70%;
    width: auto;
    margin-left: 8rem;
    display: inline-block;
    font-size: 1rem;
    color: $navBackColor;
    background-color: $navAccentColor;
    margin-top: 10rem;
    padding: 0.5rem 1.2rem;
    border-radius: 4px;
    transition: background-color 0.1s ease, color 0.1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid darken($textColor, 10%);

    &:hover {
      background-color: lighten($textColor, 20%);
      color: darken($navAccentColor, 20%);
    }
  }

  .features {
    max-width: $homePageWidth;
    margin: 0px auto;
    text-align: center;
    border-top: 1px solid $navTextColor;
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .title {
    display: block;
    margin: 0px auto;
    text-align: center;

    h2 {
      font-size: 1.8rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    img {
      max-width : 100%;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .container-fluid {
    max-width: 100%;
    background-color: $navBackColor;
  }

  .links {
    max-width: $homePageWidth;
    margin: 0px auto;
    text-align: center;
    border-top: 1px solid $navTextColor;
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .link {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: darken($navTextColor, 10%);
    }

    p {
      color: darken($navTextColor, 25%);
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .action-button {
      display: inline-block;
      font-size: 1rem;
      color: $navBackColor;
      background-color: $navAccentColor;
      padding: 0.5rem 1.2rem;
      border-radius: 4px;
      transition: background-color 0.1s ease, color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($textColor, 10%);

      &:hover {
        background-color: lighten($textColor, 20%);
        color: darken($navAccentColor, 20%);
      }
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $navTextColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
