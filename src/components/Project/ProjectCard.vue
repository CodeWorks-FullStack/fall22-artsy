<template>
  <div class="project-card p-3 mb-3">
    <p class="text-shadow"><b>{{project.title}}
        <span v-if="project.projectImgs.length">
          <i class="mdi mdi-file-image fs-3"></i> {{project.projectImgs.length}}
        </span>
      </b>
    </p>

    <ProjectCreator class="da-creator" :creator="project.creator" />
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { Project } from '../../models/Project.js';
import ProjectCreator from './ProjectCreator.vue';

export default {
  props: {
    project: {
      type: Project,
      required: true
    }
  },
  setup(props) {
    return {
      coverImg: computed(() => `url(${props.project.coverImg})`),
    };
  },
  components: { ProjectCreator }
}
</script>


<style lang="scss" scoped>
.project-card {
  height: 110vh;
  background-image: v-bind(coverImg);
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;

  .text-shadow {
    color: aliceblue;
    text-shadow: 1px 1px black, 0px 0px 5px salmon;
    font-weight: bold;
    letter-spacing: 0.08rem
      /* Second Color  in text-shadow is the blur */
  }

  .project-imgs {
    padding: .75rem;

    img {
      max-width: 350px;
      max-height: 350px;
      object-fit: contain;
    }
  }

  .da-creator{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

}
</style>
