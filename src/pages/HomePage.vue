<template>
  <div>
    <ProjectCard v-for="p in projects" :project="p" />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import ProjectCard from '../components/Project/ProjectCard.vue';
import { projectsService } from '../services/ProjectsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getProjects() {
      try {
        await projectsService.getProjects();
      }
      catch (error) {
        Pop.error(error, "[Getting Projects]");
      }
    }
    onMounted(() => {
      getProjects();
    });
    return {
      projects: computed(() => AppState.projects)
    };
  },
  components: { ProjectCard }
}
</script>

<style scoped lang="scss">

</style>
