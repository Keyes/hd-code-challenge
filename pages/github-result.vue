<template>
  <StepCard
    :step-number="3"
    :total-steps="3"
    step-name="Result"
    headline="Your GitHub result"
    subline="Look what we've found!"
    class="hd-l--step"
  >
    <div v-if="githubResult.name" class="hd-c--github-result">
      <img
        class="hd-c--github-result--avatar / hd-ui--shadow-1"
        :src="githubResult.avatar_url"
        :alt="`Avatar of ${githubResult.login}`"
      />
      <div class="hd-c--github-result--details">
        <div class="hd-c--github-result--name">
          {{ githubResult.name }}
        </div>
        <div class="hd-c--github-result--username">
          {{ githubResult.login }}
        </div>
        <div class="hd-c--github-result--bio">
          {{ githubResult.bio }}
        </div>
        <ul class="hd-c--github-result--facts">
          <li class="hd-c--github-result--fact-item">
            <font-awesome-icon icon="users" />
            {{ githubResult.followers }} followers
          </li>
          <li class="hd-c--github-result--fact-item">
            {{ githubResult.public_repos }} repos
          </li>
          <li class="hd-c--github-result--fact-item">
            {{ githubResult.public_gists }} gists
          </li>
          <li class="hd-c--github-result--fact-item">
            joined {{ onGithubSince }} ago
          </li>
          <li class="hd-c--github-result--fact-split"></li>
          <li v-if="githubResult.blog" class="hd-c--github-result--fact-item">
            <a class="hd-ui--link" :href="githubResult.blog" target="_blank">
              {{ parsedBlogUrl }}
            </a>
          </li>
          <li
            v-if="githubResult.twitter_username"
            class="hd-c--github-result--fact-item"
          >
            <a
              class="hd-ui--link"
              :href="`https://twitter.com${githubResult.twitter_username}`"
              target="_blank"
              >@{{ githubResult.twitter_username }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="hd-c--spinner">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <template slot="buttons">
      <ButtonInput design="secondary" @click="onClickPrev">Back</ButtonInput>
    </template>
  </StepCard>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { formatDistance } from 'date-fns'

import pageTransitionMixin from '@/components/mixins/pageTransitionMixin.js'

import StepCard from '@/components/StepCard.vue'
import ButtonInput from '@/components/ButtonInput.vue'

export default {
  components: {
    StepCard,
    ButtonInput,
  },
  mixins: [pageTransitionMixin],
  computed: {
    ...mapState('user', ['githubResult']),
    parsedBlogUrl() {
      return this.githubResult.blog.replace(/https?:\/\//, '')
    },
    onGithubSince() {
      return formatDistance(new Date(), new Date(this.githubResult.created_at))
    },
  },
  mounted() {
    this.requestGithubData()
  },
  methods: {
    ...mapActions('user', ['requestGithubData']),
    onClickSave() {
      this.$refs.submitform.$v.$touch()
    },
    onClickPrev() {
      window.$nuxt.$router.push('accept-terms')
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .hd-c--spinner {
  margin: 0 auto;
}

.hd-c--github-result {
  align-items: center;

  &--details {
    margin-top: 1.5rem;
  }

  &--avatar {
    border-radius: 50%;
    width: 10rem;
    margin: 0 auto;
  }

  @include vgrid-mq(min md) {
    display: flex;

    &--details {
      margin-top: 0;
      margin-left: 1.5rem;
    }

    &--avatar {
      margin: 0;
    }
  }

  &--username {
    font-size: 0.9rem;
  }

  &--bio {
    margin-top: 1rem;
  }

  &--name {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &--facts {
    font-size: 0.8rem;
    list-style-type: none;
    padding: 0;
  }

  &--fact-item {
    display: inline-block;

    & + &::before {
      content: '•';
      margin: 0 0.25rem;
    }
  }

  &--fact-split {
    display: block;

    @include vgrid-mq(min md) {
      display: none;
    }
  }

  @include vgrid-mq(min md) {
    &--fact-split + &--fact-item::before {
      content: '•';
      margin: 0 0.25rem;
    }
  }
}
</style>
